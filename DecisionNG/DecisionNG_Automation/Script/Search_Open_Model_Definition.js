var Add_Model_Definition = require("Add_Model_Definition");
var SelectingItem_SingleItem_Match_MultipleRows = require("SelectingItem_SingleItem_Match_MultipleRows");
function Search_Open_Model_Definition(ModelDefinitionName)
{
  //Sets the text 'Test12341' in the 'textbox6' text editor.
  
//  Log.Message(ModelDefinitionName)
    
  Aliases.browser.pageSapiensDecision.FindElement("//div[@class='search']//input").SetText(ModelDefinitionName);
  //Clicks the 'linkMoreDetails' link.
    SelectingItem_SingleItem_Match_MultipleRows.SelectingItem(ModelDefinitionName);
  //Checks whether the 'Text' property of the Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName object equals 'Test12341'.
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//input[@name='name']"), "Text", cmpContains, ModelDefinitionName);  

}