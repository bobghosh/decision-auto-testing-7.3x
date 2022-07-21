//USEUNIT RefLibrary

﻿function Validation_Button(ValidationMessagesInput)
{
//  let ValidationMessages = "Rule Family “Borrower Debts Total Monthly Payment Amount (View: Base)” has warnings";
  let ValidationMessageInput = ValidationMessagesInput.split(",");
  
  let page= Aliases.browser.pageSapiensDecision2
  page.FindElement(ORfloatingSidebar.dcnFloatingActionbtn+"[@label='Validation']//div[@class='floating-action-button spec-floating-action-button']").Click();
  page.FindElement(ORfloatingSidebar.dcnFloatingActionbtn+"[@label='Validation']//button").click(18, 18);
  page.WaitElement(page.FindElement("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span"),10000);
  
  //i[contains(@class,'icon-invalid_warning')]
  //div[contains(@class,'decision-sidebar-actions__validation-button')]//div/i
  let ValidationIcon = Aliases.browser.pageSapiensDecision.FindElement(ORfloatingSidebar.sidebarValidationBtn+"//div/i");
  if(ValidationIcon.getAttribute("class").includes("icon-invalid_warning"))
  {
    Log.Message("Asset has Warnings")
  }
  else if(ValidationIcon.getAttribute("class").includes("icon-valid"))
  {
    Log.Message("Asset is Valid")
  }
  else if(ValidationIcon.getAttribute("class").includes("icon-invalid_error"))
  {
    Log.Message("Asset is InValid")
  }
  
  let validationMessage = page.FindElements("//*[@class='sidebar-container__validation-panel spec-decision-sidebar__validation-panel ng-star-inserted']//span");

  for(let m = 0; m<ValidationMessageInput.length ; m++)
  {
    let flag = 0;
    
    for(let i=0; i<validationMessage.length;i++)
    {
//      Log.Message(validationMessage[i].textcontent);
      
      if(validationMessage[i].textcontent == ValidationMessageInput[m])
      {
        flag = 1;
        Log.Message(validationMessage[i].textcontent + " error message is displayed");
      }
    }    
    if(flag > 0)
    {
      Log.Checkpoint("User provided error is present")
    }
    else
    {
      Log.Error("Error message is not present")
    }
    
  }
  page.FindElement("//dcn-floating-action-button[@label='Validation']//div[contains(@class,'floating-action-button spec-floating-action-button')]").Click();
}

