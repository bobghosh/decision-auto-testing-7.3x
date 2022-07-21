//USEUNIT RefLibrary
var Navigate_to_Deployment_History = require("Navigate_to_Deployment_History");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
var Buttons_Actions = require("Buttons_Actions");
var WaitElement_ispresent = require("WaitElement_ispresent");
function Deployment_Hisory_Redeploy(deployment_Environment)
{
  //let deployment_Environment =""
  let page = Aliases.browser.pageSapiensDecision
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement(ORGeneric.dcnDialog+"//h1"), "contentText", cmpEqual, "Deploy");
  
  let Project_Name = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-project-name-label']//span/label");
  Log.Message(Project_Name.textContent)
  
  let Deploy_Name = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-deploy-name-label']//input");
  Log.Message(Deploy_Name.Text)
  
  page.FindElement(ORGeneric.dcnDialog+"//dcn-revision-environment//button").WaitProperty("Enabled", true, 10000)
  page.FindElement(ORGeneric.dcnDialog+"//dcn-revision-environment//button").ClickButton()
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(deployment_Environment, "No");
  
  let Environment_Type = Aliases.browser.pageSapiensDecision2.FindElement(ORRepository.specEnvDetails+"//*[@label='Environment type']//span/label");
  Log.Message(Environment_Type.textContent)
  
  let Format_Adapter = Aliases.browser.pageSapiensDecision2.FindElement(ORRepository.specEnvDetails+"//*[@label='Format adapter']//span/label");
  Log.Message(Format_Adapter.textContent)
  
  let Repository_Adapter = Aliases.browser.pageSapiensDecision2.FindElement(ORRepository.specEnvDetails+"//*[@label='Repository adapter']//span/label");
  Log.Message(Repository_Adapter.textContent)
  
  let Model_Definition = Aliases.browser.pageSapiensDecision2.FindElement(ORRepository.specEnvDetails+"//*[@label='Model definition']//span/label");
  Log.Message(Model_Definition.textContent)
  
  let Model_Version = Aliases.browser.pageSapiensDecision2.FindElement(ORRepository.specEnvDetails+"//*[@label='Model version']//span/label");
  Log.Message(Model_Version.textContent)
  
  Delay(300);
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();

  Delay(4000);  
}