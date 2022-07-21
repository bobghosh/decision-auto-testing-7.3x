var Custom_Property_Availability = require("Custom_Property_Availability");
function Remove_Custom_property(CustomProprety_Name,RemoveCP)
{  
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.FindElement("//span[contains(text(),'Custom Properties')]//ancestor::a/span[1]");
  if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
  {
      CustomPropertiesTab.click();
  }
  
  //Aliases.browser.pageSapiensDecision.FindElement("(//input[@placeholder='filter'])[2]").SetText(CustomProperty_Name);
  //Delay(5000);
  CustomPropertiesCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
  Log.Message(CustomPropertiesCount.length);
  for(var k = 1; k <= CustomPropertiesCount.length ; k++)
  {
      var SelectedCustomProperty = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+k+"]/td[1]");
      //Log.Message(SelectedCustomProperty.textContent);
            
      //If the Item Name matches 
      if(SelectedCustomProperty.textContent.trim() == CustomProprety_Name )
      {  
              //Click on x icon on Custom Property
              Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody//tr["+k+"]//button").Click();
              
              if(RemoveCP == "Yes")
              {
                  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
               
              }
              else
              {
                  Aliases.browser.pageSapiensDecision.form.buttonCancel.ClickButton();
              }
              
              break;
      }
  }
  
  Custom_Property_Availability.Custom_Property_Availability(CustomProprety_Name)
}