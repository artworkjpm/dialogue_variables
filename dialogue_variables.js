<#-- Copy code to include: <#include "cms://contentlibrary/!framework/global_variables/dialogue_variables.htm"> -->

<#-- SERVER TIME CORRECTION --><#setting time_zone='US/Pacific-New'>


<#--
RIID: ${RIID_?c}
BOOKING_ID: ${BOOKING_ID} (from program)  
LOCAL_BOOKING_ID: ${LOCAL_BOOKING_ID} (from program)
LOCAL_BOOKING_ID_DV: ${LOCAL_BOOKING_ID_DV}
BOOKING_ID_DV: ${BOOKING_ID_DV} 
-->
<#if BOOKING_ID?isnull>
   <#assign BOOKING_ID = BOOKING_ID_DV>
   <#-- Setting BOOKING_ID = BOOKING_ID_DV -->
</#if>


<#if LOCAL_BOOKING_ID?isnull>
   <#assign LOCAL_BOOKING_ID = LOCAL_BOOKING_ID_DV>
   <#-- Setting LOCAL_BOOKING_ID = LOCAL_BOOKING_ID_DV -->
</#if>
<#-- Using:
BOOKING_ID: ${BOOKING_ID}
LOCAL_BOOKING_ID: ${LOCAL_BOOKING_ID}
-->




<#-- setting module default states -->
<#global HERO_SHOW_DEFAULT = 1>
<#global PRICELIST_SHOW_DEFAULT = 1>
<#global PROMOLIST_SHOW_DEFAULT = 1>
<#global MANUAL_PRICELIST_SHOW_DEFAULT = 1>
<#global PROMO_MAN_SHOW_DEFAULT = 1>
<#global ARTICLE_SHOW_DEFAULT = 1>
<#global ARTICLE_LARGE_SHOW_DEFAULT = 1>
<#global BANNER_SHOW_DEFAULT = 1>
<#global BULLETPOINTS_SHOW_DEFAULT = 1>
<#global TEXT_SHOW_DEFAULT = 1>
<#global SEARCH_SHOW_DEFAULT = 1>
<#global TRIPINFO_SHOW_DEFAULT = 1>
<#global CAR_SHOW_DEFAULT = 1>
<#global HOTELS_SHOW_DEFAULT = 1>

<#-- CREATE_REWARD_PROFILE --><#join><#compress><#switch MARKET>
<#case "NO"><#global CREATE_REWARD_PROFILE ="https://no.norwegianreward.com/blimedlem"><#break>
<#case "SE"><#global CREATE_REWARD_PROFILE ="https://se.norwegianreward.com/blimedlem"><#break>
<#case "DK"><#global CREATE_REWARD_PROFILE ="https://dk.norwegianreward.com/blimedlem"><#break>
<#case "FR"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "NL"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "IT"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "FI"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "DE"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "US"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "IE"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "SG"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "UK"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "ES"><#global CREATE_REWARD_PROFILE ="https://es.norwegianreward.com/blimedlem"><#break>
<#case "PL"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "FR-CA"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "EN-CA"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "AR"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#case "ROW"><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
<#default><#global CREATE_REWARD_PROFILE ="https://en.norwegianreward.com/blimedlem"><#break>
</#switch></#compress></#join>

<#-- HAS_REWARD_PROFILE --><#join><#compress><#switch MARKET>
<#case "NO"><#global HAS_REWARD_PROFILE ="https://no.norwegianreward.com/"><#break>
<#case "SE"><#global HAS_REWARD_PROFILE ="https://se.norwegianreward.com/"><#break>
<#case "DK"><#global HAS_REWARD_PROFILE ="https://dk.norwegianreward.com/"><#break>
<#case "FR"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "NL"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "IT"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "FI"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "DE"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "US"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "IE"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "SG"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "UK"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "ES"><#global HAS_REWARD_PROFILE ="https://es.norwegianreward.com/"><#break>
<#case "PL"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
<#case "FR-CA"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com"/><#break>
<#case "EN-CA"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com"/><#break>
<#case "AR"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com"/><#break>
<#case "ROW"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com"/><#break>
<#default><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
</#switch></#compress></#join>

<#-- REWARD_MEMBER --><#if CONTACT.REWARD_YN?isnull><#global REWARD_MEMBER = "N"><#elseif CONTACT.REWARD_YN == "N"><#global REWARD_MEMBER = "N"><#elseif CONTACT.REWARD_YN== "Y"><#global REWARD_MEMBER = "Y"><#else><#global REWARD_MEMBER = "N"></#if>
<#-- MY_TRAVELS -->
<#if MARKET == "NO"><#global MY_TRAVELS = "https://www.norwegian.no/start/booking/details?pnr=" + BOOKING_ID + "&pnrLocal=" + LOCAL_BOOKING_ID><#elseif MARKET == "ROW"><#global MY_TRAVELS = "https://www.norwegian.com/en/start/booking/details?pnr=" + BOOKING_ID + "&pnrLocal=" + LOCAL_BOOKING_ID><#else><#global MY_TRAVELS = "https://www.norwegian.com/" +MARKET?lower_case + "/start/booking/details?pnr=" + BOOKING_ID + "&pnrLocal=" + LOCAL_BOOKING_ID></#if>

<#-- ABANDON_BASKET TABLE -->
<#if DV_PRELOAD_TRIPINFO = "Y">
 <#if DV_DEBUG_ABANDON == "Y">
     RIID_: #${RIID_?c}#<br>
     DATA_ID: #${DV_DATA_ID}#<br> 
  </#if>
  <#if DV_DATA_ID?isnull>         
     <h1>UPS - Show testdata, when not from program.</h1>
  </#if>
  <#data ABANDON_BASKET as data>
  <#filter ABAN_RIID_=RIID_  ABAN_DATA_ID=DV_DATA_ID?number>
  <#fields  ABAN_BASKET_URL ABAN_DATA_ID ABAN_DEPARTUREDATE ABAN_RETURNDATE ABAN_ARRIVALAIRPORTCODE ABAN_AIRPORT_ARRIVAL ABAN_DEPARTUREAIRPORTCODE ABAN_AIRPORT_DEPARTURE>
         
        <#global ABAN_DATA_ID=data.ABAN_DATA_ID>
        <#if DV_DEBUG_ABANDON == "Y">
            <h1>Abandon basket data found           </h1>
        	ABAN_DATA_ID: ${data.ABAN_DATA_ID?c}<br>
 			ABAN_BASKET_URL: ${data.ABAN_BASKET_URL}<br>
        </#if>
        <#global ABAN_BASKET_URL=data.ABAN_BASKET_URL>     
        <#global ABAN_DEPARTUREAIRPORTCODE=data.ABAN_DEPARTUREAIRPORTCODE>
        <#global ABAN_AIRPORT_DEPARTURE=data.ABAN_AIRPORT_DEPARTURE>
      <#--  ABAN_DATA_ID=DV_DATA_ID?number -->
      <#global ABAN_DEPARTUREDATE=data.ABAN_DEPARTUREDATE?string("dd/MM")>
        
        <#global ABAN_AIRPORT_ARRIVAL=data.ABAN_AIRPORT_ARRIVAL>
        <#global ABAN_ARRIVALAIRPORTCODE=data.ABAN_ARRIVALAIRPORTCODE>
        <#global ABAN_RETURNDATE=data.ABAN_RETURNDATE?string("dd/MM")>
        
        <br>
            
</#data> </#if>

<#-- //////////////////////// TRAVEL_DATA SUP TABLE ///////////////////////////////////-->
<#data TRAVEL_DATA as TRAVEL_DATA limit=1><#filter TRAVEL_DATA_RIID_ = RIID_><#fields REWARD_BALANCE NAS_PROFILEID UNSUBSCRIBE_ID NL_PROFILEDETAILID>
<#-- NAS_PROFILE_YN --><#if TRAVEL_DATA.NAS_PROFILEID?isnull><#global NAS_PROFILE_YN = "N"><#else><#global NAS_PROFILE_YN = "Y"></#if>
<#-- PROFILE_ID --><#if TRAVEL_DATA.NAS_PROFILEID?isnull><#global PROFILE_ID = 0>
<#elseif !TRAVEL_DATA.NAS_PROFILEID?isnull><#global PROFILE_ID = TRAVEL_DATA.NAS_PROFILEID?c><#else><#global PROFILE_ID = 0></#if>

<#-- NL_UNSUB_ID --><#if !TRAVEL_DATA.UNSUBSCRIBE_ID?isnull><#global NL_UNSUB_ID = TRAVEL_DATA.UNSUBSCRIBE_ID></#if>

<#-- NL_PROFILE_ID --><#if TRAVEL_DATA.NL_PROFILEDETAILID?isnull && TRAVEL_DATA.NAS_PROFILEID?isnull><#global NL_PROFILE_ID = 0><#elseif TRAVEL_DATA.NL_PROFILEDETAILID?isnull || TRAVEL_DATA.NL_PROFILEDETAILID == 0><#global NL_PROFILE_ID = TRAVEL_DATA.NAS_PROFILEID?c><#else><#global NL_PROFILE_ID = TRAVEL_DATA.NL_PROFILEDETAILID?c></#if>

<#-- PROFILE_YN --><#if TRAVEL_DATA.NAS_PROFILEID?isnull><#global PROFILE_YN = "N"><#else><#global PROFILE_YN = "Y"></#if>

<#-- CASHPOINTS --><#if TRAVEL_DATA.REWARD_BALANCE?isnull><#global CASHPOINTS = "0"><#else><#global CASHPOINTS = TRAVEL_DATA.REWARD_BALANCE?int?c></#if>

</#data>
<#-- //////////////////////// MARKET_VARIABLES SUP TABLE /////////////////////////////////////// -->

<#global FORCE_ROW_MARKET = 0><#data MARKET_VARIABLES as MARKET_VARIABLES limit=1><#filter LANGUAGE_ID = LANGUAGEID?lower_case><#fields AIRPORT_LANGUAGE LANGUAGE_ID HOTEL_CAR_LANGUAGE_ID MARKET2 SURVEY_LANG>
<#-- AIRPORT_LANG_LID --><#if !MARKET_VARIABLES.AIRPORT_LANGUAGE?isnull><#global AIRPORT_LANG_LID = MARKET_VARIABLES.AIRPORT_LANGUAGE?trim?upper_case><#else><#global AIRPORT_LANG_LID = "EN"></#if>
<#-- HOTEL_LANG_LID --><#if MARKET_VARIABLES.LANGUAGE_ID?isnull || MARKET_VARIABLES.AIRPORT_LANGUAGE?isnull><#global HOTEL_LANG_LID = "EMEA"><#elseif MARKET_VARIABLES.LANGUAGE_ID?? && !MARKET_VARIABLES.AIRPORT_LANGUAGE?isnull><#global HOTEL_LANG_LID = MARKET_VARIABLES.AIRPORT_LANGUAGE?trim><#else><#global HOTEL_LANG_LID = "EMEA"></#if>
<#-- CARTRAWLER_LANG_LID --><#if MARKET_VARIABLES.HOTEL_CAR_LANGUAGE_ID?isnull><#global CARTRAWLER_LANG_LID = "en-gb"><#else><#global CARTRAWLER_LANG_LID = MARKET_VARIABLES.HOTEL_CAR_LANGUAGE_ID?trim></#if>
<#-- SURVEY_LANGUAGE --><#if MARKET_VARIABLES.SURVEY_LANG?isnull><#global SURVEY_LANGUAGE = "en-gb"><#else><#global SURVEY_LANGUAGE = MARKET_VARIABLES.SURVEY_LANG?trim></#if>

<#-- MARKET --><#if MARKET_VARIABLES.MARKET2?isnull><#global FORCE_ROW_MARKET = 1><#global MARKET = 'ROW'><#else><#global FORCE_ROW_MARKET = 1><#global MARKET = MARKET_VARIABLES.MARKET2></#if>
</#data>

<#-- MARKET (missing languageid fix) --><#if FORCE_ROW_MARKET == 0><#global MARKET = 'ROW'></#if>



<#-- AIRPORT_LANG (with missing languageid fix) --><#if AIRPORT_LANG_LID?isnull><#global AIRPORT_LANG = "EN"><#else><#global AIRPORT_LANG = AIRPORT_LANG_LID?trim></#if>

<#-- HOTEL_LANG (with missing languageid fix) --><#if HOTEL_LANG_LID?isnull><#global HOTEL_LANG = "EMEA"><#else><#global HOTEL_LANG = HOTEL_LANG_LID?trim></#if>

<#-- CARTRAWLER_LANG (with missing languageid fix) --><#if CARTRAWLER_LANG_LID?isnull><#global CARTRAWLER_LANG = "en-gb"><#else><#global CARTRAWLER_LANG = CARTRAWLER_LANG_LID?trim></#if>

<#-- //////////////////////// CAMPAIGN_SETTINGS ///////////////////////////////////-->
<#data CAMPAIGN_FRAMEWORK_1_COL as CAMPAIGN_FRAMEWORK_1_COL limit=1>
<#filter FRAMEWORK_CAMPAIGN = CAMPAIGN FRAMEWORK_MARKET = MARKET><#fields DISCLAIMER_CTA DISCLAIMER_URL>
<#-- DISCLAIMER_YN_VAR --><#if CAMPAIGN_FRAMEWORK_1_COL.DISCLAIMER_CTA?isnull><#global DISCLAIMER_YN_VAR = "N"><#else><#global DISCLAIMER_YN_VAR = "Y"></#if>
<#-- DISCLAIMER_CTA_VAR --><#global DISCLAIMER_CTA_VAR = CAMPAIGN_FRAMEWORK_1_COL.DISCLAIMER_CTA>
<#-- DISCLAIMER_URL_VAR --><#if CAMPAIGN_FRAMEWORK_1_COL.DISCLAIMER_URL?isnull><#global DISCLAIMER_URL_VAR = "https://www.norwegian.com/"><#else><#global DISCLAIMER_URL_VAR = CAMPAIGN_FRAMEWORK_1_COL.DISCLAIMER_URL></#if>
</#data>


<#-- ///////////////////////////////////////////////////////////////////////////// SQL_UNIVERSAL SQL TABLE //////////////////////////////////////////////////////////////////////////////////// -->
<#data SQL_Universal as SQL_Universal><#filter BOOKING_GDSBOOKINGID2 = BOOKING_ID BOOKING_LOCALBOOKINGID2 = LOCAL_BOOKING_ID>
<#fields DAYS_TO_DEPARTURE BOOKINGWINDOW MORE28 ONCHECKIN_ACTIVE ONCHECKIN_ACTIVE_RETURN DAYS_TO_FLYBACK PSNGR_AGE>
<#-- DAYS_TO_DEP --><#global DAYS_TO_DEP = SQL_Universal.DAYS_TO_DEPARTURE?string>

<#-- RETURN_DAYS -->
<#if SQL_Universal.DAYS_TO_FLYBACK?isnull><#global RETURN_DAYS = "1">
<#else>
<#global RETURN_DAYS = SQL_Universal.DAYS_TO_FLYBACK?string>
</#if>

<#-- RECEIVED_E_LH_40DB --> <#if SQL_Universal.BOOKINGWINDOW?isnull><#global RECEIVED_E_LH_40DB = "1"><#elseif SQL_Universal.BOOKINGWINDOW?number gt 0 && SQL_Universal.BOOKINGWINDOW?number lt 40><#global RECEIVED_E_LH_40DB = "0"><#else><#global RECEIVED_E_LH_40DB = "1"></#if> 

<#-- TRIP_TOO_LONG --> <#if SQL_Universal.MORE28?isnull><#global TRIP_TOO_LONG = "Y"><#elseif SQL_Universal.MORE28 == "Y"><#global TRIP_TOO_LONG = "Y"><#else>
    <#global TRIP_TOO_LONG = "N"></#if>

<#-- LESS_24_DEP -->
<#if SQL_Universal.ONCHECKIN_ACTIVE?isnull><#global LESS_24_DEP = "N">
<#elseif SQL_Universal.ONCHECKIN_ACTIVE = "Y"><#global LESS_24_DEP = "Y">
<#else><#global LESS_24_DEP = "N">
</#if>

<#-- LESS_24_RET -->
<#if SQL_Universal.ONCHECKIN_ACTIVE_RETURN?isnull><#global LESS_24_RET = "N">
<#elseif SQL_Universal.ONCHECKIN_ACTIVE_RETURN = "Y"><#global LESS_24_RET = "Y">
<#else><#global LESS_24_RET = "N">
</#if>

<#-- BK_PERSON_AGE --><#if SQL_Universal.PSNGR_AGE?isnull><#global BK_PERSON_AGE = "0"><#else><#global BK_PERSON_AGE = SQL_Universal.PSNGR_AGE?string></#if>

</#data>
<#-- ///////////////////////////////////////////////////////////////////////////// SQL_GLOBAL SQL TABLE - LEG dependent information ////////////////////////////////////////////////////////////////////////////// -->

<#include "cms://contentlibrary/!framework/global_variables/inclusion_files/leg_variables.htm">

<#-- ///////////////////////////////////////////////////////////////////////////// SQL_GLOBAL SQL TABLE - Not LEG dependent information ////////////////////////////////////////////////////////////////////////////// -->

<#data SQL_GLOBAL as SQL_GLOBAL limit=1><#filter BOOKING_GDSBOOKINGID = BOOKING_ID BOOKING_LOCALBOOKINGID = LOCAL_BOOKING_ID>
<#fields BOOKING_DATE LEG_ID FIRST_LEG_YN BOOKING_NUMBER_OF_ADULTS BOOKING_NUMBER_OF_CHILDREN BOOKING_NUMBER_OF_INFANTS BOOKING_DEPARTURE_TIME BOOKING_RETURN_DEPARTURE_TIME1 BOOKING_START_AIRPORT BK_SOLD_IN_CURRENCY BOOKING_DEPARTURE_TIME BOOKING_MAIN_DESTINATION BOOKING_LAST_DESTINATION BOOKING_ROUND_TRIP BK_NO_OF_NOT_PREMIUM_ON_LH BOOKING_LONGHAUL BOOKING_NUMBER_OF_BAGS BOOKING_NUMBER_OF_SEATS FAST_TRACK_FLAG BK_NUMBER_OF_ADULTS_INFANTS WIFI_YN BOOKING_HAS_EVERYTHING PRODUCT_CODE BOOKING_HOTEL BOOKING_ROUTE_AREA BOOKING_START_COUNTRY_CD BOOKING_RENTALCAR BOOKING_NUMBER_OF_LEGS LAST_LEG_YN LEG_NUMBER MAIN_DESTINATION BK_NO_OF_APIS_NOT_SATISFIED BOOKING_NUMBER_OF_MEALS HORIZON_TYPE LEG_DEPARTURE_TIME LEG_ARRIVAL_DATE ORIGIN_LEG DESTINATION_LEG MOBILE_OS BOOKING_LOCALBOOKINGID BOOKING_GDSBOOKINGID PASSENGER_NAME VERSION_PLANNED TRANSIT PLUSGRADE_FLAG>

