var QuickSearch_SearchAllVersions = require("QuickSearch_SearchAllVersions");
var Search_Results_Tabs = require("Search_Results_Tabs");
function QuickSearch_Input_Search(TabName,userInput)
{
//  let TabName = "Knowledge Sources";
  let SearchAsset;
  
//  let userInput = "Condo Project Guide: 2.1.7 Special Assessments [V1]";
  
  if(TabName == "Decisions" || TabName == "Rule Families")
  {
    SearchAsset = userInput.split('(');
  }
  else if(TabName == "Decision Flows" || TabName == "Fact Types" || TabName == "Knowledge Sources")
  {
    SearchAsset = userInput.split('[');
  }
  SearchAsset[0]
  Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Search asset by name']").SetText(SearchAsset[0]); 
  
//  QuickSearch_SearchAllVersions.QuickSearch_SearchAllVersions_Checkbox();
  
  Aliases.browser.pageSapiensDecision.FindElement("//button[text()=' Search ']").Click(); 
  
  
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(text(),'"+ TabName +"')]").Click(); 

//  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(text(),'Searching')]").WaitProperty("Exists", false, 100000)
//  SelectAssetTab_Search(TabName);
  
  Delay(5000);
  switch(TabName)
  {
    case "Decision Flows":{      
                              Search_Results_Tabs.DecisionFlow_Tab(userInput);
                              break;
                          }
                          
    case "Decisions":     {      
                              Search_Results_Tabs.Decisions_Tab(userInput);
                              break;
                          }
                          
    case "Rule Families": {      
                              Search_Results_Tabs.RuleFamilies_Tab(userInput);
                              break;
                          }
                          
    case "Fact Types":    {      
                              Search_Results_Tabs.FactTypes_Tab(userInput);
                              break;
                          }
                          
     case "Knowledge Sources":{      
                                Search_Results_Tabs.KnowledgeSources_Tab(userInput);
                                break;
                              }
                              
     default:                 {
                                Log.Error("Tab Name doesn't Match");  
                                break;
                              }
      
                              
                      
  }
  
}
 //*[contains(text(),'Decision Flows')]
  //*[contains(text(),'Decisions')]
  //*[contains(text(),'Rule Families')]
  //*[contains(text(),'Fact Types')]
  //*[contains(text(),'Knowledge Sources')]

