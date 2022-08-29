var SelectingItem_SingleItem_Match_MultipleRows = require("SelectingItem_SingleItem_Match_MultipleRows");
function Search_Open_Model_Definition(ModelDefinitionName)
{
    
  Aliases.browser.pageSapiensDecision.FindElement("//div[@class='search']//input").SetText(ModelDefinitionName);
  
  aqUtils.Delay(700)
  SelectingItem_SingleItem_Match_MultipleRows.SelectingItem(ModelDefinitionName);
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//input[@name='name']"), "Text", cmpContains, ModelDefinitionName);  

}