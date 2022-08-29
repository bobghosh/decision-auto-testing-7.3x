var Generate_Random_Number = require("Generate_Random_Number");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
let page = Aliases.browser.pageSapiensDecision
function HomeScreen_ClickOn_CreateNewFlow_Verify()
{
  
  let splitBtn = page.FindElement("//p-splitbutton//button[2]")
  
  splitBtn.ClickButton()
  
  let startNewFlowLink = page.FindElement("//ul//li//*[text()='Start a New Flow']")
  
  startNewFlowLink.Click()
  
  aqObject.CheckProperty(page.FindElement("//dcn-create-flow-dialog//h1"),"textContent",cmpEqual," Create New Flow ")
  aqObject.CheckProperty(page.FindElement("//*[contains(@class,'instructive-text')]"),"textContent",cmpEqual," In order to create a new Flow, a task must be selected or created. ")
}

function Create_New_Flow_Popup_EnterDetails(community,flowName,taskName,New_Or_Existing_Task,New_Or_Existing_FlowName)
{
//  let community = "Automation_Assets"
//  let flowName ="sumant"
//  let taskName = "RFTEst"
//  let New_Or_Existing_Task = "Existing"
//  let New_Or_Existing_FlowName = "New"
  
  
  let communityDropdownBtn = page.FindElement("//dcn-combo-box[@name='community']//button")
      communityDropdownBtn.WaitProperty("enabled",true, 10000)
  let taskNameBtn = page.FindElement("//*[@name='task']//button")
  let flowNameTextBox =page.FindElement("//*[@name='flowName']")
  if(!community == "")
  {
    communityDropdownBtn.ClickButton()
    SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(community)
    page.Wait()
  }
  let num = Generate_Random_Number.randomNumber()
  if(!taskName == "")
  {
  taskNameBtn.ClickButton()
  
  if(New_Or_Existing_Task == "New")
  {
    let taskInputfeild = page.FindElement("//*[@name='task']//input")
    
    taskInputfeild.SetText(taskName+num)
    SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("Create New Task "+'"'+taskName+num+'"')
    Project.Variables.NewTaskName = taskName+num
  }
  else{
    SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(taskName)
  }
  }
  if(!flowName =="")
  {
    if(New_Or_Existing_FlowName == "New")
    {
      flowNameTextBox.setText(flowName+num)
      Project.Variables.Reg_Suite_New_FlowName = flowName+num
    }
    else{
      flowNameTextBox.setText(flowName)
      
    }
  }
}

function Community_TaskName_and_FlowName_Required_Validation(verifyCommunityError,verifyTaskError,verifyFlowNameError)
{
  let communityInputFeild = page.FindElement("//label[text()=' Community ']//following-sibling::div[contains(@class,'inputAndError')]")
  let flowNameTextFeild = page.FindElement("//label[text()=' Flow name ']//following-sibling::div[contains(@class,'inputAndError')]")
  let taskNameTextFeild = page.FindElement("//label[text()=' Task Name ']//following-sibling::div[contains(@class,'inputAndError')]");
  
  let communityChildCount = communityInputFeild.ChildCount
  let flowNameChildCount = flowNameTextFeild.ChildCount
  let taskNameChildCount = taskNameTextFeild.ChildCount
  
  //verify communityame error message
  if(!verifyCommunityError == "")
  {
    if(communityChildCount>1)
    {
      aqObject.CheckProperty(communityInputFeild.lastChild,"textContent",cmpEqual,"Community is required")
    }
    else{
      Log.Error("No Error message displayed for community")
    }
  }
  //verify flownameerror message
  if(!verifyFlowNameError == "")
  {
    if(flowNameChildCount>1)
    {
      aqObject.CheckProperty(flowNameTextFeild.lastChild,"textContent",cmpEqual,"Flow name is required")
    }
    else{
      Log.Error("No Error message displayed for flowname")
    }
  }
  //verify taskname error message
  if(!verifyTaskError == "")
  {
    if(taskNameChildCount>1)
    {
      aqObject.CheckProperty(taskNameTextFeild.lastChild,"textContent",cmpEqual,"Task Name is required")
    }
    else{
      Log.Error("No Error message displayed for taskname")
    }
  }
}


function verify_UniqueFlowNameError()
{
  let flowNameTextFeild = page.FindElement("//label[text()=' Flow name ']//following-sibling::div[contains(@class,'inputAndError')]")
  let flowNameChildCount = flowNameTextFeild.ChildCount
    if(flowNameChildCount>1)
    {
      aqObject.CheckProperty(flowNameTextFeild.lastChild,"textContent",cmpEqual,"Flow name is already in use")
    }
    else{
      Log.Error("No Error message displayed for flowname")
    }
}