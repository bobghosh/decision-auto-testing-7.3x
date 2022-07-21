function Tasks_FactTypes_ClaimAll(TaskName)
{
//    let TaskName = "Model Mapping Task";
      
    let flag = 0;
    let Paginator;
    
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
  
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                //var FactType_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");

                var Task_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[7]//a");
                //If the Item Name matches 
                if(Task_Name.textContent == TaskName)
                {    
                  let Checkbox = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[1]//p-checkbox/div/div[2]");
                  
                  if(Checkbox.getAttribute("class").includes("ui-state-active"))
                  {
                    Log.Checkpoint("Checkbox is selected") 
                  }
                  else
                  {
                    Checkbox.click();
                    if(Checkbox.getAttribute("class").includes("ui-state-active"))
                    {
                      Log.Checkpoint("Checkbox is selected") 
                    }
                    else
                    {
                      Log.Error("Checkbox is not selected")
                    }
                  }
                
                         
                }

            }
          
          if(Paginator == "Yes")
          {
            if(Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
    
    if(Paginator == "Yes")
    {
      if(!Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'ui-paginator-first')]").getAttribute("class").includes("ui-state-disabled"))
      {    
        Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'ui-paginator-first')]").click(); 
      }    
    }
  
    Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Claim All']").Click();
}