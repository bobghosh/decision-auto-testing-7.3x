var Model_Definition_Availability_Check = require("Model_Definition_Availability_Check");
var SelectingItem_SingleItem_Match_MultipleRows = require("SelectingItem_SingleItem_Match_MultipleRows");
function Add_Model_Definition(Create)
{
  var timestamp = new Date();
  let numberunique = Date.now();
  let ModelDefinitionName = "MD"+timestamp.getMilliseconds().toString() + numberunique;
  
  Project.Variables.CommonModelDefinitionName = ModelDefinitionName;
  
  //Clicks the 'buttonSendToGlossary' button.
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(text(), 'Add ')]").ClickButton();
  //Clicks the 'form' control.
  Aliases.browser.pageSapiensDecision.FindElement("//*[@key='targetModelName']").Click();
  Aliases.browser.pageSapiensDecision.FindElement("//*[@key='targetModelName']").SetText(ModelDefinitionName);
  
  if(Create == "Yes")
    Aliases.browser.pageSapiensDecision.FindElement("//*[@class='icon-valid']").Click();   
  else
    Aliases.browser.pageSapiensDecision.FindElement("//*[@class='icon-fail']").Click();

  
  Model_Definition_Availability_Check.Model_Definition_Availability_Check(ModelDefinitionName);
      
}
module.exports.Add_Model_Definition = Add_Model_Definition;