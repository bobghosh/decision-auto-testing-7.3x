
function Open_Decision(Item)
{
   let Paginator;
   let page= Aliases.browser.pageSapiensDecision2
    if(Aliases.browser.pageSapiensDecision2.FindElements("//dcn-paginator//p-paginator//div").length >0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    Log.Message(Paginator);
    Delay(1000);
    
    var ItemCount;
    var flag = 0;
    var ItemName = Item
    var hasNext = true

  
do{
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-expandable-selectable-list-item//i[contains(@class,'icon-decision_view')]/following-sibling::div/a");
    
    //Iterate through all the rows and finding the desired Task
    for(let j = 1; j <= ItemCount.length ; j++)
    {
          //Log.Message(ItemCount.length)
          let HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-expandable-selectable-list-item["+j+"]//i[contains(@class,'icon-decision_view')]/following-sibling::div/a");

          //If the Item Name matches 
          if(HighlightedItemName.textContent.trim() == Item.trim())
          {          
                 HighlightedItemName.click();
                 page.WaitElement(page.canvas,30000)
                 flag =1;
                
                 //Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//Canvas"),30000);     
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
      
      Delay(1000);
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
        
        
      }while (hasNext==true)

}

//module.exports.Open_Flow = Open_Flow;
