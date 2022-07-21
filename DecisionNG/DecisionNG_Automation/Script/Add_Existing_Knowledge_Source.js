var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var Assets_Ellipses_Options = require("Assets_Ellipses_Options");

//Add the existing Approved or Draft Knowledge Source(which is available in same task)
function Add_Existing_Knowledge_Source()
{
  Assets_Ellipses_Options.Assets_Ellipses_Options("Knowledge Source");
  
  let knowledgeSourceName = "Test [1.09]";
  
  let knowledgeSourceTextbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//p-autocomplete//input"); 
  knowledgeSourceTextbox.SetText(knowledgeSourceName);
  
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(knowledgeSourceName,"No");
}