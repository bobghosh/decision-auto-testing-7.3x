var Verify_DialogueBox_Open_Closed = require("Verify_DialogueBox_Open_Closed");
var Buttons_Actions = require("Buttons_Actions");
var DropDown_SelectOption = require("SelectingOptionfromDropdown_UL_LI");
function Edit_Decision_and_Flow(Task)
{
  let page= Aliases.browser.pageSapiensDecision
  let Edit_Btn= page.FindElement("//dcn-hover-button")
  let text= Edit_Btn.textcontent
  Log.Message("The Edit Button text is: "+text);
  if(text ==='EDIT')
  {
    Edit_Btn.Click();
    //aqObject.CheckProperty(page.FindElement("//h1[contains(text(), ' Choose task to edit Decision ')]"), "contentText", cmpEqual, "Choose task to edit Decision");   
    page.FindElement("//dcn-autocomplete[@name='task']//button").Click();
    DropDown_SelectOption.SelectingOptionfromDropdown(Task,'No');
    Buttons_Actions.cancelButtonClick()
    aqUtils.Delay(1200)
    Verify_DialogueBox_Open_Closed.Verify_If_DialogueBox_Open_OR_Closed("Closed")
    aqObject.CheckProperty(Edit_Btn,"Exists",cmpEqual,true)
  }
  else
  {
   Log.Error("Edit Button is not present/Disabled"); 
  }
}
