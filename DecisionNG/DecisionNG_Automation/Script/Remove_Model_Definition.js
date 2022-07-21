var Model_Definition_Availability_Check = require("Model_Definition_Availability_Check");
function Remove_Model_Definition(ModelDefinitionName, RemoveModelDefinition)
{
    let Item = ModelDefinitionName;
    let flag = 0;
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
          var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[1]");

          //If the Item Name matches 
          if(HighlightedItemName.textContent.trim() == Item )
          {          
                 
                Aliases.browser.pageSapiensDecision.FindElement("//tr["+j+"]//*[@class='icon-close ng-star-inserted']").Click();
                
                aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//span"), "contentText", cmpEqual, "Are you sure you want to remove this Model Definition?");

                if(RemoveModelDefinition == "Yes")
                {
                  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();            
                }
                else
                {
                    Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();
                }
                
                
                flag =1;
                   
           }
           if(flag == 1)
           {
              break;
           }
    }
    
    Model_Definition_Availability_Check.Model_Definition_Availability_Check(Item);   
    
        
}