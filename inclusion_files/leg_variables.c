<#-- /////////////////////////////////////////////////////////////////////////////// SQL GLOBAL (Leg info)  - Needs to be added after SQL_Universal data call 
///////////QUESTIONS/////////////////
Q. Why are you creating this second call to GLOBAL?
A. Because some services are not available for all legs. The method here is to use a loop xxx_IS_SET
Q. What Variables are created here?
Q. What Modules are effected?
A. SEARCH, CAR, HOTEL, 
Q. What is the difference between this call to Global and the other call to Global?
A. This data call has no limit=1 because the different variables needs to collect information from different rows in the SQL_GLOBAL view
///////////////////////////////////////////////////////////////////////////////////////////////////////// -->

<#assign FASTTRACK_IS_SET = 0>
<#assign WIFI_IS_SET = 0>
<#assign MAX_IS_SET = 0>
<#assign PRIO_COUNT_IS_SET = 0><#-- PRIO_COUNT tells if a passenger have already booked priority boarding or not -->
<#assign VERSION_IS_SET = 0>
<#--VERSION is the aircraft type
///////////QUESTIONS/////////////////
Q. What campaign / module uses VERSION_PLANNED variable?
A. used the survey campaign E_DREAMLINER_SURVEY_2017, E_MAX_SURVEY_2017, survey campaigns
-->
<#assign ARRIVAL_DATE_IS_SET = 0>
<#assign RETURN_DATE_IS_SET = 0>
<#assign PREMIUM_IS_SET = 0>
<#assign MAIN_LEG_IS_SET = 0>
<#assign OUTGOING_LEG_IS_SET = 0>
<#assign PREM_ON_RETURN_LEG_IS_SET = 0>
<#assign HAS_MEAL_IS_SET = 0>
<#assign MEAL_AVAILABLE_IS_SET = 0>
<#-- ///////////COMMENT HELPER/////////////////
ARRIVAL_DATE_IS_SET and RETURN_DATE_IS_SET effects the SEARCH MODULE, CAR MODULE, HOTEL MODULE (which is the Hotel feed not currently being used (written 28/03/17)). Also used in the generation of the URLS for debug_assignments_nas_api_2_log.txt, debug_assignments_nas_api_2.txt,
assignments_nas_api.txt-->
<#-- ///////////COMMENT HELPER///////////////// 
If xxx_IS_SET = 0, means its N
If xxx_IS_SET = 1, means its either null or Y
-->

<#data SQL_GLOBAL as SQL_GLOBAL><#filter BOOKING_GDSBOOKINGID = BOOKING_ID BOOKING_LOCALBOOKINGID = LOCAL_BOOKING_ID>
<#fields FAST_TRACK_FLAG WIFI_YN MAX_YN VERSION_PLANNED FIRST_LEG_YN LEG_NUMBER BOOKING_DEPARTURE_TIME BOOKING_RETURN_DEPARTURE_TIME1 BOOKING_MAIN_DESTINATION BOOKING_LAST_DESTINATION BOOKING_ROUND_TRIP BOOKING_LONGHAUL BOOKING_ROUTE_AREA BOOKING_NUMBER_OF_LEGS LAST_LEG_YN MAIN_DESTINATION LEG_DEPARTURE_TIME LEG_ARRIVAL_DATE DESTINATION_LEG BOOKING_LOCALBOOKINGID BOOKING_GDSBOOKINGID ORIGIN_LEG BOOKING_START_AIRPORT PRIO_COUNT TICKETCLASS_CODE BOOKING_ROUTE_AREA BOOKING_LONGHAUL LONGHAUL_LEG_YN UPGRADEDTOSEGMENT_FLG REMOVED_STATE FLIGHT_MEAL><#-- UPGRADEDTOSEGMENT_FLG gets the value 1 if a leg is cancelled or upgraded/changed. So any record with UPGRADEDTOSEGMENT_FLG == 1 is not valid/current, and needs to be removed. If the value is missing (NULL) we include it, as we don't know if it is cancelled or not. -->
<#if campaign.name == "DEBUG_E_LHP_4DB">UPGRADEDTOSEGMENT_FLG: ${SQL_GLOBAL.UPGRADEDTOSEGMENT_FLG} / LEG_NR: ${SQL_GLOBAL.LEG_NUMBER}<br>REMOVED_STATE: ${SQL_GLOBAL.REMOVED_STATE} / LEG_NR: ${SQL_GLOBAL.LEG_NUMBER}<br></#if>
<#if SQL_GLOBAL.UPGRADEDTOSEGMENT_FLG?isnull || SQL_GLOBAL.UPGRADEDTOSEGMENT_FLG?number != 1>
    
<#-- Meal script for SH flights, selected routes, added by BW on 26th of June 2018 -->
     <#if HAS_MEAL_IS_SET == 0>
        <#list SQL_GLOBAL.ORIGIN_LEG?string?split(",") as x>
        <#if HAS_MEAL_IS_SET == 0>
            <#if x == "ARN">
                <#if SQL_GLOBAL.DESTINATION_LEG == "LCA" || SQL_GLOBAL.DESTINATION_LEG == "ALC" || SQL_GLOBAL.DESTINATION_LEG == "AGP">
                    <#if SQL_GLOBAL.FLIGHT_MEAL?string == '1'><#assign HAS_MEAL = 'Y'><#assign HAS_MEAL_IS_SET = 1>
                    <#else><#assign HAS_MEAL = 'N'>
                    </#if>
                </#if>
            <#elseif x == "LCA" || x == "ALC" || x == "AGP">
                <#if SQL_GLOBAL.DESTINATION_LEG == "ARN">
                	<#if SQL_GLOBAL.FLIGHT_MEAL?string == '1'><#assign HAS_MEAL = 'Y'><#assign HAS_MEAL_IS_SET = 1>
                	
                	</#if>
                 </#if>
             </#if>
         </#if>
        </#list>
   
    </#if>
