var Picture_To_Log = require("Picture_To_Log");
function Security_Global_Filter_EnterText_Verify(filterText)
{
  var page= Aliases.browser.pageSapiensDecision2;
  let filterTextbox = page.FindElement("//input[@placeholder='filter']");
  
  filterTextbox.SetText(filterText);
  Picture_To_Log.PictureToLog();
  CheckProperty(filterTextbox,'Text',cmpEqual,filterText,true);
}