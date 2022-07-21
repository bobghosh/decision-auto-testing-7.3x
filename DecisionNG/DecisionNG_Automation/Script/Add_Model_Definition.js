var Model_Definition_Availability_Check = require("Model_Definition_Availability_Check");
var SelectingItem_SingleItem_Match_MultipleRows = require("SelectingItem_SingleItem_Match_MultipleRows");
function Add_Model_Definition(Create)
{
  var timestamp = new Date();
  let numberunique = Date.now();
  let ModelDefinitionName = "MD"+timestamp.getMilliseconds().toString() + numberunique;
  
  Project.Variables.CommonModelDefinitionName = ModelDefinitionName;
  
  //Checks whether the 'ObjectLabel' property of the Aliases.browser.pageSapiensDecision.buttonSendToGlossary object equals 'Add'.
//  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.buttonSendToGlossary, "ObjectLabel", cmpEqual, "Add");
//  //Checks whether the 'Enabled' property of the Aliases.browser.pageSapiensDecision.buttonSendToGlossary object equals True.
//  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.buttonSendToGlossary, "Enabled", cmpEqual, true);
//  //Clicks the 'buttonSendToGlossary' button.
  Aliases.browser.pageSapiensDecision.FindElement("//button[contains(text(), 'Add ')]").ClickButton();
  //Clicks the 'form' control.
  Aliases.browser.pageSapiensDecision.form.Click();
  //Sets the text 'Test12341' in the 'form' text editor.
  Aliases.browser.pageSapiensDecision.form.SetText(ModelDefinitionName);
  
  if(Create == "Yes")
  {
    //Click on okay to create new MD
    Aliases.browser.pageSapiensDecision.FindElement("//*[@class='icon-valid']").Click(); 
  }
  else
  {  
    //Click on No icon
    Aliases.browser.pageSapiensDecision.FindElement("//*[@class='icon-fail']").Click();
  }  

      Model_Definition_Availability_Check.Model_Definition_Availability_Check(ModelDefinitionName);
      
}
module.exports.Add_Model_Definition = Add_Model_Definition;