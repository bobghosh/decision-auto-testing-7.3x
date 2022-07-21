var Facttype_Availablility_Check = require("Facttype_Availablility_Check");
function Draft_FactTypes_Send_to_Glossary()
{
  //User should be on Fact Type Tab 
//  let FactTypeName = "w [V0]";
  let PtableCount = Aliases.browser.PageSapiensDecision.FindElements("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']").length;
  let flag = 0;
  let hasNext = true;
  
  if(PtableCount>0)
  {
    Log.Message("Pagination is available");
  } 
  
  do
  {   
      let FactTypeList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
      for(var i = 1; i <= FactTypeList.length ; i++)
      {
        let FactTypeName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[1]");
        let Status = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[3]");          
        let errorIcon= Aliases.browser.pageSapiensDecision.FindElement("//body//tr["+i+"]//dcn-validation-state//div").getAttribute('class')
//        Log.Message(Status)
//        Log.Message(errorIcon)
          
        FactTypeName.HoverMouse();
        
          if(Status.textContent == "DRAFT" && errorIcon.includes('icon-validation_success'))
          {        

                Log.Message(FactTypeName.textContent)
                Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//dcn-approval-lifecycle-actions//dcn-overlay//i").HoverMouse();
        
                Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//button//dcn-approval-lifecycle-actions//dcn-overlay//i").Click();
        
//                Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Send for Fact Type Approval']").Click();
        
                Aliases.browser.pageSapiensDecision.FindElement("//ul//li[1]").Click();
        
                Delay(200);
                
                aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Submit task to 'Glossary Administrator'");
  
                Aliases.browser.pageSApiensDecision.FindElement("//dcn-dialog//*[@name='message']").Keys("Please Approve the Request");
                
//                Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[text()=' OK ']").click();
                Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
                
                Delay(1000);
                
                aqObject.CheckProperty(Status, "contentText", cmpEqual, "CANDIDATE");
          }
          else if(Status != "DRAFT" && errorIcon.includes('icon-validation_success'))
          {
            Log.Message("Fact type is not Draft");
          }
          else if(!errorIcon.includes('icon-validation_success'))
          {
            Log.Message("Fact type is not Valid");
          }
      
        }
    
      
      
      if(PtableCount>0)
      {         
        
          var Next_Page_Button = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']");
      
          if(Next_Page_Button.getAttribute("class") == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all")
          {
            Next_Page_Button.click();          
          }
    
          else
          {
              hasNext = false;
          }
        
      
      }else
      {
        hasNext = false;
      }
     
  }
  while(hasNext == true)
  
  let PtableCount2 = Aliases.browser.PageSapiensDecision.FindElements("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']").length;      
  if(PtableCount2 >0)
  {
    var FirstPage = Aliases.browser.pageSapiensDecision.FindElement("//a[contains(@class,'ui-paginator-first')]");
    FirstPage.click();
  }
  
}