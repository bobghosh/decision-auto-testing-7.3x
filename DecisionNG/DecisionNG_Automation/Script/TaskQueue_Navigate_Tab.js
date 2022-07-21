//USEUNIT RefLibrary

function TaskQueue_Tab_Selection(Tab)
{

  
  let taskQueue_Tabs = Aliases.browser.pageSapiensDecision.FindElements(ORTaskGovernance.pTabview+"/div/ul/li");
  
  for(let i = 1; i <= taskQueue_Tabs.length; i++)
  {
    let tabName = Aliases.browser.pageSapiensDecision.FindElement(ORTaskGovernance.pTabview+"/div/ul/li["+i+"]//span");
    
    if(tabName.textContent.includes(Tab))
    {
      tabName.Click();
      break;
    }
    
  } 
  
  Delay(1000);
  
}
