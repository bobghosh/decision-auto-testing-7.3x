function Navigate_Details_tab_verify()
{
  var page = Aliases.browser.pageSapiensDecision2
  let detailsTab= page.FindElement("//div[contains(@class,'navigation-menu__item__details ng-star-inserted')]");
  let detailsClass= detailsTab.getAttribute('class');
  if(!detailsClass.includes('navigation-menu__item--selected'))
  {
    detailsTab.Click();
    Delay(2000)
    let detailsClassAfterselection=detailsTab.getAttribute('class')
    if(detailsClassAfterselection.includes('navigation-menu__item--selected'))
    {
      Log.Checkpoint("Details Tab selected successfully");
    }
    else
    {
      Log.Warning("Details Tab not selected");
    }
  }
  else
  {
    Log.Message("Details Tab is selected prior no actions needed")
  }
}
module.exports.Navigate_Details_tab_verify = Navigate_Details_tab_verify;