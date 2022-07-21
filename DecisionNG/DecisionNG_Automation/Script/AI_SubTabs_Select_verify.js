function AdditionalInfo_SubTab_Select_Verify(selectSubTab)
{ 
  let page = Aliases.browser.pageSapiensDecision2;
  
  let subTabs = page.FindElements("//div[contains(@aria-hidden,'false')]//a[contains(@class,'additional-info-container')]//parent::span");
  
 //Log.Message(subTabs.length);
  
  
  for(let i=0 ; i< subTabs.length; i++)
  {
    

    let tabText = subTabs[i].textContent;
    //Log.Message(tabText);
    tabTextLowcase = tabText.replace(/[^a-z\s]/gi,'').toLowerCase().trim();
    
    //https://stackoverflow.com/questions/18624457/how-do-i-extract-only-alphabet-from-a-alphanumeric-string
    // [^a-z] matches everything but a-z
// the flag `g` means it should match multiple occasions
// the flag `i` is in case sensitive which means that `A` and `a` is treated as the same character ( and `B,b`, `C,c` etc )  
    
   
    if(tabTextLowcase == selectSubTab.toLowerCase().trim())
    {
      let classofSubTasbs = subTabs[i].getAttribute('class')
      if(classofSubTasbs.includes('tabs--selected'))
        {
          Log.Checkpoint(selectSubTab+"Tab is already selected")
        }
      else
      {
        subTabs[i].click();
        
      if(!i==subTabs.length-1)
      {
        page.panel28.WaitProperty("VisibleOnScreen",false,50000);
      }
      
      let attr= subTabs[i].getAttribute("class");

      if(attr.includes('tabs--selected'))
      {
        Log.Checkpoint(""+selectSubTab+" Tab is selected successfully");
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
  
}
