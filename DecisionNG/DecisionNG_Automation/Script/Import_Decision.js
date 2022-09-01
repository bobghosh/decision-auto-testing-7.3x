//USEUNIT RefLibrary

function Import_New_Decision(){
  
  let page = Aliases.browser.pageSapiensDecision2
  let importDcnBtn = page.FindElement(ORTasks.dcnImportDecision+'//button');
  
  importDcnBtn.click()
  
  page.FindElement(ORGeneric.dcnComboBox+'//button').WaitProperty('Enabled', true, 10000)
  page.FindElement(ORGeneric.dcnComboBox+'//button').Click();
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown('JSON',"No")
  
  //choose file
  page.FindElement("//*[@value='Browse']").Click();
  filePath = 'C:\Users\Bob.ghosh\Downloads\Tuition Fee Loan Eligibility__.zip'
  Aliases.browser.WaitAliasChild("dlgOpen", 10000).cbxFileName.ComboBox.SetText(filePath)
}

function kk(){
  
//let page = Aliases.browser.pageSapiensDecision2
//page.FindElement("//*[@value='Browse']").Click();
//filePath = 'C:\\Users\\Bob.ghosh\\Downloads\\Tuition Fee Loan Eligibility__.zip'
//  Aliases.browser.WaitAliasChild("dlgOpen", 10000).cbxFileName.ComboBox.SetText(filePath)
  Sys.HighlightObject(Aliases.browser.dlgOpen.btnOpen)
}