<#-- PLUSGRADE_YN script added 3.7.2018 by BW. Checks if a customer have received a Bid For Upgrade email by the third party PlusGrade. If so, the customers last name is added to PLUSGRADE_FLAG in the Booking_01 table, if not that field is empty. -->
<#-- PLUSGRADE_YN --><#if SQL_GLOBAL.PLUSGRADE_FLAG?isnull><#global PLUSGRADE_YN = 'N'><#else><#global PLUSGRADE_YN = 'Y'></#if>

<#-- DESTINATION_IATA --><#if SQL_GLOBAL.BOOKING_ROUND_TRIP?trim == "Y"><#global DESTINATION_IATA = SQL_GLOBAL.BOOKING_MAIN_DESTINATION?trim><#else><#global DESTINATION_IATA = SQL_GLOBAL.BOOKING_LAST_DESTINATION?trim></#if>

<#-- GLOBAL_BOOKING_ID --><#assign GLOBAL_BOOKING_ID = SQL_GLOBAL.BOOKING_GDSBOOKINGID>
<#-- GLOBAL_LOCAL_BOOKING_ID --><#assign GLOBAL_LOCAL_BOOKING_ID = SQL_GLOBAL.BOOKING_LOCALBOOKINGID>

<#--OPT_AIRCRAFT --><#if SQL_GLOBAL.VERSION_PLANNED?isnull><#global OPT_AIRCRAFT = '737-800'><#elseif SQL_GLOBAL.VERSION_PLANNED = '7M8'><#global OPT_AIRCRAFT = '737-M8'><#elseif SQL_GLOBAL.VERSION_PLANNED = '788'><#global OPT_AIRCRAFT = '787-800'><#elseif SQL_GLOBAL.VERSION_PLANNED = '789'><#global OPT_AIRCRAFT = '787-900'><#else><#global OPT_AIRCRAFT = SQL_GLOBAL.VERSION_PLANNED></#if>

<#-- ONEWAY_YN --><#if SQL_GLOBAL.BOOKING_ROUND_TRIP?isnull><#global ONEWAY_YN = "0"><#elseif SQL_GLOBAL.BOOKING_ROUND_TRIP = "Y"><#global ONEWAY_YN = "0"><#elseif SQL_GLOBAL.BOOKING_ROUND_TRIP = "N"><#global ONEWAY_YN = "1"><#else><#global ONEWAY_YN = "0"></#if>

<#-- DEPARTURE_IATA --><#if SQL_GLOBAL.BOOKING_START_AIRPORT?isnull><#global DEPARTURE_IATA = ""><#else><#global DEPARTURE_IATA = SQL_GLOBAL.BOOKING_START_AIRPORT?trim></#if>

<#-- HAS_TRANSIT checks if booking has transit stop Y or N.
TRANSIT_NUMBER prints out the number of transits-->
<#if SQL_GLOBAL.TRANSIT?isnull><#global HAS_TRANSIT = "N"><#global TRANSIT_NUMBER = 0><#elseif SQL_GLOBAL.TRANSIT?number gt 0><#global HAS_TRANSIT = "Y"><#global TRANSIT_NUMBER = SQL_GLOBAL.TRANSIT><#else><#global HAS_TRANSIT = "N"><#global TRANSIT_NUMBER = 0></#if>

<#-- FAST_TRACK_FLAG --><#if SQL_GLOBAL.FAST_TRACK_FLAG?isnull><#global FAST_TRACK_FLAG ="N"><#else><#global FAST_TRACK_FLAG = SQL_GLOBAL.FAST_TRACK_FLAG></#if>

<#--PSNGR_LAST_NAME --><#if SQL_GLOBAL.PASSENGER_NAME?contains("/")> <#global PSNGR_LAST_NAME = SQL_GLOBAL.PASSENGER_NAME?replace("/"," ")?word_list[0]?upper_case><#else><#global PSNGR_LAST_NAME = CONTACT.LASTNAME?upper_case></#if>

<#-- HORIZON --><#if SQL_GLOBAL.HORIZON_TYPE?isnull><#global HORIZON = "A"><#elseif SQL_GLOBAL.HORIZON_TYPE == "A"><#global HORIZON = "A"><#elseif SQL_GLOBAL.HORIZON_TYPE == "B"><#global HORIZON = "B">
<#elseif SQL_GLOBAL.HORIZON_TYPE == "C"><#global HORIZON = "C">
<#elseif SQL_GLOBAL.HORIZON_TYPE == "D"><#global HORIZON = "D"><#elseif SQL_GLOBAL.HORIZON_TYPE == "E"><#global HORIZON = "E"><#elseif SQL_GLOBAL.HORIZON_TYPE == "F"><#global HORIZON = "F"></#if>
<#--<#global HORIZON = "B">-->

<#-- MAX_LEG_YN <#if SQL_GLOBAL.MAX_YN?trim?isnull><#global MAX_LEG_YN = "N"><#elseif SQL_GLOBAL.MAX_YN?trim?upper_case == "Y"><#global MAX_LEG_YN = "Y"><#else><#global MAX_LEG_YN = "N"></#if> REMEMBER TO ADD MAX_YN IN THE FIELDS IF USED-->

<#-- ROUTE_AREA jm to bw why is this defaulting to long haul if null? --><#if SQL_GLOBAL.BOOKING_ROUTE_AREA?isnull><#global ROUTE_AREA = "long haul"><#else><#global ROUTE_AREA = SQL_GLOBAL.BOOKING_ROUTE_AREA?lower_case?trim></#if>

<#-- HOTEL_YES --><#if SQL_GLOBAL.BOOKING_HOTEL == "Y" ><#global HOTEL_YES = "Y"><#else><#global HOTEL_YES = "N"></#if>

<#-- NULL_VALUES --><#if SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?isnull || SQL_GLOBAL.BOOKING_NUMBER_OF_MEALS?isnull || SQL_GLOBAL.BOOKING_NUMBER_OF_SEATS?isnull><#global NULL_VALUES = "Y"><#else><#global NULL_VALUES = "N"></#if>

<#-- MAIN_DESTINATION --><#global MAIN_DESTINATION = SQL_GLOBAL.BOOKING_MAIN_DESTINATION>
<#-- LAST_DESTINATION --><#global MAIN_DESTINATION = SQL_GLOBAL.BOOKING_LAST_DESTINATION>

<#-- GOT_ALL_ANCILLARY --><#if SQL_GLOBAL.BOOKING_HAS_EVERYTHING?isnull><#global GOT_ALL_ANCILLARY = "N"><#elseif SQL_GLOBAL.BOOKING_HAS_EVERYTHING?upper_case == "Y"><#global GOT_ALL_ANCILLARY = "Y"><#else><#global GOT_ALL_ANCILLARY = "N"></#if>

<#-- WIFI --><#if SQL_GLOBAL.WIFI_YN?isnull><#global WIFI = "N"><#elseif SQL_GLOBAL.WIFI_YN == "Y"><#global WIFI = "Y"><#else><#global WIFI = "N"></#if>

<#-- APP_YN --><#if SQL_GLOBAL.MOBILE_OS?isnull><#global APP_YN = "N"><#elseif SQL_GLOBAL.MOBILE_OS?string?trim == "0"><#global APP_YN = "Y"><#else><#global APP_YN = "N"></#if>

<#-- HAS_FLEX --><#if SQL_GLOBAL.PRODUCT_CODE?isnull><#global HAS_FLEX = "N"><#elseif SQL_GLOBAL.PRODUCT_CODE == "FL"><#global HAS_FLEX = "Y"><#else><#global HAS_FLEX = "N"></#if>

<#-- PRODUCT_CODE -->
<#if SQL_GLOBAL.PRODUCT_CODE?isnull><#global PRODUCT_CODE = "null product code"><#else><#global PRODUCT_CODE = SQL_GLOBAL.PRODUCT_CODE></#if>

<#-- HAS_CAR_RENTAL --><#if SQL_GLOBAL.BOOKING_RENTALCAR?isnull || SQL_GLOBAL.BOOKING_RENTALCAR?trim?upper_case == "N"><#global HAS_CAR_RENTAL = "N"><#elseif SQL_GLOBAL.BOOKING_RENTALCAR?trim?upper_case == "Y"><#global HAS_CAR_RENTAL = "Y"><#else><#global HAS_CAR_RENTAL = "N"></#if>

<#-- ANCILLARY_ALL --><#if SQL_GLOBAL.BOOKING_HAS_EVERYTHING?isnull><#global ANCILLARY_ALL = "N"><#elseif SQL_GLOBAL.BOOKING_HAS_EVERYTHING == "Y" ><#global ANCILLARY_ALL = "Y"><#else><#global ANCILLARY_ALL = "N"></#if>

<#-- HAS_INFANTS --><#if SQL_GLOBAL.BK_NUMBER_OF_ADULTS_INFANTS?isnull ><#global HAS_INFANTS = "N"><#elseif SQL_GLOBAL.BK_NUMBER_OF_ADULTS_INFANTS == 0 ><#global HAS_INFANTS = "N"><#elseif SQL_GLOBAL.BK_NUMBER_OF_ADULTS_INFANTS gt 0 ><#global HAS_INFANTS = "Y"><#else><#global HAS_INFANTS = "N"></#if>

<#-- LONG_HAUL jm updated to include ROUTE_AREA 23/05/18 due to LONG_HAUL showing N for long haul flights when ONLY using BOOKING_LONGHAUL--><#if SQL_GLOBAL.BOOKING_LONGHAUL == "Y" || ROUTE_AREA == "long haul" ><#global LONG_HAUL = "Y"><#else><#global LONG_HAUL = "N"></#if>

<#-- TESTING_BOOKING_NUMBER_OF_BAGS -->
<#if SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?isnull><#global TESTING_BOOKING_NUMBER_OF_BAGS = 0 ><#elseif !SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?isnull><#global TESTING_BOOKING_NUMBER_OF_BAGS = SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS><#else><#global TESTING_BOOKING_NUMBER_OF_BAGS = 0></#if>

<#-- TESTING_BOOKING_NUMBER_OF_MEALS -->
<#if SQL_GLOBAL.BOOKING_NUMBER_OF_MEALS?isnull><#global TESTING_BOOKING_NUMBER_OF_MEALS = 0 ><#elseif !SQL_GLOBAL.BOOKING_NUMBER_OF_MEALS?isnull><#global TESTING_BOOKING_NUMBER_OF_MEALS = SQL_GLOBAL.BOOKING_NUMBER_OF_MEALS><#else><#global TESTING_BOOKING_NUMBER_OF_MEALS = 0></#if>

<#-- TESTING_BOOKING_NUMBER_OF_SEATS -->
<#if SQL_GLOBAL.BOOKING_NUMBER_OF_SEATS?isnull><#global TESTING_BOOKING_NUMBER_OF_SEATS = 0 ><#elseif !SQL_GLOBAL.BOOKING_NUMBER_OF_SEATS?isnull><#global TESTING_BOOKING_NUMBER_OF_SEATS = SQL_GLOBAL.BOOKING_NUMBER_OF_SEATS><#else><#global TESTING_BOOKING_NUMBER_OF_SEATS = 0 ></#if>

<#-- DEEPLINK_SEAT -->
<#if !SQL_GLOBAL.BOOKING_NUMBER_OF_SEATS?isnull>
    	<#if SQL_GLOBAL.BOOKING_NUMBER_OF_SEATS?number == 0>
            <#if MARKET == "NO"><#global DEEPLINK_SEAT = "https://www.norwegian.no/start/seating/sale?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        	<#elseif MARKET == "ROW"><#global DEEPLINK_SEAT = "https://www.norwegian.com/en/start/seating/sale?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
            <#else><#global DEEPLINK_SEAT = "https://www.norwegian.com/" + MARKET?lower_case + "/start/seating/sale?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
            </#if>                
        <#else><#global DEEPLINK_SEAT = MY_TRAVELS>
        </#if>
<#else><#global DEEPLINK_SEAT = MY_TRAVELS>
</#if>

<#-- DEEPLINK_BAG -->
<#if !SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?isnull>
    		<#if SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?number == 0>
                <#if MARKET == "NO"><#global DEEPLINK_BAG = "https://www.norwegian.no/start/luggage/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#elseif MARKET == "ROW"><#global DEEPLINK_BAG = "https://www.norwegian.com/en/start/luggage/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#else><#global DEEPLINK_BAG = "https://www.norwegian.com/" + MARKET?lower_case + "/start/luggage/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
            </#if>               
        <#else><#global DEEPLINK_BAG = MY_TRAVELS>
        </#if>
<#else><#global DEEPLINK_BAG = MY_TRAVELS>
</#if>

<#-- DEEPLINK_XTRA_BAG -->
<#if !SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?isnull>
    		<#if SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?number gt 0>
                <#if MARKET == "NO"><#global DEEPLINK_XTRA_BAG = "https://www.norwegian.no/start/luggage/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#elseif MARKET == "ROW"><#global DEEPLINK_XTRA_BAG = "https://www.norwegian.com/en/start/luggage/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#else><#global DEEPLINK_XTRA_BAG = "https://www.norwegian.com/" + MARKET?lower_case + "/start/luggage/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
            </#if>               
        <#else><#global DEEPLINK_XTRA_BAG = MY_TRAVELS>
        </#if>
<#else><#global DEEPLINK_XTRA_BAG = MY_TRAVELS>
</#if>

<#-- DEEPLINK_FASTTRACK -->
<#if HAS_FLEX == "N" && FAST_TRACK_FLAG?trim == "N"><#if PREMIUM_YES == "Y"><#global DEEPLINK_FASTTRACK = MY_TRAVELS>
                <#elseif MARKET == "NO"><#global DEEPLINK_FASTTRACK = "https://www.norwegian.no/start/fasttrack/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#elseif MARKET == "ROW"><#global DEEPLINK_FASTTRACK = "https://www.norwegian.com/en/start/fasttrack/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#else><#global DEEPLINK_FASTTRACK = "https://www.norwegian.com/" + MARKET?lower_case + "/start/fasttrack/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
            	</#if>               
	<#else><#global DEEPLINK_FASTTRACK = MY_TRAVELS>
	</#if>

<#-- DEEPLINK_ADD_CASHPOINTS -->
<#if REWARD_MEMBER == "Y">
    <#if MARKET == "NO"><#global DEEPLINK_ADD_CASHPOINTS = "https://www.norwegian.no/start/cashpoints/claim/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID + '&pnrName=' + PSNGR_LAST_NAME?exec>
        		<#elseif MARKET == "ROW"><#global DEEPLINK_ADD_CASHPOINTS = "https://www.norwegian.com/en/start/cashpoints/claim/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID + '&pnrName=' + PSNGR_LAST_NAME?exec>
        		<#else><#global DEEPLINK_ADD_CASHPOINTS = "https://www.norwegian.com/" + MARKET?lower_case + "/start/cashpoints/claim/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID + '&pnrName=' + PSNGR_LAST_NAME?exec>
            </#if>
<#else><#global DEEPLINK_ADD_CASHPOINTS = CREATE_REWARD_PROFILE?trim>
</#if>  

<#-- DEEPLINK_ADD_SPECIAL_BAG -->
<#if MARKET == "NO"><#global DEEPLINK_ADD_SPECIAL_BAG = "https://www.norwegian.no/start/luggage/special/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#elseif MARKET == "ROW"><#global DEEPLINK_ADD_SPECIAL_BAG = "https://www.norwegian.com/en/start/luggage/special/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#else><#global DEEPLINK_ADD_SPECIAL_BAG = "https://www.norwegian.com/" + MARKET?lower_case + "/start/luggage/special/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
</#if> 

<#-- DEEPLINK_ADD_SPECIAL_NEEDS -->
<#if MARKET == "NO"><#global DEEPLINK_ADD_SPECIAL_NEEDS = "https://www.norwegian.no/start/specialNeeds/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#elseif MARKET == "ROW"><#global DEEPLINK_ADD_SPECIAL_NEEDS = "https://www.norwegian.com/en/start/specialNeeds/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#else><#global DEEPLINK_ADD_SPECIAL_NEEDS = "https://www.norwegian.com/" + MARKET?lower_case + "/start/specialNeeds/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
</#if>

<#-- DEEPLINK_DOWNLOAD_RECEIPT -->
<#if MARKET == "NO"><#global DEEPLINK_DOWNLOAD_RECEIPT = "https://www.norwegian.no/start/booking/receipt/vat?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID+ "&pnrName=" + PSNGR_LAST_NAME + "&departureAirportCode=" + DEPARTURE_IATA +  "&arrivalAirportCode=" + DESTINATION_IATA>
<#elseif MARKET == "ROW"><#global DEEPLINK_DOWNLOAD_RECEIPT = "https://www.norwegian.en/start/booking/receipt/vat?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID+ "&pnrName=" + PSNGR_LAST_NAME + "&departureAirportCode=" + DEPARTURE_IATA +  "&arrivalAirportCode=" + DESTINATION_IATA><#else><#global DEEPLINK_DOWNLOAD_RECEIPT = "https://www.norwegian.com/"  + MARKET?lower_case + "/start/booking/receipt/vat?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID+ "&pnrName=" + PSNGR_LAST_NAME + "&departureAirportCode=" + DEPARTURE_IATA +  "&arrivalAirportCode=" + DESTINATION_IATA>
</#if>

<#-- DEEPLINK_BOOK_OVERWEIGHT -->
<#if !SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?isnull>
    		<#if SQL_GLOBAL.BOOKING_NUMBER_OF_BAGS?number gt 0><#if MARKET == "NO"><#global DEEPLINK_BOOK_OVERWEIGHT = "https://www.norwegian.no/start/luggage/excess/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#elseif MARKET == "ROW"><#global DEEPLINK_BOOK_OVERWEIGHT = "https://www.norwegian.com/en/start/luggage/excess/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
        		<#else><#global DEEPLINK_BOOK_OVERWEIGHT = "https://www.norwegian.com/" + MARKET?lower_case + "/start/luggage/excess/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
            </#if> <#else><#global DEEPLINK_BOOK_OVERWEIGHT = MY_TRAVELS>
        </#if>
<#else><#global DEEPLINK_BOOK_OVERWEIGHT = MY_TRAVELS>
</#if>



<#-- DEEPLINK_REGISTER_PASSPORT -->
<#if MARKET == "NO"><#global DEEPLINK_REGISTER_PASSPORT = "https://www.norwegian.no/start/passengerinformation/register?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#elseif MARKET == "ROW"><#global DEEPLINK_REGISTER_PASSPORT = "https://www.norwegian.com/en/start/passengerinformation/register?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#else><#global DEEPLINK_REGISTER_PASSPORT = "https://www.norwegian.com/" + MARKET?lower_case + "/start/passengerinformation/register?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
</#if>

