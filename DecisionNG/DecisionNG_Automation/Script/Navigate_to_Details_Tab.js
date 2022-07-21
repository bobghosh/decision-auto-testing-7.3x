function Navigate_to_Details_Tab()
{
  //Clicks the 'textnodeDetails' control.
  Aliases.browser.pageSapiensDecision2.textnodeDetails.Click();
  //Checks whether the 'className' property of the Aliases.browser.pageSapiensDecision.panelDetails object contains 'navigation-menu__item--selected'.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panelDetails, "className", cmpContains, "navigation-menu__item--selected");
}
module.exports.Navigate_to_Details_Tab = Navigate_to_Details_Tab;