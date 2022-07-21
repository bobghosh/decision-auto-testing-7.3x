//USEUNIT WaitElement_ispresent
//USEUNIT RefLibrary
var RF_ConclusionColumn_Options = require("RF_ConclusionColumn_Options");
var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Role");
var RF_RightClick_HeaderColumns_SelectSubMenu = require("RF_RightClick_HeaderColumns_SelectSubMenu");

function Insert_Column_From_Conclusion_Column(ColumnName)
{
//  let ColumnName = "Vars098 ";

  //Right Click on Conclusion Column and Select Insert Column
  Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'conclusionHeader')]").ClickR(27, 14);
  RF_ConclusionColumn_Options.ConclusionColumn_Options("Insert Column");
  
  //Control passes over Placeholder to input Column Name/Fact Type Name
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click(); 
  Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(ColumnName);
  
  //Select Existing Fact Type or Create New
  let DropdownValue = "Create New Fact Type \""+ColumnName+"\""
  aqUtils.Delay(5000)
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(DropdownValue, "No");  

}

function Insert_ExisitngFT_From_Conclusion_Column(FTType,ColumnName, FTName){
  RF_RightClick_HeaderColumns_SelectSubMenu.RightClick_Condition_Conclusion_header(FTType,ColumnName,'Insert Column') 
  let page = Aliases.browser.pageSapiensDecision
  
  page.WaitElement("[aria-autocomplete='list']").SetText(FTName)
  aqUtils.Delay(5000)
  //page.WaitElement("//*[text()='"+FTName+"']").Click();
  page.WaitElement(ORGeneric.dcnAssetDisplay).Click();
  
}

function Create_NewFT_From_Conclusion_Column(FactTypeName)
{
   let page = Aliases.browser.pageSapiensDecision2;
   page.FindElement(ORGeneric.placeholderName).keys(FactTypeName);
   dropDownVal = "Create New Fact Type \""+FactTypeName+"\""
   Wait_Until_Element_ispresent("//span[text()='"+dropDownVal+"'"+"]")
   page.FindElement(ORGeneric.placeholderName).keys("[Tab]")
   aqUtils.Delay(3000)
}