<#-- DEEPLINK_PREMIUM_UPGRADE -->
<#if MARKET == "NO"><#global DEEPLINK_PREMIUM_UPGRADE = "https://www.norwegian.no/start/cabin/upgrade/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#elseif MARKET == "ROW"><#global DEEPLINK_PREMIUM_UPGRADE = "https://www.norwegian.com/en/start/cabin/upgrade/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
<#else><#global DEEPLINK_PREMIUM_UPGRADE = "https://www.norwegian.com/" + MARKET?lower_case + "/start/cabin/upgrade/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
</#if>

<#-- DEEPLINK_BID_FOR_PREMIUM_UPGRADE -->
<#if MARKET == "NO"><#global DEEPLINK_BID_FOR_PREMIUM_UPGRADE = "https://www.norwegian.no/travel-info/on-board/premium-cabin/bid-for-upgrade/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID +  "&pnrName=" + PSNGR_LAST_NAME>
<#elseif MARKET == "ROW"><#global DEEPLINK_BID_FOR_PREMIUM_UPGRADE = "https://www.norwegian.com/en/travel-info/on-board/premium-cabin/bid-for-upgrade/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID +  "&pnrName=" + PSNGR_LAST_NAME>
<#else><#global DEEPLINK_BID_FOR_PREMIUM_UPGRADE = "https://www.norwegian.com/" + MARKET?lower_case + "/travel-info/on-board/premium-cabin/bid-for-upgrade/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID +  "&pnrName=" + PSNGR_LAST_NAME>
</#if>

<#-- DEEPLINK_ORDER_MEAL -->
<#if TESTING_BOOKING_NUMBER_OF_MEALS?isnull || TESTING_BOOKING_NUMBER_OF_MEALS?number gt 0><#global DEEPLINK_ORDER_MEAL = MY_TRAVELS>
<#else>
    <#if MARKET == "NO"><#global DEEPLINK_ORDER_MEAL = "https://www.norwegian.no/start/meal/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
    <#elseif MARKET == "ROW"><#global DEEPLINK_ORDER_MEAL = "https://www.norwegian.com/en/start/meal/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
    <#else><#global DEEPLINK_ORDER_MEAL = "https://www.norwegian.com/" + MARKET?lower_case + "/start/meal/sale/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID>
    </#if>   
</#if>

<#-- SOME_OR_NONE_ANC_DEEPLINK --><#if TESTING_BOOKING_NUMBER_OF_SEATS?number == 0><#global SOME_OR_NONE_ANC_DEEPLINK = DEEPLINK_SEAT><#elseif TESTING_BOOKING_NUMBER_OF_MEALS?number == 0 && MEAL_AVAILABLE == "Y"><#global SOME_OR_NONE_ANC_DEEPLINK = DEEPLINK_ORDER_MEAL><#elseif TESTING_BOOKING_NUMBER_OF_BAGS?number == 0><#global SOME_OR_NONE_ANC_DEEPLINK = DEEPLINK_BAG><#else><#global SOME_OR_NONE_ANC_DEEPLINK = MY_TRAVELS></#if>


<#-- APIS_SATISFIED --><#if SQL_GLOBAL.BK_NO_OF_APIS_NOT_SATISFIED?isnull><#global APIS_SATISFIED = "N"><#elseif SQL_GLOBAL.BK_NO_OF_APIS_NOT_SATISFIED?number gt 0 && DESTINATION_COUNTRY_CODE?trim?upper_case == "US"><#global APIS_SATISFIED = "Y"><#else><#global APIS_SATISFIED = "N"></#if>


<#-- PREMIUM_YES I changed the code to be else N, only Premium is Y if SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH?number == 0 && LONG_HAUL?trim == "Y" 17/05/18 jm 
<#if SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH?isnull><#global PREMIUM_YES = "N">
<#elseif LONG_HAUL?trim == "N"><#global PREMIUM_YES ="N"><#elseif SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH?number gt 0 && LONG_HAUL?trim == "Y"><#global PREMIUM_YES ="N"><#elseif SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH?number == 0 && LONG_HAUL?trim == "Y"><#global PREMIUM_YES ="Y"><#else><#global PREMIUM_YES ="N"></#if>-->

<#--NOT_PREMIUM_BK print out this column data, if 0=premium, if >1= not premium <#if SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH?isnull><#global NOT_PREMIUM_BK = "BK is null"><#else><#global NOT_PREMIUM_BK = SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH></#if>-->

<#-- PREMIUM_YES OLD CODE JM <#if SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH?isnull><#global PREMIUM_YES = "N"><#elseif SQL_GLOBAL.BK_NO_OF_NOT_PREMIUM_ON_LH?number gt 0 && LONG_HAUL?trim == "Y"><#global PREMIUM_YES ="N"><#else><#global PREMIUM_YES ="Y"></#if>-->

<#--jm temporary fix make all PREMIUM = N because premium content is showing for a lot of lowfare customers, I am yet to find a real premium customer 24/05/18 --><#--<#global PREMIUM_YES ="N">-->

<#-- BW comment 31.05.2018: PREMIUM_YES is now declared in leg_variables file instead -->

<#-- MEAL_ORDERED --><#if PREMIUM_YES == "Y"><#global MEAL_ORDERED = "Y"><#elseif HAS_FLEX == "Y"><#global MEAL_ORDERED = "Y"><#else><#if ANCILLARY_ALL?isnull || ANCILLARY_ALL == "N"><#if TESTING_BOOKING_NUMBER_OF_MEALS?isnull><#global MEAL_ORDERED = "N"><#elseif TESTING_BOOKING_NUMBER_OF_MEALS?number gt 0><#global MEAL_ORDERED = "Y"><#else><#global MEAL_ORDERED = "N"></#if></#if></#if>

<#-- PURCHASE_DATE --><#if !SQL_GLOBAL.BOOKING_DATE?isnull><#global PURCHASE_DATE = SQL_GLOBAL.BOOKING_DATE?date?string("yyyy-MM-dd")><#else><#global PURCHASE_DATE =dayadd(.now,-15)?date?string("yyyy-MM-dd")></#if>

<#-- LEG_ID --><#if FIRST_LEG_YN?trim == 'Y'><#global LEG_ID_1 = SQL_GLOBAL.LEG_ID?trim></#if>

<#-- NUMBER_OF_ADULTS --><#if SQL_GLOBAL.BOOKING_NUMBER_OF_ADULTS?isnull><#global NUMBER_OF_ADULTS = 0><#else><#global NUMBER_OF_ADULTS = SQL_GLOBAL.BOOKING_NUMBER_OF_ADULTS></#if>

<#-- NUMBER_OF_CHILDREN --><#if SQL_GLOBAL.BOOKING_NUMBER_OF_CHILDREN?isnull><#global NUMBER_OF_CHILDREN = 0><#else><#global NUMBER_OF_CHILDREN = SQL_GLOBAL.BOOKING_NUMBER_OF_CHILDREN></#if>

<#-- NUMBER_OF_INFANTS --><#if SQL_GLOBAL.BOOKING_NUMBER_OF_INFANTS?isnull><#global NUMBER_OF_INFANTS = 0><#else><#global NUMBER_OF_INFANTS = SQL_GLOBAL.BOOKING_NUMBER_OF_INFANTS></#if>

<#-- DEPARTURE_DATE_HOTEL --><#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global DEPARTURE_DATE_HOTEL = dayadd(.now,3)?date?string("yyyy-MM-dd")><#else><#global DEPARTURE_DATE_HOTEL = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("yyyy-MM-dd")></#if>
<#-- DEPARTURE_DATE_CAR --><#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global DEPARTURE_DATE_CAR = dayadd(.now,3)?string("yyyyMMddHHmm")><#else><#global DEPARTURE_DATE_CAR = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?string("yyyyMMddHHmm")></#if>

<#-- DEPARTURE_DATE --><#if SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><#global DEPARTURE_DATE = dayadd(.now,3)?datetime?string("yyyy/dd/MM-hh:mm")><#elseif SQL_GLOBAL.FIRST_LEG_YN == "Y"><#global DEPARTURE_DATE = SQL_GLOBAL.LEG_DEPARTURE_TIME?datetime?string("yyyy/dd/MM-hh:mm")><#else><#global DEPARTURE_DATE = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("yyyy/dd/MM-hh:mm")></#if>

<#-- DEPARTURE_DATE_SURVEY --><#if SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><#global DEPARTURE_DATE_SURVEY = dayadd(.now,3)?datetime?string("yyyy-MM-dd_HH-mm")><#elseif SQL_GLOBAL.FIRST_LEG_YN == "Y"><#global DEPARTURE_DATE_SURVEY = SQL_GLOBAL.LEG_DEPARTURE_TIME?datetime?string("yyyy-MM-dd_HH-mm")><#else><#global DEPARTURE_DATE_SURVEY = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?datetime?string("yyyy-MM-dd_HH-mm")></#if>

<#-- DEPARTURE_DATE_RETURN --><#if SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?isnull><#global DEPARTURE_DATE_RETURN = dayadd(.now,3)?datetime?string("yyyy/dd/MM-hh:mm")><#else><#global DEPARTURE_DATE_RETURN = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?datetime?string("yyyy/dd/MM-hh:mm")></#if>

<#-- DEPARTURE_DATE_SEARCH_INPUT --><#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#if MARKET == "US"><#global DEPARTURE_DATE_SEARCH_INPUT = dayadd(.now,3)?date?string("MM/dd/yyyy")><#else><#global DEPARTURE_DATE_SEARCH_INPUT = dayadd(.now,3)?date?string("dd/MM/yyyy")></#if><#else><#if MARKET == "US"><#global DEPARTURE_DATE_SEARCH_INPUT = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("MM/dd/yyyy")><#else><#global DEPARTURE_DATE_SEARCH_INPUT = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("dd/MM/yyyy")></#if></#if>

<#-- DEPARTURE_COUNTRY --><#global DEPARTURE_COUNTRY = SQL_GLOBAL.BOOKING_START_COUNTRY_CD?lower_case?trim>

<#-- BOOKING_CURRENCY --><#if SQL_GLOBAL.BK_SOLD_IN_CURRENCY?isnull><#global BOOKING_CURRENCY = "EUR"><#else><#global BOOKING_CURRENCY = SQL_GLOBAL.BK_SOLD_IN_CURRENCY?trim></#if>

<#-- NEXT_FLIGHT --><#if MARKET == "US"><#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global NEXT_FLIGHT = dayadd(.now,3)?date?string("MM/dd/yyyy")?trim><#else><#global NEXT_FLIGHT = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("MM/dd/yyyy")?trim></#if><#else><#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global NEXT_FLIGHT = dayadd(.now,3)?date?string("dd/MM/yyyy")?trim><#else><#global NEXT_FLIGHT = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("dd/MM/yyyy")?trim></#if></#if>




<#-- ONLINE_CHECKIN_AVAILABLE_YN --><#-- Online check-in is not available for some airports Added 27.06.2018 by BW -->
<#if DEPARTURE_IATA == 'AGA' || DEPARTURE_IATA == 'AUS' || DEPARTURE_IATA == 'BDL' || DEPARTURE_IATA == 'BKK' || DEPARTURE_IATA == 'BOS' || DEPARTURE_IATA == 'DBV' || DEPARTURE_IATA == 'DEN' || DEPARTURE_IATA == 'DXB' || DEPARTURE_IATA == 'EWR' || DEPARTURE_IATA == 'EZE' || DEPARTURE_IATA == 'FLL' || DEPARTURE_IATA == 'JFK' || DEPARTURE_IATA == 'LAS' || DEPARTURE_IATA == 'LAX' || DEPARTURE_IATA == 'MCO' || DEPARTURE_IATA == 'OAK' || DEPARTURE_IATA == 'ORD' || DEPARTURE_IATA == 'PUY' || DEPARTURE_IATA == 'PVD' || DEPARTURE_IATA == 'RAK' || DEPARTURE_IATA == 'RJK' || DEPARTURE_IATA == 'SEA' || DEPARTURE_IATA == 'SIN' || DEPARTURE_IATA == 'SJU' || DEPARTURE_IATA == 'SPU' || DEPARTURE_IATA == 'STX' || DEPARTURE_IATA == 'SWF' || DEPARTURE_IATA == 'YHM' || DEPARTURE_IATA == 'YUL' || DEPARTURE_IATA == 'YQB' || DEPARTURE_IATA == 'ZAG'>
    <#if LESS_24_DEP == "Y"  || LESS_24_RET == "Y"><#global ONLINE_CHECKIN_AVAILABLE_YN = 'N'><#-- REASON is created to make it easier to test. It is not beeing used in any live campqaigns --><#assign REASON = 'Not available for this Departure IATA'>
    <#else><#global ONLINE_CHECKIN_AVAILABLE_YN = 'N'><#-- REASON is created to make it easier to test. It is not beeing used in any live campqaigns --><#assign REASON = 'More than 24 hours to departure, and not available for this Departure IATA'>
    </#if>
<#elseif DESTINATION_IATA == 'AUS' || DESTINATION_IATA == 'BDL' || DESTINATION_IATA == 'BOS' || DESTINATION_IATA == 'DEN' || DESTINATION_IATA == 'EWR' || DESTINATION_IATA == 'FLL' || DESTINATION_IATA == 'JFK' || DESTINATION_IATA == 'LAS' || DESTINATION_IATA == 'LAX' || DESTINATION_IATA == 'MCO' || DESTINATION_IATA == 'OAK' || DESTINATION_IATA == 'ORD' || DESTINATION_IATA == 'SEA' || DESTINATION_IATA == 'SWF' || DESTINATION_IATA == 'PVD'>
    <#if LESS_24_DEP == "Y"  || LESS_24_RET == "Y"><#global ONLINE_CHECKIN_AVAILABLE_YN = 'N'><#-- REASON is created to make it easier to test. It is not beeing used in any live campqaigns --><#assign REASON = 'Not available for this Destination IATA'>
    <#else><#global ONLINE_CHECKIN_AVAILABLE_YN = 'N'><#-- REASON is created to make it easier to test. It is not beeing used in any live campqaigns --><#assign REASON = 'More than 24 hours to departure, and not available for this Destination IATA'>
    </#if>
<#else><#global ONLINE_CHECKIN_AVAILABLE_YN = 'Y'>
</#if>


<#-- DEEPLINK_ONLINE_CHECKIN -->
<#if ONLINE_CHECKIN_AVAILABLE_YN == 'Y'>
    <#if LESS_24_DEP == "Y" || LESS_24_RET == "Y">
		<#if MARKET == "NO"><#global DEEPLINK_ONLINE_CHECKIN = "https://www.norwegian.no/start/checkin/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID + "&pnrName=" + PSNGR_LAST_NAME + "&departureAirportCode=" + DEPARTURE_IATA +  "&arrivalAirportCode=" + DESTINATION_IATA + "#">
		<#elseif MARKET == "ROW"><#global DEEPLINK_ONLINE_CHECKIN = "https://www.norwegian.com/en/start/checkin/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID + "&pnrName=" + PSNGR_LAST_NAME + "&departureAirportCode=" + DEPARTURE_IATA +  "&arrivalAirportCode=" + DESTINATION_IATA + "#">
		<#else><#global DEEPLINK_ONLINE_CHECKIN = "https://www.norwegian.com/" + MARKET?lower_case + "/start/checkin/?pnr=" + SQL_GLOBAL.BOOKING_GDSBOOKINGID + "&pnrLocal=" + SQL_GLOBAL.BOOKING_LOCALBOOKINGID + "&pnrName=" + PSNGR_LAST_NAME + "&departureAirportCode=" + DEPARTURE_IATA +  "&arrivalAirportCode=" + DESTINATION_IATA + "#">
		</#if>
    <#else><#global DEEPLINK_ONLINE_CHECKIN = MY_TRAVELS>
    </#if>
<#else><#global DEEPLINK_ONLINE_CHECKIN = MY_TRAVELS>
</#if>




<#-- DEP_DATE_FIRST_LEG --><#if !SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global DEP_DATE_FIRST_LEG = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?time?string('hh:mm')><#elseif !SQL_GLOBAL.LEG_DEPARTURE_TIME?isnull><#global DEP_DATE_FIRST_LEG = SQL_GLOBAL.LEG_DEPARTURE_TIME?time?string('hh:mm')?trim><#else><#global DEP_DATE_FIRST_LEG = dayadd(.now, 3)?time?string('hh:mm')?trim></#if>

<#-- CHILDREN_ON_BOOKING --><#if SQL_GLOBAL.BOOKING_NUMBER_OF_CHILDREN?isnull><#global CHILDREN_ON_BOOKING = "N"><#elseif SQL_GLOBAL.BOOKING_NUMBER_OF_CHILDREN?number gt 0><#global CHILDREN_ON_BOOKING = "Y"><#else><#global CHILDREN_ON_BOOKING = "N"></#if>

<#-- RETURN_DATE --><#if ONEWAY_YN?string?trim == "1"><#if MARKET == "US"><#global RETURN_DATE = dayadd(SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?trim?date,2)?string("MM/dd/yyyy")><#else><#global RETURN_DATE = dayadd(SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1,2)?string("dd/MM/yyyy")></#if><#else><#if MARKET == "US"><#global RETURN_DATE = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?string("MM/dd/yyyy")><#else><#global RETURN_DATE = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?string("dd/MM/yyyy")></#if></#if>

<#-- DEPARTURE_DAY --> <#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global DEPARTURE_DAY = dayadd(.now,3)?date?string("dd")?trim><#else><#global DEPARTURE_DAY = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("dd")?trim></#if>
 
<#-- DEPARTURE_MONTH --> <#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global DEPARTURE_MONTH = dayadd(.now,3)?date?string("MM")?trim><#else><#global DEPARTURE_MONTH = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("MM")?trim></#if>

<#-- DEPARTURE_YEAR --> <#if SQL_GLOBAL.BOOKING_DEPARTURE_TIME?isnull><#global DEPARTURE_YEAR = dayadd(.now,3)?date?string("yyyy")?trim><#else><#global DEPARTURE_YEAR = SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date?string("yyyy")?trim></#if>

<#-- RETURN_DAY --> <#if SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?isnull><#global RETURN_DAY = dayadd(.now,3)?date?string("dd")?trim><#else><#if TRIP_TOO_LONG == "N"><#global RETURN_DAY = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?date?string("dd")?trim><#else><#global RETURN_DAY = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("dd")?trim></#if></#if>

<#-- RETURN_MONTH --> <#if SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?isnull><#global RETURN_MONTH = dayadd(.now,3)?date?string("MM")?trim><#else><#if TRIP_TOO_LONG == "N"><#global RETURN_MONTH = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?date?string("MM")?trim><#else><#global RETURN_MONTH = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("MM")?trim></#if></#if>

<#-- RETURN_YEAR --> <#if SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?isnull><#global RETURN_YEAR = dayadd(.now,3)?date?string("yyyy")?trim><#else><#if TRIP_TOO_LONG == "N"><#global RETURN_YEAR = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?date?string("yyyy")?trim><#else><#global RETURN_YEAR = dayadd(SQL_GLOBAL.BOOKING_DEPARTURE_TIME?date,27)?date?string("yyyy")?trim></#if></#if>

