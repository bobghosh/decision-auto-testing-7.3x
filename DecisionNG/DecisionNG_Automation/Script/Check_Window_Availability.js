function checkForWindow(windowXpath)
{
  let page = Aliases.browser.pageSapiensDecision2
  page.WaitElement(windowXpath, 30000)
  if(windowXpath.Exists && windowXpath.Visible)
{
  Log.Checkpoint("Window is visible on screen")
}
else
{
  Log.Error("Window is not visible on screen")
}
}

function checkForClosedWindow(windowXpath)
{
  let page = Aliases.browser.pageSapiensDecision2
  page.WaitElement(windowXpath, 30000)
  if(!windowXpath.Exists && !windowXpath.Visible)
{
  Log.Checkpoint("Window is NOT visible on screen")
}
else
{
  Log.Error("Window is visible on screen")
}
}