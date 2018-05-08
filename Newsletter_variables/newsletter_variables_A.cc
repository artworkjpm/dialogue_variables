<#-- Copy code to include: <#include "cms://contentlibrary/!framework/global_variables/newsletter_variables.htm"> -->

<#-- PRICELIST_DISCLAIMER --><#global PRICELIST_DISCLAIMER = []>

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
<#-- //////////////////////// TRAVEL_DATA SUP TABLE ///////////////////////////////////-->
<#data TRAVEL_DATA as TRAVEL_DATA limit=1><#filter TRAVEL_DATA_RIID_ = RIID_><#fields REWARD_BALANCE NAS_PROFILEID UNSUBSCRIBE_ID NL_PROFILEDETAILID>
<#-- NAS_PROFILE_YN --><#if TRAVEL_DATA.NAS_PROFILEID?isnull><#global NAS_PROFILE_YN = "N"><#else><#global NAS_PROFILE_YN = "Y"></#if>
<#-- PROFILE_ID --><#if TRAVEL_DATA.NAS_PROFILEID?isnull><#global PROFILE_ID = 0><#elseif !TRAVEL_DATA.NAS_PROFILEID?isnull><#global PROFILE_ID = TRAVEL_DATA.NAS_PROFILEID?c><#else><#global PROFILE_ID = 0></#if>
<#-- NL_UNSUB_ID --><#if !TRAVEL_DATA.UNSUBSCRIBE_ID?isnull><#global NL_UNSUB_ID = TRAVEL_DATA.UNSUBSCRIBE_ID></#if>
<#-- NL_PROFILE_ID --><#if TRAVEL_DATA.NL_PROFILEDETAILID?isnull && TRAVEL_DATA.NAS_PROFILEID?isnull><#global NL_PROFILE_ID = 0><#elseif TRAVEL_DATA.NL_PROFILEDETAILID?isnull || TRAVEL_DATA.NL_PROFILEDETAILID == 0><#global NL_PROFILE_ID = TRAVEL_DATA.NAS_PROFILEID?c><#else><#global NL_PROFILE_ID = TRAVEL_DATA.NL_PROFILEDETAILID?c></#if>
<#-- PROFILE_YN --><#if TRAVEL_DATA.NAS_PROFILEID?isnull><#global PROFILE_YN = "N"><#else><#global PROFILE_YN = "Y"></#if>
<#-- CASHPOINTS --><#if TRAVEL_DATA.REWARD_BALANCE?isnull><#global CASHPOINTS = "0"><#else><#global CASHPOINTS = TRAVEL_DATA.REWARD_BALANCE?int?c></#if>
</#data>


<#-- SEGMENTRULE --><#if PREFFERED_AIRPORT?isnull>
	<#global PREFAIR = 'DEFAULT'>
<#else>
	<#global PREFAIR = PREFFERED_AIRPORT?trim>
</#if>			
<#global segment_is_set = 0>
<#global default_found = 0>
<#global loop_continue = 1>
<#data CAMPAIGN_FRAMEWORK_1_COL as SEGS>
<#filter FRAMEWORK_CAMPAIGN = CAMPAIGN FRAMEWORK_MARKET = MARKET>
<#fields SETTINGS_SEGMENT_RULE>
 <#if loop_continue == 1>
	<#list SEGS.SETTINGS_SEGMENT_RULE?split(",") as x>
	<#if loop_continue == 1>
		<#global MODULE_EXCLUDE = 0>		
		<#attempt>		
             <#include "cms://contentlibrary/!framework/displayrules/" + x + ".htm">		
		<#recover><#if x?exec?contains(PREFAIR?trim?upper_case)>
				<#global SEGMENT = PREFFERED_AIRPORT?trim>
				<#global MODULE_EXCLUDE = 0>
			<#elseif x == 'DEFAULT'><#global SEGMENT = 'DEFAULT'>
				<#global DEF_SEGMENT = 'DEFAULT'>
				<#if default_found == 1>
					<#global loop_continue = 0>
				</#if>
				<#global default_found = 1>	
                <#global MODULE_EXCLUDE = 0>
			<#else>
				<#global MODULE_EXCLUDE = 1>
			</#if>
		</#attempt>
	</#if>
	</#list>
	<#if segment_is_set == 0 && MODULE_EXCLUDE == 0><#global loop_continue = 0><#global segment_is_set = 1><#if PREFFERED_AIRPORT?isnull><#global SEGMENTRULE = 'DEFAULT'><#else><#global SEGMENTRULE = SEGS.SETTINGS_SEGMENT_RULE?trim></#if></#if></#if></#data>
 <#if segment_is_set == 0><#global SEGMENTRULE = DEF_SEGMENT?trim></#if>