<#-- NEWTRIP_DAY --><#if ONEWAY_YN?string?trim == "1"><#global NEWTRIP_DAY = dayadd(SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1,2)?string("dd")><#else><#global NEWTRIP_DAY = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?string("dd")></#if>

<#-- NEWTRIP_MONTH --><#if ONEWAY_YN?string?trim == "1"><#global NEWTRIP_MONTH = dayadd(SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1,2)?string("MM")><#else><#global NEWTRIP_MONTH = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?string("MM")></#if>

<#-- NEWTRIP_YEAR --><#if ONEWAY_YN?string?trim == "1"><#global NEWTRIP_YEAR = dayadd(SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1,2)?string("yyyy")><#else><#global NEWTRIP_YEAR = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?string("yyyy")></#if>

<#-- NEWTRIP_YEAR --><#if ONEWAY_YN?string?trim == "1"><#global NEWTRIP_YEAR = dayadd(SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1,2)?string("yyyy")><#else><#global NEWTRIP_YEAR = SQL_GLOBAL.BOOKING_RETURN_DEPARTURE_TIME1?string("yyyy")></#if>




<#-- ////////////////GLOBAL DATA CALL ENDS HERE/////////////////// -->
</#data>
<#-- NUMBER_OF_PASSENGERS -->
<#if NUMBER_OF_ADULTS?isnull><#assign NUMBER_OF_ADULTS = 1></#if><#if NUMBER_OF_ADULTS == 0 && NUMBER_OF_CHILDREN?isnull><#assign NUMBER_OF_CHILDREN = 1><#elseif NUMBER_OF_CHILDREN?isnull><#assign NUMBER_OF_CHILDREN = 0></#if><#if NUMBER_OF_INFANTS?isnull><#assign NUMBER_OF_INFANTS = 0></#if>
<#global NUMBER_OF_PASSENGERS = NUMBER_OF_ADULTS?trim?number + NUMBER_OF_CHILDREN?trim?number + NUMBER_OF_INFANTS?trim?number>
<#-- EXIST_IN_GLOBAL_YN --><#if GLOBAL_BOOKING_ID == BOOKING_ID && GLOBAL_LOCAL_BOOKING_ID == LOCAL_BOOKING_ID><#global EXIST_IN_GLOBAL_YN = 'YES'><#else><#global EXIST_IN_GLOBAL_YN = 'NO'></#if>



<#-- //////////////////////// CAMPAIGN_FRAMEWORK_1_COL SQL TABLE ///////////////////////////////////-->
<#data CAMPAIGN_FRAMEWORK_1_COL as MODULE limit=1>
<#filter FRAMEWORK_CAMPAIGN = CAMPAIGN FRAMEWORK_MARKET = MARKET><#fields CAR_NUMBEROF_CARS HOTEL_NUMBEROF_HOTELS HOTEL_NUMBEROFSTARS>

<#-- NUMBEROFCARS --><#if MODULE.CAR_NUMBEROF_CARS?isnull><#global NUMBEROFCARS = 4><#else><#global NUMBEROFCARS = MODULE.CAR_NUMBEROF_CARS?trim?number></#if>

<#-- NUMBEROFHOTELS --><#if MODULE.HOTEL_NUMBEROF_HOTELS?isnull><#global NUMBEROFHOTELS = 4><#else><#global NUMBEROFHOTELS = MODULE.HOTEL_NUMBEROF_HOTELS></#if>

<#-- NUMBEROFSTARS --><#if MODULE.HOTEL_NUMBEROFSTARS?isnull><#global NUMBEROFSTARS = 3><#else><#global NUMBEROFSTARS = MODULE.HOTEL_NUMBEROFSTARS></#if>



</#data>

<#-- //////////////////////// AIRPORTS SUP TABLE (1) ///////////////////////////////////////////////-->
<#data AIRPORTS as AIRPORTS limit=1>
<#filter AIRPORTCODE_IATA = DESTINATION_IATA LANGUAGECODE = AIRPORT_LANG?upper_case?trim><#fields CITY_DESTINATION_ID DISPLAYNAME CITY LONG_HAUL_HUB COUNTRYCODE AIRPORTCODE_IATA AIRPORTNAME FASTTRACK COUNTRY PRI_BOARD_ACTIVE_DATE SCHENGEN_YN DISPLAYNAME_UNIFORM>
<#-- DESTINATION_ID --><#if !AIRPORTS.CITY_DESTINATION_ID?isnull><#global DESTINATION_ID = AIRPORTS.CITY_DESTINATION_ID?c?trim><#else><#global DESTINATION_ID = 0000></#if>

<#-- DESTINATION_DISPLAY_NAME --><#if !AIRPORTS.DISPLAYNAME?isnull><#global DESTINATION_DISPLAY_NAME = AIRPORTS.DISPLAYNAME?trim><#else><#global DESTINATION_DISPLAY_NAME = ""></#if>

<#-- DESTINATION_AIRPORT_NAME --><#if !AIRPORTS.AIRPORTNAME?isnull><#global DESTINATION_AIRPORT_NAME = AIRPORTS.AIRPORTNAME?trim><#else><#global DESTINATION_AIRPORT_NAME = ""></#if>

<#-- DESTINATION_NAME 
JM if CITY and DISPLAYNAME are null use the DISPLAYNAME_UNIFORM
--><#if !AIRPORTS.CITY?isnull><#global DESTINATION_NAME = AIRPORTS.CITY?trim><#elseif !AIRPORTS.DISPLAYNAME?isnull><#global DESTINATION_NAME = AIRPORTS.DISPLAYNAME?trim><#else><#global DESTINATION_NAME = AIRPORTS.DISPLAYNAME_UNIFORM?trim></#if>

<#-- FAST_TRACK_AIRPORTS_RETURN --><#if !AIRPORTS.FASTTRACK?isnull><#global FAST_TRACK_AIRPORTS_RETURN = AIRPORTS.FASTTRACK?trim><#else><#global FAST_TRACK_AIRPORTS_RETURN = "N"></#if>

<#-- TO_DEST -->
<#if !AIRPORTS.CITY?isnull>
<#global TO_DEST = AIRPORTS.CITY><#else><#global TO_DEST = ""></#if>

<#-- HERO_IMG_IATA --><#if AIRPORTS.LONG_HAUL_HUB?isnull><#global HERO_IMG_IATA = "default"><#elseif AIRPORTS.LONG_HAUL_HUB?trim == "Y"><#global HERO_IMG_IATA = AIRPORTS.AIRPORTCODE_IATA?trim><#else><#global HERO_IMG_IATA = "default"></#if>

<#-- TRANSFER_YN --><#if AIRPORTS.LONG_HAUL_HUB?isnull><#global TRANSFER_YN = "N"><#elseif AIRPORTS.LONG_HAUL_HUB?trim == "Y"><#global TRANSFER_YN = "N"><#else><#global TRANSFER_YN = "Y"></#if>

<#-- DESTINATION_COUNTRY_CODE --><#if !AIRPORTS.COUNTRYCODE?isnull><#global DESTINATION_COUNTRY_CODE = AIRPORTS.COUNTRYCODE?upper_case?trim><#else><#global DESTINATION_COUNTRY_CODE = "EN"></#if>

<#-- DESTINATION_IT_FR_US --><#if AIRPORTS.COUNTRYCODE?isnull><#global DESTINATION_IT_FR_US = "N"><#elseif AIRPORTS.COUNTRYCODE?lower_case == "it" || AIRPORTS.COUNTRYCODE?lower_case == "fr" || AIRPORTS.COUNTRYCODE?lower_case == "us"><#global DESTINATION_IT_FR_US = "Y"><#else><#global DESTINATION_IT_FR_US = "N"></#if>


<#-- DESTINATION_COUNTRY -->
<#if AIRPORTS.COUNTRY?isnull><#global DESTINATION_COUNTRY = ""><#else><#global DESTINATION_COUNTRY = AIRPORTS.COUNTRY></#if>

<#-- COUNTRY_CODE -->
<#if AIRPORTS.COUNTRYCODE?isnull><#global COUNTRY_CODE = ""><#else><#global COUNTRY_CODE = AIRPORTS.COUNTRYCODE></#if>

<#-- DESTINATION_US_SA_ASIA -->
<#if AIRPORTS.COUNTRYCODE == "AR" || AIRPORTS.COUNTRYCODE == "US" || AIRPORTS.COUNTRYCODE == "TH" || AIRPORTS.COUNTRYCODE == "SG"><#global DESTINATION_US_SA_ASIA = "Y"><#else><#global DESTINATION_US_SA_ASIA = "N"></#if>

<#-- DESTINATION_AMERICA_OR_ASIA -->
<#if AIRPORTS.COUNTRYCODE == "AR" || AIRPORTS.COUNTRYCODE == "US" || AIRPORTS.COUNTRYCODE == "TH" || AIRPORTS.COUNTRYCODE == "SG" || AIRPORTS.COUNTRYCODE == "CA"><#global DESTINATION_AMERICA_OR_ASIA = "Y"><#else><#global DESTINATION_AMERICA_OR_ASIA = "N"></#if>

<#-- DESTINATION_EUROPE -->
<#if AIRPORTS.COUNTRYCODE == "AR" || AIRPORTS.COUNTRYCODE == "US" || AIRPORTS.COUNTRYCODE == "TH" || AIRPORTS.COUNTRYCODE == "SG"><#global DESTINATION_EUROPE = "N"><#else><#global DESTINATION_EUROPE = "Y"></#if>

<#-- DESTINATION_US -->
<#if AIRPORTS.COUNTRYCODE == "US"><#global DESTINATION_US = "Y"><#else><#global DESTINATION_US = "N"></#if>

<#-- DESTINATION_SCHENGEN --><#if AIRPORTS.SCHENGEN_YN?isnull><#global DESTINATION_SCHENGEN = "N"><#elseif AIRPORTS.SCHENGEN_YN == "Y"><#global DESTINATION_SCHENGEN = "Y"><#else><#global DESTINATION_SCHENGEN = "N"></#if>

<#-- PRIORITY_BOARDING_AVAILABLE_RETURN_DATE <#global PRIORITY_BOARDING_AVAILABLE_DATE = AIRPORTS.PRI_BOARD_ACTIVE_DATE?date?string("yyyy-MM-dd")>-->

<#-- PRIORITY_BOARDING_AVAILABLE_RETURN <#if AIRPORTS.PRI_BOARD_ACTIVE_DATE?isnull><#global PRIORITY_BOARDING_AVAILABLE_RETURN = "N"><#elseif DEPARTURE_DATE_FULL gt AIRPORTS.PRI_BOARD_ACTIVE_DATE?datetime><#global PRIORITY_BOARDING_AVAILABLE_RETURN = "Y"><#else><#global PRIORITY_BOARDING_AVAILABLE_RETURN = "N"></#if>-->

</#data>



<#-- //////////////////////// AIRPORTS SUP TABLE (2) ///////////////////////////////////////////////-->
<#data AIRPORTS as AIRPORTS_DEP limit=1>
<#filter AIRPORTCODE_IATA = DEPARTURE_IATA LANGUAGECODE = AIRPORT_LANG?exec?trim><#fields CITY DISPLAYNAME AIRPORTCODE_IATA AIRPORTNAME FASTTRACK PRI_BOARD_ACTIVE_DATE SCHENGEN_YN DISPLAYNAME_UNIFORM>
<#-- FROM_IATA --><#global FROM_IATA = AIRPORTS_DEP.AIRPORTCODE_IATA>
<#-- Special rule for some IATAs --><#include "cms://contentlibrary/!framework/global_variables/inclusion_files/citynames_dialogues.htm">
<#-- FROM_DEP if CITY and DISPLAYNAME are null use the DISPLAYNAME_UNIFORM JM--><#if !AIRPORTS_DEP.CITY?isnull><#global FROM_DEP = AIRPORTS_DEP.CITY><#elseif !AIRPORTS_DEP.DISPLAYNAME?isnull><#global FROM_DEP = AIRPORTS_DEP.DISPLAYNAME?trim><#else><#global FROM_DEP = AIRPORTS_DEP.DISPLAYNAME_UNIFORM?trim></#if>

<#-- DEPARTURE_DISPLAY_NAME --><#if !AIRPORTS_DEP.DISPLAYNAME?isnull><#global DEPARTURE_DISPLAY_NAME = AIRPORTS_DEP.DISPLAYNAME?trim></#if>

<#-- DEPARTURE_AIRPORT_NAME --><#if !AIRPORTS_DEP.AIRPORTNAME?isnull><#global DEPARTURE_AIRPORT_NAME = AIRPORTS_DEP.DISPLAYNAME?trim></#if>

<#-- FAST_TRACK_AIRPORTS --><#if !AIRPORTS_DEP.FASTTRACK?isnull><#global FAST_TRACK_AIRPORTS = AIRPORTS_DEP.FASTTRACK?trim><#else><#global FAST_TRACK_AIRPORTS = "N"></#if>

<#-- DEPARTURE_SCHENGEN --><#if AIRPORTS_DEP.SCHENGEN_YN?isnull><#global DEPARTURE_SCHENGEN = "N"><#elseif AIRPORTS_DEP.SCHENGEN_YN == "Y"><#global DEPARTURE_SCHENGEN = "Y"><#else><#global DEPARTURE_SCHENGEN = "N"></#if>

<#-- PRIORITY_BOARDING_AVAILABLE_DATE --><#if !AIRPORTS_DEP.PRI_BOARD_ACTIVE_DATE?isnull><#global PRIORITY_BOARDING_AVAILABLE_DATE = AIRPORTS_DEP.PRI_BOARD_ACTIVE_DATE?date?string("yyyy-MM-dd")></#if>

<#-- PRIORITY_BOARDING_AVAILABLE --><#if AIRPORTS_DEP.PRI_BOARD_ACTIVE_DATE?isnull><#global PRIORITY_BOARDING_AVAILABLE = "N"><#elseif .now gt AIRPORTS_DEP.PRI_BOARD_ACTIVE_DATE?datetime><#global PRIORITY_BOARDING_AVAILABLE = "Y"><#else><#global PRIORITY_BOARDING_AVAILABLE = "N"></#if>

</#data>

<#-- //////////////////////// OTHER VARIABLES /////////////////////////////////////////////////////-->

<#-- HOTEL_URL --><#if campaign.name == "DEBUG_E_SH_6DB">
    <#global HOTEL_URL><#include "cms://contentlibrary/!framework/emailcampaign/modules/hotels/debug_assignments_nas_api_2_log.txt"></#global>
    <#--<#elseif campaign.name == "E_SH_6DB">
    <#global HOTEL_URL><#include "cms://contentlibrary/!framework/emailcampaign/modules/hotels/debug_assignments_nas_api_2.txt"></#global>-->
<#else>
    <#global HOTEL_URL><#include "cms://contentlibrary/!framework/emailcampaign/modules/hotels/assignments_nas_api.txt"></#global>
</#if>
<#--HOTEL_URL: ${HOTEL_URL}-->

<#-- UNSUBSCRIBE_VAR (not used for E_ABANDONED_BASKET, E_ABANDONED_BASKET uses ${form('AbandonOptOut', 'EMAIL_ADDRESS_', 'CONTACT.RIID_')} for the same variable UNSUBSCRIBE_VAR below) -->

<#if MARKET == "NO"><#global UNSUBSCRIBE_VAR = "https://www.norwegian.no/start/subscription/unsubscribe?email=" + CONTACT.EMAIL + "&sign=" + CONTACT.EMAIL_MD5_HASH_ + CONTACT.EMAIL_SHA256_HASH_><#elseif MARKET == "ROW"><#global UNSUBSCRIBE_VAR = "https://www.norwegian.com/en/start/subscription/unsubscribe?email=" + CONTACT.EMAIL + "&sign=" + CONTACT.EMAIL_MD5_HASH_ + CONTACT.EMAIL_SHA256_HASH_><#else><#global UNSUBSCRIBE_VAR = "https://www.norwegian.com/${MARKET?lower_case}/start/subscription/unsubscribe?email=" + CONTACT.EMAIL + "&sign=" + CONTACT.EMAIL_MD5_HASH_ + CONTACT.EMAIL_SHA256_HASH_></#if>

<#if campaign.name == "E_ABANDONED_BASKET" || campaign.name == "NAS_API_HOTELS_E_SH_2DA_B">
<#global UNSUBSCRIBE_VAR = "${form('AbandonOptOut', 'LANGUAGEID', 'MARKET', 'EMAIL_ADDRESS_', 'CONTACT.RIID_','PERSONID')}">
</#if>

<#--DEEPLINK_PRIORITY_BOARDING--><#if HAVE_PRIORITY_BOARDING == "N"><#if MARKET == "NO"><#global DEEPLINK_PRIORITY_BOARDING = "https://www.norwegian.no/start/priorityboarding/sale?pnr=" +BOOKING_ID +"&pnrLocal=" + LOCAL_BOOKING_ID><#elseif MARKET == "ROW"><#global DEEPLINK_PRIORITY_BOARDING = "https://www.norwegian.com/en/start/priorityboarding/sale?pnr=" +BOOKING_ID +"&pnrLocal=" + LOCAL_BOOKING_ID><#else><#global DEEPLINK_PRIORITY_BOARDING = "https://www.norwegian.com/" + MARKET?lower_case + "/start/priorityboarding/sale?pnr=" +BOOKING_ID +"&pnrLocal=" + LOCAL_BOOKING_ID></#if><#else><#global DEEPLINK_PRIORITY_BOARDING = MY_TRAVELS></#if>

<#-- FAST_TRACK_AIRPORTS <#join><#compress><#switch DEPARTURE_IATA?upper_case?trim>
<#case "OSL"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "ARN"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "CPH"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "AAB"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "BGO"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "TRD"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "SVG"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "GOT"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "BOO"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "HEL"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "AES"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "AAL"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#case "MMX"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#default><#global FAST_TRACK_AIRPORTS = "N" ></#switch></#compress></#join>-->

<#-- FAST_TRACK_AIRPORTS_RETURN <#join><#compress><#switch DESTINATION_IATA?upper_case?trim>
<#case "OSL"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "ARN"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "CPH"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "AAB"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "BGO"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "TRD"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "SVG"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "GOT"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "BOO"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "HEL"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "AES"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "AAL"><#global FAST_TRACK_AIRPORTS_RETURN = "Y" ><#break>
<#case "MMX"><#global FAST_TRACK_AIRPORTS = "Y" ><#break>
<#default><#global FAST_TRACK_AIRPORTS_RETURN = "N" ></#switch></#compress></#join>-->

