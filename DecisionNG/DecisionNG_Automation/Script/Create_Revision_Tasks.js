var Revision_Buttons = require("Revision_Buttons");
function Create_Revision_Tasks()
{
  Revision_Buttons.Create_Revision_Task().Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeRevision, "contentText", cmpEqual, "Revision Task");

}
