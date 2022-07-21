var FlowScreen_Perform_Actions = require("FlowScreen_Perform_Actions");
function Rename_SubFlow(subFlowName,subFlowRename)
{
  let page = Aliases.browser.pageSapiensDecision
  FlowScreen_Perform_Actions.DFScreen_Select(subFlowName)
  FlowScreen_Perform_Actions.DFScreen_Select(subFlowName)
  //.Keys("^[Esc]");
  page.FindElement("//*[@class='goTXarea']").Keys("^[A]");
  page.FindElement("//*[@class='goTXarea']").Keys("[Del]");
  
  page.FindElement("//*[@class='goTXarea']").Keys(subFlowRename)
  page.FindElement("//*[@class='goTXarea']").Keys("[Enter]");
  OCR.Recognize(page.FindElement("//canvas"))
}