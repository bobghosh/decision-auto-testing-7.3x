function Navigate_Decisions_tab_verify()
{
  var page = Aliases.browser.pageSapiensDecision2
  let decisionsTab= page.FindElement("//div[contains(@class,'item__decisions')]");
  let decisionsClass= decisionsTab.getAttribute('class');
  if(!decisionsClass.includes('navigation-menu__item--selected'))
  {
    decisionsTab.Click();
    Delay(2000)
    let decisionsClassAfterselection=decisionsTab.getAttribute('class')
    if(decisionsClassAfterselection.includes('navigation-menu__item--selected'))
    {
      Log.Checkpoint("Decisions Tab selected successfully");
    }
    else
    {
      Log.Warning("Decisions Tab not selected");
    }
  }
  else
  {
    Log.Message("Decisions Tab is selected prior no actions needed")
  }
}
module.exports.Navigate_Decisions_tab_verify = Navigate_Decisions_tab_verify;