<#-- //////////////////////// CAMPAIGN_SETTINGS ///////////////////////////////////-->
<#-- //////////////////////// CAMPAIGN_SETTINGS ///////////////////////////////////-->
<#data CAMPAIGN_FRAMEWORK_1_COL as DISCLAIMER>
<#filter FRAMEWORK_CAMPAIGN = CAMPAIGN FRAMEWORK_MARKET = MARKET SETTINGS_SEGMENT_RULE = SEGMENTRULE?exec?trim><#fields DISCLAIMER_CTA DISCLAIMER_URL>
<#-- DISCLAIMER_YN_VAR --><#if DISCLAIMER.DISCLAIMER_CTA?isnull><#global DISCLAIMER_YN_VAR = "Y"><#else><#global DISCLAIMER_YN_VAR = "N"></#if>
<#-- DISCLAIMER_CTA_VAR --><#if !DISCLAIMER.DISCLAIMER_CTA?isnull><#global DISCLAIMER_CTA_VAR = DISCLAIMER.DISCLAIMER_CTA></#if>
<#-- DISCLAIMER_URL_VAR --><#if DISCLAIMER.DISCLAIMER_URL?isnull><#global DISCLAIMER_URL_VAR = "https://www.norwegian.com/en/booking/booking-information/legal/terms-and-conditions-for-advertised-fares/"><#else><#global DISCLAIMER_URL_VAR = DISCLAIMER.DISCLAIMER_URL></#if>
</#data>

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
<#case "ROW"><#if SEGMENTED_ROW_YN == 'Y'><#if CONTACT.LANGUAGEID?lower_case == 'en-sg' || CONTACT.LANGUAGEID?lower_case == 'en_sg'><#global CURRENCY = "SGD"><#elseif CONTACT.LANGUAGEID?lower_case == 'es-ar'><#global CURRENCY = "USD"><#else><#global CURRENCY = "EUR"></#if></#if><#break>
<#case "PL"><#global CURRENCY = "EUR"><#break>
<#default><#global CURRENCY = "EUR"></#switch>

<#-- //////////////////////// OTHER VARIABLES /////////////////////////////////////////////////////-->
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
<#case "en-sg"><#if SEGMENTED_ROW_YN == 'Y'><#global WEBPAGE_MARKET = "SG"><#else><#global WEBPAGE_MARKET = "EN"></#if><#break>
<#case "en_sg"><#if SEGMENTED_ROW_YN == 'Y'><#global WEBPAGE_MARKET = "SG"><#else><#global WEBPAGE_MARKET = "EN"></#if><#break>
<#case "es-ar"><#if SEGMENTED_ROW_YN == 'Y'><#global WEBPAGE_MARKET = "AR"><#else><#global WEBPAGE_MARKET = "EN"></#if><#break>
<#default><#global WEBPAGE_MARKET = "EN"></#switch></#compress></#join>



<#-- WEBPAGE_URL_PATH<#join><#compress><#switch LANGUAGEID?lower_case>
    <#case "nb-no"><#global WEBPAGE_URL_PATH ="booking/fly/lavpris"><#break>
    <#case "sv-se"><#global WEBPAGE_URL_PATH ="bokning/flyg/lagpris"><#break>
    <#case "da-dk"><#global WEBPAGE_URL_PATH ="booking/fly/lavpris"><#break>
    <#case "fi-fi"><#global WEBPAGE_URL_PATH ="varaus/varaa-lento/hintakalenteri"><#break>
    <#case "de-de"><#global WEBPAGE_URL_PATH ="buchung/flug/preiskalender"><#break>
    <#case "en-us"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#case "en-gb"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#case "en-ie"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#case "es-es"><#global WEBPAGE_URL_PATH ="reserva/reserve-su-vuelo/preciosbaratos"><#break>
    <#case "fr-fr"><#global WEBPAGE_URL_PATH ="reservation/reservez-votre-vol/promos"><#break>
    <#case "pl-pl"><#global WEBPAGE_URL_PATH ="rezerwacja/zarezerwuj-przelot/tanie-polaczenia"><#break>
    <#case "it-it"><#global WEBPAGE_URL_PATH ="prenotazione/volo/low-price-calendar"><#break>
    <#case "nl-nl"><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"><#break>
    <#default><#global WEBPAGE_URL_PATH ="booking/flight-tickets/farecalendar"></#switch></#compress></#join> -->

