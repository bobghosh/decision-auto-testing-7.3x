function SelectingItem(Item)
{
  
  let Paginator;
    if(Aliases.browser.pageSapiensDecision.FindElements("//p-paginator//div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    Log.Message(Paginator);

    var ItemCount;
    var flag = 0;
    var hasNext = true

  
do{

    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]/td[1]//a");

          //If the Item Name matches 
          if(HighlightedItemName.textContent.trim() == Item )
          {          
                 HighlightedItemName.Click();
                 flag =1;
                // Log.Message("Pass");     
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

   }while(hasNext == true)
}

module.exports.SelectingItem = SelectingItem;