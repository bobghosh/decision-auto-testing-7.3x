function VerifyWhetherItemIsEnabledOrDisabled(ItemXpath,PropertyToBeChecked)
{
  
  let page = Aliases.browser.pageSapiensDecision2
  var item = page.FindElement(ItemXpath)
  var Item_Enabled_Disabled = item.hasAttribute('disabled')
  if(PropertyToBeChecked == "Enabled")
  {
    if(Item_Enabled_Disabled == false)
    {
      Log.Checkpoint("Item is Enabled")
    }
    else
    {
      Log.Error("Item is Disabled")
    }
  }
  else
  {
    if(Item_Enabled_Disabled == true)
    {
      Log.Checkpoint("Item is Disbaled")
    }
    else
    {
      Log.Error("Item is Enabled")
    }
  }
}
