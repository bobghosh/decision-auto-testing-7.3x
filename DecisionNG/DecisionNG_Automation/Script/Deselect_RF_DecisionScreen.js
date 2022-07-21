function Deselect_RF_DecisionScreen()
{
  var page = Aliases.browser.pageSapiensDecision2;
  let canvas= page.FindElement("//canvas");
  canvas.Click(2,0);
  Delay(2000)  
}