<#-- WEBPAGE_URL_PATH TECHNICAL URL --><#global WEBPAGE_URL_PATH ="start/booking/farecalendar">

<#-- NL_PREFFERED_AIRPORT --><#if !PREFFERED_AIRPORT?isnull><#global NL_PREFFERED_AIRPORT = PREFFERED_AIRPORT></#if>


<#-- LOWFARE_FOOTER <#join><#compress><#switch MARKET>
<#case "NO"><#global LOWFARE_FOOTER ="https://www.norwegian.no/booking/fly/lavpriskalender/"><#break>
<#case "SE"><#global LOWFARE_FOOTER ="https://www.norwegian.com/se/bokning/flyg/lagpris/"><#break>
<#case "DK"><#global LOWFARE_FOOTER ="https://www.norwegian.com/dk/booking/fly/lavpris/"><#break>
<#case "FR"><#global LOWFARE_FOOTER ="https://www.norwegian.com/fr/reservation/reservez-votre-vol/promos/"><#break>
<#case "NL"><#global LOWFARE_FOOTER ="https://www.norwegian.com/nl/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "IT"><#global LOWFARE_FOOTER ="https://www.norwegian.com/it/prenotazione/volo/low-price-calendar/"><#break>
<#case "FI"><#global LOWFARE_FOOTER ="http://www.norwegian.com/fi/varaus/varaa-lento/hintakalenteri/"><#break>
<#case "DE"><#global LOWFARE_FOOTER ="http://www.norwegian.com/de/buchung/flug/preiskalender/"><#break>
<#case "US"><#global LOWFARE_FOOTER ="http://www.norwegian.com/us/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "IE"><#global LOWFARE_FOOTER ="http://www.norwegian.com/ie/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "SG"><#global LOWFARE_FOOTER ="http://www.norwegian.com/sg/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "UK"><#global LOWFARE_FOOTER ="http://www.norwegian.com/uk/booking/flight-tickets/low-fare-calendar/"><#break>
<#case "ES"><#global LOWFARE_FOOTER ="http://www.norwegian.com/es/reserva/reserve-su-vuelo/preciosbaratos/"><#break>
<#case "PL"><#global LOWFARE_FOOTER ="http://www.norwegian.com/pl/rezerwacja/zarezerwuj-przelot/tanie-polaczenia/"><#break>
<#case "ROW"><#global LOWFARE_FOOTER ="http://www.norwegian.com/en/booking/flight-tickets/low-fare-calendar/"><#break>
<#default><#global LOWFARE_FOOTER ="http://www.norwegian.com/en/booking/flight-tickets/low-fare-calendar/">
</#switch></#compress></#join>-->
 <#-- LOWFARE_FOOTER TECHNICAL URL --><#if MARKET == "NO"><#global LOWFARE_FOOTER ="https://www.norwegian.no/start/booking/farecalendar/"><#elseif MARKET == "ROW"><#global LOWFARE_FOOTER ="https://www.norwegian.com/en/start/booking/farecalendar/"><#else><#global LOWFARE_FOOTER ="https://www.norwegian.com/${MARKET?lower_case}/start/booking/farecalendar/"></#if>


<#-- HOMEPAGE_FOOTER --><#join><#compress><#switch MARKET>
<#case "NO"><#global HOMEPAGE_FOOTER ="https://www.norwegian.no"><#break>
<#case "SE"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/se"><#break>
<#case "DK"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/dk"><#break>
<#case "FR"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/fr"><#break>
<#case "NL"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/nl"><#break>
<#case "IT"><#global HOMEPAGE_FOOTER ="https://www.norwegian.com/it"><#break>
<#case "FI"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/fi"><#break>
<#case "DE"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/de"><#break>
<#case "US"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/us"><#break>
<#case "IE"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/ie"><#break>
<#case "SG"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/sg"><#break>
<#case "UK"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/uk"><#break>
<#case "ES"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/es"><#break>
<#case "PL"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/pl"><#break>
<#case "ROW"><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/en"><#break>
<#default><#global HOMEPAGE_FOOTER ="http://www.norwegian.com/en">
</#switch></#compress></#join>

