var Perform_Click_On_Element = require("Perform_Click_On_Element");
var page = Aliases.browser.pageSapiensDecision
function Revision_Details_Click()
{
 Perform_Click_On_Element.Perform_Click_On_Element("//dcn-revision//dcn-navigation-menu//*[text()='Revision Details']") 
}
function Assets_Click()
{
  Perform_Click_On_Element.Perform_Click_On_Element("//dcn-revision//dcn-navigation-menu//*[text()='Assets']")
}
function Revision_Tasks_Click()
{
  Perform_Click_On_Element.Perform_Click_On_Element("//dcn-revision//dcn-navigation-menu//*[contains(text(),'Revision Tasks')]")
}
function Deployment_History()
{
  Perform_Click_On_Element.Perform_Click_On_Element("//dcn-revision//dcn-navigation-menu//*[contains(text(),'Deployment History')]")
}
function Mapped_Entities()
{
  Perform_Click_On_Element.Perform_Click_On_Element("//dcn-revision//dcn-navigation-menu//*[text()='Mapped Entities']");
}