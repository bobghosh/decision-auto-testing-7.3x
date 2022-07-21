var Assets_Ellipses_Options = require("Assets_Ellipses_Options");

//Verify the Specific KS available for the Asset
//Details and association should be verified through separate function/script
function Verify_Specific_KS_Availability_in_the_List()
{
  //User should be on Asset Screen
  //Click on Ellipse to Open Knowledge Source pop up
  //Verify the pop up heading should contains Associated Knowledge Sources
  Assets_Ellipses_Options.Assets_Ellipses_Options("Knowledge Source");
  
  let knowledgeSourceList = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//dcn-asset-knowledge-sources-list/div");
  
  if(knowledgeSourceList.length > 0)
  {
    for(var i = 1; i <= knowledgeSourceList.length ; i++)
    {
      let knowledgeSource = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//dcn-asset-knowledge-sources-list/div["+i+"]");
      
      if(knowledgeSource.textContent == " Test [1.09]")
      {
        Log.Message(knowledgeSource.textContent + " is available in the list")
        
        knowledgeSource.click();
        
        Log.Message("Knowledge Source is opened");
  
        break;
      }
    }
  }
  else
  {
    Log.Message("No Knowledge Source is associated with the Asset");
  }
}