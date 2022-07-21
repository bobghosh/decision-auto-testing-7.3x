var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
function Create_Revision_Task_from_TaskPage()
{
  let Select_Checkbox = "Yes";
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-generate-revision-task--button')]").ClickButton();
    
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Create Revision Task");
  
  Delay(100);
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@placeholder='Select Project']//following-sibling::span//button").ClickButton();
   
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("DivyaRP","No");
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@placeholder='Select Branch']//following-sibling::span//button").ClickButton();
   
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("Main","No");
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@class='wj-glyph-calendar']").Click();
   
  SelectingDateFromCalendar.CalendarSelection("No", "2021", "Aug", "21");
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@class='wj-glyph-clock']").Click();
  
  SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM", "No");
  
  let include_Only_Flows_Checkbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//p-checkbox//div[contains(@class,'ui-chkbox-box')]");
  
  if(Select_Checkbox == "Yes")
  {
      if(include_Only_Flows_Checkbox.getAttribute("class").includes("ui-state-active"))
      {
        Log.Message("'Include Only Flows' CheckBox is already Selected");
      }
      else
      {
        include_Only_Flows_Checkbox.Click();
        if(include_Only_Flows_Checkbox.getAttribute("class").includes("ui-state-active"))
        {
          Log.Checkpoint("'Include Only Flows' CheckBox is Selected");
        }
        else
        {
          Log.Error("Checkbox is not selected");
        }
      }
      
  }
  else
  {
    if(include_Only_Flows_Checkbox.getAttribute("class").includes("ui-state-active"))
      {
        include_Only_Flows_Checkbox.Click();
        if(include_Only_Flows_Checkbox.getAttribute("class").includes("ui-state-active"))
        {
          Log.Error("'Include Only Flows' CheckBox is still Selected");
        }
        else
        {
          Log.Checkpoint("Checkbox is not selected");
        }        
      }
      else
      {
        Log.Message("'Include Only Flows' CheckBox is not Selected");        
      }
  }
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").ClickButton();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//h5"), "contentText", cmpEqual, "Revision Task");
  
}