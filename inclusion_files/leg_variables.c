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
<#-- ///////////COMMENT HELPER/////////////////
ARRIVAL_DATE_IS_SET and RETURN_DATE_IS_SET effects the SEARCH MODULE, CAR MODULE, HOTEL MODULE (which is the Hotel feed not currently being used (written 28/03/17)). Also used in the generation of the URLS for debug_assignments_nas_api_2_log.txt, debug_assignments_nas_api_2.txt,
assignments_nas_api.txt-->
<#-- ///////////COMMENT HELPER///////////////// 
If xxx_IS_SET = 0, means its N
If xxx_IS_SET = 1, means its either null or Y
-->

<#data SQL_GLOBAL as SQL_GLOBAL><#filter BOOKING_GDSBOOKINGID = BOOKING_ID BOOKING_LOCALBOOKINGID = LOCAL_BOOKING_ID>
<#fields FAST_TRACK_FLAG WIFI_YN MAX_YN VERSION_PLANNED FIRST_LEG_YN LEG_NUMBER BOOKING_DEPARTURE_TIME BOOKING_RETURN_DEPARTURE_TIME1 BOOKING_MAIN_DESTINATION BOOKING_LAST_DESTINATION BOOKING_ROUND_TRIP BOOKING_LONGHAUL BOOKING_ROUTE_AREA BOOKING_NUMBER_OF_LEGS LAST_LEG_YN LEG_NUMBER MAIN_DESTINATION LEG_DEPARTURE_TIME LEG_ARRIVAL_DATE DESTINATION_LEG BOOKING_LOCALBOOKINGID BOOKING_GDSBOOKINGID ORIGIN_LEG BOOKING_START_AIRPORT PRIO_COUNT>
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
		<#if TRIP_TOO_LONG == "Y">
			<#-- RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, NULL values -->
					<#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
					   <#global RETURN_DAY_CAR = dayadd(.now,27)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(.now,27)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(.now,27)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL = dayadd(.now,27)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR = dayadd(.now,27)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("dd/MM/yyyy")?trim></#if>
						<#else><#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,1)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,1)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,1)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,1)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,1)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,1)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,1)?date?string("dd/MM/yyyy")?trim></#if>
					</#if>
				
				<#else><#global RETURN_DAY_CAR = dayadd(.now,7)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(.now,7)?date?string("dd")?date?string("MM")?trim><#global RETURN_YEAR_CAR =dayadd(.now,7)?date?string("dd")?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL = dayadd(.now,7)?date?string("dd")?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR = dayadd(.now,7)?date?string("dd")?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("dd")?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("dd")?date?string("dd/MM/yyyy")?trim></#if>
			</#if>
			<#assign RETURN_DATE_IS_SET = 1><#-- In this scenario, it doesn't matter what row in the SQL that are being used, as the value for booking departure date will be the same on all rows -->
	<#else>    
    <#list SQL_GLOBAL.ORIGIN_LEG?split(",") as f>
        
        <#if RETURN_DATE_IS_SET == 0>
    		<#-- Checking if it is a One Way Trip --><#if SQL_GLOBAL.BOOKING_ROUND_TRIP == "N">
                
     		
                <#if TRIP_TOO_LONG == "Y">
                    
		<#-- RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_CAR, RETURN_DATE_SEARCH_INPUT, One Way --><#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
		<#global RETURN_DAY_CAR = dayadd(.now,27)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(.now,27)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(.now,27)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL = dayadd(.now,27)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR = dayadd(.now,27)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("dd/MM/yyyy")?trim></#if>
        <#else><#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd/MM/yyyy")?trim></#if>
        </#if>
                        		
                    <#else>
		<#if !SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("dd/MM/yyyy")?trim></#if>
		<#elseif SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
		<#global RETURN_DAY_CAR = dayadd(.now,7)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(.now,7)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(.now,7)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL =dayadd(.now,7)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR =dayadd(.now,7)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("dd/MM/yyyy")?trim></#if>
        <#else><#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("dd/MM/yyyy")?trim></#if>
        </#if>
                     
                </#if><#global LEGNUMBER_INSIDE_LOOP_RETURN = SQL_GLOBAL.LEG_NUMBER>
                <#if SQL_GLOBAL.DESTINATION_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION><#-- LEGNUMBER_INSIDE_LOOP, Roundtrip --><#assign RETURN_DATE_IS_SET = 1></#if>
    
               <#-- Checking if it is a Roundtrip --><#elseif SQL_GLOBAL.BOOKING_ROUND_TRIP == "Y">
                   
     		<#if TRIP_TOO_LONG == "Y">
               <#-- RETURN_DAY_CAR, RETURN_MONTH_CAR, RETURN_YEAR_CAR, RETURN_DATE_HOTEL, RETURN_DATE_SEARCH_INPUT,Roundtrip --><#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
		<#global RETURN_DAY_CAR = dayadd(.now,27)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(.now,27)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(.now,27)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL =dayadd(.now,27)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR =dayadd(.now,27)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,27)?date?string("dd/MM/yyyy")?trim></#if>
        <#else><#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd/MM/yyyy")?trim></#if>
        </#if>
                        		
                    <#else>
		<#if !SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL =dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR =dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.LEG_DEPARTURE_TIME, 7)?date?string("dd/MM/yyyy")?trim></#if>
		<#elseif SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull>
		<#global RETURN_DAY_CAR = dayadd(.now,7)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(.now,7)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(.now,7)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL =dayadd(.now,7)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR =dayadd(.now,7)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(.now,7)?date?string("dd/MM/yyyy")?trim></#if>
        <#else><#global RETURN_DAY_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("dd")?trim><#global RETURN_MONTH_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("MM")?trim><#global RETURN_YEAR_CAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyy")?trim><#global RETURN_DATE_HOTEL =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyy-MM-dd")?trim><#global RETURN_DATE_CAR =dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("yyyyMMddHHmm")?trim><#if MARKET == "US"><#global RETURN_DATE_SEARCH_INPUT = ddayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("MM/dd/yyyy")?trim><#else><#global RETURN_DATE_SEARCH_INPUT = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,7)?date?string("dd/MM/yyyy")?trim></#if>
        </#if>
                </#if><#global LEGNUMBER_INSIDE_LOOP_RETURN = SQL_GLOBAL.LEG_NUMBER>
		<#-- RETURN_DAY_CAR -->
                <#if SQL_GLOBAL.ORIGIN_LEG == SQL_GLOBAL.BOOKING_MAIN_DESTINATION><#assign RETURN_DATE_IS_SET = 1></#if>
                                                
     												<#-- In case BOOKING_LAST_DESTINATION, BOOKING_ROUND_TRIP and/or BOOKING_MAIN_DESTINATION have NULL values, it will go to the next row and check -->
     												<#else><#assign RETURN_DATE_IS_SET = 0>
    
                                                	</#if> 
   		</#if>
    </#list>
     
	
	<#-- END OF SQL_GLOBAL.ORIGIN_LEG?isnull --> 
	</#if>

<#-- END OF RETURN_DATE_IS_SET == 0 -->
</#if>
<#-- DEPARTURE_DATE --><#if SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><#global DEPARTURE_DATE = dayadd(.now,3)?datetime?string("yyyy/dd/MM-hh:mm")><#elseif SQL_GLOBAL.FIRST_LEG_YN == "Y"><#global DEPARTURE_DATE = SQL_GLOBAL.LEG_DEPARTURE_TIME?datetime?string("yyyy/dd/MM-hh:mm")><#else><#global DEPARTURE_DATE = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("yyyy/dd/MM-hh:mm")></#if>
</#data>

