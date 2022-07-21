function Selected_Assets()
{

  Aliases.browser.pageSapiensDecision2.textnode2.textnodeStartANewTask.linkStartANewTask.textnodeSelectedAssets.Click();
    
  //Selected Assets should be selected
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnode2.textnodeSelectedAssets2, "className", cmpContains, "ui-tabview-selected");

  let Tabs_Assets = "Decision-Rental Income DF  [V1.0],Decision-DF123 [V1.3],Decision-Mortgage DTI Ratio Compliance Indicator (View: Base) [V1.7]";
  let Tab_Asset = Tabs_Assets.split(',');
  for(var i =0; i <Tab_Asset.length ; i++)
  {
    let Asset = Tab_Asset[i].split('-');
    
    let AssetType = Asset[0];
    let AssetName = Asset[1];
    let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//*[@aria-hidden='false']//tbody//tr");
    
//    Log.Message(AssetList.length);
    
    for(var j = 1; j <= AssetList.length ; j++)
    {
      var AssetNameAvailable = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@aria-hidden='false']//tbody//tr["+j+"]//td[1]");
      if(AssetNameAvailable.textContent.trim() == AssetName)
      {
        Log.Message("Asset is available");
        Log.Message(AssetNameAvailable.textContent + " " + AssetName)
      }    
    
    }
    
  }
  

}
