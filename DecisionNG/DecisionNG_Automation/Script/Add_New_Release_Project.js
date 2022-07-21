function Add_New_Release_Project(Create)
{
//      let Create = "Yes";
      var timestamp = new Date();
      let ProjectName = "ReleaseProject1" + timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
      
    Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'add-btn')]").click();
  
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Create New Project");
    
    Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectName']").SetText(ProjectName);
    
    Delay(500);
    
    if(Create == "Yes")
    {
        Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'spec-confirmed')]").ClickButton();
      
        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//h5"), "contentText", cmpEqual, "Release Project");

        aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//*[@name='projectName']"), "Text", cmpEqual, ProjectName);    
        
   }
    else
    {
        Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'spec-cancelled')]").click();
    } 
    
    Project.Variables.Release_Project_Name = ProjectName;
}