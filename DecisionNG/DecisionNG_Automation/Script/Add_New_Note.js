var page = Aliases.browser.pageSapiensDecision
var addNoteBtn = page.FindElement("//dcn-additional-info-notes-list-tab//button[text()=' Add Note ']");
function Add_New_Note(Subject,Text)
{
//click on add new note button and enter subject and text
  Delay(2000)
  aqObject.CheckProperty(addNoteBtn,'disabled',cmpEqual ,false);
  addNoteBtn.ClickButton();
  var addNoteDialogueTitle = page.FindElement("//dcn-note-dialog//h1");
  aqObject.CheckProperty(addNoteDialogueTitle,'textContent',cmpEqual , ' Add new note ' );
  var subject = page.FindElement("//dcn-note-dialog//label[text()=' Subject ']//following-sibling::div//input");
  var text = page.FindElement("//dcn-note-dialog//label[text()=' Text ']//following-sibling::div//textarea");
  subject.SetText(Subject);
  text.Keys(Text);
}

  function OkButtonClick()
  {
    var okBtn= page.FindElement("//dcn-note-dialog//button[text()=' OK ']");
    return okBtn.ClickButton();
  }
  function CancelBtnClick()
  {
    var cancelBtn = page.FindElement("//dcn-note-dialog//button[text()=' Cancel ']");
    return cancelBtn.ClickButton();
  }
  
  function VerifyAddNoteBtnIsEnabled()
  {
    var isAddNoteEnabled = addNoteBtn.Enabled;
    if(isAddNoteEnabled == true)
    {
      Log.Checkpoint("Add note button is enabled");
    }
    else
    {
      Log.Error("Add note button is disabled");
    }
    
  }
  
  function VerifyAddNoteBtnIsDisabled()
  {
     var isAddNotedisabled = addNoteBtn.disabled
      if(isAddNotedisabled == true)
      {
        Log.Checkpoint("Add note button is disabled");
      }
      else
      {
        Log.Error("Add note button is enabled");
      }
    
  }
  
  
  
  
  