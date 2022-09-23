//USEUNIT RefLibrary

var page = Aliases.browser.pageSapiensDecision2;

function Open_Close_Palette_Flow()
{
  var flowPleateBtn = page.FindElement(ORfloatingSidebar.dcnFloatingActionbtn+"[4]")
      flowPleateBtn.Click();
}