<#-- LOUNGE_AIRPORTS -->
<#join><#compress><#switch DEPARTURE_IATA?upper_case?trim>
<#case "LGW"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "BKK"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "BCN"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "BOS"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "CPH"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "LAX"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "JFK"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "EWR"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "OAK"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "OSL"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "CDG"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "SEA"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#case "ARN"><#global LOUNGE_AIRPORTS = "Y"><#break>
<#default><#global LOUNGE_AIRPORTS = "N"></#switch></#compress></#join>

<#-- LOUNGE_AIRPORTS_RETURN -->
<#join><#compress><#switch DESTINATION_IATA?upper_case?trim>
<#case "LGW"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "BKK"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "BCN"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "BOS"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "CPH"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "LAX"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "JFK"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "EWR"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "OAK"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "OSL"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "CDG"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "SEA"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#case "ARN"><#global LOUNGE_AIRPORTS_RETURN = "Y"><#break>
<#default><#global LOUNGE_AIRPORTS_RETURN = "N"></#switch></#compress></#join>



<#-- WEBPAGE_MARKET --><#join><#compress><#switch CONTACT.LANGUAGEID?lower_case>
<#case "nb-no"><#global WEBPAGE_MARKET = "NO"><#break>
<#case "sv-se"><#global WEBPAGE_MARKET = "SE"><#break>
<#case "da-dk"><#global WEBPAGE_MARKET = "DK"><#break>
<#case "fi-fi"><#global WEBPAGE_MARKET = "FI"><#break>
<#case "de-de"><#global WEBPAGE_MARKET = "DE"><#break>
<#case "en-us"><#global WEBPAGE_MARKET = "US"><#break>
<#case "en-gb"><#global WEBPAGE_MARKET = "UK"><#break>
<#case "es-es"><#global WEBPAGE_MARKET = "ES"><#break>
<#case "fr-fr"><#global WEBPAGE_MARKET = "FR"><#break>
<#case "pl-pl"><#global WEBPAGE_MARKET = "PL"><#break>
<#case "it-it"><#global WEBPAGE_MARKET = "IT"><#break>
<#case "nl-nl"><#global WEBPAGE_MARKET = "NL"><#break>
<#case "en-ie"><#global WEBPAGE_MARKET = "IE"><#break>
<#case "en-ca"><#global WEBPAGE_MARKET = "EN-CA"><#break>
<#case "fr-ca"><#global WEBPAGE_MARKET = "FR-CA"><#break>
<#case "es-ar"><#global WEBPAGE_MARKET = "AR"><#break>
<#case "en-sg"><#global WEBPAGE_MARKET = "SG"><#break>
<#default><#global WEBPAGE_MARKET = "EN"></#switch></#compress></#join>

<#-- MARKET_DOMAIN -->
<#join><#compress><#switch MARKET>
<#case "NO"><#global MARKET_DOMAIN = ".no"><#break>
<#case "SE"><#global MARKET_DOMAIN = ".com/se"><#break>
<#case "DK"><#global MARKET_DOMAIN = ".com/dk"><#break>
<#case "FI"><#global MARKET_DOMAINT = ".com/fi"><#break>
<#case "DE"><#global MARKET_DOMAIN = ".com/de"><#break>
<#case "US"><#global MARKET_DOMAIN = ".com/us"><#break>
<#case "UK"><#global MARKET_DOMAIN = ".com/uk"><#break>
<#case "ES"><#global MARKET_DOMAIN = ".com/es"><#break>
<#case "FR"><#global MARKET_DOMAIN = ".com/fr"><#break>
<#case "PL"><#global MARKET_DOMAIN = ".com/pl"><#break>
<#case "IT"><#global MARKET_DOMAIN = ".com/it"><#break>
<#case "NL"><#global MARKET_DOMAIN = ".com/nl"><#break>
<#case "IE"><#global MARKET_DOMAIN = ".com/ie"><#break>
<#case "EN-CA"><#global MARKET_DOMAIN = ".com/en-ca"><#break>
<#case "FR-CA"><#global MARKET_DOMAIN = ".com/fr-ca"><#break>
<#case "AR"><#global MARKET_DOMAIN = ".com/ar"><#break>
<#case "SG"><#global MARKET_DOMAIN = ".com/sg"><#break>
<#default><#global MARKET_DOMAIN = ".com/en"></#switch></#compress></#join>

<#-- CURRENCY --><#switch MARKET>
<#case "UK"><#global CURRENCY = "GBP"><#break>
<#case "US"><#global CURRENCY = "USD"><#break>
<#case "NO"><#global CURRENCY = "NOK"><#break>
<#case "DK"><#global CURRENCY = "DKK"><#break>
<#case "SE"><#global CURRENCY = "SKK"><#break>
<#case "ES"><#global CURRENCY = "EUR"><#break>
<#case "FI"><#global CURRENCY = "EUR"><#break>
<#case "DE"><#global CURRENCY = "EUR"><#break>
<#case "IT"><#global CURRENCY = "EUR"><#break>
<#case "NL"><#global CURRENCY = "EUR"><#break>
<#case "EN"><#global CURRENCY = "EUR"><#break>
<#case "IE"><#global CURRENCY = "EUR"><#break>
<#case "ROW"><#global CURRENCY = "EUR"><#break>
<#case "SG"><#global CURRENCY = "EUR"><#break>
<#case "AR"><#global CURRENCY = "ARS"><#break>
<#case "EN-CA"><#global CURRENCY = "CAD"><#break>
<#case "FR-CA"><#global CURRENCY = "CAD"><#break>
<#case "PL"><#global CURRENCY = "SGD"><#break>
<#default><#global CURRENCY = "EUR"></#switch>

<#-- HOTEL_LOCALE --><#if MARKET == "NO"><#global HOTEL_LOCALE = "no_NO"><#elseif MARKET == "ROW"><#global HOTEL_LOCALE = "en_IE"><#else><#global HOTEL_LOCALE = CONTACT.LANGUAGEID?string[0..1]?lower_case?trim></#if>

<#-- WEBPAGE_URL_PATH <#join><#compress><#switch LANGUAGEID?lower_case>
    <#case "nb-no"><#global WEBPAGE_URL_PATH ="booking/fly/lavpris"><#break>
    <#case "sv-se"><#global WEBPAGE_URL_PATH ="bokning/flyg/lagpris"><#break>
    <#case "da-dk"><#global WEBPAGE_URL_PATH ="booking/fly/lavpris"><#break>
    <#case "fi-fi"><#global WEBPAGE_URL_PATH ="varaus/varaa-lento/valitse-lento"><#break>
    <#case "de-de"><#global WEBPAGE_URL_PATH ="buchung/flug/preiskalender"><#break>
    <#case "en-us"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#case "en-gb"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#case "en-ie"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#case "es-es"><#global WEBPAGE_URL_PATH ="reserva/reserve-su-vuelo/preciosbaratos"><#break>
    <#case "fr-fr"><#global WEBPAGE_URL_PATH ="reservation/reservez-votre-vol/promos"><#break>
    <#case "pl-pl"><#global WEBPAGE_URL_PATH ="rezerwacja/zarezerwuj-przelot/tanie-polaczenia"><#break>
    <#case "it-it"><#global WEBPAGE_URL_PATH ="prenotazione/volo/low-price-calendar"><#break>
    <#case "nl-nl"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#default><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"></#switch></#compress></#join>-->

<#-- WEBPAGE_URL_PATH (new) --><#global WEBPAGE_URL_PATH = "/start/booking/farecalendar">

<#-- NL_PREFFERED_AIRPORT --><#if !PREFFERED_AIRPORT?isnull><#global NL_PREFFERED_AIRPORT = PREFFERED_AIRPORT></#if>

<#-- DESTINATION_PAGE -->
<#if MARKET?isnull || MARKET?trim?upper_case == "NO"><#global DESTINATION_PAGE ="https://www.norwegian.no/destinations/" + DESTINATION_DISPLAY_NAME?exec><#elseif MARKET == "ROW"><#global DESTINATION_PAGE ="https://www.norwegian.com/en/destinations/" + DESTINATION_DISPLAY_NAME?exec><#else><#global DESTINATION_PAGE ="https://www.norwegian.com/" + MARKET?trim + "/destinations/" + DESTINATION_DISPLAY_NAME?exec></#if>


<#-- DUMMY_DATE --><#global DUMMY_DATE = .now>

<#-- NL_PREFFERED_AIRPORT --><#if !PREFFERED_AIRPORT?isnull><#global NL_PREFFERED_AIRPORT = PREFFERED_AIRPORT></#if>

<#-- CAR_URL--><#global CAR_URL = "https://cars.cartrawler.com/norwegian-new/" + CARTRAWLER_LANG_LID?trim + "/book?clientID=" + CAR_CLIENT_ID?trim + "&residencyId=" + AIRPORT_LANG?lower_case?trim + "&Currency=" + BOOKING_CURRENCY?trim + "&lang=" + CARTRAWLER_LANG_LID?trim + "&pickupIATACode=" + DESTINATION_IATA?trim + "&returnIATACode=" + DESTINATION_IATA?trim + "&pickupDateTime=" + DEPARTURE_YEAR?trim + "-" + DEPARTURE_MONTH?trim + "-" + DEPARTURE_DAY?trim + "T09:00&returnDateTime=" + RETURN_YEAR_CAR?trim + "-" + RETURN_MONTH_CAR?trim + "-" + RETURN_DAY_CAR?trim + "T09:00&oneway=" + ONEWAY_YN?trim>

<#-- AIRPORT_TRANSFER_URL--><#global AIRPORT_TRANSFER_URL = "https://cars.cartrawler.com/norwegian-new/" + CARTRAWLER_LANG_LID?trim + "/gt/?clientID=" + CAR_GT_CLIENT_ID?trim + "&Currency=" + BOOKING_CURRENCY?trim + "&pickupIATACode=" + DESTINATION_IATA + "&pickupDateTime=" + MAIN_LEG_ARRIVAL_DATE_HOTEL + "&returnDateTime=" + RETURN_DATE_HOTEL?trim + "&oneway=" + ONEWAY_YN?trim + "#/search#">
<#-- AIRPORT_TRANSFER_URL<#global AIRPORT_TRANSFER_URL = "https://cars.cartrawler.com/norwegian-new/" + CARTRAWLER_LANG_LID?trim + "/gt/?currency=" + BOOKING_CURRENCY?trim + "&clientID=" + CAR_GT_CLIENT_ID?trim + "#/search#">-->
<#-- LOWFARE_FOOTER --><#join><#compress><#switch MARKET>
<#case "NO"><#global LOWFARE_FOOTER ="https://www.norwegian.no/booking/fly/lavpriskalender/"><#break>
<#case "SE"><#global LOWFARE_FOOTER ="https://www.norwegian.com/se/bokning/flyg/lagpriskalender/"><#break>
<#case "DK"><#global LOWFARE_FOOTER ="https://www.norwegian.com/dk/booking/fly/lavpriskalender/"><#break>
<#case "FR"><#global LOWFARE_FOOTER ="https://www.norwegian.com/fr/reservation/reservez-votre-vol/calendrier-de-nos-tarifs-les-plus-bas/"><#break>
<#case "NL"><#global LOWFARE_FOOTER ="https://www.norwegian.com/nl/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "IT"><#global LOWFARE_FOOTER ="https://www.norwegian.com/it/prenotazione/volo/calendario-voli-low-cost/"><#break>
<#case "FI"><#global LOWFARE_FOOTER ="https://www.norwegian.com/fi/varaus/varaa-lento/tarjouslentojen-hintakalenteri/"><#break>
<#case "DE"><#global LOWFARE_FOOTER ="https://www.norwegian.com/de/buchung/flug/niedrigpreiskalender/"><#break>
<#case "US"><#global LOWFARE_FOOTER ="https://www.norwegian.com/us/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "IE"><#global LOWFARE_FOOTER ="https://www.norwegian.com/ie/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "SG"><#global LOWFARE_FOOTER ="https://www.norwegian.com/sg/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "UK"><#global LOWFARE_FOOTER ="https://www.norwegian.com/uk/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "ES"><#global LOWFARE_FOOTER ="https://www.norwegian.com/es/reserva/reserve-su-vuelo/calendario-de-tarifas-bajas/"><#break>
<#case "PL"><#global LOWFARE_FOOTER ="https://www.norwegian.com/pl/rezerwacja/zarezerwuj-przelot/kalendarz-taryf-promocyjnych/"><#break>
<#case "AR"><#global LOWFARE_FOOTER ="https://www.norwegian.com/ar/reserva/reserve-su-vuelo/calendario-de-tarifas-bajas/"><#break>
<#case "EN-CA"><#global LOWFARE_FOOTER ="https://www.norwegian.com/en-ca/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "FR-CA"><#global LOWFARE_FOOTER ="https://www.norwegian.com/fr-ca/reservation/reservez-votre-vol/calendrier-de-nos-tarifs-les-plus-bas/"><#break>
<#case "ROW"><#global LOWFARE_FOOTER ="https://www.norwegian.com/en/booking/flight-tickets/low-fare-calendar/"><#break>
<#default><#global LOWFARE_FOOTER ="https://www.norwegian.com/en/booking/flight-tickets/low-fare-calendar/">
</#switch></#compress></#join>


<#-- HOMEPAGE_FOOTER <#join><#compress><#switch MARKET>
<#case "NO"><#global HOMEPAGE_FOOTER ="https://www.norwegian.no"><#break>
<#case "SE"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/se"><#break>
<#case "DK"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/dk"><#break>
<#case "FR"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/fr"><#break>
<#case "NL"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/nl"><#break>
<#case "IT"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/it"><#break>
<#case "FI"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/fi"><#break>
<#case "DE"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/de"><#break>
<#case "US"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/us"><#break>
<#case "IE"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/ie"><#break>
<#case "SG"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/sg"><#break>
<#case "UK"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/uk"><#break>
<#case "ES"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/es"><#break>
<#case "PL"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/pl"><#break>
<#case "ROW"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/en"><#break>
<#default><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/en">
</#switch></#compress></#join>-->

<#-- HOMEPAGE_FOOTER (new) --><#if MARKET == "NO"><#global HOMEPAGE_FOOTER ="https://www.norwegian.no"><#elseif MARKET == "ROW"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/en"><#else><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/" + MARKET?lower_case></#if>

<#-- CONTACT_FOOTER --><#join><#compress><#switch MARKET>
<#case "NO"><#global CONTACT_FOOTER ="https://www.norwegian.no/hjelp-og-kontakt/"><#break>
<#case "SE"><#global CONTACT_FOOTER ="https://www.norwegian.com/se/hjalp-och-kontakt/"><#break>
<#case "DK"><#global CONTACT_FOOTER ="https://www.norwegian.com/dk/hjaelp-og-kontakt/"><#break>
<#case "FR"><#global CONTACT_FOOTER ="https://www.norwegian.com/fr/aide-et-contact/"><#break>
<#case "NL"><#global CONTACT_FOOTER ="https://www.norwegian.com/nl/help-contact/"><#break>
<#case "IT"><#global CONTACT_FOOTER ="https://www.norwegian.com/it/assistenza-e-contatti/"><#break>
<#case "FI"><#global CONTACT_FOOTER ="https://www.norwegian.com/fi/ohjeet-ja-yhteystiedot/"><#break>
<#case "DE"><#global CONTACT_FOOTER ="https://www.norwegian.com/de/kontakt/"><#break>
<#case "US"><#global CONTACT_FOOTER ="https://www.norwegian.com/us/help-contact/"><#break>
<#case "IE"><#global CONTACT_FOOTER ="https://www.norwegian.com/ie/help-contact/"><#break>
<#case "SG"><#global CONTACT_FOOTER ="https://www.norwegian.com/sg/help-contact/"><#break>
<#case "UK"><#global CONTACT_FOOTER ="https://www.norwegian.com/uk/help-contact/"><#break>
<#case "ES"><#global CONTACT_FOOTER ="https://www.norwegian.com/es/ayuda-y-contacto/"><#break>
<#case "PL"><#global CONTACT_FOOTER ="https://www.norwegian.com/pl/pomoc-i-kontakt/"><#break>
<#case "AR"><#global CONTACT_FOOTER ="https://www.norwegian.com/ar/ayuda-y-contacto/"><#break>
<#case "EN-CA"><#global CONTACT_FOOTER ="https://www.norwegian.com/en-ca/help-contact/"><#break>
<#case "FR-CA"><#global CONTACT_FOOTER ="https://www.norwegian.com/fr-ca/aide-et-contact/"><#break>
<#case "ROW"><#global CONTACT_FOOTER ="https://www.norwegian.com/en/help-contact/"><#break>
<#default><#global CONTACT_FOOTER ="https://www.norwegian.com/en/help-contact/">
</#switch></#compress></#join>

<#-- RESTRICTIONS_FOOTER --><#join><#compress><#switch MARKET>
<#case "US"><#global RESTRICTIONS_FOOTER ="https://www.norwegian.com/us/customer-services/travel-information/lowfare-conditions/"><#break>
<#case "UK"><#global RESTRICTIONS_FOOTER ="https://www.norwegian.com/uk/customer-services/travel-information/lowfare-conditions/"><#break>
</#switch></#compress></#join>

<#-- BAGGAGE_FEES_FOOTER --><#join><#compress><#switch MARKET>
<#case "US"><#global BAGGAGE_FEES_FOOTER ="https://www.norwegian.com/us/customer-services/travel-information/optional-services-and-charges/"><#break>
<#case "UK"><#global BAGGAGE_FEES_FOOTER ="https://www.norwegian.com/uk/customer-services/travel-information/optional-services-and-charges"><#break>
</#switch></#compress></#join>

<#-- PERSONAL_INFORMATION --><#join><#compress><#switch MARKET>
<#case "NO"><#global PERSONAL_INFORMATION ="https://www.norwegian.no/booking/bestillingsinformasjon/regler-og-vilkar/personvern/"><#break>
<#case "SE"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/se/bokning/praktisk-bokningsinformation/regler-och-villkor/sekretesspolicy/"><#break>
<#case "DK"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/dk/booking/bookingoplysninger/juridisk/politik-om-beskyttelse-af-personlige-oplysninger/"><#break>
<#case "FR"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/fr/reservation/informations-utiles-pour-les-reservations/dispositions-legales/politique-de-confidentialite/"><#break>
<#case "NL"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/nl/booking/booking-information/legal/privacy-policy/"><#break>
<#case "IT"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/it/prenotazione/informazioni-utili/aspetti-legali/tutela-della-privacy/"><#break>
<#case "FI"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/fi/varaus/hyodyllista-tietoa-varauksista/oikeudelliset-tiedot/tietosuojakaytanto/"><#break>
<#case "DE"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/de/buchung/buchungsinformationen/rechtliches/datenschutzrichtlinien/"><#break>
<#case "US"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/us/booking/booking-information/legal/privacy-policy/"><#break>
<#case "IE"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/ie/booking/booking-information/legal/privacy-policy/"><#break>
<#case "SG"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/sg/booking/booking-information/legal/privacy-policy/"><#break>
<#case "UK"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/uk/booking/booking-information/legal/privacy-policy/"><#break>
<#case "ES"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/es/reserva/informacion-util-sobre-reservas/aspectos-juridicos/politica-de-privacidad/"><#break>
<#case "PL"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/pl/rezerwacja/przydatne-informacje-dotyczace-rezerwacji/kwestie-prawne/polityka-prywatnosci/"><#break>
<#case "AR"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/ar/reserva/informacion-util-sobre-reservas/aspectos-juridicos/politica-de-privacidad/"><#break>
<#case "EN-CA"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/en-ca/booking/booking-information/legal/privacy-policy/"><#break>
<#case "FR-CA"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/fr-ca/reservation/informations-utiles-pour-les-reservations/dispositions-legales/politique-de-confidentialite/"><#break>
<#case "ROW"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/en/booking/booking-information/legal/privacy-policy/"><#break>
<#default><#global PERSONAL_INFORMATION ="https://www.norwegian.com/en/booking/booking-information/legal/privacy-policy/">
</#switch></#compress></#join>

