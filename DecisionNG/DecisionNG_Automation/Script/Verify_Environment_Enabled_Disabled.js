function Verify_Environment_Enabled_Disabled(option,Enabled_Disabled)
{
  //let option ="DE 1202"
  let page = Aliases.browser.pageSapiensDecision
  let revisionEnvBtn= page.FindElement("//dcn-revision-environment//button");
  revisionEnvBtn.ClickButton()
  
  Delay(500)
    var Option= page.FindElements("//*[@role='option']//button");
    
      for(let i=0;i<Option.length;i++)
      {
        var Optiontext=Option[i].textContent.trim();
        
        if(Optiontext == option.trim())
          {
            Log.Message("test")
           
              if(Enabled_Disabled=="Disabled")
              {
                 if(Option[i].hasAttribute('disabled'))
                 {
                 Log.Checkpoint(Optiontext+ " : The Environment has no Model Definision or Version/Environment is Disabled")
                 }
                 else{
                   Log.Error(Optiontext+" Environment is Enabled")
                 }
              }
              else 
              {
                if(Option[i].hasAttribute('disabled'))
                 {
                 Log.Error(Optiontext+" : The Environment has no Model Definision or Version/Environment is Disabled")
                 }
                 else{
                   Log.Checkpoint(Optiontext+" Environment is Enabled")
                 }
              }
               
               break;
            }
            
          
        
         if(i == (Option.length-1))
         {
           Log.Warning("Option doesn't exists/Wrong Input Data"); 
           Option[0].Click();
           break;
         }  
      }
  
  
}