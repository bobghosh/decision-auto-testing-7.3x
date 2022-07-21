function Navigate_RuleFamily_tab_verify()
{
  var page = Aliases.browser.pageSapiensDecision2
  let rulefamilyTab= page.FindElement("//div[contains(@class,'navigation-menu__item__ruleFamilies ng-star-inserted')]");
  let rfClass= rulefamilyTab.getAttribute('class');
  if(!rfClass.includes('navigation-menu__item--selected'))
  {
    rulefamilyTab.Click();
    Delay(2000)
    let rfClassAfterselection=rulefamilyTab.getAttribute('class')
    if(rfClassAfterselection.includes('navigation-menu__item--selected'))
    {
      Log.Checkpoint("Rule Family Tab selected successfully");
    }
    else
    {
      Log.Warning("Rule Family Tab not selected");
    }
  }
  else
  {
    Log.Message("Rule Family Tab is selected prior no actions needed")
  }
}
module.exports.Navigate_RuleFamily_tab_verify = Navigate_RuleFamily_tab_verify;