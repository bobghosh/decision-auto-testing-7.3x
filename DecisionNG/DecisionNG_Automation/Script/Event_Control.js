//USEUNIT RefLibrary

function EventControl_OnActionScriptException(Sender, Process, Exception)
{
  
  if(Aliases.browser.pageSapiensDecision.panel17.Exists)
  {
    if(Aliases.browser.pageSapiensDecision.panel16.Exists)
    {
      Aliases.browser.pageSapiensDecision.panel17.Click();
      Aliases.browser.WaitMSAAObject(Aliases.browser.pageSapiensDecision.imageLogoNegative,30000);
    }
  }
  else
  {
    Aliases.browser.Refresh();
    Aliases.browser.WaitMSAAObject(Aliases.browser.pageSapiensDecision.imageLogoNegative,30000);
  }
}

function EventControl_OnStopTest(Sender)
{
  if(Aliases.browser.pageSapiensDecision.panel17.Exists)
  {
    if(Aliases.browser.pageSapiensDecision.panel16.Exists)
    {
      Aliases.browser.pageSapiensDecision.panel17.Click();
      Aliases.browser.pageSapiensDecision.WaitElement("//dcn-contextmenu/following-sibling::h1", 30000).WaitProperty("VisibleOnScreen", true, 30000)
    }
  }
  else
  {
    Aliases.browser.Refresh();
    Aliases.browser.pageSapiensDecision.Wait();
  }
}