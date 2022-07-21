//USEUNIT SelectingOptionfromDropDown_Role
//USEUNIT Buttons_Actions
//USEUNIT Modeling_Projects_Navigation
//USEUNIT RefLibrary

function Click_AddTask(){
  
  SideBarNavigationInsideModelingProj('tasks')
  let page = Aliases.browser.pageSapiensDecision2
      page.WaitElement(ORRepository.AddTaskinModProj, 5000).Click();
  
}

function AddTask_InModelingPrj_CommunityWorld(Community, TaskName, ModelingProjectName, AssetApprovalProcess, FactTypeApprovalProcess, StrtOpnCanBtn){
  
  SideBarNavigationInsideModelingProj('tasks')
  
  let page = Aliases.browser.pageSapiensDecision2
  let timestamp = new Date();
  let Num = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
   
  
  page.WaitElement(ORRepository.AddTaskinModProj, 5000).Click();
  
  aqUtils.Delay(3000)
  page.WaitElement(ORGeneric.dcnComboBox+"[@name='community']//button", 5000).Click();
  SelectingOptionfromDropdown(Community, "No");
  
  page.FindElement(ORGeneric.TaskName).SetText(TaskName+Num);
  Project.Variables.NewTaskName = TaskName+Num;
  
  page.FindElement(ORGeneric.Decription).Keys('TaskDesc');
  
  page.WaitElement(ORGeneric.ModelingPrjName+"//button", 5000).Click();
  SelectingOptionfromDropdown(ModelingProjectName, "No");
  
  page.WaitElement(ORGeneric.AssetApproval+"//button", 5000).Click();
  SelectingOptionfromDropdown(AssetApprovalProcess, "No");
  
  page.WaitElement(ORGeneric.FtApproval+"//button", 5000).Click();
  SelectingOptionfromDropdown(FactTypeApprovalProcess, "No");
  
  if(StrtOpnCanBtn.toLowerCase()=='open'){
    page.FindElement(ORGeneric.btnCreateOpen).Click();
    page.WaitElement("//span[text()='DRAFT']",20000);
  }
  
  else if(StrtOpnCanBtn.toLowerCase()=='start'){
    page.FindElement(ORGeneric.btnCreateStart).Click();
    page.WaitElement("//span[text()='DRAFT']",20000);
  }
  
  else if(StrtOpnCanBtn.toLowerCase().includes('cancel'))
    Buttons_Actions.cancelButtonClick()
}

function VerifyTaskCreatedSuccessfully(task_Name){
  
  var count = 0;
  let page = Aliases.browser.pageSapiensDecision2
      page.WaitElement(ORRepository.dcnModelingProjTasks,20000)
  
  let alltask = page.FindElements(ORGeneric.row)
  for(let j=1; j<= alltask.length;j++){
    var taskName =page.FindElement(ORGeneric.row+"//td["+j+"]").textContent.trim();
    if(taskName == task_Name.trim()){
      Log.Checkpoint("the specified task exists under task tab")
      count++;
      break;
    }
  }
  if(count==0)
      Log.Error("given task not found")
}
