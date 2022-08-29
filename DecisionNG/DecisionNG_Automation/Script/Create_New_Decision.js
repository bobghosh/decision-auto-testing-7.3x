//USEUNIT RefLibrary
var Breadcrumb_Verify_Navigation = require("Breadcrumb_Verify_Navigation");
var Buttons_Actions = require("Buttons_Actions");
var WaitElement_ispresent = require("WaitElement_ispresent");
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");

function Tasks_Create_New_Decision(taskNameToVerify,decisionConclusionName,newOrExistsingConclusion,view,folder)
{ 
  let page = Aliases.browser.pageSapiensDecision2
  let addDcnBtn = page.FindElement(ORTasks.btnAddDecision);
  
  addDcnBtn.click()
  
  let decisionNameBox = page.FindElement(ORGeneric.DecisionName+"//input")
  let viewNameBtn = page.FindElement(ORGeneric.ViewName+"//button")
  let folderBtn = page.FindElement(ORGeneric.FolderName+"//button")
  let taskName = page.FindElement("//label[contains(@class,'spec-task-label')]")
  
  aqObject.CheckProperty(page.FindElement(ORTasks.dcnCreateDecision+"//h1"),"textContent",cmpEqual," Create New Decision ")
  aqObject.CheckProperty(taskName,"textContent",cmpEqual," "+taskNameToVerify+" ");
  decisionNameBox.Keys(decisionConclusionName)
  WaitElement_ispresent.Wait_Until_Element_ispresent("//ul//li")
  if(newOrExistsingConclusion == "New")
  {
    Log.Message("Create New Fact Type "+" "+decisionConclusionName+" ")
    SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown("Create New Fact Type "+'"'+decisionConclusionName+'"')
  }
  else{
    SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(decisionConclusionName)
  }
  aqUtils.Delay(1200)
  viewNameBtn.WaitProperty("Enabled", true, 30000)
  viewNameBtn.click();
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(view)
  folderBtn.click()
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(folder)
  Buttons_Actions.okButtonClick()
  WaitElement_ispresent.Wait_Until_Element_ispresent("//canvas")
  Breadcrumb_Verify_Navigation.Breadcrumb_Verify_Navigation(decisionConclusionName+" "+"(View: "+view+")"+" "+"[V0]")
}