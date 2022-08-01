function Select_Single_Row(Item)
{
  
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
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          Log.Message(ItemCount.length);
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");

                //If the Item Name matches 
                if(HighlightedItemName.textContent.trim() == Item )
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//i").Click();
                        flag =1;
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        Log.Message("Item is Selected")  
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
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
    
}
function Select_Single_Row_from_Decision_And_Decisoin_FlowTab(Item)
{
  
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
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          Log.Message(ItemCount.length);
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");

                //If the Item Name matches 
                if(HighlightedItemName.textContent.trim() == Item )
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//i").Click();
                        flag =1;
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        Log.Message("Item is Selected")  
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
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
    
}

function Select_Single_Row_FactType_Task_through_TaskName(Item)
{
  
    let flag = 0;
    let Paginator;
//    let Item = "Test"; Item is FactTypeName  
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[7]//a");

                //If the Task Name matches 
                if(HighlightedItemName.textContent == Item )
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//i").Click();
                        flag =1;
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        Log.Message("Item is Selected")  
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
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
    
}

function Select_Single_Row_Revision_Task_through_ProjectName(Item, Claim)
{
  //Item is Release Project Name
    let flag = 0;
    let Paginator;
//    let Item = "Test"; Item is FactTypeName  
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[3]");

                //If the Task Name matches 
                if(HighlightedItemName.textContent.trim() == Item )
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//i").Click();
                        flag =1;
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        Log.Message("Item is Selected")
                        
                        if(Claim == "Yes")
                        {
                          Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Claim']").Click();
                        }
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
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
    
}

function Select_Single_Row_Deployment_Task_through_ProjectName_EnvironmentName_DeploymentName(ProjectName, EnvironmentName, DeploymentName, Claim)
{

    let flag = 0;
    let Paginator;
//    let Item = "Test"; Item is FactTypeName  
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
//    Log.Message(Aliases.browser.pageSapiensDecision.FindElements("//dcn-paginator//p-paginator/div").length);
//    Log.Message(Paginator);
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var Deployment_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]").textContent.trim();
                var Environment_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[3]").textContent.trim();
                var Project_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[4]").textContent.trim();

                //If the Task Name matches 
                if(Deployment_Name == DeploymentName && Environment_Name == EnvironmentName && Project_Name == ProjectName)
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//i").Click();
                        flag =1;
                        //class="ui-selectable-row ng-star-inserted ui-state-highlight"
                        Log.Message("Item is Selected")
                        
                        if(Claim == "Yes")
                        {
                          Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Claim']").Click();
                        }
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
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
    
}