<#-- MEAL_AVAILABLE --><#-- Meal is available on at least one of the legs -->
    <#if MEAL_AVAILABLE_IS_SET == 0>
        <#list SQL_GLOBAL.ORIGIN_LEG?string?split(",") as y>
            <#if MEAL_AVAILABLE_IS_SET == 0>
                <#if y == "ARN">
                    <#if SQL_GLOBAL.DESTINATION_LEG == "LCA" || SQL_GLOBAL.DESTINATION_LEG == "ALC" || SQL_GLOBAL.DESTINATION_LEG == "AGP">
                        <#assign MEAL_AVAILABLE = 'Y'><#assign MEAL_AVAILABLE_IS_SET = 1>
                    </#if>
                <#elseif y == "LCA" || y == "ALC" || y == "AGP">
                    <#if SQL_GLOBAL.DESTINATION_LEG == "ARN">
                        <#assign MEAL_AVAILABLE = 'Y'><#assign MEAL_AVAILABLE_IS_SET = 1>
                    </#if>
                </#if>
            </#if>
        </#list>
    </#if>
    
<#-- REMOVED_STATE gets the value 1 if a leg is cancelled . So any record with REMOVED_STATE == 1 are not valid/current, and needs to be removed. It should have been removed with the UPGRADEDTOSEGMENT_FLG, but we have seen some examples where UPGRADEDTOSEGMENT_FLG == 1 and REMOVED_STATE == 0. If the value is missing (NULL) we include it, as we don't know if it is cancelled or not. -->
<#if SQL_GLOBAL.REMOVED_STATE?isnull || SQL_GLOBAL.REMOVED_STATE == '0'>
<#-- PRIO_COUNT value 1 means that they have bought priority boarding, 0 means they haven't -->
<#-- HAVE_PRIORITY_BOARDING -->
<#if PRIO_COUNT_IS_SET == 0>
        <#if SQL_GLOBAL.PRIO_COUNT?isnull><#global HAVE_PRIORITY_BOARDING = "N">
        <#else>
            <#list SQL_GLOBAL.PRIO_COUNT?string?split(",") as k>
            	<#if PRIO_COUNT_IS_SET == 0>
                	<#if k?string?contains("1")><#global HAVE_PRIORITY_BOARDING = "Y"><#assign PRIO_COUNT_IS_SET = 1>
                	<#else><#global HAVE_PRIORITY_BOARDING = "N">
                	</#if>
           	 	</#if>
            </#list>
        </#if>
</#if>
<#-- checking if the booking is roundtrip or one way. This is the same variable as ONEWAY_YN, but using y/n instead of 0/1 -->
<#if SQL_GLOBAL.BOOKING_ROUND_TRIP?isnull><#global ROUNDTRIP = "N">
<#else>
    <#list SQL_GLOBAL.BOOKING_ROUND_TRIP?split(",") as q>
        <#if q?exec?contains("Y")><#global ROUNDTRIP = "Y">
        <#else><#global ROUNDTRIP = "N">
        </#if>
    </#list>
</#if>



<#if campaign.name == "DEBUG_E_LHP_4DB">ROUNDTRIP: ${ROUNDTRIP}<br>
</#if>
<#-- MAIN_DEST_LEG_NR --><#--determine if a leg is outgoing ot return -->
<#-- The main destination leg will always have the value 1. We create a variable, MAIN_DEST_LEG_NR, with that leg number, so we later can check the other legs if they are outbound or return -->
<#if SQL_GLOBAL.LEG_NUMBER?isnull><#skip 'Modules skipped. Reason: LEG_NUMBER is NULL.'><#elseif SQL_GLOBAL.MAIN_DESTINATION?isnull><#skip 'Modules skipped. Reason: MAIN_DESTINATION is NULL.'></#if>

<#if MAIN_LEG_IS_SET == 0>
    <#if SQL_GLOBAL.MAIN_DESTINATION?isnull><#global MAIN_DEST_LEG_NR = 1><#-- If we don't know which leg is the main destination, we set it to the first leg, assuming there is no transfer -->
	<#else>
    	<#list SQL_GLOBAL.MAIN_DESTINATION?split(",") as h>
        	<#if MAIN_LEG_IS_SET == 0>
            	<#if h?string?contains("1")><#global MAIN_DEST_LEG_NR = SQL_GLOBAL.LEG_NUMBER?number><#assign MAIN_LEG_IS_SET = 1>
            	<#else><#global MAIN_DEST_LEG_NR = 1>
            	</#if>
        	</#if>
   	 	</#list>
    </#if>
