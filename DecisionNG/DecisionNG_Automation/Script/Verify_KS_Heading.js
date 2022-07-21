function Verify_KS_Heading_on_pop_up()
{
  let kSName = "KS13 [1.0]";
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, kSName);
}