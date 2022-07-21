var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
function Select_Branch()
{
  Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'spec-change-branch--button')]").ClickButton();
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//h1"), "contentText", cmpEqual, "Select Branch");
  
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//*[@class='wj-btn wj-btn-default']").ClickButton();

  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("Main","No");
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").ClickButton();
    
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//*[@label='Branch']//a"), "contentText", cmpEqual, "Main");
  
}