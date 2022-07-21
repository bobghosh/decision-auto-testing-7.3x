function Navigate_Knowledge_Sources_tab_verify()
{
  var page = Aliases.browser.pageSapiensDecision2
  let knowledgeSourcesTab= page.FindElement("//div[contains(@class,'navigation-menu__item__knowledgeSources ng-star-inserted')]");
  let ksClass= knowledgeSourcesTab.getAttribute('class');
  if(!ksClass.includes('navigation-menu__item--selected'))
  {
    knowledgeSourcesTab.Click();
    Delay(2000)
    let ksClassAfterselection=knowledgeSourcesTab.getAttribute('class')
    if(ksClassAfterselection.includes('navigation-menu__item--selected'))
    {
      Log.Checkpoint("Knowledge Source Tab selected successfully");
    }
    else
    {
      Log.Warning("Knowledge Source Tab not selected");
    }
  }
  else
  {
    Log.Message("Knowledge Source Tab is selected prior no actions needed")
  }
}
module.exports.Navigate_Knowledge_Sources_tab_verify = Navigate_Knowledge_Sources_tab_verify;