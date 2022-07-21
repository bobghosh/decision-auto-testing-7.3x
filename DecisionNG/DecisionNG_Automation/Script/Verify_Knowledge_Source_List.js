var Assets_Ellipses_Options = require("Assets_Ellipses_Options");

//Get all the KS list for the Asset
function View_All_Knowledge_Source_in_the_List()
{
  //User should be on Asset Screen
  //CLick on Ellipse to Open Knowledge Source pop up
  //Verify the pop up heading should contains Associated Knowledge Sources
  Assets_Ellipses_Options.Assets_Ellipses_Options("Knowledge Source");
  
  let knowledgeSourceList = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//dcn-asset-knowledge-sources-list/div");
  if(knowledgeSourceList.length > 0)
  {
    for(var i = 1; i <= knowledgeSourceList.length ; i++)
    {
      let knowledgeSource = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-asset-knowledge-sources-list/div["+i+"]");
      
      Log.Message(knowledgeSource.textContent + " is associated with the Asset")

    }
  }
  else
  {
    Log.Message("No Knowledge Source associated with the Asset");
  }
  
}