</#if>
<#-- PREM_ON_PREM_ON_OUTBOUND_LEG -->
<#if OUTGOING_LEG_IS_SET == 0>
  <#-- It is pointless to run this code if the booking is a short haul flight -->  
    <#if SQL_GLOBAL.BOOKING_LONGHAUL == "Y" || SQL_GLOBAL.BOOKING_ROUTE_AREA?lower_case == "long haul">
        <#if SQL_GLOBAL.TICKETCLASS_CODE?isnull><#global PREM_ON_OUTBOUND_LEG = "N"><#-- if we don't know the ticket class code, we assume that the customer do not have premium -->
        <#elseif ROUNDTRIP == "Y">
           <#-- For roundtrip flights, we need to check if the leg is on the outbound or on the return flight. We do this by checking if the leg number have a lower or equal value than the main destination leg -->
            <#if SQL_GLOBAL.LEG_NUMBER?number lte MAIN_DEST_LEG_NR?number>
            	<#list SQL_GLOBAL.TICKETCLASS_CODE?string?split(",") as g>
            		<#if OUTGOING_LEG_IS_SET == 0>
                       <#-- Ticketclass_code I, C and D have a different meaning depending on of it is a short haul leg or long haul leg. For LH they mean Premium -->
                		<#if g?string?contains("I") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_OUTBOUND_LEG = "Y">
                			<#if campaign.name == "DEBUG_E_LHP_4DB">test 1 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_OUTBOUND_LEG: ${PREM_ON_OUTBOUND_LEG}<br>
                			</#if><#assign OUTGOING_LEG_IS_SET = 1>
                		<#elseif g?string?contains("C") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_OUTBOUND_LEG = "Y">
                			<#if campaign.name == "DEBUG_E_LHP_4DB">test 2 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_OUTBOUND_LEG: ${PREM_ON_OUTBOUND_LEG}<br>
                    		</#if><#assign OUTGOING_LEG_IS_SET = 1>
                		<#elseif g?string?contains("D") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_OUTBOUND_LEG = "Y">
                			<#if campaign.name == "DEBUG_E_LHP_4DB">test 3 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_OUTBOUND_LEG: ${PREM_ON_OUTBOUND_LEG}<br>
                    		</#if><#assign OUTGOING_LEG_IS_SET = 1>
                		<#else><#-- For all other ticket class types, the customer do not have Premium --><#global PREM_ON_OUTBOUND_LEG = "N">
                		</#if>
            		</#if>
            	</#list>
        	</#if>
            <#-- If it is a oneway trip, we cannot use MAIN_DEST_LEG_NR as this will be the transfer leg, not the final destination. But for oneway customers, it will always be an outgoing leg, so we don't need to check the leg number -->
        <#elseif ROUNDTRIP == "N"><#list SQL_GLOBAL.TICKETCLASS_CODE?string?split(",") as g>
            		<#if OUTGOING_LEG_IS_SET == 0>
                        <#-- Ticketclass_code I, C and D have a different meaning depending on of it is a short haul leg or long haul leg. For LH they mean Premium -->
                		<#if g?string?contains("I") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_OUTBOUND_LEG = "Y">
                			<#if campaign.name == "DEBUG_E_LHP_4DB">test 1 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_OUTBOUND_LEG: ${PREM_ON_OUTBOUND_LEG}<br>
                			</#if><#assign OUTGOING_LEG_IS_SET = 1>
                		<#elseif g?string?contains("C") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_OUTBOUND_LEG = "Y">
                			<#if campaign.name == "DEBUG_E_LHP_4DB">test 2 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_OUTBOUND_LEG: ${PREM_ON_OUTBOUND_LEG}<br>
                    		</#if><#assign OUTGOING_LEG_IS_SET = 1>
                		<#elseif g?string?contains("D") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_OUTBOUND_LEG = "Y">
                			<#if campaign.name == "DEBUG_E_LHP_4DB">test 3 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_OUTBOUND_LEG: ${PREM_ON_OUTBOUND_LEG}<br>
                    		</#if><#assign OUTGOING_LEG_IS_SET = 1>
                		<#else><#-- For all other ticket class types, the customer do not have Premium --><#global PREM_ON_OUTBOUND_LEG = "N">
                		</#if>
            		</#if>
            	</#list>
        </#if>
    </#if>
</#if>
    
<#-- PREM_ON_PREM_ON_RETURN_LEG -->   
<#-- If it is a one way trip, they will not have a return leg --><#if ROUNDTRIP == "Y">
    <#if PREM_ON_RETURN_LEG_IS_SET == 0>
  <#-- It is pointless to run this code if the booking is a short haul flight. -->     
    <#if SQL_GLOBAL.BOOKING_LONGHAUL == "Y" || SQL_GLOBAL.BOOKING_ROUTE_AREA?lower_case == "long haul">
        <#if SQL_GLOBAL.TICKETCLASS_CODE?isnull><#global PREM_ON_RETURN_LEG = "N"><#-- if we don't know the ticket class code, we assume that the customer do not have premium -->
        <#elseif SQL_GLOBAL.LEG_NUMBER?number gt MAIN_DEST_LEG_NR?number>
            <#list SQL_GLOBAL.TICKETCLASS_CODE?string?split(",") as g>
                <#if PREM_ON_RETURN_LEG_IS_SET == 0>
                    <#-- Ticketclass_code I, C and D means Premium on LH, but have a different meaning for SH -->
                    <#if g?string?contains("I") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_RETURN_LEG = "Y">
                    	<#if campaign.name == "DEBUG_E_LHP_4DB"> test 4 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_RETURN_LEG: ${PREM_ON_RETURN_LEG}<br>
                        </#if><#assign PREM_ON_RETURN_LEG_IS_SET = 1>
                    <#elseif g?string?contains("C") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_RETURN_LEG = "Y">
                    	<#if campaign.name == "DEBUG_E_LHP_4DB"> test 5 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_RETURN_LEG: ${PREM_ON_RETURN_LEG}<br>
                        </#if><#assign PREM_ON_RETURN_LEG_IS_SET = 1>
                    <#elseif g?string?contains("D") && SQL_GLOBAL.LONGHAUL_LEG_YN == "Y"><#global PREMIUM_YES = "Y"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#global PREM_ON_RETURN_LEG = "Y">
                    	<#if campaign.name == "DEBUG_E_LHP_4DB"> test 6 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREM_ON_RETURN_LEG: ${PREM_ON_RETURN_LEG}<br>
                        </#if><#assign PREM_ON_RETURN_LEG_IS_SET = 1>
                    <#else><#global PREM_ON_RETURN_LEG = "N">
                    </#if>
                </#if>
            </#list>
        </#if>
    </#if>
