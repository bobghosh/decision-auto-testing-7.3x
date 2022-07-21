var Model_Definition_Availability_Check = require("Model_Definition_Availability_Check");
function Edit_Name_Model_Definition()
{
  var timestamp = new Date();
  let numberunique = Date.now();
  
  let UpdatedName = "MD"+timestamp.getMilliseconds().toString() + "New" +numberunique;
  
  let NameField = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='name']");
  
  NameField.SetText(UpdatedName);
  
  aqObject.CheckProperty(NameField, "Text", cmpEqual, UpdatedName); 
  
  Project.Variables.CommonModelDefinitionName = UpdatedName;
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[(text()='Model Definition') and not (@class = 'breadcrumb-holder__tooltip--text')]").Click();
  
  Model_Definition_Availability_Check.Model_Definition_Availability_Check(UpdatedName);  
  
}