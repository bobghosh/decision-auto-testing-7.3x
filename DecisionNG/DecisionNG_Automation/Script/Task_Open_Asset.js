function Select_Asset_Openfromtask(Item)
{
  
    let flag = 0;
    let Paginator;
//    let Item = "Test";    
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
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");

                //If the Item Name matches 
                if(HighlightedItemName.textContent.trim() == Item.trim() )
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//a").Click();
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

function Select_Single_Row_FactType_Task(Item)
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
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");

                //If the Item Name matches 
                if(HighlightedItemName.textContent == Item )
                {          
                        //To select amy row click on any icon available on the row
                        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//a").Click();
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