<#-- MY_PROFILE_URL -->

<#if MARKET == "NO"><#global MY_PROFILE_URL = "https://www.norwegian.no/start/mytravels ">
<#elseif MARKET == "ROW"><#global MY_PROFILE_URL = "https://www.norwegian.com/en/start/mytravels">
<#else><#global MY_PROFILE_URL = "https://www.norwegian.com/" + MARKET?lower_case + "/start/mytravels"></#if>

<#-- REWARD_01 --><#if REWARD_MEMBER == "N"><#global REWARD_01 = "0"><#elseif REWARD_MEMBER == "Y"><#global REWARD_01 = "1"><#else><#global REWARD_01 = "0"></#if>

<#-- CREATE_PROFILE_URL -->
<#if MARKET == "NO"><#global CREATE_PROFILE_URL = "https://www.norwegian.no/ipr/MyNorwegian#/profile/create">
<#elseif MARKET == "ROW"><#global CREATE_PROFILE_URL = "https://www.norwegian.com/en/ipr/MyNorwegian#/profile/create">
<#else><#global CREATE_PROFILE_URL = "https://www.norwegian.com/" + MARKET?lower_case + "/ipr/MyNorwegian#/profile/create"></#if>

<#-- NL_UNSUBSCRIBE --><#global NL_UNSUBSCRIBE =form('CampaignOptOut', 'EMAIL_ADDRESS_', 'CONTACT.PERSONID')>

<#-- WEBVERSION_URL --><#global WEBVERSION_URL =form(CAMPAIGN, "LANGUAGEID", "SEGMENT", "MARKET", "DESTINATION_IATA", "FIRSTNAME", "SURNAME", "EMAIL_ADDRESS_", "REWARD_YN","NL_PROFILE_ID","NL_UNSUB_ID","REWARD_NUMBER","CASHPOINTS","PREFFERED_AIRPORT", "CONTACT.EMAIL_MD5_HASH_", "CONTACT.EMAIL_SHA256_HASH_")>

<#-- FACEBOOK_URL --><#join><#compress><#switch MARKET>
<#case "NO"><#global FACEBOOK_URL ="https://www.facebook.com/flynorwegian"><#break>
<#case "SE"><#global FACEBOOK_URL ="https://www.facebook.com/NorwegianSverige"><#break>
<#case "DK"><#global FACEBOOK_URL ="https://www.facebook.com/NorwegianDanmark"><#break>
<#default><#global FACEBOOK_URL ="https://www.facebook.com/flynorwegian">
</#switch></#compress></#join>

<#-- MARKET_EXTERNAL_LINK <#join><#compress><#switch LANGUAGEID?trim>
<#case "nb-no"><#global MARKET_EXTERNAL_LINK ="NO"><#break>
<#case "sv-se"><#global MARKET_EXTERNAL_LINK ="SE"><#break>
<#case "da-dk"><#global MARKET_EXTERNAL_LINK ="DK"><#break>
<#case "fr-fr"><#global MARKET_EXTERNAL_LINK ="FR"><#break>
<#case "nl-nl"><#global MARKET_EXTERNAL_LINK ="NL"><#break>
<#case "it-it"><#global MARKET_EXTERNAL_LINK ="IT"><#break>
<#case "fi-fi"><#global MARKET_EXTERNAL_LINK ="FI"><#break>
<#case "de-de"><#global MARKET_EXTERNAL_LINK ="DE"><#break>
<#case "en-us"><#global MARKET_EXTERNAL_LINK ="US"><#break>
<#case "en-ie"><#global MARKET_EXTERNAL_LINK ="IE"><#break>
<#case "en-sg"><#global MARKET_EXTERNAL_LINK ="SG"><#break>
<#case "en-gb"><#global MARKET_EXTERNAL_LINK ="UK"><#break>
<#case "es-es"><#global MARKET_EXTERNAL_LINK ="ES"><#break>
<#case "pl-pl"><#global MARKET_EXTERNAL_LINK ="PL"><#break>
<#default><#global MARKET_EXTERNAL_LINK ="ROW">
</#switch></#compress></#join>-->

<#-- MARKET_EXTERNAL_LINK --><#global MARKET_EXTERNAL_LINK = MARKET>

<#-- DEST_TRANSLATION_TEXT -->
<#join><#compress><#switch MARKET>
    <#case "PL"><#global DEST_TRANSLATION_TEXT = "/kierunki-podrozy/"><#break>
    <#case "SE"><#global DEST_TRANSLATION_TEXT = "/destinationer/"><#break>
    <#case "FI"><#global DEST_TRANSLATION_TEXT = "/kohteet/"><#break>
    <#case "DK"><#global DEST_TRANSLATION_TEXT = "/destinationer/"><#break>
    <#case "ES"><#global DEST_TRANSLATION_TEXT = "/destinos/"><#break>
    <#case "IT"><#global DEST_TRANSLATION_TEXT = "/destinazioni/"><#break>
    <#case "DE"><#global DEST_TRANSLATION_TEXT = "/reiseziele/"><#break>
    <#case "AR"><#global DEST_TRANSLATION_TEXT = "/destinos/"><#break>
     <#case "NO"><#global DEST_TRANSLATION_TEXT = "/destinasjoner"><#break>
     <#case "SG"><#global DEST_TRANSLATION_TEXT = "/destinos/"><#break>
    <#default><#global DEST_TRANSLATION_TEXT = "/destinations/">
</#switch></#compress></#join>

<#-- PREMIUM_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global PREMIUM_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/a-bordo/cabina-de-clase-premium/"><#break>
<#case "DE"><#global PREMIUM_INFO = "https://www.norwegian.com/de/buchung/buchungsinformationen/tarifbedingungen/internationale-langstrecke-premium/"><#break>
<#case "DK"><#global PREMIUM_INFO = "https://www.norwegian.com/dk/rejseinformation/i-flyet/premium-kabine/"><#break>
<#case "EN-CA"><#global PREMIUM_INFO = "https://www.norwegian.com/en-ca/travel-info/on-board/premium-cabin/"><#break>
<#case "ES"><#global PREMIUM_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/a-bordo/cabina-de-clase-premium/"><#break>
<#case "FI"><#global PREMIUM_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/koneessa/premium-matkustamo/"><#break>
<#case "FR"><#global PREMIUM_INFO = "https://www.norwegian.com/fr/infos-voyageurs/a-bord/cabine-premium/"><#break>
<#case "FR-CA"><#global PREMIUM_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/a-bord/cabine-premium/"><#break>
<#case "IE"><#global PREMIUM_INFO = "https://www.norwegian.com/ie/travel-info/on-board/premium-cabin/"><#break>
<#case "IT"><#global PREMIUM_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/a-bordo/cabina-premium/"><#break>
<#case "NL"><#global PREMIUM_INFO = "https://www.norwegian.com/nl/travel-info/on-board/premium-cabin/"><#break>
<#case "NO"><#global PREMIUM_INFO = "https://www.norwegian.no/reiseinformasjon/om-bord/premium-kabin/"><#break>
<#case "PL"><#global PREMIUM_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/na-pokladzie/klasa-premium/"><#break>
<#case "ROW"><#global PREMIUM_INFO = "https://www.norwegian.com/en/travel-info/on-board/premium-cabin/"><#break>
<#case "SE"><#global PREMIUM_INFO = "https://www.norwegian.com/se/reseinformation/ombord/premiumkabin/"><#break>
<#case "SG"><#global PREMIUM_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/a-bordo/cabina-de-clase-premium/"><#break>
<#case "UK"><#global PREMIUM_INFO = "https://www.norwegian.com/uk/travel-info/on-board/premium-cabin/"><#break>
<#case "US"><#global PREMIUM_INFO = "https://www.norwegian.com/us/travel-info/on-board/premium-cabin/"><#break>
<#default><#global PREMIUM_INFO = "https://www.norwegian.com/en/travel-info/on-board/premium-cabin/">
    </#switch></#compress></#join>

<#-- FLEX_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/ar/reservar/informacion-util-sobre-reservas/normas-sobre-las-tarifas/vuelos-internacionales-de-larga-distancia---flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/ar/reservar/informacion-util-sobre-reservas/normas-sobre-las-tarifas/vuelos-internacionales-de-larga-distancia---premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/ar/reservar/informacion-util-sobre-reservas/normas-sobre-las-tarifas/todos-los-vuelos-excepto-los-de-larga-distancia---flex/"></#if><#break>
<#case "DE"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/de/buchung/buchungsinformationen/tarifbedingungen/internationale-langstrecke-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/de/buchung/buchungsinformationen/tarifbedingungen/internationale-langstrecke-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/de/buchung/buchungsinformationen/tarifbedingungen/alle-fluge-ausgenommen-langstrecke-flex/"></#if><#break>
<#case "DK"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/dk/booking/bookingoplysninger/takstregler/internationale-langdistanceflyvninger-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/dk/booking/bookingoplysninger/takstregler/internationale-langdistanceflyvninger-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/dk/booking/bookingoplysninger/takstregler/alle-flyrejser-undtagen-langdistance-flex/"></#if><#break>
<#case "EN-CA"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/en-ca/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/en-ca/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/en-ca/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#case "ES"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/es/reserva/informacion-util-sobre-reservas/normas-sobre-las-tarifas/vuelos-internacionales-de-larga-distancia-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/es/reserva/informacion-util-sobre-reservas/normas-sobre-las-tarifas/vuelos-internacionales-de-larga-distancia-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/es/reserva/informacion-util-sobre-reservas/normas-sobre-las-tarifas/todos-los-vuelos-excepto-los-de-larga-distancia--flex/"></#if><#break>
<#case "FI"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/fi/varaus/hyodyllista-tietoa-varauksista/hintasaannot/kansainvaliset-kaukolennot-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/fi/varaus/hyodyllista-tietoa-varauksista/hintasaannot/kansainvaliset-kaukolennot-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/fi/varaus/hyodyllista-tietoa-varauksista/hintasaannot/kaikki-lennot-lukuun-ottamatta-kaukolentoja-flex/"></#if><#break>
<#case "FR"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/fr/reservation/informations-utiles-pour-les-reservations/regles-tarifaires/vols-long-courriers-internationaux-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/fr/reservation/informations-utiles-pour-les-reservations/regles-tarifaires/vols-long-courriers-internationaux-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/fr/reservation/informations-utiles-pour-les-reservations/regles-tarifaires/tous-les-vols-sauf-les-long-courriers-flex/"></#if><#break>
<#case "FR-CA"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/fr-ca/reservation/informations-utiles-pour-les-reservations/regles-tarifaires/vols-long-courriers-internationaux--flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/fr-ca/reservation/informations-utiles-pour-les-reservations/regles-tarifaires/vols-long-courriers-internationaux--premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/fr-ca/reservation/informations-utiles-pour-les-reservations/regles-tarifaires/tous-les-vols-sauf-les-long-courriers--flex/"></#if><#break>
<#case "IE"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/ie/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/ie/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/ie/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#case "IT"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/en/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "http://www.norwegian.com/en/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "http://www.norwegian.com/en/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#case "NL"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/nl/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "http://www.norwegian.com/nl/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/nl/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#case "NO"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.no/booking/bestillingsinformasjon/regler-og-vilkar-for-vare-billettyper/internasjonale-langdistanseruter-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/uk/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.no/booking/bestillingsinformasjon/regler-og-vilkar-for-vare-billettyper/alle-flyvninger-unntatt-langdistanseruter-flex/"></#if><#break>
<#case "US"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/us/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/us/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/us/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#case "PL"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/pl/rezerwacja/przydatne-informacje-dotyczace-rezerwacji/warunki-taryf/miedzynarodowe-loty-na-dlugich-dystansach--taryfa-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/pl/rezerwacja/przydatne-informacje-dotyczace-rezerwacji/nasze-taryfy/"><#else><#global FLEX_INFO = "https://www.norwegian.com/pl/rezerwacja/przydatne-informacje-dotyczace-rezerwacji/warunki-taryf/wszystkie-loty-z-wyjatkiem-dlugodystansowych-taryfa-flex/"></#if><#break>
<#case "ROW"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/en/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/en/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/en/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#case "SE"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/se/bokning/praktisk-bokningsinformation/biljettregler/internationella-langdistansflyg-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/se/bokning/praktisk-bokningsinformation/biljettregler/internationella-langdistansflyg-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/se/bokning/praktisk-bokningsinformation/biljettregler/alla-flyg-exkl-langdistansflyg-flex/"></#if><#break>
<#case "SG"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/sg/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/se/bokning/praktisk-bokningsinformation/biljettregler/internationella-langdistansflyg-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/sg/booking/booking-information/fare-rules/international-long-haul-premiumflex/"></#if><#break>
<#case "UK"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/uk/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/uk/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/uk/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#case "US"><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/us/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/us/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/us/booking/booking-information/fare-rules/all-flights-flex/"></#if><#break>
<#default><#if ROUTE_AREA == 'long haul' && PREMIUM_YES == "N"><#global FLEX_INFO = "https://www.norwegian.com/en/booking/booking-information/fare-rules/international-long-haul-flex/"><#elseif ROUTE_AREA == 'long haul' && PREMIUM_YES == "Y"><#global FLEX_INFO = "https://www.norwegian.com/en/booking/booking-information/fare-rules/international-long-haul-premiumflex/"><#else><#global FLEX_INFO = "https://www.norwegian.com/en/booking/booking-information/fare-rules/all-flights-flex/"></#if>">
    </#switch></#compress></#join>

<#-- ENTERTAINMENT_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/a-bordo/cabina-de-clase-premium/"><#break>
<#case "DE"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/de/reiseinfo/an-bord/unterhaltungsprogramm-an-bord/"><#break>
<#case "DK"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/dk/rejseinformation/i-flyet/premium-kabine/"><#break>
<#case "EN-CA"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/en-ca/travel-info/on-board/in-flight-entertainment/"><#break>
<#case "ES"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/a-bordo/cabina-de-clase-premium/"><#break>
<#case "FI"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/koneessa/viihdetarjonta-lennoillamme/"><#break>
<#case "FR"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/fr/infos-voyageurs/a-bord/loisirs-en-vol/"><#break>
<#case "FR-CA"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/a-bord/loisirs-en-vol/"><#break>
<#case "IE"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/it/travel-info/on-board/in-flight-entertainment/"><#break>
<#case "IT"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/a-bordo/intrattenimento-a-bordo/"><#break>
<#case "NL"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/nl/travel-info/on-board/in-flight-entertainment/"><#break>
<#case "NO"><#global ENTERTAINMENT_INFO = "https://www.norwegian.no/reiseinformasjon/om-bord/underholdning-om-bord/"><#break>
<#case "PL"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/na-pokladzie/rozrywka-pokladowa/"><#break>
<#case "ROW"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/en/travel-info/on-board/in-flight-entertainment/"><#break>
<#case "SE"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/se/reseinformation/ombord/underhallning-under-flygresan/"><#break>
<#case "SG"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/a-bordo/cabina-de-clase-premium/"><#break>
<#case "UK"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/uk/travel-info/on-board/in-flight-entertainment/"><#break>
<#case "US"><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/us/travel-info/on-board/in-flight-entertainment/"><#break>
<#default><#global ENTERTAINMENT_INFO = "https://www.norwegian.com/en/travel-info/on-board/in-flight-entertainment/">
    </#switch></#compress></#join>

<#-- TICKET_TYPES --><#join><#compress><#switch MARKET>
<#case "AR"><#global TICKET_TYPES = "https://www.norwegian.com/ar/reservar/informacion-util-sobre-reservas/nuestros-tipos-de-pasajes/"><#break>
<#case "DE"><#global TICKET_TYPES = "https://www.norwegian.com/de/buchung/buchungsinformationen/unsere-tickettypen/"><#break>
<#case "DK"><#global TICKET_TYPES = "https://www.norwegian.com/dk/booking/bookingoplysninger/vores-billettyper/"><#break>
<#case "EN-CA"><#global TICKET_TYPES = "https://www.norwegian.com/en-ca/booking/booking-information/our-ticket-types/"><#break>
<#case "ES"><#global TICKET_TYPES = "https://www.norwegian.com/es/reserva/informacion-util-sobre-reservas/nuestros-tipos-de-billetes/"><#break>
<#case "FI"><#global TICKET_TYPES = "https://www.norwegian.com/fi/varaus/hyodyllista-tietoa-varauksista/lipputyyppimme/"><#break>
<#case "FR"><#global TICKET_TYPES = "https://www.norwegian.com/fr/reservation/informations-utiles-pour-les-reservations/nos-types-de-billets/"><#break>
<#case "FR-CA"><#global TICKET_TYPES = "https://www.norwegian.com/fr-ca/reservation/informations-utiles-pour-les-reservations/nos-types-de-billet/"><#break>
<#case "IE"><#global TICKET_TYPES = "https://www.norwegian.com/ie/booking/booking-information/ticket-types/"><#break>
<#case "IT"><#global TICKET_TYPES = "https://www.norwegian.com/it/prenotazione/informazioni-utili/tipi-di-biglietto/"><#break>
<#case "NL"><#global TICKET_TYPES = "https://www.norwegian.com/nl/prenotazione/informazioni-utili/tipi-di-biglietto/"><#break>
<#case "NO"><#global TICKET_TYPES = "https://www.norwegian.no/booking/bestillingsinformasjon/billettyper/"><#break>
<#case "PL"><#global TICKET_TYPES = "https://www.norwegian.com/pl/rezerwacja/przydatne-informacje-dotyczace-rezerwacji/nasze-taryfy/"><#break>
<#case "ROW"><#global TICKET_TYPES = "https://www.norwegian.com/en/booking/booking-information/ticket-types/"><#break>
<#case "SE"><#global TICKET_TYPES = "https://www.norwegian.com/se/bokning/praktisk-bokningsinformation/vara-biljettyper/"><#break>
<#case "SG"><#global TICKET_TYPES = "https://www.norwegian.com/sg/booking/booking-information/ticket-types/"><#break>
<#case "UK"><#global TICKET_TYPES = "https://www.norwegian.com/uk/booking/booking-information/ticket-types/"><#break>
<#case "US"><#global TICKET_TYPES = "https://www.norwegian.com/uS/booking/booking-information/ticket-types/"><#break>
<#default><#global TICKET_TYPES = "https://www.norwegian.com/en/booking/booking-information/ticket-types/">
    </#switch></#compress></#join>

