//Pre-requisite - User without permission
function Verify_MD_without_permission()
{
  //Clicks the 'linkModelDefinition' link without Model Definition Read Permission
  let MD = Aliases.browser.pageSapiensDecision2.linkModelDefinition;
  //Checks whether the 'contentText' property of the Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary object equals 'Model Definition'.
  aqObject.CheckProperty(MD, "Enabled", cmpEqual, "false");
}