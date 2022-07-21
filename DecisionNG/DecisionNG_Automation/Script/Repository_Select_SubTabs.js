//USEUNIT RefLibrary

function Repository_SubTab_Select_Verify(selectSubTab)
{ 
  
  let page = Aliases.browser.pageSapiensDecision2;
  
  let subTabs = page.FindElements(ORRepository.dcnRepoAssetTab+"//ul//li//span//parent::a");
  
  //Log.Message(subTabs.length);
  
  for(let i=0 ; i< subTabs.length; i++)
  {
    
    let tabText = subTabs[i].textContent;
    //Log.Message(tabText)
    tabTextLowcase = tabText.toLowerCase().trim();
    
    if(tabTextLowcase == selectSubTab.toLowerCase())
    {
      subTabs[i].Click();
     // page.panel28.WaitProperty("VisibleOnScreen",false,50000);
      let attr= subTabs[i].getAttribute("aria-selected");

      if(attr == 'true')
      {
        Log.Checkpoint(""+selectSubTab+" Tab is selected successfully");
        Delay(1000)
        break;
      }
      
      else
      {
        Log.Error(""+selectSubTab+" Tab is not selected");
        break;
      }

    }
  }
  
}
