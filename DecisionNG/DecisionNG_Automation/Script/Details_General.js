//USEUNIT RefLibrary
//var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");

function Change_Modeling_Project(mpName)
{
  let page = Aliases.browser.pageSapiensDecision2;
    
  page.WaitElement("//*[contains(@class, 'change user-reassign__btn')]", 5000).Click();
  page.WaitElement("//mat-dialog-container//*[@class='wj-input-group wj-input-btn-visible']//button", 5000).WaitProperty("Enabled", true, 30000)
  page.WaitElement("//mat-dialog-container//*[@class='wj-input-group wj-input-btn-visible']//button", 5000).Click()

  aqUtils.Delay(500)
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(mpName, "No")
  Buttons_Actions.okButtonClick()
}

function Change_Assignee(NewAsignee)
{
  let page = Aliases.browser.pageSapiensDecision2;
    
  page.WaitElement("//*[contains(@class, 'spec-reassign-button')]", 5000).Click();
  page.WaitElement("//mat-dialog-container//*[@class='wj-input-group wj-input-btn-visible']//button", 5000).WaitProperty("Enabled", true, 30000)
  page.WaitElement("//mat-dialog-container//*[@class='wj-input-group wj-input-btn-visible']//button", 5000).Click()

  aqUtils.Delay(500)
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(NewAsignee, "No")
  Buttons_Actions.okButtonClick()
  page.WaitElement(ORGeneric.newUserName, 5000).WaitProperty("VisibleOnScreen", true, 10000)
  aqObject.CheckProperty(page.WaitElement(ORGeneric.newUserName, 5000),"Text", cmpEqual, NewAsignee, true)
}

function Change_Existing_Task_Name(existTask, newTask)
{
  let page = Aliases.browser.pageSapiensDecision2;
  
  aqObject.CheckProperty(page.WaitElement(ORGeneric.ftName, 5000), "value", cmpEqual, existTask.trim(), true) 
  page.WaitElement(ORGeneric.ftName).SetText(newTask)

  aqUtils.Delay(500)
  Breadcrumb_Verify_Navigation.Breadcrumb_Verify_Navigation(newTask)
  Project.Variables.NewTaskName = newTask
  KeywordTests.Navigate_to_Details_Tab.Run()
}

function Set_Description(text)
{
  let page = Aliases.browser.pageSapiensDecision2;
  
  page.WaitElement(ORGeneric.Decription).Click
  page.WaitElement(ORGeneric.Decription).Keys("^a")
  page.WaitElement(ORGeneric.Decription).Keys("[BS]")
  page.WaitElement(ORGeneric.Decription).Keys(text)

  aqUtils.Delay(500)
  KeywordTests.Navigate_to_Details_Tab.Run()
}

function Change_Task_Priority(priority)
{
  let page = Aliases.browser.pageSapiensDecision2;
  
  aqObject.CheckProperty(page.WaitElement(ORGeneric.drpdwnPriority, 5000), "Enabled", cmpEqual, true, true) 
  page.WaitElement(ORGeneric.drpdwnPriority+"//button").Click();

  aqUtils.Delay(500)
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(priority, "No")
  KeywordTests.Navigate_to_Details_Tab.Run()
  aqObject.CheckProperty(page.WaitElement(ORGeneric.drpdwnPriority+"//input", 5000), "value", cmpEqual, priority, true)
}

function Add_Grouping_Label(label, newExisting)
{
  let page = Aliases.browser.pageSapiensDecision2;
  
  if(newExisting.toLowerCase() == 'new'){
    page.WaitElement(ORGeneric.GroupLabel+"//input", 5000).Click(); 
    page.WaitElement(ORGeneric.GroupLabel+"//input", 5000).Keys("^a[BS]")
    page.WaitElement(ORGeneric.GroupLabel+"//input", 5000).Keys(label)
    page.WaitElement("//span[.='Create New Grouping Label \""+label+"\"']", 15000).Click();
  }
  else{
    page.WaitElement(ORGeneric.GroupLabel+"//button", 5000).Click(); 
    SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(label, "No")
  }
  
  aqUtils.Delay(500)
  KeywordTests.Navigate_to_Details_Tab.Run()

}
