when adding tracking to utm and need to use data from CONTACTS, responsys has to do a data call to CONTACT from the datasources, I think because the tracking code loads before the datasources and dialogue_variables

```
//email_origin
<#data CONTACT as E_ORIGIN limit=1><#filter RIID_ = RIID_><#fields NEWSL_RECRUITMENT_CHANNEL>
<#if E_ORIGIN.NEWSL_RECRUITMENT_CHANNEL?isnull>ORG<#else>${E_ORIGIN.NEWSL_RECRUITMENT_CHANNEL?substring(0, 2)}</#if>
</#data>
<#-- this variable prints out in the utm tracking, it has to be in datasources because the tracking code loads before newsletter_variables, it also has to run a data call to the CONTACT otherwise it does not obtain the value -->
```
