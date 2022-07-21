function ModelMapping()
{
  
  Aliases.browser.pageSapiensDecision2.textnodeTest.Click();
  Aliases.browser.pageSapiensDecision2.panel15.Click();
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnode11.textnode12.linkRevert, "isContentEditable", cmpEqual, false);
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.Click();
  Aliases.browser.pageSapiensDecision.form.form2.form4.textbox2.SetText("MM Na,me");
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel16, "contentText", cmpEqual, "Fact Type has no allowed values");
}