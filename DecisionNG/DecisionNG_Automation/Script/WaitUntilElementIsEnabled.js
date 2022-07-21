function Wait_Until_Element_Is_Enabled(ElementXpath,minutes)
{
  let page = Aliases.browser.pageSapiensDecision2
  var d = new Date()
  var startTime = d.getTime()
  MilSeconds = minutes*60000
  do{
    var d = new Date()
    var endTime = d.getTime()
    Sys.Refresh()
    var currentItem = page.FindElement(ElementXpath)
    if(currentItem.Exists && currentItem.Enabled)
    {
      break
    }
  }
  while ((endTime - startTime) <= MilSeconds)
  if(currentItem.Exists && currentItem.Enabled){
    if(currentItem.Enabled && currentItem.Visible)
    {
      Log.Message("Item is Enabled... exiting the function")
      return true
    }
    else{
      Log.Error("Item is not Enabled... exiting the function")
      return false
    }
  }
   Log.Error("Item is not Enabled... exiting the function")
      return false
}