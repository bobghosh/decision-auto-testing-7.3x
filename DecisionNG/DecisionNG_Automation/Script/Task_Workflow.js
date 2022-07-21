function Split_button()
{
  let Splitbutton = Aliases.browser.pageSapiensDecision.FindElement("//button[contains(@class,'ui-splitbutton-menubutton')]");
  return Splitbutton;
}

function Discard_button()
{
  let Discardbutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'Discard')]").ClickButton();
}

function PeerReviewer_button()
{
  Split_button();
  let PeerReviewerbutton = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(),'Peer Reviewer')]");
  if(PeerReviewerbutton.Enabled == true)
  {
    PeerReviewerbutton.click();
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Submit task to 'Peer Reviewer'");
  
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Submitted the Request to Peer Reviewer");
                
    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
    
    Delay(300);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "Exists", cmpEqual, true);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "contentText", cmpEqual, "CANDIDATE");
    
    
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
}

function BusinessOwnerApprover_button()
{
  Split_button();
  
  //*[text()='FHA Business Approver']
  //p-splitbutton//button[1]
  let BusinessOwnerApprover_button = Aliases.browser.pageSapiensDecision2.FindElement("//p-splitbutton//button[1]");
  if(BusinessOwnerApprover_button.Enabled == true)
  {
    BusinessOwnerApprover_button.click();
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Submit task to 'FHA Business Approver'");
  
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Submitted the Request to RM");
                
    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
    
    Delay(300);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "Exists", cmpEqual, true);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "contentText", cmpEqual, "CANDIDATE");
    
    
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
}

function Whiteboard_button()
{
  Split_button();
  
  //*[text()='FHA Business Approver']
  //p-splitbutton//button[1]
  let Whiteboard_button = Aliases.browser.pageSapiensDecision2.FindElement("//p-splitbutton//button[1]");
  if(Whiteboard_button.Enabled == true)
  {
    BusinessOwnerApprover_button.click();
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Submit task to 'FHA Business Approver'");
  
    Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("Submitted the Request to RM");
                
    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
    
    Delay(300);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "Exists", cmpEqual, true);
    
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft, "contentText", cmpEqual, "CANDIDATE");
    
    
  }
  else
  {
    Log.Checkpoint("Button is disabled");
  }
}


//p-splitbutton//ul//li[2]

//p-splitbutton//ul

