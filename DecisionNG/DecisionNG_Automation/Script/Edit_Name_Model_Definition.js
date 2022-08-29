var Model_Definition_Availability_Check = require("Model_Definition_Availability_Check");
function Edit_Name_Model_Definition()
{
  var timestamp = new Date();
  let numberunique = Date.now();
  
  let UpdatedName = "MD"+timestamp.getMilliseconds().toString() + "New" +numberunique;
  
  let NameField = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='name']");
  
  NameField.SetText(UpdatedName);
  
  aqObject.CheckProperty(NameField, "Text", cmpEqual, UpdatedName); 
  
  Aliases.browser.pageSapiensDecision.WaitElement("//dcn-breadcrumb//span[text()='"+UpdatedName+"']",10000)
  Project.Variables.CommonModelDefinitionName = UpdatedName;
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[(text()='Model Definition') and not (@class = 'breadcrumb-holder__tooltip--text')]").Click();
  
  aqUtils.Delay(3000)
  Model_Definition_Availability_Check.Model_Definition_Availability_Check(UpdatedName);  
  
}