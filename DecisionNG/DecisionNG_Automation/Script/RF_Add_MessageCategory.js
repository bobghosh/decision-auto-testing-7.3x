var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");
var RF_ConclusionColumn_Options = require("RF_ConclusionColumn_Options");
function MessageCategory()
{
  //Right Click on Conclusion Column and Select Message Category
  Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'conclusionHeader')]").ClickR(27, 14);
  RF_ConclusionColumn_Options.ConclusionColumn_Options("Add Message Category");
  
  //Select Message Category from the Dropdown
  Aliases.browser.pageSapiensDecision2.FindElement("//button[contains(@class,'ui-autocomplete-dropdown')]").Click();
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown("Informational","No");
  
  //DblClick
  Aliases.browser.pageSapiensDecision2.textnode26.DblClick();
  
  Aliases.browser.pageSapiensDecision.form.form2.form4.button2.ClickButton();
  
  Aliases.browser.pageSapiensDecision2.panel36.Click();

  Aliases.browser.pageSapiensDecision2.textbox2.Click();
  Aliases.browser.pageSapiensDecision2.textbox2.SetText("Text123");
 
  Aliases.browser.pageSapiensDecision.StartNewDecisionDropButton.ClickButton();

  Aliases.browser.pageSapiensDecision2.panel38.Click();
  
  
}