</#if>
</#if>

<#-- PREMIUM_YES -->

    <#if campaign.name == "DEBUG_E_LHP_4DB">MAIN_DEST_LEG_NR: ${MAIN_DEST_LEG_NR}<br>
    </#if>

    <#if SQL_GLOBAL.BOOKING_LONGHAUL == "Y" || SQL_GLOBAL.BOOKING_ROUTE_AREA?lower_case == "long haul">
       <#-- There is no point of checking Outbound leg for the Return flight --> 
        <#if campaign.name == 'E_LHP_RET_HOME'><#global PREMIUM_YES = PREM_ON_RETURN_LEG>
        <#-- For all pre-departure campaigns, we only want to check Premium status for the Outbound flight. Premium for return flight will be sold in Return Home campaigns. --><#else><#global PREMIUM_YES = PREM_ON_OUTBOUND_LEG>
        </#if>
    <#else><#global PREMIUM_YES = "N"><#-- All SH campaigns will get value "N" for Premium -->
     
    </#if>
   
<#if campaign.name == "DEBUG_E_LHP_4DB">PREMIUM_YES: ${PREMIUM_YES}<br>
    </#if>



 


<#-- PREMIUM_YES (Made 30.05.2018 by BW. We loup throught the legs to see if any of the legs are Premium, and if any of them are, we set PREMIUM_YES value to be "Y", else to be "N". We also need to check if it is a outgoing leg or homegoing leg, that is not done yet. 

	<#if SQL_GLOBAL.BOOKING_LONGHAUL == "Y" || SQL_GLOBAL.BOOKING_ROUTE_AREA?lower_case == "long haul"><#if PREMIUM_IS_SET == 0>
        <#if SQL_GLOBAL.TICKETCLASS_CODE?isnull><#global PREMIUM_YES = "N">
        <#else>
            <#list SQL_GLOBAL.TICKETCLASS_CODE?string?split(",") as g>
            <#if PREMIUM_IS_SET == 0>
                <#if g?string?contains("I")><#global PREMIUM_YES = "Y"><#if campaign.name == "DEBUG_E_LHP_4DB"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#if campaign.name == "DEBUG_E_LHP_4DB">test 7 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREMIUM_YES :${PREMIUM_YES}<br></#if></#if><#assign PREMIUM_IS_SET = 1>
                <#elseif g?string?contains("C")><#global PREMIUM_YES = "Y"><#if campaign.name == "DEBUG_E_LHP_4DB"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#if campaign.name == "DEBUG_E_LHP_4DB">test 8 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREMIUM_YES :${PREMIUM_YES}<br></#if></#if><#assign PREMIUM_IS_SET = 1>
                <#elseif g?string?contains("D")><#global PREMIUM_YES = "Y"><#if campaign.name == "DEBUG_E_LHP_4DB"><#assign ticketclass_type = SQL_GLOBAL.TICKETCLASS_CODE><#if campaign.name == "DEBUG_E_LHP_4DB">test 9 LEG NUMBER: ${SQL_GLOBAL.LEG_NUMBER} / TICKETCLASS_CODE: ${ticketclass_type} / PREMIUM_YES :${PREMIUM_YES}<br></#if></#if><#assign PREMIUM_IS_SET = 1>
                <#else><#global PREMIUM_YES = "N">
                </#if>
            </#if>
            </#list>
        </#if>
	</#if></#if>-->
<#-- FAST_TRACK_FLAG -->
<#if FASTTRACK_IS_SET == 0>
<#if SQL_GLOBAL.FAST_TRACK_FLAG?isnull><#global FAST_TRACK_FLAG = "N"><#assign FASTTRACK_IS_SET = 1>
    <#else>    
    <#list SQL_GLOBAL.FAST_TRACK_FLAG?split(",") as a>
        
        <#if FASTTRACK_IS_SET == 0>
    		<#if a?exec?contains("Y")><#global FAST_TRACK_FLAG = "Y"><#assign FASTTRACK_IS_SET = 1><#else><#global FAST_TRACK_FLAG = "N">
            </#if> 
   		</#if>
    </#list>
</#if>
</#if>
<#-- WIFI -->
<#if WIFI_IS_SET == 0>
<#if SQL_GLOBAL.WIFI_YN?isnull><#global WIFI = "N"><#assign WIFI_IS_SET = 1>
    <#else>    
    <#list SQL_GLOBAL.WIFI_YN?split(",") as b>
        
        <#if WIFI_IS_SET == 0>
    		<#if b?exec?contains("Y")><#global WIFI = "Y"><#assign WIFI_IS_SET = 1><#else><#global WIFI = "N">
            </#if> 
   		</#if>
    </#list>
</#if>
</#if>
<#-- MAX_LEG_YN -->
<#if MAX_IS_SET == 0>
<#if SQL_GLOBAL.MAX_YN?isnull><#global MAX_LEG_YN = "N"><#assign MAX_IS_SET = 1>
    <#else>    
    <#list SQL_GLOBAL.MAX_YN?split(",") as c>
        
        <#if MAX_IS_SET == 0>
    		<#if c?exec?contains("Y")><#global MAX_LEG_YN = "Y"><#assign MAX_IS_SET = 1><#else><#global MAX_LEG_YN = "N">
            </#if> 
   		</#if>
    </#list>
