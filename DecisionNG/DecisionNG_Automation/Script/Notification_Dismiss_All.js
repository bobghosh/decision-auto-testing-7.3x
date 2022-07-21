function Notifications_Select_SingleTask_CheckBox(taskName)
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
    
    let hasNext = "true";
    
    do{
  
          ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[2]//a");

                //If the Item Name matches 
                if(HighlightedItemName.textContent.trim() == taskName )
                {          
                      Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//dcn-checkbox").Click()
                      Log.Message("Item is Selected")  
                       flag =1;
                       
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

function Notifications_Dismiss_All(taskName)
{

  let page  = Aliases.browser.pageSapiensDecision
 Notifications_Select_SingleTask_CheckBox(taskName)
 Delay(2000)

 page.FindElement("//button//span[text()='Dismiss All']").Click();

}