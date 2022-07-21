function Split_button()
{
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();

}

function Deployment_Reject_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Reject']").Click();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Rejection Reason");
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@name='message']").Keys("Rejected the Request");  
                
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
      
}

function Deployment_Approve_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Approve']").Click();   
}