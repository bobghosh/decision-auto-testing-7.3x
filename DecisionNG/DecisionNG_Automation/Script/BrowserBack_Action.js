function Browserbackaction()
{
  let page = Aliases.browser.pageSapiensDecision2;
  page.Keys("~[Left]")
}

function OpenDuplicateTab()
{
 Sys.Clipboard = Aliases.browser.pageSapiensDecision2.URL
  
  Sys.Desktop.Keys("^t")
  Sys.Desktop.Keys("^v")
  Sys.Desktop.Keys("[Enter]")
  
  Aliases.browser.Page(Aliases.browser.pageSapiensDecision2.URL, 1).Wait()
  Aliases.browser.Page(Aliases.browser.pageSapiensDecision2.URL, 1).WaitElement("//*[contains(@class, 'top-header__readonly--text')]", 30000).WaitProperty("VisibleOnScreen", true, 30000)
  
  Delay(255)
}