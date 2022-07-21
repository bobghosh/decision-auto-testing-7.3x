function DecisionFlow_Tab(SearchAsset)
{
  
  let Asset = Aliases.browser.pageSapiensDecision.FindElements("//div//p-tabpanel[1]//dcn-expandable-selectable-list-item");

  if(Asset.length > 0)
  {
      for(var i = 1 ; i <=Asset.length ; i++)
      {
        let assetName =  Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[1]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//a");
    
        if(assetName.textContent == SearchAsset)
        {
          Log.Checkpoint("Asset is available");
          Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[4]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//i").click();
//        assetName.Click();
      
          Log.Message("Asset is selected");
          break;
        }
    
      }
  }
  else
  {
    Log.Message("No Asset is present")
  }
}

function Decisions_Tab(SearchAsset)
{
  
  let Asset = Aliases.browser.pageSapiensDecision.FindElements("//div//p-tabpanel[2]//dcn-expandable-selectable-list-item");
  if(Asset.length > 0)
  {
      for(var i = 1 ; i <=Asset.length ; i++)
      {
        let assetName =  Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[2]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//a");
    
        if(assetName.textContent == SearchAsset)
        {
          Log.Checkpoint("Asset is available");
          Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[4]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//i").click();
//        assetName.Click();
      
          Log.Message("Asset is selected");
          break;
        }
    
      }
  }
  else
  {
    Log.Message("No Asset is present")
  }
  
}

function RuleFamilies_Tab(SearchAsset)
{
  
  let Asset = Aliases.browser.pageSapiensDecision.FindElements("//div//p-tabpanel[3]//dcn-expandable-selectable-list-item");

  if(Asset.length > 0)
  {
      for(var i = 1 ; i <=Asset.length ; i++)
      {
        let assetName =  Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[3]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//a");
    
        if(assetName.textContent == SearchAsset)
        {
          Log.Checkpoint("Asset is available");
          Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[4]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//i").click();
//        assetName.Click();
      
          Log.Message("Asset is selected");
          break;
        }
    
      }
  }
  else
  {
    Log.Message("No Asset is present")
  }
  
}

function FactTypes_Tab(SearchAsset)
{
  
  let Asset = Aliases.browser.pageSapiensDecision.FindElements("//div//p-tabpanel[4]//dcn-expandable-selectable-list-item");

  if(Asset.length > 0)
  {
      for(var i = 1 ; i <=Asset.length ; i++)
      {
        let assetName =  Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[4]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//a");
    
        if(assetName.textContent == SearchAsset)
        {
          Log.Checkpoint("Asset is available");
          
          Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[4]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//i").click();
//          to open the Asset assetName.Click();
      
          Log.Message("Asset is selected");
          break;
        }
    
      }
  }
  else
  {
    Log.Message("No Asset is present")
  }
  
}

function KnowledgeSources_Tab(SearchAsset)
{
  
  let Asset = Aliases.browser.pageSapiensDecision.FindElements("//div//p-tabpanel[5]//dcn-expandable-selectable-list-item");

  if(Asset.length > 0)
  {
      for(var i = 1 ; i <=Asset.length ; i++)
      {
        let assetName =  Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[5]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//a");
    
        if(assetName.textContent == SearchAsset)
        {
          Log.Checkpoint("Asset is available");
          Aliases.browser.pageSapiensDecision.FindElement("//div//p-tabpanel[5]//dcn-expandable-selectable-list-item["+i +"]//dcn-asset-display-details-name//i").click();
//        assetName.Click();
      
          Log.Message("Asset is selected");
          break;
        }
    
      }
  }
  else
  {
    Log.Message("No Asset is present")
  }
  
}
module.exports.DecisionFlow_Tab = DecisionFlow_Tab;
module.exports.Decisions_Tab = Decisions_Tab;
module.exports.RuleFamilies_Tab = RuleFamilies_Tab;
module.exports.FactTypes_Tab = FactTypes_Tab;
module.exports.KnowledgeSources_Tab = KnowledgeSources_Tab;