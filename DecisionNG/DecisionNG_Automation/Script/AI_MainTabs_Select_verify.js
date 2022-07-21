function AdditionalInfo_MainTabs_Select_Verify(selectMainTab)
{ 
  let page = Aliases.browser.pageSapiensDecision2;
  
  let mainTabs = page.FindElements("//p-tabview/div/ul/li[@role='presentation']/a")
  //Log.Message(mainTabs.length)
  for(let i=0 ; i< mainTabs.length; i++)
  {
    let tabText = mainTabs[i].textContent;

    if(tabText.toLowerCase() == selectMainTab.toLowerCase())
    {
      var istabSelected = mainTabs[i].getAttribute('aria-selected');
      if(istabSelected == 'true')
      {
        Log.Checkpoint(selectMainTab+"Tab is already selected");
      }
      else 
      {
      mainTabs[i].Click()
      //page.panel28.WaitProperty("VisibleOnScreen",false,30000);
      Delay(1000)
      let attr= mainTabs[i].getAttribute("aria-selected");
      //Log.Message(attr);
      if(attr == 'true')
      {
        Log.Checkpoint(""+selectMainTab+" Tab is selected successfully");
        break;
      }
      
      else
      {
        Log.Error(""+selectMainTab+" Tab is not selected");
        break;
      }
      
    }
    }
  }
  
}
