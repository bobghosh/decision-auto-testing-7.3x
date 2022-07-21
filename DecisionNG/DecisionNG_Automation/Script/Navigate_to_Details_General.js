function Navigate_to_Details_General()
{
  
  Aliases.browser.pageSapiensDecision2.FindElement("//li[contains(., 'GENERAL')]").Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//li[contains(., 'GENERAL')]"), "className", cmpContains, "ng-star-inserted");
}
module.exports.Navigate_to_Details_General = Navigate_to_Details_General;