function Verify_Subject(Subject)
{
  var page = Aliases.browser.pageSapiensDecision
  Delay(2000)
  var firstNoteSubjectTextarea = page.FindElement("//div[@class='note-list additional-info-notes-list__form']/div[1]//label[text()=' Subject ']//following-sibling::div");
  var subjectText = OCR.Recognize(firstNoteSubjectTextarea).FullText.trim();
  
  //Log.Message(subjectText);
  
  if(subjectText == Subject)
  {
    Log.Checkpoint("Subject is updated as expected")
  }
  
  else
  {
    Log.Error("Mismatch")
  }
}

function Verify_Text(Text)
{
  var page = Aliases.browser.pageSapiensDecision
  
  var firstNoteTextTextarea = page.FindElement("//div[@class='note-list additional-info-notes-list__form']/div[1]//label[text()=' Text ']//following-sibling::div");
  var text = OCR.Recognize(firstNoteTextTextarea).FullText.trim();
  
//  Log.Message(text);
//  Log.Message(Text)
  
  if(text == Text.trim())
  {
    Log.Checkpoint("Text is updated as expected");
  }
  
  else
  {
    Log.Error("Mismatch")
  }
}