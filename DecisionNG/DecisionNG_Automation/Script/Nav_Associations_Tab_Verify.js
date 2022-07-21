function Navigate_Associations_tab_verify()
{
  var page = Aliases.browser.pageSapiensDecision2
  let associationsTab= page.FindElement("//div[contains(@class,'navigation-menu__item__knowledgeSourcesAssociations ng-star-inserted')]");
  let associationsClass= associationsTab.getAttribute('class');
  if(!associationsClass.includes('navigation-menu__item--selected'))
  {
    associationsTab.Click();
    Delay(2000)
    let associationsClassAfterselection=associationsTab.getAttribute('class')
    if(associationsClassAfterselection.includes('navigation-menu__item--selected'))
    {
      Log.Checkpoint("Associations Tab selected successfully");
    }
    else
    {
      Log.Warning("Associations Tab not selected");
    }
  }
  else
  {
    Log.Message("Associations Tab is selected prior no actions needed")
  }
}
module.exports.Navigate_Associations_tab_verify = Navigate_Associations_tab_verify;