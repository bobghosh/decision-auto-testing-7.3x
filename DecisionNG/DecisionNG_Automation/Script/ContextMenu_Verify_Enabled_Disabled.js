function Decision_Screen_ContextMenu_Enabled_Disbled(verify_Enabled_Disabled,contextMenuItem)
{
  let page = Aliases.browser.pageSapiensDecision
  let contextMenuList = page.FindElements("//ul//li//a")  
  for(let i=0;i<contextMenuList.length;i++)
  {
    let menuText = contextMenuList[i].textContent;
    if(menuText == contextMenuItem)
    {
      let menuClass = contextMenuList[i].getAttribute('class')
      if(verify_Enabled_Disabled =="Disabled")
      {
        if(menuClass.includes('disabled'))
        {
          Log.Checkpoint(contextMenuItem+" Expected : Disabled ; Actual : Disabled")
        }
        else{
          Log.Error(contextMenuItem+ " Expected :Disabled ; Actual : Enabled")
        }
      }
      else if(verify_Enabled_Disabled == "Enabled")
      {
        if(menuClass.includes('disabled'))
        {
          Log.Error(contextMenuItem+" Expected : Enabled ; Actual : Disabled")
        }
        else{
          Log.Checkpoint(contextMenuItem+" Expected : Enabled ; Actual : Enabled")
        }
      }
    }
  }
}