//USEUNIT SelectingOptionfromDropDown_Role
function Create_A_New_Task_Generic_Functional(Community, TaskName, ModelingProjectName, AssetApprovalProcess, FactTypeApprovalProcess,ClickBtn)
{
   let taskNames = TaskName.split(',')
   for(let i=0; i<taskNames.length; i++)
   {
     Log.Message(taskNames[i])
    Log.Message(taskNames.length)
   let page = Aliases.browser.pageSapiensDecision2
   let timestamp = new Date();
   let Num = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
   
  Aliases.browser.pageSapiensDecision.StartNewDecisionDropButton.Click();
  
  page.textnode2.textnodeStartANewTask.linkStartANewTask.textnodeStartANewTask2.Click();
  
  let communityButton=page.FindElement("//dcn-combo-box[@name='community']//button");
  
  communityButton.WaitProperty("disabled",false,3000);
  
  communityButton.Click();
  
  SelectingOptionfromDropdown(Community, "No");
  
  page.FindElement("//input[@name='taskName']").SetText(taskNames[i]+' '+Num);
  
  if(i==0)
  {
    Project.Variables.Additional_Info_Task_with_assets= taskNames[i]+' '+Num;
  }
  else if(i==1)
  {
    Project.Variables.Additional_Info_Task_without_assets = taskNames[i]+' '+Num;
  }
  else{
  Log.Message("Not present")
  }
  
  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
  
  Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys("TaskDesc");
  
  //page.formF.button4.ClickButton();
  page.FindElement("//*[@name='project']//span[@wj-part]").Click();
  
  SelectingOptionfromDropdown(ModelingProjectName,"NO");
  
  //page.formF.button5.ClickButton();
  page.WaitElement("//*[@name='approvalProcess']//span[@wj-part]", 5000).Click();
  
  SelectingOptionfromDropdown(AssetApprovalProcess,"NO");
  
  //page.formF.button6.ClickButton();
  page.WaitElement("//*[@name='ftApprovalProcess']//span[@wj-part]", 5000).Click();
 
  SelectingOptionfromDropdown(FactTypeApprovalProcess,"NO");

 if(ClickBtn=="Create & Open")
 {
   page.FindElement("//button[contains(text(), 'Create & Open')]").ClickButton();
   page.WaitElement(Aliases.browser.pageSapiensDecision.FindElement("//h5[contains(text(), 'Tasks')]"),5000)
 }
 else if(ClickBtn=="Create & Start")
 {
   page.FindElement("//button[contains(text(), 'Create & Start')]").ClickButton();
   Delay(2000)
 }
 else
  {
    page.FindElement("//button[contains(text(), 'Cancel')]").ClickButton();
  }
  
  }
  
}
