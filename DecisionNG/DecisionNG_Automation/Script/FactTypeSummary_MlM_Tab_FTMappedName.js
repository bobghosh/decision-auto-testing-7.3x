function FactTypeSummary_MlM_Tab_FTMappedName(MappedName)
{
  Aliases.browser.pageSapiensDecision.FindElement("//input[@name='FactTypeMappedName']").Click()
  Aliases.browser.pageSapiensDecision.FindElement("//input[@name='FactTypeMappedName']").SetText(MappedName);
  aqObject.CompareProperty(Aliases.browser.pageSapiensDecision.FindElement("//input[@name='FactTypeMappedName']").Text, 0, MappedName, true, 1);
}