function Execute_Test_Group()
{

    if (Aliases.browser.pageSapiensDecision2.buttonExecuteGroup.WaitProperty("Enabled", true, 100000))
    {

      Aliases.browser.pageSapiensDecision2.buttonExecuteGroup.ClickButton();
  
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel24, "className", cmpEqual, "test-case-progress-bar");
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel25, "className", cmpEqual, "ui-progressbar-label ng-star-inserted");
   
   Aliases.browser.pageSapiensDecision2.panel25.WaitProperty("Exists",false,100000);
   
    //  Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
//      Delay(10000)

      let firstElementStatus = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[5]").textContent;
      
      Log.Message(firstElementStatus);
  
      if(firstElementStatus == "Executed" || firstElementStatus == "Error" || firstElementStatus == "Passed" || firstElementStatus == "Failed")
      {
        Log.Checkpoint("Test Cases are executed");
      }
      else
      {
        Log.Error("Test Cases are not executed correctly")
      }
      
    }
    else
    {
      Log.Error("Button is disabled")
    }
 
  
}
