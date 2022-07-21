//USEUNIT SelectingOptionfromDropDown_Role
//USEUNIT Buttons_Actions
//USEUNIT Modeling_Projects_Navigation
//USEUNIT RefLibrary

function Create_Modeling_Project(ModelingProjectName, AssetApprovalProcess, FactTypeApprovalProcess, OkorCancel)
{
  let page = Aliases.browser.pageSapiensDecision2

  page.WaitElement(ORRepository.AddModProject, 10000).Click();
    
  page.WaitElement(ORGeneric.ProjectName, 5000).SetText(ModelingProjectName);
  Project.Variables.NewModelingProjectName = ModelingProjectName;
  
  page.WaitElement(ORGeneric.Decription, 5000).SetText("description of mp "+ModelingProjectName);
  
  page.FindElement(ORGeneric.DefaultAssetApproval+"//span[@wj-part]").Click();
  SelectingOptionfromDropdown(AssetApprovalProcess,"NO");
  
  page.FindElement(ORGeneric.DefaultFactTypeApproval+"//span[@wj-part]").Click();
  SelectingOptionfromDropdown(FactTypeApprovalProcess,"NO");
  
  if(OkorCancel.toLowerCase().includes('ok')){
    Buttons_Actions.okButtonClick()
    page.WaitElement(ORRepository.dcnModelingProject, 30000);
    childxpath = "//*[(text()='"+ModelingProjectName+"') and not (@class = 'breadcrumb-holder__tooltip--text')]"
    aqObject.CheckProperty(page.FindElement(childxpath), "innerText", cmpContains, ModelingProjectName, true )
    }
    
  else if(OkorCancel.toLowerCase().includes('cancel'))
    Buttons_Actions.cancelButtonClick()
  
}

function OpenModellingProject_Specified_Assigne(mpName, userID){
  
  let page = Aliases.browser.pageSapiensDecision2
  let projectList = page.WaitElement(ORRepository.dcnRepoModProjects+ORGeneric.row, 50000);
      projectList = page.FindElements(ORRepository.dcnRepoModProjects+ORGeneric.row);
  
  var count = counter = 0;
  Sys.Refresh()
  for(var i = 1; i <=projectList.length ; i++)
    {
      var User_ID = page.FindElement(ORRepository.dcnRepoModProjects+"//tbody//tr["+i+"]//td[3]").textContent;
      
      if(userID.trim() == User_ID.trim())
      {
        count++;
        let MP_Name = page.FindElement(ORRepository.dcnRepoModProjects+"//tbody//tr["+i+"]//td[1]");
        if(mpName.trim() == MP_Name.textContent.trim()){
          counter++;
          MP_Name.Click(100,25);
          //page.FindElement("//dcn-repository-modeling-projects//tbody//tr["+i+"]//td[1]//text()").Click();
          page.WaitElement(ORRepository.dcnModelingProjTasks, 5000)
          break;
          }
      }
    }
    if(count==0)
      Log.Error("UserID not found")
    else if(counter==0)
      Log.Error("Modeling project name not found")
}

function Click_AnalysisProject(){
  
  let page = Aliases.browser.pageSapiensDecision2
  let projectList = page.WaitElement(ORRepository.dcnRepoModProjects+ORGeneric.row, 50000);
      projectList = page.FindElements(ORRepository.dcnRepoModProjects+ORGeneric.row);
  
  var count = counter = 0;
  
  for(var i = 1; i <=projectList.length ; i++)
    {
      var User_ID = page.FindElement(ORRepository.dcnRepoModProjects+"//tbody//tr["+i+"]//td[1]");
      
      if(User_ID.textContent.trim() == 'Analysis Project')
      {
        User_ID.Click();
        page.WaitElement(ORRepository.dcnModelingProjTasks, 5000)
        break;
      }
    }

}