function KS_List()
{
  ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
  //Iterate through all the rows and finding the desired Task
  for(var j = 1; j <= ItemCount.length ; j++)
  {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]");
          Log.Message(HighlightedItemName.textContent);     
  }
  
}

function Verify_Specific_KS_from_the_List()
{
  let Item = "KS13 [1.0]";
  
  let flag = 0;

  ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
  //Iterate through all the rows and finding the desired Task
  for(var j = 1; j <= ItemCount.length ; j++)
  {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]");
          
          //If the Item Name matches 
          if(HighlightedItemName.textContent.trim() == Item)
          {          
                 //HighlightedItemName.click();
                flag =1;
                Log.Checkpoint("Item is available");
                break;   
           }     
     
  }
 
  if(flag == 0)
  {
    Log.Checkpoint("Item is not found");
  } 
  
}

function Open_Specific_KS_from_the_List()
{
  let Item = "KS13 [1.0]";
  
  let flag = 0;

  ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
  //Iterate through all the rows and finding the desired Task
  for(var j = 1; j <= ItemCount.length ; j++)
  {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
          
          //If the Item Name matches 
          if(HighlightedItemName.textContent.trim() == Item)
          {          
                HighlightedItemName.click();
                flag =1;
                Log.Checkpoint("Item is opened");
                break;   
           }     
     
  }
 
  if(flag == 0)
  {
    Log.Checkpoint("Item is not found");
  } 
  
}