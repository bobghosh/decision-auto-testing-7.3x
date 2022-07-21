function Verify_Asset_Availability_in_Revision_Task()
{
  let Tabs_Assets = "Decisions-er (View: 2014) [V1.0],D-Mortgage Debt Total Monthly Payment Amount (View: Base) [V1.7]";
  let Asset_Type_Name = Tabs_Assets.split(',');
  let i;
  
  for(var m = 0; m <Asset_Type_Name.length ; m++)
  { 
    let Asset = Asset_Type_Name[m].split('-')
    let AssetName = Asset[1];
    
    let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
  
    for( i = 1; i <=AssetList.length ; i++)
    {
      let Asset_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[3]").textContent;
           
      if(Asset_Name.trim() == AssetName)
      {
        Log.Message(AssetName + " Asset is Available");
      }
    }
    
    i = 1;
    
  }
}