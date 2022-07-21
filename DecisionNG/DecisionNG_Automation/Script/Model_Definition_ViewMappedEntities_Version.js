function Model_Definition_ViewMappedEntities_Version(Version)
{
  
//    let Version = "1.0.0_Copy_#1";   
    
    let VersionTab = Aliases.browser.pageSapiensDecision2.FindElement("//span[contains(text(),'Versions')]//ancestor::a/span[1]");  
    if(VersionTab.getAttribute("class").includes("pi-chevron-right"))
    {
      VersionTab.click();
    }
    
    let VersionCount = Aliases.browser.pageSapiensDecision2.FindElements("//tbody//tr//td[1]/div/div");
    Log.Message(VersionCount.length);
    
    for(let i = 1; i <=VersionCount.length; i++)
    {
      let VersionName = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+ i +"]//td[1]/div/div[1]");
      Log.Message(VersionName.textContent);
      
      if(VersionName.textContent.trim() == Version)
      {              
          VersionName.HoverMouse();
          //Click on Ellipses
          Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+i+"]//td[3]//dcn-button-menu").HoverMouse();
         
          Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr["+i+"]//td[3]//dcn-button-menu").click();
          
          Aliases.browser.pageSapiensDecision2.FindElement("//body//div[contains(@style,'display: block')]//ul//span[text()='View Mapped Entities']").click();
          
          
          Delay(300);
          
          aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//span[text()=' Associated Fact Types ']"), "Exists", cmpEqual, true);          
          
          break;
      }      
        
    }
    
    
    
  
}