<#-- ENTERTAINMENT_MENU --><#join><#compress><#switch MARKET>
<#case "AR"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "DE"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "DK"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "EN-CA"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "ES"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "FI"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "FR"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "FR-CA"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "IE"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "IT"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "NL"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "NO"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "PL"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "ROW"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "SE"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "SG"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "UK"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#case "US"><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#"><#break>
<#default><#global ENTERTAINMENT_MENU = "https://entertainment.norwegian.com/#/onboard#">
    </#switch></#compress></#join>

<#-- MEAL_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global MEAL_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/a-bordo/alimentos-y-bebidas/vuelos-internacionales-de-larga-distancia/"><#break>
<#case "DE"><#global MEAL_INFO = "https://www.norwegian.com/de/reiseinfo/an-bord/essen-und-trinken/"><#break>
<#case "DK"><#global MEAL_INFO = "https://www.norwegian.com/dk/rejseinformation/i-flyet/mad-og-drikke/langdistanceruter/"><#break>
<#case "EN-CA"><#global MEAL_INFO = "https://www.norwegian.com/en-ca/travel-info/on-board/food-and-drinks/international-long-haul-flights/"><#break>
<#case "ES"><#global MEAL_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/a-bordo/alimentos-y-bebidas/vuelos-internacionales-de-larga-distancia/"><#break>
<#case "FI"><#global MEAL_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/koneessa/ruoka-ja-juomat/"><#break>
<#case "FR"><#global MEAL_INFO = "https://www.norwegian.com/fr/infos-voyageurs/a-bord/nourriture-et-boissons/"><#break>
<#case "FR-CA"><#global MEAL_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/a-bord/nourriture-et-boissons/"><#break>
<#case "IE"><#global MEAL_INFO = "https://www.norwegian.com/ie/travel-info/on-board/food-and-drinks/international-long-haul-flights/"><#break>
<#case "IT"><#global MEAL_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/a-bordo/pasti-e-bevande/"><#break>
<#case "NL"><#global MEAL_INFO = "https://www.norwegian.com/nl/travel-info/on-board/food-and-drinks/international-long-haul-flights/"><#break>
<#case "NO"><#global MEAL_INFO = "https://www.norwegian.no/reiseinformasjon/om-bord/mat-og-drikke/internasjonale-langdistanseruter/"><#break>
<#case "PL"><#global MEAL_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/na-pokladzie/jedzenie-i-napoje/"><#break>
<#case "ROW"><#global MEAL_INFO = "https://www.norwegian.com/en/travel-info/on-board/food-and-drinks/international-long-haul-flights/"><#break>
<#case "SE"><#global MEAL_INFO = "https://www.norwegian.com/se/reseinformation/ombord/mat-och-dryck/internationella-langdistansflyg/"><#break>
<#case "SG"><#global MEAL_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/a-bordo/alimentos-y-bebidas/vuelos-internacionales-de-larga-distancia/"><#break>
<#case "UK"><#global MEAL_INFO = "https://www.norwegian.com/uk/travel-info/on-board/food-and-drinks/international-long-haul-flights/"><#break>
<#case "US"><#global MEAL_INFO = "https://www.norwegian.com/us/travel-info/on-board/food-and-drinks/international-long-haul-flights/"><#break>
<#default><#global MEAL_INFO = "https://www.norwegian.com/en/travel-info/on-board/food-and-drinks/international-long-haul-flights/">
    </#switch></#compress></#join>

<#-- LOUNGE_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global LOUNGE_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/facturacion-y-embarque/acceso-a-salas-vip/"><#break>
<#case "DE"><#global LOUNGE_INFO = "https://www.norwegian.com/de/reiseinfo/check-in-und-boarding/lounge-zugang/"><#break>
<#case "DK"><#global LOUNGE_INFO = "https://www.norwegian.com/dk/rejseinformation/indcheckning-og-boarding/lounge-adgang/"><#break>
<#case "EN-CA"><#global LOUNGE_INFO = "https://www.norwegian.com/en-ca/travel-info/check-in-and-boarding/lounge-access/"><#break>
<#case "ES"><#global LOUNGE_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/facturacion-y-embarque/acceso-a-salas-vip/"><#break>
<#case "FI"><#global LOUNGE_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/lahtoselvitys-ja-koneeseen-nousu/lounge-palvelu/"><#break>
<#case "FR"><#global LOUNGE_INFO = "https://www.norwegian.com/fr/infos-voyageurs/enregistrement-et-embarquement/acces-au-salon-d-attente/"><#break>
<#case "FR-CA"><#global LOUNGE_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/enregistrement-et-embarquement/acces-au-salon-d-attente/"><#break>
<#case "IE"><#global LOUNGE_INFO = "https://www.norwegian.com/ie/travel-info/check-in-and-boarding/lounge-access/"><#break>
<#case "IT"><#global LOUNGE_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/check-in-e-imbarco/accesso-alla-lounge/"><#break>
<#case "NL"><#global LOUNGE_INFO = "https://www.norwegian.com/nl/travel-info/check-in-and-boarding/lounge-access/"><#break>
<#case "NO"><#global LOUNGE_INFO = "https://www.norwegian.no/reiseinformasjon/innsjekking-og-boarding/lounge-tilgang/"><#break>
<#case "PL"><#global LOUNGE_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/odprawa-i-wejscie-na-poktad/dostep-do-saloniku-lotniskowego/"><#break>
<#case "ROW"><#global LOUNGE_INFO = "https://www.norwegian.com/en/travel-info/check-in-and-boarding/lounge-access/"><#break>
<#case "SE"><#global LOUNGE_INFO = "https://www.norwegian.com/se/reseinformation/incheckning-och-ombordstigning/loungetillgang/"><#break>
<#case "SG"><#global LOUNGE_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/facturacion-y-embarque/acceso-a-salas-vip/"><#break>
<#case "UK"><#global LOUNGE_INFO = "https://www.norwegian.com/uk/travel-info/check-in-and-boarding/lounge-access/"><#break>
<#case "US"><#global LOUNGE_INFO = "https://www.norwegian.com/us/travel-info/check-in-and-boarding/lounge-access/"><#break>
<#default><#global LOUNGE_INFO = "https://www.norwegian.com/en/travel-info/check-in-and-boarding/lounge-access/">
    </#switch></#compress></#join>

<#-- FASTTRACK_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global FASTTRACK_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/facturacion-y-embarque/fast-track/"><#break>
<#case "DE"><#global FASTTRACK_INFO = "https://www.norwegian.com/de/reiseinfo/check-in-und-boarding/fast-track/"><#break>
<#case "DK"><#global FASTTRACK_INFO = "https://www.norwegian.com/dk/rejseinformation/indcheckning-og-boarding/fast-track/"><#break>
<#case "EN-CA"><#global FASTTRACK_INFO = "https://www.norwegian.com/en-ca/travel-info/check-in-and-boarding/fast-track/"><#break>
<#case "ES"><#global FASTTRACK_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/facturacion-y-embarque/fast-track/"><#break>
<#case "FI"><#global FASTTRACK_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/lahtoselvitys-ja-koneeseen-nousu/fast-track/"><#break>
<#case "FR"><#global FASTTRACK_INFO = "https://www.norwegian.com/fr/infos-voyageurs/enregistrement-et-embarquement/fast-track/"><#break>
<#case "FR-CA"><#global FASTTRACK_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/enregistrement-et-embarquement/fast-track/"><#break>
<#case "IE"><#global FASTTRACK_INFO = "https://www.norwegian.com/ie/travel-info/check-in-and-boarding/fast-track/"><#break>
<#case "IT"><#global FASTTRACK_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/check-in-e-imbarco/fast-track/"><#break>
<#case "NL"><#global FASTTRACK_INFO = "https://www.norwegian.com/nl/travel-info/check-in-and-boarding/fast-track/"><#break>
<#case "NO"><#global FASTTRACK_INFO = "https://www.norwegian.no/reiseinformasjon/innsjekking-og-boarding/fast-track/"><#break>
<#case "PL"><#global FASTTRACK_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/odprawa-i-wejscie-na-poktad/fast-track/"><#break>
<#case "ROW"><#global FASTTRACK_INFO = "https://www.norwegian.com/en/travel-info/check-in-and-boarding/fast-track/"><#break>
<#case "SE"><#global FASTTRACK_INFO = "https://www.norwegian.com/se/reseinformation/incheckning-och-ombordstigning/fast-track/"><#break>
<#case "SG"><#global FASTTRACK_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/facturacion-y-embarque/fast-track/"><#break>
<#case "UK"><#global FASTTRACK_INFO = "https://www.norwegian.com/uk/travel-info/check-in-and-boarding/fast-track/"><#break>
<#case "US"><#global FASTTRACK_INFO = "https://www.norwegian.com/us/travel-info/check-in-and-boarding/fast-track/"><#break>
<#default><#global FASTTRACK_INFO = "https://www.norwegian.com/en/travel-info/check-in-and-boarding/fast-track/">
    </#switch></#compress></#join>
    
<#-- REWARD_FAMILY_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global REWARD_FAMILY_INFO = "https://es.norwegianreward.com/sobre-nosotros/cuenta-familiar"><#break>
<#case "DE"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "DK"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "EN-CA"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "ES"><#global REWARD_FAMILY_INFO = "https://es.norwegianreward.com/sobre-nosotros/cuenta-familiar"><#break>
<#case "FI"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "FR"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "FR-CA"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "IE"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "IT"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "NL"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "NO"><#global REWARD_FAMILY_INFO = "https://no.norwegianreward.com/om-oss/familiekonto"><#break>
<#case "PL"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "ROW"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "SE"><#global REWARD_FAMILY_INFO = "https://se.norwegianreward.com/om-oss/familjekonto"><#break>
<#case "SG"><#global REWARD_FAMILY_INFO = "https://es.norwegianreward.com/sobre-nosotros/cuenta-familiar"><#break>
<#case "UK"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#case "US"><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account"><#break>
<#default><#global REWARD_FAMILY_INFO = "https://en.norwegianreward.com/about-us/family-account">
    </#switch></#compress></#join>

<#-- APP_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global APP_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/facturacion-y-embarque/aplicacion-travel-assistant/"><#break>
<#case "DE"><#global APP_INFO = "https://www.norwegian.com/de/reiseinfo/check-in-und-boarding/travel-assistant-app/"><#break>
<#case "DK"><#global APP_INFO = "https://www.norwegian.com/dk/rejseinformation/indcheckning-og-boarding/rejseassistent-app/"><#break>
<#case "EN-CA"><#global APP_INFO = "https://www.norwegian.com/en-ca/travel-info/check-in-and-boarding/travel-assistant-app"><#break>
<#case "ES"><#global APP_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/facturacion-y-embarque/aplicacion-travel-assistant/"><#break>
<#case "FI"><#global APP_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/lahtoselvitys-ja-koneeseen-nousu/travel-assistant-sovellus/"><#break>
<#case "FR"><#global APP_INFO = "https://www.norwegian.com/fr/infos-voyageurs/enregistrement-et-embarquement/application-travel-assistant/"><#break>
<#case "FR-CA"><#global APP_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/enregistrement-et-embarquement/application-travel-assistant/"><#break>
<#case "IE"><#global APP_INFO = "https://www.norwegian.com/ie/travel-info/check-in-and-boarding/travel-assistant-app"><#break>
<#case "IT"><#global APP_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/check-in-e-imbarco/app-travel-assistant/"><#break>
<#case "NL"><#global APP_INFO = "https://www.norwegian.com/nl/travel-info/check-in-and-boarding/travel-assistant-app"><#break>
<#case "NO"><#global APP_INFO = "https://www.norwegian.no/reiseinformasjon/innsjekking-og-boarding/reiseassistent-app/"><#break>
<#case "PL"><#global APP_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/odprawa-i-wejscie-na-poktad/aplikacja-travel-assistant/"><#break>
<#case "ROW"><#global APP_INFO = "https://www.norwegian.com/enk/travel-info/check-in-and-boarding/travel-assistant-app"><#break>
<#case "SE"><#global APP_INFO = "https://www.norwegian.com/se/reseinformation/incheckning-och-ombordstigning/reseassistent-appen/"><#break>
<#case "SG"><#global APP_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/facturacion-y-embarque/aplicacion-travel-assistant/"><#break>
<#case "UK"><#global APP_INFO = "https://www.norwegian.com/uk/travel-info/check-in-and-boarding/travel-assistant-app"><#break>
<#case "US"><#global APP_INFO = "https://www.norwegian.com/us/travel-info/check-in-and-boarding/travel-assistant-app"><#break>
<#default><#global APP_INFO = "https://www.norwegian.com/en/travel-info/check-in-and-boarding/travel-assistant-app">
    </#switch></#compress></#join>

<#-- PASSPORT_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global PASSPORT_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/facturacion-y-embarque/pasaporte-visado-y-documento-de-identificacion/"><#break>
<#case "DE"><#global PASSPORT_INFO = "https://www.norwegian.com/de/reiseinfo/check-in-und-boarding/reisepass-visum-und-personalausweis/"><#break>
<#case "DK"><#global PASSPORT_INFO = "https://www.norwegian.com/dk/rejseinformation/indcheckning-og-boarding/pas-visum-og-id/"><#break>
<#case "EN-CA"><#global PASSPORT_INFO = "https://www.norwegian.com/en-ca/travel-info/check-in-and-boarding/passport-visa/"><#break>
<#case "ES"><#global PASSPORT_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/facturacion-y-embarque/pasaporte-visado-y-documento-de-identificacion/"><#break>
<#case "FI"><#global PASSPORT_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/lahtoselvitys-ja-koneeseen-nousu/passi-viisumi-ja-henkilokortti/"><#break>
<#case "FR"><#global PASSPORT_INFO = "https://www.norwegian.com/fr/infos-voyageurs/enregistrement-et-embarquement/passeport-visa-et-piece-d-identite/"><#break>
<#case "FR-CA"><#global PASSPORT_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/enregistrement-et-embarquement/passeport-visa-et-piece-d-identite/"><#break>
<#case "IE"><#global PASSPORT_INFO = "https://www.norwegian.com/ie/travel-info/check-in-and-boarding/passport-visa/"><#break>
<#case "IT"><#global PASSPORT_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/check-in-e-imbarco/passaporto-visto-e-documenti-di-identita/"><#break>
<#case "NL"><#global PASSPORT_INFO = "https://www.norwegian.com/nl/travel-info/check-in-and-boarding/passport-visa/"><#break>
<#case "NO"><#global PASSPORT_INFO = "https://www.norwegian.no/reiseinformasjon/innsjekking-og-boarding/pass-visum-og-id/"><#break>
<#case "PL"><#global PASSPORT_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/odprawa-i-wejscie-na-poktad/paszport-wiza-i-dowod-tozsamosci/"><#break>
<#case "ROW"><#global PASSPORT_INFO = "https://www.norwegian.com/en/travel-info/check-in-and-boarding/passport-visa/"><#break>
<#case "SE"><#global PASSPORT_INFO = "https://www.norwegian.com/se/reseinformation/incheckning-och-ombordstigning/pass-visum-och-id/"><#break>
<#case "SG"><#global PASSPORT_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/facturacion-y-embarque/pasaporte-visado-y-documento-de-identificacion/"><#break>
<#case "UK"><#global PASSPORT_INFO = "https://www.norwegian.com/uk/travel-info/check-in-and-boarding/passport-visa/"><#break>
<#case "US"><#global PASSPORT_INFO = "https://www.norwegian.com/us/travel-info/check-in-and-boarding/passport-visa/"><#break>
<#default><#global PASSPORT_INFO = "https://www.norwegian.com/uk/travel-info/check-in-and-boarding/passport-visa/">
    </#switch></#compress></#join>

<#-- CHILDREN_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global CHILDREN_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/viajar-con-ninos/equipaje/"><#break>
<#case "DE"><#global CHILDREN_INFO = "https://www.norwegian.com/de/reiseinfo/reisen-mit-kindern/gepaeck/"><#break>
<#case "DK"><#global CHILDREN_INFO = "https://www.norwegian.com/dk/rejseinformation/rejse-med-born/bagage/"><#break>
<#case "EN-CA"><#global CHILDREN_INFO = "https://www.norwegian.com/en-ca/travel-info/travelling-with-children/baggage/"><#break>
<#case "ES"><#global CHILDREN_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/viajar-con-ninos/equipaje/"><#break>
<#case "FI"><#global CHILDREN_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/matkustaminen-lasten-kanssa/matkatavarat/"><#break>
<#case "FR"><#global CHILDREN_INFO = "https://www.norwegian.com/fr/infos-voyageurs/voyager-avec-des-enfants/bagages/"><#break>
<#case "FR-CA"><#global CHILDREN_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/voyager-avec-des-enfants/bagages/"><#break>
<#case "IE"><#global CHILDREN_INFO = "https://www.norwegian.com/ie/travel-info/travelling-with-children/baggage/"><#break>
<#case "IT"><#global CHILDREN_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/bambini/bagagli/"><#break>
<#case "NL"><#global CHILDREN_INFO = "https://www.norwegian.com/nl/travel-info/travelling-with-children/baggage/"><#break>
<#case "NO"><#global CHILDREN_INFO = "https://www.norwegian.no/reiseinformasjon/reise-med-barn/bagasje/"><#break>
<#case "PL"><#global CHILDREN_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/podrozowanie-z-dziecmi/bagaz/"><#break>
<#case "ROW"><#global CHILDREN_INFO = "https://www.norwegian.com/en/travel-info/travelling-with-children/baggage/"><#break>
<#case "SE"><#global CHILDREN_INFO = "https://www.norwegian.com/se/reseinformation/resa-med-barn/bagage/"><#break>
<#case "SG"><#global CHILDREN_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/viajar-con-ninos/equipaje/"><#break>
<#case "UK"><#global CHILDREN_INFO = "https://www.norwegian.com/uk/travel-info/travelling-with-children/baggage/"><#break>
<#case "US"><#global CHILDREN_INFO = "https://www.norwegian.com/us/travel-info/travelling-with-children/baggage/"><#break>
<#default><#global CHILDREN_INFO  = "https://www.norwegian.com/en/travel-info/travelling-with-children/baggage/">
    </#switch></#compress></#join>