<#-- SETTINGS_FOOTER <#join><#compress><#switch MARKET>
<#case "NO"><#global SETTINGS_FOOTER ="https://www.norwegian.no/ssl/mine-reiser/"><#break>
<#case "SE"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/se/mina-resor/"><#break>
<#case "DK"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/dk/mine-rejser/"><#break>
<#case "FR"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/fr/mes-voyages/"><#break>
<#case "NL"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/nl/my-travels/"><#break>
<#case "IT"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/it/i-miei-viaggi/"><#break>
<#case "FI"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/fi/minun-matkani/"><#break>
<#case "DE"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/de/meine-reisen/"><#break>
<#case "US"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/us/my-travels/"><#break>
<#case "IE"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/ie/my-travels/"><#break>
<#case "SG"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/sg/my-travels/"><#break>
<#case "UK"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/uk/my-travels/"><#break>
<#case "ES"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/es/mis-viajes/"><#break>
<#case "PL"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/pl/moje-podroze/"><#break>
<#case "ROW"><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/en/my-travels/"><#break>
<#default><#global SETTINGS_FOOTER ="https://www.norwegian.com/ssl/en/my-travels/">
</#switch></#compress></#join>-->

<#-- SETTINGS_FOOTER (new) -->
<#if NAS_PROFILE_YN == "Y">
    <#if MARKET == "NO"><#global SETTINGS_FOOTER = "https://www.norwegian.no/start/profile/edit">
    <#elseif MARKET == "ROW"><#global SETTINGS_FOOTER = "https://www.norwegian.com/en/start/profile/edit">
    <#else><#global SETTINGS_FOOTER = "https://www.norwegian.com/" + MARKET?lower_case + "/start/profile/edit">
    </#if>
<#else><#if MARKET == "NO"><#global SETTINGS_FOOTER = "https://www.norwegian.no/start/profile/create">
    <#elseif MARKET == "ROW"><#global SETTINGS_FOOTER = "https://www.norwegian.com/en/start/profile/create">
    <#else><#global SETTINGS_FOOTER = "https://www.norwegian.com/" + MARKET?lower_case + "/start/profile/create">
    </#if>
</#if>

<#-- CONTACT_FOOTER --><#join><#compress><#switch MARKET>
<#case "NO"><#global CONTACT_FOOTER ="https://www.norwegian.no/hjelp-og-kontakt/"><#break>
<#case "SE"><#global CONTACT_FOOTER ="http://www.norwegian.com/se/hjalp-och-kontakt/"><#break>
<#case "DK"><#global CONTACT_FOOTER ="http://www.norwegian.com/dk/hjaelp-og-kontakt/"><#break>
<#case "FR"><#global CONTACT_FOOTER ="https://www.norwegian.com/fr/aide-et-contact/"><#break>
<#case "NL"><#global CONTACT_FOOTER ="https://www.norwegian.com/nl/help-contact/"><#break>
<#case "IT"><#global CONTACT_FOOTER ="https://www.norwegian.com/it/assistenza-e-contatti/"><#break>
<#case "FI"><#global CONTACT_FOOTER ="http://www.norwegian.com/fi/ohjeet-ja-yhteystiedot/"><#break>
<#case "DE"><#global CONTACT_FOOTER ="https://www.norwegian.com/de/kontakt/"><#break>
<#case "US"><#global CONTACT_FOOTER ="http://www.norwegian.com/us/help-contact/"><#break>
<#case "IE"><#global CONTACT_FOOTER ="http://www.norwegian.com/ie/help-contact/"><#break>
<#case "SG"><#global CONTACT_FOOTER ="http://www.norwegian.com/sg/help-contact/"><#break>
<#case "UK"><#global CONTACT_FOOTER ="http://www.norwegian.com/uk/help-contact/"><#break>
<#case "ES"><#global CONTACT_FOOTER ="http://www.norwegian.com/es/ayuda-y-contacto/"><#break>
<#case "PL"><#global CONTACT_FOOTER ="http://www.norwegian.com/pl/pomoc-i-kontakt/"><#break>
<#case "ROW"><#global CONTACT_FOOTER ="http://www.norwegian.com/en/help-contact/"><#break>
<#default><#global CONTACT_FOOTER ="http://www.norwegian.com/en/help-contact/">
</#switch></#compress></#join>

