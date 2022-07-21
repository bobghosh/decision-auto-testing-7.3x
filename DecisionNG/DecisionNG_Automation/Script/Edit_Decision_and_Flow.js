//USEUNIT RefLibrary
var DropDown_SelectOption = require("SelectingOptionfromDropdown_UL_LI");
var GenerateRandomNumber = require("GenerateRandomNumber");

function Edit_Decision_and_Flow(Task)
{
  let page= Aliases.browser.pageSapiensDecision
  let Edit_Btn= page.FindElement(ORGeneric.dcnHoverBtn)
  let text= Edit_Btn.textcontent
  Log.Message("The Edit Button text is: "+text);
  if(text ==='EDIT')
  {
    Edit_Btn.Click();
    //aqObject.CheckProperty(page.FindElement("//h1[contains(text(), ' Choose task to edit Decision ')]"), "contentText", cmpEqual, "Choose task to edit Decision");   
    page.FindElement(ORGeneric.dcnAutoComplete+"[@name='task']//button").Click();
    DropDown_SelectOption.SelectingOptionfromDropdown(Task,'No');
    aqUtils.Delay(1000)
    page.form.buttonOk.ClickButton();
    page.WaitElement(page.FindElement(ORGeneric.dcnLaundryLine+"//span"),30000);
    aqObject.CheckProperty(page.FindElement(ORGeneric.dcnLaundryLine+"//span"),"contentText", cmpEqual, "DRAFT");
  }
  else
  {
   Log.Error("Edit Button is not present/Disabled"); 
  }
}
//##########################################################################################################

function Edit_Decision_and_CreateNewTask(TaskName)
{
  let page= Aliases.browser.pageSapiensDecision
  let Edit_Btn= page.FindElement(ORGeneric.dcnHoverBtn)
  let text= Edit_Btn.textcontent
  Log.Message("The Edit Button text is: "+text);
  if(text ==='EDIT')
  {
    Edit_Btn.Click();
    
    let rand = GenerateRandomNumber.get4DigitRandomInt()
    page.FindElement("//input[@placeholder='Type in your task name']").SetText(TaskName+rand);
    Project.Variables.NewTaskName = TaskName+rand
    aqUtils.Delay(1000)
    page.WaitElement("//span[contains(text(),'Create New Task ')]").click();
    aqUtils.Delay(1000)
    page.form.buttonOk.ClickButton();
    page.WaitElement(page.FindElement("//span[text()='DRAFT']"),30000);
    aqObject.CheckProperty(page.FindElement("//span[text()='DRAFT']"),"contentText", cmpEqual, "DRAFT");
  }
  
}