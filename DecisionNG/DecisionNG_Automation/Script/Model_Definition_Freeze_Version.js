function Model_Definition_Freeze_Version(Version)
{
  //let Version = "1.0.0";
  let VersionTab = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(text(), 'Versions')]/../span[1]");  
  if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
  {
    VersionTab.click();
  }
    
  let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//dcn-model-definition-versions//tr");
  Log.Message(VersionCount.length);
    
  for(let i = 1; i <=VersionCount.length; i++)
  {
    let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-definition-versions//tr["+ i +"]//td[1]");
    //Log.Message(VersionName.textContent);
      
    if(VersionName.textContent == Version)
    {              
      VersionName.HoverMouse();
      //Click on Ellipses
      Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-definition-versions//tr["+i+"]//td[3]//dcn-button-menu").HoverMouse();
         
      Aliases.browser.pageSapiensDecision2.FindElement("//dcn-model-definition-versions//tr["+i+"]//td[3]//dcn-button-menu").click();
          
      Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Freeze']").click() 
          
      Delay(800);
          
      let FreezeIconAvailability = Aliases.browser.pageSapiensDecision2.FindElements("//dcn-model-definition-versions//*[contains(@class,'spec-froze-icon')]").length;
            
      if(FreezeIconAvailability > 0)
        Log.Checkpoint("The Version " + Version + " is Freezed");             
      else
        Log.Error("The Version " + Version + " is not Freezed");

            
      break;
            
    }
          
         
  }      
}