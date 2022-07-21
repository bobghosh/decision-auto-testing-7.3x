function Originating_Task_Open_OR_Verify(originatingTaskName,verify_Asset,open_Asset)
{
  var page= Aliases.browser.pageSapiensDecision2
  let originationgTaskElement = page.FindElement("//dcn-additional-info-asset-general-tab//dcn-link-label//a")
  let originationgTaskText = originationgTaskElement.textContent.trim();
  
  if(verify_Asset == "Yes"&& !verify_Asset == "")
  {
    if(originatingTaskName == originationgTaskText)
    {
      let icon= page.FindElement("//dcn-additional-info-asset-general-tab//dcn-link-label//i")
      if(icon.VisibleOnScreen )
      {
        Log.Checkpoint("Task Icon is displayed on screen");
      }
      else
      {
        Log.Error("Task Icon is not displayed on screen");
      }
      
      Log.Checkpoint("Originating Task "+originatingTaskName+" is matching with "+originationgTaskText)
      
    }
    else
    {
      Log.Error("Originating Task "+originatingTaskName+" is not matching with "+originationgTaskText)
    }
  }
  else if(open_Asset ==  "Yes" && !open_Asset== "")
  {
    if(originatingTaskName == originationgTaskText)
    {
      let icon= page.FindElement("//dcn-additional-info-asset-general-tab//dcn-link-label//i")
      if(icon.VisibleOnScreen )
      {
        Log.Checkpoint("Task Icon is displayed on screen");
      }
      else
      {
        Log.Error("Task Icon is not displayed on screen");
      }
      
      Log.Checkpoint("Originating Task "+originatingTaskName+" is matching with "+originationgTaskText);
      
      originationgTaskElement.Click();
      
      page.WaitElement(page.FindElement("//*[@label='Task Name']//label"),5000);
      
      let detailsClass= page.FindElement("//*[text()='Details']/parent::div").getAttribute('class');
      
      if(detailsClass.includes('item--selected'))
      {
        Log.Checkpoint("Navigated to Details Tab Successfully")
      }
      else
      {
        Log.Error("Navigation to details tab was not successful /delayed");
      }

    }
    else
    {
      Log.Error("Originating Task "+originatingTaskName+" is not matching with "+originationgTaskText)
    }
    
  }

}