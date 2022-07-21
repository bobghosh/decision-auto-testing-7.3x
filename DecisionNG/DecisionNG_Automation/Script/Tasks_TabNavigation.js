function User_Tasks_Navigate_Tabs()
{
  let page = Aliases.browser.pageSapiensDecision2
  page.FindElement("//*[@class='task-component']//*[text()='Decisions']").Click();
  page.WaitElement(page.FindElement("//tbody//tr"),20000);
}