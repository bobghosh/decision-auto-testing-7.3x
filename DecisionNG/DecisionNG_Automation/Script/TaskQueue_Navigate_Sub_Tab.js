//USEUNIT RefLibrary

function TaskQueue_subTab_Selection(sub_Tab)
{
 
  let page = Aliases.browser.pageSapiensDecision
  let taskQueue_SubTabs = page.FindElements(ORTaskGovernance.pTabPanel+"/div/ul/li");
    
  for(let j = 1; j <= taskQueue_SubTabs.length; j++)
  {
    let subTabName = page.FindElement(ORTaskGovernance.pTabPanel+"/div/ul/li["+j+"]//span");
    
    if(subTabName.textContent.includes(sub_Tab))
    {
      subTabName.Click();
      page.WaitElement(page.FindElement(ORGeneric.row+"[1]//td[1]"),100000);
      break;
    }
    
  }
  
  Delay(2000);
}