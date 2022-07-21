function EditDecisionFromRepositoryScreen(decisionName,taskName)
{
  let page = Aliases.browser.pageSapiensDecision2
  page.FindElement("//a[text()='"+decisionName+" ']").Click()
  page.FindElement("//div//span[text()='EDIT']").Clcik()
  
  page.FindElement("//div//span[text()='"+taskName+"']").Click
}