</#if>
</#if>
<#-- MAX_YN --><#global MAX_YN = MAX_LEG_YN>
<#-- OPT_AIRCRAFT -->
<#if VERSION_IS_SET == 0>
<#if SQL_GLOBAL.VERSION_PLANNED?isnull><#global OPT_AIRCRAFT = "737-800"><#assign VERSION_IS_SET = 1>
    <#else>    
    <#list SQL_GLOBAL.VERSION_PLANNED?split(",") as d>
       
        <#if VERSION_IS_SET == 0>
    		<#if d?exec?contains("737-800") || d?exec?contains("7M8") ><#global OPT_AIRCRAFT = "MAX-" + SQL_GLOBAL.VERSION_PLANNED><#assign VERSION_IS_SET = 1><#elseif d?exec?contains("788") || d?exec?contains("789") || d?exec?contains("787-800") || d?exec?contains("787-900")><#global OPT_AIRCRAFT =  "Dreamliner-"+ SQL_GLOBAL.VERSION_PLANNED><#assign VERSION_IS_SET = 1><#else><#global OPT_AIRCRAFT = SQL_GLOBAL.VERSION_PLANNED>
            </#if> 
   		</#if>
    </#list>
</#if>
</#if>
 <#-- MAIN_LEG_ARRIVAL_DATE, MAIN_LEG_ARRIVAL_DATE_HOTEL,  DEPARTURE_DATE_SEARCH_INPUT, MAIN_LEG_ARRIVAL_YEAR, MAIN_LEG_ARRIVAL_MONTH, MAIN_LEG_ARRIVAL_DAY, MAIN_LEG_ARRIVAL_TIME, LEGNUMBER_INSIDE_LOOP, LEGNUMBER,  DESTINATION ,  -->   
<#if ARRIVAL_DATE_IS_SET == 0>
<#if SQL_GLOBAL.DESTINATION_LEG?isnull>
<#-- DEPARTURE DATE / ARRIVAL create a fake date for null values rarely used-->
    <#-- MAIN_LEG_ARRIVAL_DATE, NULL value --><#if MARKET == "US"><#global MAIN_LEG_ARRIVAL_DATE = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("MM/dd/yyyy HH:mm")><#else><#global MAIN_LEG_ARRIVAL_DATE = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("dd/MM/yyyy HH:mm")></#if>
    <#-- MAIN_LEG_ARRIVAL_DATE_HOTEL, NULL value --><#global MAIN_LEG_ARRIVAL_DATE_HOTEL = houradd(.now,49)?date?string("yyyy-MM-dd")>
    <#-- MAIN_LEG_ARRIVAL_YEAR, NULL value --><#global MAIN_LEG_ARRIVAL_YEAR = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("yyyy")>
    <#-- MAIN_LEG_ARRIVAL_MONTH, NULL value --><#global MAIN_LEG_ARRIVAL_MONTH = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("MM")>
    <#-- MAIN_LEG_ARRIVAL_DAY, NULL value --><#global MAIN_LEG_ARRIVAL_DAY = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("dd")>
    <#-- MAIN_LEG_ARRIVAL_TIME, NULL value --><#global MAIN_LEG_ARRIVAL_TIME = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("HH:mm")>
    <#-- LEGNUMBER_INSIDE_LOOP, NULL value --><#global LEGNUMBER_INSIDE_LOOP = SQL_GLOBAL.LEG_NUMBER>
    <#-- LEGNUMBER --><#global LEGNUMBER = SQL_GLOBAL.LEG_NUMBER>
    <#-- DESTINATION --><#if SQL_GLOBAL.BOOKING_ROUND_TRIP == "N"><#global DESTINATION = SQL_GLOBAL.BOOKING_LAST_DESTINATION><#else><#global DESTINATION = SQL_GLOBAL.BOOKING_MAIN_DESTINATION></#if>
    <#-- ARRIVAL_DATE_SEARCH_INPUT, NULL values --><#if MARKET == "US"><#global ARRIVAL_DATE_SEARCH_INPUT = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("MM/dd/yyyy")>
			<#else><#global ARRIVAL_DATE_SEARCH_INPUT = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("dd/MM/yyyy")></#if>
    <#assign ARRIVAL_DATE_IS_SET = 1>
    <#else>    
    <#list SQL_GLOBAL.DESTINATION_LEG?split(",") as e>
        
        <#if ARRIVAL_DATE_IS_SET == 0>
    		<#-- Checking if it is a One Way Trip --><#if e == SQL_GLOBAL.BOOKING_LAST_DESTINATION && SQL_GLOBAL.BOOKING_ROUND_TRIP == "N">
                
     <#-- MAIN_LEG_ARRIVAL_DATE, One Way --><#if MARKET == "US"><#global MAIN_LEG_ARRIVAL_DATE = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("MM/dd/yyyy HH:mm")><#else><#global MAIN_LEG_ARRIVAL_DATE = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("dd/MM/yyyy HH:mm")>											</#if>
      <#-- MAIN_LEG_ARRIVAL_DATE_HOTEL, One Way --><#global MAIN_LEG_ARRIVAL_DATE_HOTEL = SQL_GLOBAL.LEG_ARRIVAL_DATE?date?string("yyyy-MM-dd")>
    <#-- ARRIVAL_DATE_SEARCH_INPUT, One Way --><#if MARKET == "US"><#global ARRIVAL_DATE_SEARCH_INPUT = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("MM/dd/yyyy")>
			<#else><#global ARRIVAL_DATE_SEARCH_INPUT = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("dd/MM/yyyy")></#if>
    <#-- MAIN_LEG_ARRIVAL_YEAR, One Way --><#global MAIN_LEG_ARRIVAL_YEAR = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("yyyy")>
    <#-- MAIN_LEG_ARRIVAL_MONTH, One Way --><#global MAIN_LEG_ARRIVAL_MONTH = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("MM")>
    <#-- MAIN_LEG_ARRIVAL_DAY, Onw Way --><#global MAIN_LEG_ARRIVAL_DAY = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("dd")>
    <#-- MAIN_LEG_ARRIVAL_TIME, One Way --><#global MAIN_LEG_ARRIVAL_TIME = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("HH:mm")>
    <#-- LEGNUMBER_INSIDE_LOOP, One Way --><#global LEGNUMBER_INSIDE_LOOP = SQL_GLOBAL.LEG_NUMBER>
    <#-- LEGNUMBER --><#global LEGNUMBER = SQL_GLOBAL.LEG_NUMBER>
    <#-- DESTINATION --><#global DESTINATION = SQL_GLOBAL.DESTINATION_LEG>
    <#assign ARRIVAL_DATE_IS_SET = 1>
    
               <#-- Checking if it is a Roundtrip --><#elseif e == SQL_GLOBAL.BOOKING_MAIN_DESTINATION	&& SQL_GLOBAL.BOOKING_ROUND_TRIP == "Y">
                   
     <#-- MAIN_LEG_ARRIVAL_DATE, Roundtrip --><#if MARKET == "US"><#global MAIN_LEG_ARRIVAL_DATE = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("MM/dd/yyyy HH:mm")><#else><#global MAIN_LEG_ARRIVAL_DATE = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("dd/MM/yyyy HH:mm")>		<#-- ARRIVAL_DATE_SEARCH_INPUT, Roundtrip --><#if MARKET == "US"><#global ARRIVAL_DATE_SEARCH_INPUT = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("MM/dd/yyyy")>
			<#else><#global ARRIVAL_DATE_SEARCH_INPUT = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("dd/MM/yyyy")></#if>										</#if>
     <#-- MAIN_LEG_ARRIVAL_DATE_HOTEL, Roundtrip --><#global MAIN_LEG_ARRIVAL_DATE_HOTEL = SQL_GLOBAL.LEG_ARRIVAL_DATE?date?string("yyyy-MM-dd")>
     <#-- MAIN_LEG_ARRIVAL_YEAR, Roundtrip --><#global MAIN_LEG_ARRIVAL_YEAR = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("yyyy")>
     <#-- MAIN_LEG_ARRIVAL_MONTH, Roundtrip --><#global MAIN_LEG_ARRIVAL_MONTH = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("MM")>
     <#-- MAIN_LEG_ARRIVAL_DAY, Roundtrip --><#global MAIN_LEG_ARRIVAL_DAY = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("dd")>
     <#-- MAIN_LEG_ARRIVAL_TIME, Roundtrip --><#global MAIN_LEG_ARRIVAL_TIME = SQL_GLOBAL.LEG_ARRIVAL_DATE?datetime?string("HH:mm")>
     <#-- LEGNUMBER_INSIDE_LOOP, Roundtrip --><#global LEGNUMBER_INSIDE_LOOP = SQL_GLOBAL.LEG_NUMBER>
     <#-- LEGNUMBER --><#global LEGNUMBER = SQL_GLOBAL.LEG_NUMBER>
     <#-- DESTINATION --><#global DESTINATION = SQL_GLOBAL.DESTINATION_LEG>
     <#assign ARRIVAL_DATE_IS_SET = 1>
