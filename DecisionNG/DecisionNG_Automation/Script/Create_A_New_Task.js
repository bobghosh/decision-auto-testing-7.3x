//USEUNIT SelectingOptionfromDropDown_Role
//USEUNIT RefLibrary

function Create_A_New_Task(Community, TaskName, ModelingProjectName, AssetApprovalProcess, FactTypeApprovalProcess)
{
   let page = Aliases.browser.pageSapiensDecision2
   let timestamp = new Date();
   let Num = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
   
  page.WaitElement(ORGeneric.splitbutton, 20000).Click();
  
  page.WaitElement(ORHomepage.StartATask, 20000).Click();
  
  let communityButton=page.FindElement(ORGeneric.dcnComboBox+ORGeneric.community+"//button");
  
  communityButton.WaitProperty("enabled",true,30000);
  
  communityButton.Click();
  
  SelectingOptionfromDropdown(Community, "No");
  
  page.FindElement(ORGeneric.TaskName).SetText(TaskName+Num);
  
  Project.Variables.NewTaskName = TaskName+Num;
  
  Log.Message("Printing the NewTask Created "+Project.Variables.NewTaskName)
  
  page.FindElement(ORGeneric.Decription).Click();
  page.FindElement(ORGeneric.Decription).Keys("TaskDesc");
  
  page.FindElement(ORGeneric.ModelingPrjName+"//span[@wj-part]").Click();
  SelectingOptionfromDropdown(ModelingProjectName,"NO");
  
  page.WaitElement(ORGeneric.AssetApproval+"//span[@wj-part]", 5000).Click();
  SelectingOptionfromDropdown(AssetApprovalProcess,"NO");
  
  page.WaitElement(ORGeneric.FtApproval+"//span[@wj-part]", 5000).Click();
  SelectingOptionfromDropdown(FactTypeApprovalProcess,"NO");
  
  page.FindElement("//button[contains(text(), 'Create & Open')]").Click();
  page.WaitElement(".navigation-menu__item__factTypes",20000).Click();
}
