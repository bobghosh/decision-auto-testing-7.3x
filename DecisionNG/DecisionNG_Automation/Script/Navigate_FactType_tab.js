function Navigate_FactType_tab_verify()
{
  var page = Aliases.browser.pageSapiensDecision2
  let factTypesTab= page.FindElement("//div[contains(@class,'navigation-menu__item__factTypes ng-star-inserted')]");
  let ftClass= factTypesTab.getAttribute('class');
  if(!ftClass.includes('navigation-menu__item--selected'))
  {
    factTypesTab.Click();
    Delay(2000)
    let ftClassAfterselection=factTypesTab.getAttribute('class')
    if(ftClassAfterselection.includes('navigation-menu__item--selected'))
    {
      Log.Checkpoint("FactType Tab selected successfully");
    }
    else
    {
      Log.Warning("FactType Tab not selected");
    }
  }
  else
  {
    Log.Message("FactType Tab is selected prior no actions needed")
  }
}
module.exports.Navigate_FactType_tab_verify = Navigate_FactType_tab_verify;