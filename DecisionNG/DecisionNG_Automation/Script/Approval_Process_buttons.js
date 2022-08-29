var WaitElement_ispresent = require("WaitElement_ispresent");

var Details_Audit = require("Details_Audit");
var Navigate_to_Details_Audit = require("Navigate_to_Details_Audit");
var Navigate_to_Details_General = require("Navigate_to_Details_General");
var Navigate_to_Details_Tab = require("Navigate_to_Details_Tab");
//This Script contains functions for Split button, Start button, Discard button, Send to BOA and Verify, Send to RM and Verify
//Generic code is written for clicking on any button at the place of Start button it will work for all the buttons at that place
//Need to write Script for DPR

function Start_button()
{  
  Delay(2000);
  
  Split_button();
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[(text()='Start')]").Click();
  
  //Verify that Button should become disabled
//  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//p-splitbutton/div"), "className", cmpContains, "ui-state-disabled");
  
  Delay(500);
  
  Navigate_to_Details_Tab.Navigate_to_Details_Tab();
  
  Navigate_to_Details_General.Navigate_to_Details_General();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.form6.textboxUsername2, "Text", cmpEqual, "unassigned");
  
  Navigate_to_Details_Audit.Navigate_to_Details_Audit();
  
  Details_Audit.Verify_Audit_Record("Yes","Start","No","","No","","No","","No","");
  
  
}

function Start_and_Claim_button()
{  
  let userName = "Vars"
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//*[(text()='Start and Claim')]").Click();
  
  //Verify that Add Fact TYpe Button should become disabled
//  Aliases.browser.pageSapiensDecision.buttonAddFactType.WaitProperty("Enabled", false, 10000);
  Delay(500);
  
  Navigate_to_Details_Tab.Navigate_to_Details_Tab();
  
  Navigate_to_Details_General.Navigate_to_Details_General();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.form6.textboxUsername2, "Text", cmpEqual, userName);
  
  Navigate_to_Details_Audit.Navigate_to_Details_Audit();
  
  Details_Audit.Verify_Audit_Record("Yes","Claim","No","","No","","No","","No","");
  
}
function Split_button()
{
  let SplitButtonAvailability =  Aliases.browser.pageSapiensDecision.FindElements("//button[contains(@class,'splitbutton-menubutton')]");
  if(SplitButtonAvailability.length > 0)
  {
    Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'splitbutton-menubutton')]").Click();      
  }
  else
  {
    Log.Message("Split Button is not present");
  }

}

function Discard_or_Reject_button()
{
  Split_button();
  Aliases.browser.pageSapiensDecision.FindElement("//p-splitbutton//ul//li").Click();
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@name='message']").Keys("Please Approve the Request");  
                
//     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();

      Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
                
     Delay(5000);

}

function Send_to_BOA()
{
//  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();
//  Delay(5000);
  
  let BOA_Button = Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Business Owner Approver')]");
  
  Log.Message(BOA_Button.length);
  
  if(BOA_Button.length>0)
  {
     Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Business Owner Approver')]").Click();
     
     Delay(200);
                
//     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to 'Business Owner Approver'");
     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpContains, "Submit task to 'Business Owner Approver'");

     
//     Aliases.browser.pageSapiensDecision..Keys("Please Approve the Request");
     Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@name='message']").Keys("Please Approve the Request");  
                
//     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();

      Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
                
     Delay(5000);
     
     //Check for Asset to be sent in Candidate Status
     if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span").textContent == "CANDIDATE")
     {
       Log.Checkpoint("Task is successfully sent to Bussiness Owner Analyst and Status of Task is CANDIDATE");
       
     }
     else
     {
       Log.Error("Task is still with Decision Analyst");
     }
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
  
}

function Send_to_RM()
{
  Delay(3000);
//  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();
  
  let RM_Button = Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Release Management')]");
  
  Log.Message(RM_Button.length);
  
  if(RM_Button.length > 0)
  {
    Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Release Management')]").Click();
     
     Delay(200);
                
//     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to 'Release Management'");
     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpContains, "Submit task to 'Release Management'");

//     Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Please Approve the Request");
     Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@name='message']").Keys("Please Approve the Request");
     
     Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
                   
//     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
                
     Delay(5000);
     
     //Check for Asset to be sent in Candidate Status
     if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span").textContent == "APPROVED")
     {
       Log.Checkpoint("Task is successfully sent to Revision Manager and Status of Task is APPROVED");
       
     }
     else
     {
       Log.Error("Task is still with Bussiness Owner Approver");
     }
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
  
}

function Complete_Task()
{
//  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();
  Delay(3000);
  
  let Complete_Button = Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='COMPLETE')]");
  
  Log.Message(Complete_Button.length);
  
  if(Complete_Button.length > 0)
  {
    Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='COMPLETE')]").Click();
     
     Delay(200);
                
//     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to 'COMPLETE'");
     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpContains, "Submit task to 'COMPLETE'");
  
  
//     Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Complete the Task");
     Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@name='message']").Keys("Complete the Task");
        
     Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
             
//     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
                
     Delay(3000);
     
     //Check for Asset to be sent in Candidate Status
     if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span").textContent == "COMPLETED")
     {
       Log.Checkpoint("Task is successfully COMPLETED");
       
     }
     else
     {
       Log.Error("Task is not Completed");
     }
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
  
}


function Send_to_DPR()
{
//  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]").Click();
//  Delay(5000);
  WaitElement_ispresent.Wait_Until_Element_ispresent("//*[(text()='Decision Peer Reviewer')]")
  let DPR_Button = Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='Decision Peer Reviewer')]");
  
  Log.Message(DPR_Button.length);
  
  if(DPR_Button.length>0)
  {
     Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Decision Peer Reviewer')]").Click();
     
     Delay(200);
                
//     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to 'Business Owner Approver'");
     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpContains, "Submit task to 'Decision Peer Reviewer'");

     
//     Aliases.browser.pageSapiensDecision..Keys("Please Approve the Request");
     Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@name='message']").Keys("Please Approve the Request");  
                
//     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();

      Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
                
     Delay(5000);
     
     //Check for Asset to be sent in Candidate Status
     if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-laundry-line//span").textContent == "CANDIDATE")
     {
       Log.Checkpoint("Task is successfully sent to Decision Peer Reviewer and Status of Task is CANDIDATE");
       
     }
     else
     {
       Log.Error("Task is still with Decision Analyst");
     }
  }
  else
  {
    Log.Error("Button is disabled/does not exist");
  }
  
}
//Generic Approval Button without any specific Role
//function Send_For_Approval_Button(Role)
//{//p-splitbutton//button[1]
//  let Approval_Button = Aliases.browser.pageSapiensDecision2.FindElements("//*[(text()='"+Role+"')]");
//  
//  Log.Message(Approval_Button.Text);
//  
//  if(Approval_Button.Enabled == true)
//  {
//Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='"+Role+"')]").Click();
//  
//     
//     Delay(200);
//                
//     aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Submit task to '"+Role +"'");
//  
//     Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Please Approve the Request");
//                
//     Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
//                
//     Delay(300);
//     
//  }
//  else
//  {
//    Log.Error("Button is disabled");
//  }
//  
//}

