function Navigate_Decision_Flows_tab_verify()
{
  var page = Aliases.browser.pageSapiensDecision2
  let decisionFlowsTab= page.FindElement("//div[contains(@class,'navigation-menu__item__decisionFlows ng-star-inserted')]");
  let decisionFlowsClass= decisionFlowsTab.getAttribute('class');
  if(!decisionFlowsClass.includes('navigation-menu__item--selected'))
  {
    decisionFlowsTab.Click();
    Delay(2000)
    let decisionFlowsClassAfterselection=decisionFlowsTab.getAttribute('class')
    if(decisionFlowsClassAfterselection.includes('navigation-menu__item--selected'))
    {
      Log.Checkpoint("Decision Flows Tab selected successfully");
    }
    else
    {
      Log.Warning("Decision Flows Tab not selected");
    }
  }
  else
  {
    Log.Message("Decision Flows Tab is selected prior no actions needed")
  }
}
module.exports.Navigate_Decision_Flows_tab_verify = Navigate_Decision_Flows_tab_verify;