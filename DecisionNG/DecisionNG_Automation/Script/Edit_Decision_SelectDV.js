var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var FlowScreen_Perform_Actions = require("FlowScreen_Perform_Actions");
var page = Aliases.browser.pageSapiensDecision
function Edit_Decision(performdoubleClickOn,enterDecisionName,decisionNameToSelect)
{
//  let performdoubleClickOn = "Condo Loan Documentation"
//  let enterDecisionName = "Condo Loan FHA"
//let decisionNameToSelect = 'Condo Loan FHA Concentration Compliance (View: Base) [V1.1]'
  FlowScreen_Perform_Actions.DFScreen_Perform_DBLClick(performdoubleClickOn)
  page.WaitElement("//input[@placeholder='decision name']");

  page.FindElement("//input[@placeholder='decision name']").setText(enterDecisionName)
  Delay(2000)
  page.WaitElement("ul//li")
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(decisionNameToSelect,"No")
}