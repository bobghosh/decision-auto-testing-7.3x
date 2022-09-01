//USEUNIT RefLibrary

function Import_New_Decision(fileFormat,filePath, view, folder){
  
  let page = Aliases.browser.pageSapiensDecision2
  let importDcnBtn = page.FindElement(ORTasks.dcnImportDecision+'//button');
    
  importDcnBtn.click()
  
  page.FindElement(ORGeneric.dcnComboBox+'//button').WaitProperty('Enabled', true, 10000)
  page.FindElement(ORGeneric.dcnComboBox+'//button').Click();
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(fileFormat,"No")
  
  //choose file
  page.FindElement("//*[@value='Browse']").Click();
  //filePath = 'C:\\Users\\Bob.ghosh\\Downloads\\Tuition Fee Loan Eligibility__.zip'
  Aliases.browser.WaitAliasChild("dlgOpen", 10000).cbxFileName.ComboBox.SetText(filePath)
  Aliases.browser.dlgOpen.btnOpen.Click();
  
  aqUtils.Delay(1000)
  let viewNameBtn = page.FindElement(ORGeneric.ViewName+"//button")
  let folderBtn = page.FindElement(ORGeneric.FolderName+"//button")
  
  viewNameBtn.WaitProperty("Enabled", true, 30000)
  viewNameBtn.click();
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(view)
  folderBtn.click()
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(folder)
  
  Buttons_Actions.okButtonClick()
  aqObject.CheckProperty(page.WaitElement("//*[@id='toast-container']//*[text()='Import Decision successfully completed']",30000),'innerText', cmpEqual, 'Import Decision successfully completed', true)
  page.WaitElement("//*[@id='toast-container']//*[text()='Import Decision successfully completed']",30000).Click();

  WaitElement_ispresent.Wait_Until_Element_ispresent("//canvas")
}