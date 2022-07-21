//USEUNIT SelectingOptionfromDropDown_Role
//USEUNIT RefLibrary

//this function can be used to select both asset or FT approval
function Select_ApprovalProcess(ApprovalName){
  
  let page = Aliases.browser.pageSapiensDecision2
  
  page.WaitElement(ORGeneric.wjComboBox+"//span[@wj-part]", 10000).Click();
  SelectingOptionfromDropdown(ApprovalName,"NO");
  
    
}