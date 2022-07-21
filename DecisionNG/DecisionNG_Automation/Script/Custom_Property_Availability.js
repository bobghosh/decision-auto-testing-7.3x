function Custom_Property_Availability(CustomProperty_Name)
{
      let Item = CustomProperty_Name;
      //Log.Message(PtableCount);
      let flag = 0;
      let hasNext = true;
      
      let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.linkCustomProperties.textnode10;
      if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
      {
          CustomPropertiesTab.click();
      }
  
      let ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
  
      //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[1]");

          //If the Item Name matches 
          if(HighlightedItemName.textContent == Item )
          {          
                 //HighlightedItemName.click();
                 flag =1;
                Log.Checkpoint("Custom Property is available");     
           }
           if(flag == 1)
           {
              break;
           }
    }
      
  
  if(flag == 0)
  {
    Log.Checkpoint("Custom Property is not found");
  }
}
module.exports.Custom_Property_Availability = Custom_Property_Availability;