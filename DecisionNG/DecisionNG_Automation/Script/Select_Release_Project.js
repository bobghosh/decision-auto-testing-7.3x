var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
function Select_Release_Project()
{
  
  Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'spec-change-project--button')]").ClickButton();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Select Release Project");
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@class='wj-btn wj-btn-default']").ClickButton();

  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("DivyaRP","No");
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").ClickButton();

  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//*[@label='Release Project']//a"), "contentText", cmpEqual, "DivyaRP");
  
}