<#-- SNACKBAR_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global SNACKBAR_INFO = "https://www.norwegian.com/ar/informacion-sobre-el-viaje/a-bordo/entretenimiento-durante-el-vuelo/#interactive_3D_map"><#break>
<#case "DE"><#global SNACKBAR_INFO = "https://www.norwegian.com/de/reiseinfo/an-bord/unterhaltungsprogramm-an-bord/#interactive_3D_map"><#break>
<#case "DK"><#global SNACKBAR_INFO = "https://www.norwegian.com/dk/rejseinformation/i-flyet/underholdning-om-bord/#interactive_3D_map"><#break>
<#case "EN-CA"><#global SNACKBAR_INFO = "https://www.norwegian.com/en-ca/travel-info/on-board/in-flight-entertainment/#interactive_3D_map"><#break>
<#case "ES"><#global SNACKBAR_INFO = "https://www.norwegian.com/es/informacion-sobre-el-viaje/a-bordo/entretenimiento-durante-el-vuelo/#interactive_3D_map"><#break>
<#case "FI"><#global SNACKBAR_INFO = "https://www.norwegian.com/fi/matkusta-kanssamme/koneessa/viihdetarjonta-lennoillamme/#interactive_3D_map"><#break>
<#case "FR"><#global SNACKBAR_INFO = "https://www.norwegian.com/fr/infos-voyageurs/a-bord/loisirs-en-vol/#interactive_3D_map"><#break>
<#case "FR-CA"><#global SNACKBAR_INFO = "https://www.norwegian.com/fr-ca/infos-voyageurs/a-bord/loisirs-en-vol/#interactive_3D_map"><#break>
<#case "IE"><#global SNACKBAR_INFO = "https://www.norwegian.com/ie/travel-info/on-board/in-flight-entertainment/#interactive_3D_map"><#break>
<#case "IT"><#global SNACKBAR_INFO = "https://www.norwegian.com/it/informazioni-di-viaggio/a-bordo/#interactive_3D_map"><#break>
<#case "NL"><#global SNACKBAR_INFO = "https://www.norwegian.com/nl/travel-info/on-board/in-flight-entertainment/#interactive_3D_map"><#break>
<#case "NO"><#global SNACKBAR_INFO = "https://www.norwegian.no/reiseinformasjon/om-bord/underholdning-om-bord/#interactive_3D_map"><#break>
<#case "PL"><#global SNACKBAR_INFO = "https://www.norwegian.com/pl/informacje-o-lotach/na-pokladzie/rozrywka-pokladowa/#interactive_3D_map"><#break>
<#case "ROW"><#global SNACKBAR_INFO = "https://www.norwegian.com/en/travel-info/on-board/in-flight-entertainment/#interactive_3D_map"><#break>
<#case "SE"><#global SNACKBAR_INFO = "https://www.norwegian.com/se/reseinformation/ombord/underhallning-under-flygresan/#interactive_3D_map"><#break>
<#case "SG"><#global SNACKBAR_INFO = "https://www.norwegian.com/sg/informacion-sobre-el-viaje/a-bordo/entretenimiento-durante-el-vuelo/#interactive_3D_map"><#break>
<#case "UK"><#global SNACKBAR_INFO = "https://www.norwegian.com/uk/travel-info/on-board/in-flight-entertainment/#interactive_3D_map"><#break>
<#case "US"><#global SNACKBAR_INFO = "https://www.norwegian.com/us/travel-info/on-board/in-flight-entertainment/#interactive_3D_map"><#break>
<#default><#global SNACKBAR_INFO  = "https://www.norwegian.com/en/travel-info/on-board/in-flight-entertainment/#interactive_3D_map">
    </#switch></#compress></#join>

<#-- DREAMLINER_INFO --><#join><#compress><#switch MARKET>
<#case "AR"><#global DREAMLINER_INFO = "https://www.norwegian.com/ar/acerca-de-nosotros/descubrenos/dreamliner/"><#break>
<#case "DE"><#global DREAMLINER_INFO = "https://www.norwegian.com/de/uber-uns/warum-mit-norwegian-fliegen/dreamliner/"><#break>
<#case "DK"><#global DREAMLINER_INFO = "https://www.norwegian.com/dk/om-os/oplev-os/dreamliner/"><#break>
<#case "EN-CA"><#global DREAMLINER_INFO = "https://www.norwegian.com/en-ca/about/experience-us/dreamliner"><#break>
<#case "ES"><#global DREAMLINER_INFO = "https://www.norwegian.com/es/acerca-de-nosotros/descubrenos/dreamliner/"><#break>
<#case "FI"><#global DREAMLINER_INFO = "https://www.norwegian.com/fi/tietoja-meista/koe-meidat/dreamliner/"><#break>
<#case "FR"><#global DREAMLINER_INFO = "https://www.norwegian.com/fr/a-propos-de-nous/vivez-experience-norwegian/dreamliner/"><#break>
<#case "FR-CA"><#global DREAMLINER_INFO = "https://www.norwegian.com/fr-ca/a-propos-de-nous/vivez-experience-norwegian/dreamliner/"><#break>
<#case "IE"><#global DREAMLINER_INFO = "https://www.norwegian.com/ie/about/experience-us/dreamliner"><#break>
<#case "IT"><#global DREAMLINER_INFO = "https://www.norwegian.com/it/info-su-norwegian/prova-norwegian/dreamliner/"><#break>
<#case "NL"><#global DREAMLINER_INFO = "https://www.norwegian.com/nl/about/experience-us/dreamliner"><#break>
<#case "NO"><#global DREAMLINER_INFO = "https://www.norwegian.no/om-oss/opplev-oss/dreamliner/"><#break>
<#case "PL"><#global DREAMLINER_INFO = "https://www.norwegian.com/pl/o-nas/spraw-sobie-przyjemnosc/dreamliner/"><#break>
<#case "ROW"><#global DREAMLINER_INFO = "https://www.norwegian.com/en/about/experience-us/dreamliner"><#break>
<#case "SE"><#global DREAMLINER_INFO = "https://www.norwegian.com/se/om-oss/upplev-oss/dreamliner/"><#break>
<#case "SG"><#global DREAMLINER_INFO = "https://www.norwegian.com/sg/acerca-de-nosotros/descubrenos/dreamliner/"><#break>
<#case "UK"><#global DREAMLINER_INFO = "https://www.norwegian.com/uk/about/experience-us/dreamliner"><#break>
<#case "US"><#global DREAMLINER_INFO = "https://www.norwegian.com/us/about/experience-us/dreamliner"><#break>
<#default><#global DREAMLINER_INFO  = "https://www.norwegian.com/en/about/experience-us/dreamliner">
    </#switch></#compress></#join>

<#-- LOUNGE_URL -->
<#global LOUNGE_URL = LOUNGE_INFO>

<#-- BK_PERSON_GENDER -->
<#if CONTACT.GENDER?isnull><#global BK_PERSON_GENDER = "unknown"><#elseif CONTACT.GENDER?upper_case == "F"><#global BK_PERSON_GENDER = "female"><#else><#global BK_PERSON_GENDER = "male"></#if>

<#-- SURVEY_LINK --><#global SURVEY_LINK = "https://survey.enalyzer.com/?pid=" + SURVEY_PID + "&opt_Depcountry=" + DEPARTURE_COUNTRY?exec?trim + "&opt_Email=" + CONTACT.EMAIL?trim + "&opt_Reward=" + REWARD_01?exec?trim + "&langident=" + SURVEY_LANGUAGE?exec?trim>

<#--SURVEY_LINK2 --><#global SURVEY_LINK2 = "https://survey.enalyzer.com/?pid=" + SURVEY_PID + "&opt_Age=" + BK_PERSON_AGE + "&opt_Aircraft=" + OPT_AIRCRAFT + "&opt_Depcountry=" + DEPARTURE_COUNTRY?exec?trim + "&opt_Email=" + CONTACT.EMAIL?trim + "&opt_Gender=" + BK_PERSON_GENDER + "&opt_Reward=" + REWARD_01?exec?trim + "&langident=" + SURVEY_LANGUAGE?exec?trim>

<#--SURVEY_LINK3 --><#global SURVEY_LINK3 = "https://surveys.enalyzer.com/?pid=" + SURVEY_PID + "&opt_Children=" + CHILDREN_ON_BOOKING + "&opt_Route_Type=" + LH_OR_SH + "&opt_Departure_Airport=" + DEPARTURE_IATA + "&opt_Destination_Airport=" + DESTINATION_IATA + "&opt_Departure=" + DEPARTURE_DATE_SURVEY + "&opt_Email=" + CONTACT.EMAIL?trim + "&opt_Age=" + BK_PERSON_AGE + "&opt_Depcountry=" + DEPARTURE_COUNTRY + "&opt_Aircraft=" + OPT_AIRCRAFT + "&opt_Gender=" + BK_PERSON_GENDER + "&langIdent=" + SURVEY_LANGUAGE?exec?trim>

<#-- DESTINATION_URL_PART -->
<#if MARKET == "NO"><#if LONG_HAUL == "Y"><#global DESTINATION_URL_PART = "https://www.norwegian.no/" + DESTINATION_IATA?lower_case><#else><#global DESTINATION_URL_PART = "https://www.norwegian.no"  + DEST_TRANSLATION_TEXT></#if><#elseif MARKET == "ROW"><#if LONG_HAUL == "Y"><#global DESTINATION_URL_PART = "https://www.norwegian.com/en/" + DESTINATION_IATA?lower_case><#else><#global DESTINATION_URL_PART = "https://www.norwegian.com/en"  + DEST_TRANSLATION_TEXT></#if><#else><#if LONG_HAUL == "Y"><#global DESTINATION_URL_PART = "https://www.norwegian.com/" + MARKET?lower_case + "/" + DESTINATION_IATA?lower_case><#else><#global DESTINATION_URL_PART = "https://www.norwegian.com/" + MARKET?lower_case + DEST_TRANSLATION_TEXT></#if></#if>

<#-- RETURN_HOME -->
<#if PREFFERED_AIRPORT?isnull><#global RETURN_HOME = "N"><#elseif PREFFERED_AIRPORT?trim == DESTINATION_IATA?trim><#global RETURN_HOME = "Y"><#else><#global RETURN_HOME = "N"></#if>

<#-- ENTERTAINMENT --><#if HOTEL_YES?trim == "Y" && PREMIUM_YES?trim == "Y" && ANCILLARY_ALL?trim == "Y"><#global ENTERTAINMENT = "Y"><#else><#global ENTERTAINMENT = "N"></#if>




<#-- MARKET_HERO -->
<#if MARKET?trim == "ROW"><#global MARKET_HERO = "en"><#else><#global MARKET_HERO = MARKET?trim?lower_case></#if>

<#-- BANNER_IMG_PATH --><#global BANNER_IMG_PATH = DAYS_TO_DEP?exec + "DB_" + MARKET?exec + "_timeline.jpg">

<#-- BOOKING_LASTNAME -->
<#global BOOKING_LASTNAME = CONTACT.LASTNAME?trim>

<#-- SEARCH_COMMERCIAL_TEXT --><#join><#compress><#switch MARKET>
<#case "NO"><#global SEARCH_COMMERCIAL_TEXT ="Tilbys av"><#break>
<#case "SE"><#global SEARCH_COMMERCIAL_TEXTL ="I samarbete med"><#break>
<#case "DK"><#global SEARCH_COMMERCIAL_TEXT ="Drevet af"><#break>
<#case "FR"><#global SEARCH_COMMERCIAL_TEXT ="Optimisé par"><#break>
<#case "NL"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "IT"><#global SEARCH_COMMERCIAL_TEXT ="Offerto da"><#break>
<#case "FI"><#global SEARCH_COMMERCIAL_TEXT ="Hotellit tarjoaa"><#break>
<#case "DE"><#global SEARCH_COMMERCIAL_TEXT ="Unterstützt von"><#break>
<#case "US"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "IE"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "SG"><#global SEARCH_COMMERCIAL_TEXT ="Ofrecido por"><#break>
<#case "UK"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "ES"><#global SEARCH_COMMERCIAL_TEXT ="Ofrecido por"><#break>
<#case "PL"><#global SEARCH_COMMERCIAL_TEXT ="Wspierany przez"><#break>
<#case "ROW"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "EN-CA"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "FR-CA"><#global SEARCH_COMMERCIAL_TEXT ="Optimisé par"><#break>
<#case "AR"><#global SEARCH_COMMERCIAL_TEXT ="Ofrecido por"><#break>
<#default><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
</#switch></#compress></#join>

<#-- SETTINGS_FOOTER --><#global SETTINGS_FOOTER = MY_PROFILE_URL>

<#-- PRICE_TO --><#global PRICE_TO = "Not in use">
<#-- PRICE_FROM --><#global PRICE_FROM = "Not in use">
<#-- PRIVACY_RULE --><#global PRIVACY_RULE = "Not in use">
<#-- CONTACT_US --><#global CONTACT_US = "Not in use">
<#-- SETTINGS --><#global SETTINGS = "Not in use">
<#-- DEST_URL --><#global DEST_URL = "Not in use">

<#-- Fast Track disclaimer text--> <#include "cms://contentlibrary/!framework/global_variables/fast_track_footer_text_dialogues.htm">

<#-- PRIORITY BOARDING AIR_HAS_PB checks if the airport has PB or not and uses AIR_HAS_PB. Updated to one table on 18/07/18 JM. Original file is called PB_List is still there-->
<#include "cms://contentlibrary/!framework/global_variables/inclusion_files/pb_list_one_table.htm">


<#-- HAS_REWARD_FAMILY created on 23/07/18 to show/hide reward family content in display rules JM -->
<#if REWARD_FAMILY?isnull><#global HAS_REWARD_FAMILY = "N">
<#elseif REWARD_FAMILY?number == "1"><#global HAS_REWARD_FAMILY = "Y">
<#elseif REWARD_FAMILY?number == "0"><#global HAS_REWARD_FAMILY = "N"></#if>

<#-- HAS_FAMILY created on 23/07/18 to find out if there are children or infants -->
<#if NUMBER_OF_CHILDREN?number gt 0 && NUMBER_OF_INFANTS?number gt 0><#global HAS_FAMILY = "Y">
<#else><#global HAS_FAMILY  = "N"></#if>





<#-- <#include "cms://contentlibrary/!framework/global_variables/Test_SH_variables.htm">
<a href="${DEEPLINK_ONLINE_CHECKIN?exec}" target ="_blank">DEEPLINK_ONLINE_CHECKIN</a>: ${DEEPLINK_ONLINE_CHECKIN?exec}<br>
DEPARTURE_DATE: ${DEPARTURE_DATE}<br>
LESS_24_DEP: ${LESS_24_DEP}<br>
DEPARTURE_DATE_RETURN: ${DEPARTURE_DATE_RETURN}<br>
RETURN_DAY_CAR: ${RETURN_DAY_CAR}<br>
LESS_24_RET: ${LESS_24_RET}<br>
<a href="${DEEPLINK_BAG?exec}" target ="_blank">DEEPLINK_BAG: </a>: ${DEEPLINK_BAG?exec}<br>
<#if CONTACT.EMAIL == "bdsimmons92@gmail.com" && campaign.name == "E_LHP_4DB"> -->

<#--<#if campaign.name == "E_LHP_4DB">
FORCE_ROW_MARKET: ${FORCE_ROW_MARKET}<br>
<strong>LANGUAGEID: ${LANGUAGEID}</strong><br>
<strong>MARKET_EXTERNAL_LINK: ${MARKET_EXTERNAL_LINK}</strong><br>
BOOKING_ID: ${BOOKING_ID}<br>
LOCAL_BOOKING_ID: ${LOCAL_BOOKING_ID}<br>
EMAIL: ${CONTACT.EMAIL}<br>
<hr>
HAS_FLEX: ${HAS_FLEX}<br>
LONG_HAUL: ${LONG_HAUL}<br>
PREMIUM_YES: ${PREMIUM_YES}<br>
NOT_PREMIUM_BK: ${NOT_PREMIUM_BK}<br>
<hr>
HAVE_PRIORITY_BOARDING: ${HAVE_PRIORITY_BOARDING}<br>
AIR_HAS_PB: ${AIR_HAS_PB}<br>
<hr>
MARKET: ${MARKET}<br>
ONEWAY_YN: ${ONEWAY_YN}<br>
TRANSIT_NUMBER: ${TRANSIT_NUMBER}<br>
HAS_TRANSIT: ${HAS_TRANSIT}<br>
DEPARTURE_IATA: ${DEPARTURE_IATA}<br>
<var>(TRANSFER_IATA_LEG1 only uses the first leg destination)</var><strong>TRANSFER_IATA_LEG1: ${TRANSFER_IATA_LEG1}</strong><br>
DESTINATION_IATA: ${DESTINATION_IATA}<br>
<hr>
PRODUCT_CODE: ${PRODUCT_CODE}<br>
HORIZON: ${HORIZON}
</#if>-->
<#if campaign.name == "E_MAX_LH_4DB" || campaign.name == 'E_MAX_LH_9DB' || campaign.name == 'E_MAX_LH_1DA' || campaign.name == 'E_MAX_LH_RET_HOME' || campaign.name == 'E_MAX_LH_23DB' || campaign.name == 'E_MAX_LH_7DB' || campaign.name == 'E_MAX_LH_7DB_CHASER' || campaign.name = 'E_MAX_LH_2DA' || campaign.name == 'E_MAX_LH_5DA' || campaign.name == 'E_MAX_LH_12DB'>CAMPAIGN: ${CAMPAIGN}<br>
HORIZON: ${HORIZON}<br>
HAS_FLEX: ${HAS_FLEX}<br>MEAL_AVAILABLE: ${MEAL_AVAILABLE}<br>LH_OR_SH: ${LH_OR_SH}<br>MEAL_AVAILABLE_IS_SET: ${MEAL_AVAILABLE_IS_SET}<br>TESTING_BOOKING_NUMBER_OF_MEALS: ${TESTING_BOOKING_NUMBER_OF_MEALS}<br>TESTING_BOOKING_NUMBER_OF_BAGS: ${TESTING_BOOKING_NUMBER_OF_BAGS}<br>TESTING_BOOKING_NUMBER_OF_SEATS: ${TESTING_BOOKING_NUMBER_OF_SEATS}<br>DEEPLINK_ORDER_MEAL: ${DEEPLINK_ORDER_MEAL}<br>PREMIUM_YES: ${PREMIUM_YES}<br>HAS_MEAL_IS_SET: ${HAS_MEAL_IS_SET}<br>HAS_MEAL: ${HAS_MEAL}<br>MY_TRAVELS: ${MY_TRAVELS}<br>
HAVE_PRIORITY_BOARDING:${HAVE_PRIORITY_BOARDING}...AIR_HAS_PB:${AIR_HAS_PB}<br>NUMBER_OF_CHILDREN/INFANTS: ${NUMBER_OF_CHILDREN + '/' + NUMBER_OF_INFANTS}<br>
<hr>
REWARD_MEMBER: ${REWARD_MEMBER}<br>
REWARD_FAMILY: ${REWARD_FAMILY} >>>>> HAS_REWARD_FAMILY: ${HAS_REWARD_FAMILY}<br>
HAS_FAMILY: ${HAS_FAMILY}<br>


</#if>
