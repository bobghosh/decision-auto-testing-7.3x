var WaitElement_ispresent = require("WaitElement_ispresent");
var Buttons_Actions = require("Buttons_Actions");
var Navigate_to_Deployment_History = require("Navigate_to_Deployment_History");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
//USEUNIT RefLibrary

var Revision_Buttons = require("Revision_Buttons");
function Deploy_Snapshot_Verify_Deployed_Status(deployment_Environment,ApprovalStrategy)
{
  let page = Aliases.browser.pageSapiensDecision2
  //verify if the revision is untagged else untag first
  let tagUntagBtn = Aliases.browser.pageSapiensDecision.FindElement("//*[text()='Refresh ']//parent::span//following-sibling::span[1]")
  let tagUntagText = tagUntagBtn.textContent.trim();
  if(tagUntagText == "Tag")
  {
    Log.Checkpoint("Revision is Snapshot")
  }
  else
  {
    Log.Message("Revision is not snapshot it is Tagged")
    tagUntagBtn.Click()
    Buttons_Actions.okButtonClick();
    Delay(1000)
    WaitElement_ispresent.Wait_Until_Element_ispresent("//*[text()='Deploy ']")
  }
  //Click on Deploy button for Revision
  page.FindElement("//*[text()='Deploy ']").ClickButton();
  
  aqObject.CheckProperty(page.FindElement(ORGeneric.dcnDialog+"//h1"), "contentText", cmpEqual, "Deploy as Snapshot");
  
  let Project_Name = page.FindElement(ORRepository.specProjectName+"//span/label");
  Log.Message("Project Name is : "+Project_Name.textContent)
  
  let Deploy_Name = page.FindElement("//*[@class='spec-deploy-name-label']//input");
  Log.Message("Deploy Name is  : "+Deploy_Name.Text)
  
  page.FindElement(ORGeneric.dcnDialog+ORGeneric.dcnRevisionEnv+"//button").WaitProperty("Enabled", true, 10000)
  let envBtn = page.FindElement(ORGeneric.dcnDialog+ORGeneric.dcnRevisionEnv+"//button")
  envBtn.ClickButton()
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(deployment_Environment, "No");
  
  let Environment_Type = page.FindElement(ORRepository.specEnvDetails+ORRepository.lblEnvironmentType+"//span/label");
  Log.Message("Environment Type is : "+Environment_Type.textContent)
  
  let Format_Adapter = page.FindElement(ORRepository.specEnvDetails+"//*[@label='Format adapter']//span/label");
  Log.Message("Format Adapter is : "+Format_Adapter.textContent)
  
  let Repository_Adapter = page.FindElement(ORRepository.specEnvDetails+"//*[@label='Repository adapter']//span/label");
  Log.Message("Repository Adapter is : "+Repository_Adapter.textContent)
  
  let Model_Definition = page.FindElement(ORRepository.specEnvDetails+"//*[@label='Model definition']//span/label");
  Log.Message("Model Definition is : "+Model_Definition.textContent)
  
  let Model_Version = page.FindElement(ORRepository.specEnvDetails+"//*[@label='Model version']//span/label");
  Log.Message("Model Definition Version is : "+Model_Version.textContent)
  
  Delay(300);
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
  //Deploy pop up should be closed  
  Aliases.browser.pageSapiensDecision.panel16.WaitProperty("VisibleOnScreen",true, 100000);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel16, "Exists", cmpEqual, true);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.panel16, "contentText", cmpEqual, "Deployment task submission has started and may take a while to complete");  
  Aliases.browser.pageSapiensDecision.panel16.click();

  //Pop up for Deployment pop up submitted successfully
  page.panelRevisionTaskValidation.WaitProperty("Exists",true, 100000);
  aqObject.CheckProperty(page.panelRevisionTaskValidation, "Exists", cmpEqual, true);
  Log.Message(page.panelRevisionTaskValidation.textContent);
  page.panelRevisionTaskValidation.click(); 
  
  if(ApprovalStrategy == "Any" || ApprovalStrategy == "All")
  {
    Log.Message("Approval Strategy is set to " + ApprovalStrategy)
    Navigate_to_Deployment_History.Navigate_to_Deployment_History();
    
    Aliases.browser.pageSapiensDecision.WaitElement(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.tblFrozenView+"//tbody//tr[1]"), 10000);
  
    let Status = Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.tblFrozenView+"//tbody//tr[1]//td[2]");
  
    if(Status == "REQUESTED")
    {
      Log.Checkpoint("Deployment status is requested")
    }
    else
    {
      Log.Error("Deployment status is not Requested");
    }
  }
  else
  {
    Log.Message("Approval Strategy is set to None")    
  }
 
}