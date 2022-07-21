function Environment_Verify_Enabled_Select(option)
{
  //let option ="DE 1202"
  let page = Aliases.browser.pageSapiensDecision
  let revisionEnvBtn= page.FindElement("//dcn-revision-environment//button");
  revisionEnvBtn.WaitProperty("Enabled",true,60000);
  revisionEnvBtn.ClickButton()
  
  Delay(500)
    var Option= page.FindElements("//*[@role='option']//button");
    
      for(let i=0;i<Option.length;i++)
      {
        var Optiontext=Option[i].textContent.trim();
        
        if(Optiontext == option.trim())
          {
            if(Option[i].hasAttribute('disabled'))
            {
               Log.Error(Optiontext +" is disabled")
               break;
            }
            else
            {
              Option[i].Click();
              break;
            }
            
          }
        
         if(i == (Option.length-1))
         {
           Log.Warning("Option doesn't exists/Wrong Input Data"); 
           Option[0].Click();
           break;
         }  
      }
  
  
}

