function Verify_If_DialogueBox_Open_OR_Closed(verify_Open_Close)
{
  var page = Aliases.browser.pageSapiensDecision
  var dialogueBox = page.FindElements("//dcn-dialog//h1")
  if(verify_Open_Close == "Open")
  {
    if(dialogueBox.length >0)
    {
      Log.Checkpoint("Dialogue Box is Opened")
    }
    else
    {
      Log.Error("Dialogue Box is Closed")
    }
  }
  else
  {
    if(dialogueBox.length >0)
    {
      Log.Error("Dialogue Box is Opened")
    }
    else
    {
      Log.Checkpoint("Dialogue Box is Closed")
    }
  }
  
}
module.exports.Verify_If_DialogueBox_Open_OR_Closed = Verify_If_DialogueBox_Open_OR_Closed;