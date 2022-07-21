function KS_Details()
{
  let knowledgeSourceName = "KS12" ;
  let UserVersionIdentifier = "1.0";
  let KnowledgeSourceType = "KS";
  
  
  let DetailsTab = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//p-accordiontab[1]//span[contains(@class,'ui-accordion-toggle-icon')]");
  if(DetailsTab.getAttribute("class").includes("pi-chevron-right"))
  {
    DetailsTab.click();
  }
  
  let kSName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[1]//div[@class='fx-field--inputAndError']//input").Text;
  
  Log.Message("Knowledge Source Name - "+ kSName);
  
  let versionIdentifier = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[2]//div[@class='fx-field--inputAndError']//input").Text;
  Log.Message("Version Identifier - "+ versionIdentifier);
  
  Log.Message("Description - "+ Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[3]//div[@class='fx-field--inputAndError']//textarea").textContent);
  
  let kSType = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-knowledge-source-details//fx-field[4]//div[@class='fx-field--inputAndError']//input").Text;
  Log.Message("Knowledge Source Type - "+ kSType);
  
  if(knowledgeSourceName  == kSName)
  {
    Log.Checkpoint("Correct Knowledge Source name is displayed")
  }
  else
  {
    Log.Error("Incorrect Knowledge Source name is displayed");
  }
  
  if(UserVersionIdentifier  == versionIdentifier)
  {
    Log.Checkpoint("Correct Version Identifier is displayed")
  }
  else
  {
    Log.Error("Incorrect Version Identifier is displayed");
  }
  
  if(KnowledgeSourceType  == kSType)
  {
    Log.Checkpoint("Correct Knowledge Source Type is displayed")
  }
  else
  {
    Log.Error("Incorrect Knowledge Source Type is displayed");
  }
  
}

function KS_Associations()
{
  let userInputAssetName = "Weather (View: Base) [V1.0]";
  let userInputIcon = "icon-decision_view icon";
  //icon-decision_view icon
  //icon-rule_family_view icon 
  
  let AssociationsTab = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//p-accordiontab[2]//span[contains(@class,'ui-accordion-toggle-icon')]");
  if(AssociationsTab.getAttribute("class").includes("pi-chevron-right"))
  {
    AssociationsTab.click();
  }
  
  let assetList = Aliases.browser.pageSapiensDecision2.FindElements("//dcn-dialog//dcn-knowledge-source-associations/div/div");
    
  for(var i = 1; i <= assetList.length ; i++)
  {
    let assetIcon = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//dcn-knowledge-source-associations/div/div[" +i+ "]//i");
    let assetName = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//dcn-knowledge-source-associations/div/div[" +i+ "]//span[contains(@class,'knowledge-source-association__item--name')]");
    
    if(assetIcon.getAttribute("class").includes(userInputIcon) && (assetName.textContent).includes(userInputAssetName))
    {
      Log.Checkpoint(assetName.textContent + " Decision is available");
      break;
    }
    else if(assetIcon.getAttribute("class").includes(userInputIcon) && (assetName.textContent).includes(userInputAssetName))
    {
      Log.Checkpoint(assetName.textContent + " Rule Family is available");
      break;
    }    
  
  }
  
}