<#-- In case BOOKING_LAST_DESTINATION, BOOKING_ROUND_TRIP and/or BOOKING_MAIN_DESTINATION have NULL values, it will go to the next row and check -->
     <#else><#-- RETURN_DATE_HOTEL, RETURN_DAY_CAR, RETURN_MONTH_CAR and RETURN_DATE_SEARCH_INPUT -->
    
                                                	</#if> 
   		</#if>
		
		<#-- NNN is used if TRANSFER_IATA_LEG1 is null -->
		<#-- TRANSFER_IATA_LEG1 this obtains the transit IATA from leg 1 -->
		<#if SQL_GLOBAL.LEG_NUMBER?isnull><#global TRANSFER_IATA_LEG1 = "NNN">
    	<#elseif SQL_GLOBAL.LEG_NUMBER?number == 1><#global TRANSFER_IATA_LEG1 = e?trim></#if> 
    
    
    
    
    </#list>
        
</#if>
</#if>
<#-- RETURN_DATE_HOTEL, RETURN_DATE_SEARCH_INPUT RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR -->
<#if RETURN_DATE_IS_SET == 0>
    <#if SQL_GLOBAL.ORIGIN_LEG?isnull>
        <#if TRIP_TOO_LONG == "Y"><#-- RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, NULL values -->
            <#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
                <#global RETURN_DAY_CAR = dayadd(.now,27)?date?string("dd")?trim>
                <#global RETURN_MONTH_CAR = dayadd(.now,27)?date?string("MM")?trim>
                <#global RETURN_YEAR_CAR = dayadd(.now,27)?date?string("yyyy")?trim>
                <#global RETURN_DATE_HOTEL = dayadd(.now,27)?date?string("yyyy-MM-dd")?trim>
                <#global RETURN_DATE_CAR = dayadd(.now,27)?date?string("yyyyMMddHHmm")?trim>
                <#if MARKET == "US">
                    <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("MM/dd/yyyy")?trim>
                <#else>
                    <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("dd/MM/yyyy")?trim>
                </#if><#-- We need to get the return date from the destination leg. That leg will have same IATA as MAIN destination for ROUNDTRIP trips (Trips that are too long cannot be oneway trips) -->
                            <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION><#-- LEGNUMBER_INSIDE_LOOP, Roundtrip -->
					<#assign RETURN_DATE_IS_SET = 1>							
					</#if>
            <#-- elseif !SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull -->
            <#else>
                 <#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd")?trim>
                 <#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM")?trim>
                 <#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy")?trim>
                 <#global RETURN_DATE_HOTEL = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy-MM-dd")?trim>
                 <#global RETURN_DATE_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyyMMddHHmm")?trim>
                 <#if MARKET == "US">
                     <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM/dd/yyyy")?trim>
                 <#else>
                     <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd/MM/yyyy")?trim>
                 </#if><#-- We need to get the return date from the destination leg. That leg will have same IATA as MAIN destination for ROUNDTRIP trips (Trips that are too long cannot be oneway trips) -->
                            <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION><#-- LEGNUMBER_INSIDE_LOOP, Roundtrip -->
					<#assign RETURN_DATE_IS_SET = 1>							
					</#if>
            <#-- end SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull -->
            </#if>
        <#-- else if TRIP_TOO_LONG is not too long -->
		<#else>
            <#global RETURN_DAY_CAR = dayadd(.now,7)?date?string("dd")?trim>
            <#global RETURN_MONTH_CAR = dayadd(.now,7)?date?string("dd")?date?string("MM")?trim>
            <#global RETURN_YEAR_CAR =dayadd(.now,7)?date?string("dd")?date?string("yyyy")?trim>
            <#global RETURN_DATE_HOTEL = dayadd(.now,7)?date?string("dd")?date?string("yyyy-MM-dd")?trim>
            <#global RETURN_DATE_CAR = dayadd(.now,7)?date?string("dd")?date?string("yyyyMMddHHmm")?trim>
            <#if MARKET == "US">
                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("dd")?date?string("MM/dd/yyyy")?trim>
            <#else>
                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("dd")?date?string("dd/MM/yyyy")?trim>
            </#if><#-- We need to get the return date from the destination leg. That leg will have same IATA as last destination for oneway trips -->
                <#-- Checking if it is a One Way Trip -->
                <#if SQL_GLOBAL.BOOKING_ROUND_TRIP == "N">
                    <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_LAST_DESTINATION><#assign RETURN_DATE_IS_SET = 1>
                    </#if>
                <#else><#-- if it is a roundtrip -->
                    <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION><#assign RETURN_DATE_IS_SET = 1><#assign RETURN_DATE_IS_SET = 1>
                    </#if>							
				</#if>	
        <#-- End <#if TRIP_TOO_LONG == "Y"> -->
        </#if>
        <#assign RETURN_DATE_IS_SET = 1><#-- In this scenario, it doesn't matter what row in the SQL that are being used, as the value for booking departure date will be the same on all rows -->
    <#--  else if SQL_GLOBAL.ORIGIN_LEG have content -->
    <#else>
        <#list SQL_GLOBAL.ORIGIN_LEG?split(",") as f>
            <#if RETURN_DATE_IS_SET == 0>
				<#-- Checking if it is a One Way Trip -->
                <#if SQL_GLOBAL.BOOKING_ROUND_TRIP == "N">
                    <#if TRIP_TOO_LONG == "Y">
						<#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, One Way -->
                            <#global RETURN_DAY_CAR = dayadd(.now,27)?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = dayadd(.now,27)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(.now,27)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL = dayadd(.now,27)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR = dayadd(.now,27)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the destination leg. That leg will have same IATA as last destination for oneway trips -->
                            <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_LAST_DESTINATION><#-- LEGNUMBER_INSIDE_LOOP, Roundtrip -->
					<#assign RETURN_DATE_IS_SET = 1>							
					</#if>
						<#-- if SQL_GLOBAL.BOOKING_DEPARTURE_TIME has a value -->
                        <#else>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, One Way -->
                            <#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the destination leg. That leg will have same IATA as last destination for oneway trips -->
                            <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_LAST_DESTINATION><#-- LEGNUMBER_INSIDE_LOOP, Roundtrip -->
					<#assign RETURN_DATE_IS_SET = 1>							
					</#if>
						<#-- End if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull -->
                        </#if>
					<#-- if TRIP_TOO_LONG is not "N" -->
                    <#else>
						<#-- if SQL_GLOBAL.BOOKING_DEPARTURE_TIME has a value -->
                        <#if !SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, One Way -->
                            <#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the destination leg. That leg will have same IATA as last destination for oneway trips -->
                            <#--test varaible: RETURN_DATE_FULL --><#global RETURN_DATE_FULL = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?datetime?string("dd/MM/yyyy HH:mm")?trim> <#-- End test varaible -->
                            <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_LAST_DESTINATION><#-- LEGNUMBER_INSIDE_LOOP, Roundtrip -->
					<#assign RETURN_DATE_IS_SET = 1>                    
							</#if>
						<#-- if SQL_GLOBAL.LEG_DEPARTURE_TIME does not have a value -->
                        <#elseif SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><br>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, One Way -->
                            <#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME,7)?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME,7)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME,7)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME,7)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME,7)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME,7)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME,7)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the destination leg. That leg will have same IATA as last destination for oneway trips -->
                            <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_LAST_DESTINATION><#-- LEGNUMBER_INSIDE_LOOP, Roundtrip -->
					<#assign RETURN_DATE_IS_SET = 1>							
                    </#if>
						<#-- End if SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull -->
                        </#if>
					<#-- End TRIP_TOO_LONG == "Y" -->
                    </#if>
							<#-- just some test variables -->
							<#global LEGNUMBER_INSIDE_LOOP_RETURN = SQL_GLOBAL.LEG_NUMBER>
							<#-- end of test variables -->
					
				<#-- Checking if it is a Roundtrip -->
                <#elseif SQL_GLOBAL.BOOKING_ROUND_TRIP == "Y">
                    <#if TRIP_TOO_LONG == "Y"><#-- If the return date is more than 27 days after the departure date -->
						<#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, Roundtrip -->
                            <#global RETURN_DAY_CAR = dayadd(.now,27)?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = dayadd(.now,27)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(.now,27)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL =dayadd(.now,27)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR =dayadd(.now,27)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the first leg on return flight. That leg will have same origin IATA as main destination for roundtrips -->
                            <#if SQL_GLOBAL.ORIGIN_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION>
                        <#assign RETURN_DATE_IS_SET = 1>
                    </#if>
                        <#else>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, Roundtrip -->
                            <#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the first leg on return flight. That leg will have same origin IATA as main destination for roundtrips -->
                            <#if SQL_GLOBAL.ORIGIN_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION>
                        <#assign RETURN_DATE_IS_SET = 1>
                    </#if>
                        </#if>
                    <#else><#-- If the return date is less than or equal to 27 days  after the departure date -->
                        <#if !SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, Roundtrip -->
                            <#global RETURN_DAY_CAR = SQL_GLOBAL.LEG_DEPARTURE_TIME?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = SQL_GLOBAL.LEG_DEPARTURE_TIME?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = SQL_GLOBAL.LEG_DEPARTURE_TIME?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL =SQL_GLOBAL.LEG_DEPARTURE_TIME?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR =SQL_GLOBAL.LEG_DEPARTURE_TIME?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = SQL_GLOBAL.LEG_DEPARTURE_TIME?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = SQL_GLOBAL.LEG_DEPARTURE_TIME?date?string("dd/MM/yyyy")?trim>
                            </#if>
                             <#--test varaible: RETURN_DATE_FULL --><#global RETURN_DATE_FULL = SQL_GLOBAL.LEG_DEPARTURE_TIME?datetime?string("dd/MM/yyyy HH:mm")?trim> <#-- End test varaible -->
                            <#-- We need to get the return date from the first leg on return flight. That leg will have same origin IATA as main destination for roundtrips -->
                            <#if SQL_GLOBAL.ORIGIN_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION>
                        <#assign RETURN_DATE_IS_SET = 1>
                    </#if>
                        <#elseif SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>#global RETURN_DAY_CAR = dayadd(.now,7)?date?string("dd")?trim>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, Roundtrip -->
                            <#global RETURN_MONTH_CAR = dayadd(.now,7)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(.now,7)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL =dayadd(.now,7)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR =dayadd(.now,7)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the first leg on return flight. That leg will have same origin IATA as main destination for roundtrips -->
                            <#if SQL_GLOBAL.ORIGIN_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION>
                        <#assign RETURN_DATE_IS_SET = 1>
                    </#if>
                        <#else>
							<#-- Create variables RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, Roundtrip -->
                            <#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("dd")?trim>
                            <#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("MM")?trim>
                            <#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyy")?trim>
                            <#global RETURN_DATE_HOTEL =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyy-MM-dd")?trim>
                            <#global RETURN_DATE_CAR =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyyMMddHHmm")?trim>
                            <#if MARKET == "US">
                                <#global RETURN_DATE_SEARCH_INPUT = ddayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("MM/dd/yyyy")?trim>
                            <#else>
                                <#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("dd/MM/yyyy")?trim>
                            </#if><#-- We need to get the return date from the first leg on return flight. That leg will have same origin IATA as main destination for roundtrips -->
                            <#if SQL_GLOBAL.ORIGIN_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION>
                        <#assign RETURN_DATE_IS_SET = 1>
                    </#if>
                        </#if>
                    </#if>
							<#-- just some test variables -->
							<#global LEGNUMBER_INSIDE_LOOP_RETURN = SQL_GLOBAL.LEG_NUMBER>
							<#-- end of test variables -->
					
                    <#-- In case BOOKING_LAST_DESTINATION, BOOKING_ROUND_TRIP and/or BOOKING_MAIN_DESTINATION have NULL values, it will go to the next row and check -->
                <#-- Checking the unlikely case of BOOKING_ROUND_TRIP having a different value than "Y" or "N" -->
                <#else>
                    <#assign RETURN_DATE_IS_SET = 0>
                <#-- end SQL_GLOBAL.BOOKING_ROUND_TRIP == "N" --></#if>
           <#-- End RETURN_DATE_IS_SET == 0 -->
           </#if>
        </#list>
    <#-- end if SQL_GLOBAL.ORIGIN_LEG?isnull -->
    </#if>
<#-- end if RETURN_DATE_IS_SET == 0 -->
</#if>
<#-- DEPARTURE_DATE --><#if SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><#global DEPARTURE_DATE = dayadd(.now,3)?datetime?string("yyyy/dd/MM-hh:mm")><#elseif SQL_GLOBAL.FIRST_LEG_YN == "Y"><#global DEPARTURE_DATE = SQL_GLOBAL.LEG_DEPARTURE_TIME?datetime?string("yyyy/dd/MM-hh:mm")><#else><#global DEPARTURE_DATE = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("yyyy/dd/MM-hh:mm")></#if></#if></#if>
</#data>

