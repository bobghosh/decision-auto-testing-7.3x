function Navigate_SubTabs(TabName)
{  
  //let TabName ='Group Tasks'
  let WaitElement = Aliases.browser.pageSapiensDecision2.FindElement("//tbody//tr");
  //let Subtabs= Aliases.browser.pageSapiensDecision2.FindElements("//p-tabview//ul[1]//li//a//span");
  switch(TabName)
  
  {
    case "Group Tasks":
    {
       Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Group Tasks')]").click();
       Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
       break;
    }
             
            
    case "My Tasks":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'My Tasks')]").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
              

    case "Tasks To Monitor":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Tasks To Monitor')]").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
              
            
    case "Notifications":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Notifications')]").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
              
              
    case "Tasks":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[text()='Tasks']").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
    case "Fact Type Tasks":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Fact Type Tasks')]").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
              
              
    case "Model Mapping Tasks":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Model Mapping Tasks')]").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
             
              
    case "Repository Tasks":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Repository Tasks')]").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
              
              
    case "Revision Tasks":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Revision Tasks')]").click();  
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
              
              
    case "Deployment Tasks":
    {
      Aliases.browser.pageSapiensDecision2.FindElement("//ul//li//*[contains(text(),'Deployment Tasks')]").click();
      Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]"),10000);
      break;
    }
              
            
            
  }
  
  
}