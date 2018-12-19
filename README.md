### 19/12/18  Inclusion file for Abandon Basket email BW
We will start segmenting the abandon basket email on some popular destinations, using the SEGMENTATION_1_COL table. In addition, the global dialogue variables file has a lot of data calls not needed for the abandon basket campiagn. So I made a new variable inclusion file to be used for the abandon basket campaign, called abandon_basket.htm, located in the Global Variables folder.

### 06/04/18  DIALOGUE E_LH_3DA_MAX airport transer JM
The url is now going to the cartrawler page but is not showing transport options, issue raised with laura 12.20pm, the campaign now has content for airport transfer JM

### 06/04/18  DIALOGUE E_LH_3DA_MAX_DISABLED JM
was created due to AIRPORT_TRANSFER_URL in dialogue_variables unavailable to be used because E_LH_3DA_MAX uses the old template. I will enable this ARTICLE to work now for this campaign E_LH_3DA_MAX by putting the variables into datasources or by seeing what the current car rental link uses and use the same variables if possible JM
