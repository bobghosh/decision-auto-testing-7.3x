var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
function FlowScreen_Decision_RClick_Open(Decision)
{
  OCR.Recognize(Aliases.browser.pageSapiensDecision2.canvas).BlockByText(Decision).ClickR()
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown("Open","No")
  Delay(3000)
}