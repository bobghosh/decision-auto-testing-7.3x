function Claim_and_Open_button()
{
  Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Claim and Open']").Click();
  
}

function Claim_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Claim']").Click();
}

function Split_button()
{
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();

}

function Claim_All_button()
{
  Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Claim All']").Click();

}