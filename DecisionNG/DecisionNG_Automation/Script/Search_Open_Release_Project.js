function Search_and_Open_Release_Project(ReleaseProjectName)
{
//  let ReleaseProjectName = "AutomationSampleProject";
  //dcn-repository-project-tab//*[@placeholder='Search Asset']
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-repository-project-tab//*[@placeholder='Search Asset']").SetText(ReleaseProjectName);
  
  Delay(500);
  
  let ReleaseProjects = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
  
  for(let i = 1; i <= ReleaseProjects.length ;i++)
  {
    let Release_Project = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[1]");
        
    if(Release_Project.textContent.trim() == ReleaseProjectName.trim())
    {
      Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[1]//a").Click();      
      
      Delay(500);
      
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//h5"), "contentText", cmpEqual, "Release Project"); 
      break;
    }
  }
}