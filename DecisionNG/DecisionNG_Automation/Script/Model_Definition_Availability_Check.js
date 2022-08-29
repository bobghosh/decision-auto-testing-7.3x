  function Model_Definition_Availability_Check(Item)
  {

  let flag = 0;
     
  Log.Message("Item "+ Item );
  let page = Aliases.browser.pageSapiensDecision
  
  page.WaitElement("//tbody//tr", 10000);
  ItemCount = page.FindElements("//tbody//tr");
    
  for(var j = 1; j <= ItemCount.length ; j++)
  {
    var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[1]//a");
    Log.Message(HighlightedItemName.textContent.trim())
          
    if(HighlightedItemName.textContent.trim() == Item.trim() )
    {
      Log.Message(flag)
      flag =1;   
      Log.Message(flag)
      break; 
    }
  }  
      
  Log.Message(flag)
  if(flag == 0)
    Log.Warning("Model Definition is not found");
  else
    Log.Checkpoint("Model Definition is available")
  
}
  module.exports.Model_Definition_Availability_Check = Model_Definition_Availability_Check;