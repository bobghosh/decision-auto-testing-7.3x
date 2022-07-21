function Navigate_to_Details_Audit()
{
  //Clicks the 'textnodeAudit' control.
  //Aliases.browser.pageSapiensDecision2.textnode2.linkUiTabpanel17Label.textnodeAudit.Click();
  Aliases.browser.pageSapiensDecision2.FindElement("//li[contains(., 'AUDIT')]").Click();
  //Checks whether the 'className' property of the Aliases.browser.pageSapiensDecision.textnodeGeneral.textnodeAudit object contains 'ui-tabview-selected ui-state-active'.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//li[contains(., 'AUDIT')]"), "className", cmpContains, "ng-star-inserted");
}
module.exports.Navigate_to_Details_Audit = Navigate_to_Details_Audit;