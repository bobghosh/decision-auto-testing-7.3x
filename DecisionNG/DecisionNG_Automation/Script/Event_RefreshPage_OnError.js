function EventControl1_OnActionScriptException(Sender, Process, Exception)
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