<#-- UNSUBSCRIBE_VAR -->
<#-- newsletters and dialogues having different urls to unsubscribe <#join><#compress><#switch MARKET>
<#case "NO"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.no/om-oss/nyhetsbrev/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "SE"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/se/om-oss/nyhetsbrev/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "DK"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/dk/om-os/nyhedsbrev/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "FR"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/fr/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "NL"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/nl/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "IT"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/it/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "FI"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/fi/tietoja-meista/uutiskirje/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "DE"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/de/uber-uns/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "US"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/us/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "IE"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/ie/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "SG"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/sg/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "UK"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/uk/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "ES"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/es/acerca-de-nosotros/boletin-de-noticias/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "PL"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/pl/o-nas/biuletyn-informacyjny/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "ROW"><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/en/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#default><#global UNSUBSCRIBE_VAR ="http://www.norwegian.com/en/about/newsletter/newsletter-signoff/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID>
</#switch></#compress></#join>-->

<#-- UNSUBSCRIBE_VAR (new)-->
<#-- newsletters and dialogues having different urls to unsubscribe -->
<#if MARKET == "NO"><#global UNSUBSCRIBE_VAR = "https://www.norwegian.no/start/newsletter/signoff?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#elseif MARKET == "ROW"><#global UNSUBSCRIBE_VAR = "https://www.norwegian.com/en/start/newsletter/signoff?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#else><#global UNSUBSCRIBE_VAR = "https://www.norwegian.com/" + MARKET?lower_case + "/start/newsletter/signoff?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID></#if>

<#-- RESTRICTIONS_FOOTER --><#join><#compress><#switch MARKET>
<#case "US"><#global RESTRICTIONS_FOOTER ="http://www.norwegian.com/us/customer-services/travel-information/lowfare-conditions/"><#break>
<#case "UK"><#global RESTRICTIONS_FOOTER ="http://www.norwegian.com/uk/customer-services/travel-information/lowfare-conditions/"><#break>
</#switch></#compress></#join>

<#-- BAGGAGE_FEES_FOOTER --><#join><#compress><#switch MARKET>
<#case "US"><#global BAGGAGE_FEES_FOOTER ="http://www.norwegian.com/us/customer-services/travel-information/optional-services-and-charges/"><#break>
<#case "UK"><#global BAGGAGE_FEES_FOOTER ="http://www.norwegian.com/uk/customer-services/travel-information/optional-services-and-charges"><#break>
</#switch></#compress></#join>

<#-- PERSONAL_INFORMATION --><#join><#compress><#switch MARKET>
<#case "NO"><#global PERSONAL_INFORMATION ="https://www.norwegian.no/booking/bestillingsinformasjon/regler-og-vilkar/personvern/"><#break>
<#case "SE"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/se/bokning/praktisk-bokningsinformation/regler-och-villkor/sekretesspolicy/"><#break>
<#case "DK"><#global PERSONAL_INFORMATION ="http://www.norwegian.com/dk/booking/bookingoplysninger/juridisk/politik-om-beskyttelse-af-personlige-oplysninger/"><#break>
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
<#case "ROW"><#global PERSONAL_INFORMATION ="https://www.norwegian.com/en/booking/booking-information/legal/privacy-policy/"><#break>
<#default><#global PERSONAL_INFORMATION ="https://www.norwegian.com/en/booking/booking-information/legal/privacy-policy/">
</#switch></#compress></#join>

