function Verify_If_Notes_Exists()
{
  var page= Aliases.browser.pageSapiensDecision;
  let spanElements = page.FindElements("//dcn-additional-info-notes-list-tab//span")
  if(spanElements.length == 1)
  {
    var spanText = spanElements[0].textContent
    if(spanText == "No Notes were defined")
    {
      Log.Checkpoint(spanText)
    }
  }
  else
  {
    Log.Error("Notes were found")
  }
}
module.exports.Verify_If_Notes_Exists = Verify_If_Notes_Exists