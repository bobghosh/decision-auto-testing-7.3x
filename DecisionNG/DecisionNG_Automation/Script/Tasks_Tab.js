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

function getCellValueOfTaskTable_MP(task, columnName)
{
  
  let page = Aliases.browser.pageSapiensDecision
  let totalRows = page.FindElements("//dcn-modeling-project-tasks//tbody/tr")

  colcount = getColumnNumber(columnName)
  
  for(var i = 1; i <=totalRows.length ; i++)
    {
      let Task_Name = page.FindElement("//dcn-modeling-project-tasks//tbody/tr["+i+"]//td[1]").innerText;
      
      if(task.trim() == Task_Name.trim())
      {
        Log.Message("Selected task is Available");
        var cellValue = page.FindElement("//dcn-modeling-project-tasks//tbody/tr["+i+"]//td["+colcount+"]").innerText;
        Log.Message(cellValue);
        break;
      }
    }
    
    return cellValue;
    
}

function getColumnNumber(){
  
  let columnName =  "STATUS"
  let page = Aliases.browser.pageSapiensDecision
  let totalRows = page.FindElements("//dcn-modeling-project-tasks//thead//th")
  var counter = 0;

  for(var i = 1; i <=totalRows.length ; i++)
      {
        let header_Name = page.FindElement("//dcn-modeling-project-tasks//thead//th["+i+"]").innerText;

        if(columnName.trim() == header_Name.trim())
        {
          Log.Checkpoint("column name was found. At position: "+ i)
          counter++;
          break;
        
        }
      }
      if(counter == 0)
        Log.Error("column name not found")
      
      return i;
}

module.exports.getCellValueOfTaskTable_MP = getCellValueOfTaskTable_MP;