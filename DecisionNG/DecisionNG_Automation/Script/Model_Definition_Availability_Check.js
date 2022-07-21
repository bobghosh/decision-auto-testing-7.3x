function Model_Definition_Availability_Check(Item)
{

  let flag = 0;
     
  Log.Message("Item "+ Item );
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[1]//a");

          Log.Message(HighlightedItemName.textContent.trim())
          //If the Item Name matches 
          
          Delay(500);
          
          if(HighlightedItemName.textContent.trim() == Item )
          {          
                 //HighlightedItemName.click();
                 Log.Message(flag)
                flag =1;   
                Log.Message(flag)
                break; 
           }
      }  
      
      Log.Message(flag)
      if(flag == 0)
      {
             Log.Checkpoint("Model Definition is not found");  
      }
      else
      {
             Log.Checkpoint("Model Definition is available")
      }
  
}
module.exports.Model_Definition_Availability_Check = Model_Definition_Availability_Check;