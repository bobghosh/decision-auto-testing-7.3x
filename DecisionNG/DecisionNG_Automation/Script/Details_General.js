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