function Split_button()
{
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();

}

function Reject_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Reject']").Click();

}

function Approve_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Approve']").Click();
  Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Deploy ']").WaitProperty("Exists", true, 10000);
  
  Log.Message("Revision Task is Approved");
  
}