<#-- MY_PROFILE_URL --><#join><#compress><#switch MARKET>
<#case "NO"><#global MY_PROFILE_URL ="https://www.norwegian.no/ssl/mine-reiser/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "SE"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/se/mina-resor/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "DK"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/dk/mine-rejser/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "FR"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/fr/mes-voyages/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "NL"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/nl/my-travels/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "IT"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/it/i-miei-viaggi/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "FI"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/fi/minun-matkani/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "DE"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/de/meine-reisen/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "US"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/us/my-travels/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "IE"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/ie/my-travels/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "SG"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/sg/my-travels/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "UK"><#global MY_PROFILE_URL ="http://www.norwegian.com/ssl/uk/my-travels/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "ES"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/es/mis-viajes?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "PL"><#global MY_PROFILE_URL ="http://www.norwegian.com/ssl/pl/moje-podroze/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#case "ROW"><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/en/my-travels/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID><#break>
<#default><#global MY_PROFILE_URL ="https://www.norwegian.com/ssl/en/my-travels/?salt=" + NL_UNSUB_ID + "&profileid=" + NL_PROFILE_ID>
</#switch></#compress></#join>

<#-- CREATE_PROFILE_URL --><#join><#compress><#switch MARKET>
<#case "NO"><#global CREATE_PROFILE_URL ="https://www.norwegian.no/ssl/mine-reiser/#/profile/create"><#break>
<#case "SE"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/se/mina-resor/#/profile/create"><#break>
<#case "DK"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/dk/mine-rejser/#/profile/create"><#break>
<#case "FR"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/fr/mes-voyages/#/profile/create"><#break>
<#case "NL"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/nl/my-travels/#/profile/create"><#break>
<#case "IT"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/it/i-miei-viaggi/#/profile/create"><#break>
<#case "FI"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/fi/minun-matkani/#/profile/create"><#break>
<#case "DE"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/de/meine-reisen/#/profile/create"><#break>
<#case "US"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/us/my-travels/#/profile/create"><#break>
<#case "IE"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/ie/my-travels/#/profile/create"><#break>
<#case "SG"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/sg/my-travels/#/profile/create"><#break>
<#case "UK"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/uk/my-travels/#/profile/create"><#break>
<#case "ES"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/es/mis-viajes/#/profile/create"><#break>
<#case "PL"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/pl/moje-podroze/#/profile/create"><#break>
<#case "ROW"><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/en/my-travels/#/profile/create"><#break>
<#default><#global CREATE_PROFILE_URL ="https://www.norwegian.com/ssl/en/my-travels/#/profile/create"><#break>
</#switch></#compress></#join>

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
<#case "ROW"><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com"/><#break>
<#default><#global HAS_REWARD_PROFILE ="https://en.norwegianreward.com/"><#break>
</#switch></#compress></#join>

<#-- WEBVERSION_URL --><#global WEBVERSION_URL =form(CAMPAIGN, "LANGUAGEID", "MARKET", "DESTINATION_IATA", "FIRSTNAME", "SURNAME", "EMAIL_ADDRESS_", "REWARD_YN","NL_PROFILE_ID","NL_UNSUB_ID","REWARD_NUMBER","CASHPOINTS","PREFFERED_AIRPORT")>

<#-- FACEBOOK_URL --><#join><#compress><#switch MARKET>
<#case "NO"><#global FACEBOOK_URL = "https://www.facebook.com/flynorwegian"><#break>
<#case "SE"><#global FACEBOOK_URL = "https://www.facebook.com/NorwegianSverige"><#break>
<#case "DK"><#global FACEBOOK_URL = "https://www.facebook.com/NorwegianDanmark"><#break>
<#default><#global FACEBOOK_URL = "https://www.facebook.com/flynorwegian"></#switch></#compress></#join>

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
<#case "SG"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "UK"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#case "ES"><#global SEARCH_COMMERCIAL_TEXT ="Ofrecido por"><#break>
<#case "PL"><#global SEARCH_COMMERCIAL_TEXT ="Wspierany przez"><#break>
<#case "ROW"><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
<#default><#global SEARCH_COMMERCIAL_TEXT ="Powered by"><#break>
</#switch></#compress></#join>

<#-- PRICE_TO --><#global PRICE_TO = "Not in use">
<#-- PRICE_FROM --><#global PRICE_FROM = "Not in use">
<#-- PRIVACY_RULE --><#global PRIVACY_RULE = "Not in use">
<#-- CONTACT_US --><#global CONTACT_US = "Not in use">
<#-- SETTINGS --><#global SETTINGS = "Not in use">
<#-- DEST_URL <#global DEST_URL = "Not in use">-->
