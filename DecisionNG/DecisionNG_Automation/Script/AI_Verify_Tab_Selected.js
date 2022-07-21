var page = Aliases.browser.pageSapiensDecision2;

function AI_Verify_MainTab_Selected(selectMainTab)
{
  let mainTabs = page.FindElements("//p-tabview/div/ul/li[@role='presentation']/a")
  //Log.Message(mainTabs.length)
  for(let i=0 ; i< mainTabs.length; i++)
  {
    let tabText = mainTabs[i].textContent;
    //Log.Message(tabText)
    if(tabText.toLowerCase() == selectMainTab.toLowerCase())
    {
      var istabSelected = mainTabs[i].getAttribute('aria-selected');
      if(istabSelected == 'true')
      {
        Log.Checkpoint(selectMainTab+" Tab is selected");
        break;
      }
      else{
        Log.Error(selectMainTab+" Not Selected ")
      }
    }
  }
}


function AI_Verify_SubTab_Selected(selectSubTab)
{
  let subTabs = page.FindElements("//div[contains(@aria-hidden,'false')]//a[contains(@class,'additional-info-container')]//parent::span");
  
 // Log.Message(subTabs.length);
  
  for(let i=0 ; i< subTabs.length; i++)
  {
    let tabText = subTabs[i].textContent;
    
    tabTextLowcase = tabText.replace(/[^a-z\s]/gi, '').toLowerCase().trim();
    //https://stackoverflow.com/questions/18624457/how-do-i-extract-only-alphabet-from-a-alphanumeric-string
    // [^a-z] matches everything but a-z
// the flag `g` means it should match multiple occasions
// the flag `i` is in case sensitive which means that `A` and `a` is treated as the same character ( and `B,b`, `C,c` etc )  
        
    
    if(tabTextLowcase == selectSubTab.toLowerCase())
    {
      let classofSubTasbs = subTabs[i].getAttribute('class')
      //Log.Message(classofSubTasbs)
      if(classofSubTasbs.includes('tabs--selected'))
        {
          Log.Checkpoint(selectSubTab+" Tab is selected");
        }
      else
      {
        Log.Error(selectSubTab+" Tab is not selected");
      }
    }
  }
}