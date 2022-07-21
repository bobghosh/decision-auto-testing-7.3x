//USEUNIT RefLibrary
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");

function ContentPadding_SelectOption(option)
{
     let page = Aliases.browser.pageSapiensDecision2;
     page.WaitElement(ORRuleFamily.contentPaddingCell, 15000).ClickR();
     page.WaitElement("//p-contextmenusub", 15000)
     SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(option, 'No')
     
}