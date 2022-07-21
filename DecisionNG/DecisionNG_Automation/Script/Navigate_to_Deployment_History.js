function Navigate_to_Deployment_History()
{
  //Clicks the 'textnodeDeploymentHistory' control.
  Aliases.browser.pageSapiensDecision2.textnodeDeploymentHistory.Click();
  //Checks whether the 'contentText' property of the Aliases.browser.pageSapiensDecision2.textnodeDeploymentHistory object equals 'Deployment History'.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeDeploymentHistory, "contentText", cmpEqual, "Deployment History");
}
module.exports.Navigate_to_Deployment_History = Navigate_to_Deployment_History;