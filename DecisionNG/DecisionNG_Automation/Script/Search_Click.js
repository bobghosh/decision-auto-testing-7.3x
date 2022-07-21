function Search_Click()
{
  Aliases.browser.pageSapiensDecision.FindElement("//i[@class='icon-search icon']").Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panelQuickSearch, "Exists", cmpEqual, true);

  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.formF.labelQuickSearch, "contentText", cmpEqual, "Quick Search");
}