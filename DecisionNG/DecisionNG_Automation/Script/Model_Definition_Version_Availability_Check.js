function Model_Definition_Version_Availability_Check(VersionName)
{
  let flag = 0;
  let Item = VersionName;
  
   
  ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-model-definition-versions//tr[@class='ui-selectable-row ng-star-inserted']");
    
  //Iterate through all the rows and finding the desired Task
  for(var j = 1; j <= ItemCount.length ; j++)
  {
        var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//dcn-model-definition-versions//tr[@class='ui-selectable-row ng-star-inserted']["+j+"]/td[1]");

        //If the Item Name matches 
        if(HighlightedItemName.textContent.trim() == Item )
        {          
              Log.Checkpoint("Model Definition Version is available");
              flag =1;     
         }
         if(flag == 1)
         {
            break;
         }
  } 
  
  if(flag == 0)
  {
    Log.Checkpoint("Model Definition Version is not found");
  }
  
}
module.exports.Model_Definition_Version_Availability_Check = Model_Definition_Version_Availability_Check;