<#-- here we search the departure aiport for Priority boarding, we are NOT using AIRPORT table to obtain the PB_Date now.
This went live on 17/05/18 airports which have PB starting from 2018-04-25 00:00:00.0. After 22/05/18 (2018-05-22 00:00:00.0) we need to add ARN, CPH, HEL, LGW, OSL live.
WE WILL NEED TO UPDATE THESE AIRPORTS WHEN THEY START USING PB - but we need the information if and when they start using PB. -->
<#-- we need AIR_HAS_PB to be N FIRST to run return home dialogues switche methods TRANSFER_IATA_LEG1 and DESTINATION_IATA after this switch -->
<#global AIR_HAS_PB = "N">
<#-- do not look in DEPARTURE_IATA for return home dialogues -->
<#if CAMPAIGN != "E_SH_RET_HOME">
<#join><#compress><#switch DEPARTURE_IATA>
<#case "AAL"><#global AIR_HAS_PB = "Y"><#break>
<#case "AGP"><#global AIR_HAS_PB = "Y"><#break>
<#case "ALC"><#global AIR_HAS_PB = "Y"><#break>
<#case "ALF"><#global AIR_HAS_PB = "Y"><#break>
<#case "AMS"><#global AIR_HAS_PB = "Y"><#break>
<#case "BOO"><#global AIR_HAS_PB = "Y"><#break>
<#case "BCN"><#global AIR_HAS_PB = "Y"><#break>
<#case "BDU"><#global AIR_HAS_PB = "Y"><#break>
<#case "BGO"><#global AIR_HAS_PB = "Y"><#break>
<#case "BUD"><#global AIR_HAS_PB = "Y"><#break>
<#case "CDG"><#global AIR_HAS_PB = "Y"><#break>
<#case "FCO"><#global AIR_HAS_PB = "Y"><#break>
<#case "FDF"><#global AIR_HAS_PB = "Y"><#break>
<#case "DXB"><#global AIR_HAS_PB = "Y"><#break>
<#case "EVE"><#global AIR_HAS_PB = "Y"><#break>
<#case "GDN"><#global AIR_HAS_PB = "Y"><#break>
<#case "GOT"><#global AIR_HAS_PB = "Y"><#break>
<#case "KEF"><#global AIR_HAS_PB = "Y"><#break>
<#case "KKN"><#global AIR_HAS_PB = "Y"><#break>
<#case "MAD"><#global AIR_HAS_PB = "Y"><#break>
<#case "LPA"><#global AIR_HAS_PB = "Y"><#break>
<#case "MMX"><#global AIR_HAS_PB = "Y"><#break>
<#case "PMI"><#global AIR_HAS_PB = "Y"><#break>
<#case "PRG"><#global AIR_HAS_PB = "Y"><#break>
<#case "ORK"><#global AIR_HAS_PB = "Y"><#break>
<#case "ORY"><#global AIR_HAS_PB = "Y"><#break>
<#case "RIX"><#global AIR_HAS_PB = "Y"><#break>
<#case "PTP"><#global AIR_HAS_PB = "Y"><#break>
<#case "SVG"><#global AIR_HAS_PB = "Y"><#break>
<#case "TOS"><#global AIR_HAS_PB = "Y"><#break>
<#case "TRD"><#global AIR_HAS_PB = "Y"><#break>
<#case "TRF"><#global AIR_HAS_PB = "Y"><#break>
<#case "SXF"><#global AIR_HAS_PB = "Y"><#break>
<#case "VIE"><#global AIR_HAS_PB = "Y"><#break>
<#case "VNO"><#global AIR_HAS_PB = "Y"><#break>
<#default><#global AIR_HAS_PB = "N"><#break>
</#switch></#compress></#join>
</#if>
<#-- we need to see if oneway trips have a transit stop, therefore we use HAS_TRANSIT.
In DESTINATION_IATA single journeys use SQL_GLOBAL.BOOKING_LAST_DESTINATION
oneway == 1 use SQL_GLOBAL.BOOKING_LAST_DESTINATION
oneway == 0 use SQL_GLOBAL.BOOKING_MAIN_DESTINATION
We use TRANSFER_IATA_LEG1 because it obtains the destination of leg1 which is always the transit destination-->
<#-- for return home dialogues we are still using this to check the transfer iata, it could go wrong because we are using the transit iata of the first leg, most of the time they are the same, further work could be done here to get the iata of the 3rd leg instead -->
<#if AIR_HAS_PB == "N" && HAS_TRANSIT == "Y">
<#join><#compress><#switch TRANSFER_IATA_LEG1>
<#case "AAL"><#global AIR_HAS_PB = "Y"><#break>
<#case "AGP"><#global AIR_HAS_PB = "Y"><#break>
<#case "ALC"><#global AIR_HAS_PB = "Y"><#break>
<#case "ALF"><#global AIR_HAS_PB = "Y"><#break>
<#case "AMS"><#global AIR_HAS_PB = "Y"><#break>
<#case "BOO"><#global AIR_HAS_PB = "Y"><#break>
<#case "BCN"><#global AIR_HAS_PB = "Y"><#break>
<#case "BDU"><#global AIR_HAS_PB = "Y"><#break>
<#case "BGO"><#global AIR_HAS_PB = "Y"><#break>
<#case "BUD"><#global AIR_HAS_PB = "Y"><#break>
<#case "CDG"><#global AIR_HAS_PB = "Y"><#break>
<#case "FCO"><#global AIR_HAS_PB = "Y"><#break>
<#case "FDF"><#global AIR_HAS_PB = "Y"><#break>
<#case "DXB"><#global AIR_HAS_PB = "Y"><#break>
<#case "EVE"><#global AIR_HAS_PB = "Y"><#break>
<#case "GDN"><#global AIR_HAS_PB = "Y"><#break>
<#case "GOT"><#global AIR_HAS_PB = "Y"><#break>
<#case "KEF"><#global AIR_HAS_PB = "Y"><#break>
<#case "KKN"><#global AIR_HAS_PB = "Y"><#break>
<#case "MAD"><#global AIR_HAS_PB = "Y"><#break>
<#case "LPA"><#global AIR_HAS_PB = "Y"><#break>
<#case "MMX"><#global AIR_HAS_PB = "Y"><#break>
<#case "PMI"><#global AIR_HAS_PB = "Y"><#break>
<#case "PRG"><#global AIR_HAS_PB = "Y"><#break>
<#case "ORK"><#global AIR_HAS_PB = "Y"><#break>
<#case "ORY"><#global AIR_HAS_PB = "Y"><#break>
<#case "RIX"><#global AIR_HAS_PB = "Y"><#break>
<#case "PTP"><#global AIR_HAS_PB = "Y"><#break>
<#case "SVG"><#global AIR_HAS_PB = "Y"><#break>
<#case "TOS"><#global AIR_HAS_PB = "Y"><#break>
<#case "TRD"><#global AIR_HAS_PB = "Y"><#break>
<#case "TRF"><#global AIR_HAS_PB = "Y"><#break>
<#case "SXF"><#global AIR_HAS_PB = "Y"><#break>
<#case "VIE"><#global AIR_HAS_PB = "Y"><#break>
<#case "VNO"><#global AIR_HAS_PB = "Y"><#break>
<#default><#global AIR_HAS_PB = "N"><#break>
</#switch></#compress></#join>
</#if>
<#-- we only search here if its not oneway, so its a round trip -->
<#if AIR_HAS_PB == "N" && ONEWAY_YN == "0">
<#join><#compress><#switch DESTINATION_IATA>
<#case "AAL"><#global AIR_HAS_PB = "Y"><#break>
<#case "AGP"><#global AIR_HAS_PB = "Y"><#break>
<#case "ALC"><#global AIR_HAS_PB = "Y"><#break>
<#case "ALF"><#global AIR_HAS_PB = "Y"><#break>
<#case "AMS"><#global AIR_HAS_PB = "Y"><#break>
<#case "BOO"><#global AIR_HAS_PB = "Y"><#break>
<#case "BCN"><#global AIR_HAS_PB = "Y"><#break>
<#case "BDU"><#global AIR_HAS_PB = "Y"><#break>
<#case "BGO"><#global AIR_HAS_PB = "Y"><#break>
<#case "BUD"><#global AIR_HAS_PB = "Y"><#break>
<#case "CDG"><#global AIR_HAS_PB = "Y"><#break>
<#case "FCO"><#global AIR_HAS_PB = "Y"><#break>
<#case "FDF"><#global AIR_HAS_PB = "Y"><#break>
<#case "DXB"><#global AIR_HAS_PB = "Y"><#break>
<#case "EVE"><#global AIR_HAS_PB = "Y"><#break>
<#case "GDN"><#global AIR_HAS_PB = "Y"><#break>
<#case "GOT"><#global AIR_HAS_PB = "Y"><#break>
<#case "KEF"><#global AIR_HAS_PB = "Y"><#break>
<#case "KKN"><#global AIR_HAS_PB = "Y"><#break>
<#case "MAD"><#global AIR_HAS_PB = "Y"><#break>
<#case "LPA"><#global AIR_HAS_PB = "Y"><#break>
<#case "MMX"><#global AIR_HAS_PB = "Y"><#break>
<#case "PMI"><#global AIR_HAS_PB = "Y"><#break>
<#case "PRG"><#global AIR_HAS_PB = "Y"><#break>
<#case "ORK"><#global AIR_HAS_PB = "Y"><#break>
<#case "ORY"><#global AIR_HAS_PB = "Y"><#break>
<#case "RIX"><#global AIR_HAS_PB = "Y"><#break>
<#case "PTP"><#global AIR_HAS_PB = "Y"><#break>
<#case "SVG"><#global AIR_HAS_PB = "Y"><#break>
<#case "TOS"><#global AIR_HAS_PB = "Y"><#break>
<#case "TRD"><#global AIR_HAS_PB = "Y"><#break>
<#case "TRF"><#global AIR_HAS_PB = "Y"><#break>
<#case "SXF"><#global AIR_HAS_PB = "Y"><#break>
<#case "VIE"><#global AIR_HAS_PB = "Y"><#break>
<#case "VNO"><#global AIR_HAS_PB = "Y"><#break>
<#default><#global AIR_HAS_PB = "N"><#break>
</#switch></#compress></#join>
</#if>
