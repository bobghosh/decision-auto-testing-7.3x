var WaitElement_ispresent = require("WaitElement_ispresent");
var Buttons_Actions = require("Buttons_Actions");
function CreateNewSnapshot()
{
  let tagUntagBtn = Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh ']//parent::span//following-sibling::span[1]")
  let tagUntagText = tagUntagBtn.textContent.trim();
  if(tagUntagText == "Tag")
  {
    Log.Checkpoint("Revision is Snapshot")
  }
  else
  {
    Log.Message("Revision is not snapshot it is Tagged")
    tagUntagBtn.Click()
    Buttons_Actions.okButtonClick();
    Delay(1000)
    WaitElement_ispresent.Wait_Until_Element_ispresent("//*[text()='Deploy ']")
  }
}