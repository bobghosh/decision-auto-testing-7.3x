function Open_Custom_Property(CustomProperty_Name)
{
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.linkCustomProperties.textnode10;
  if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
  {
      CustomPropertiesTab.click();
  }
  
  Aliases.browser.pageSapiensDecision.FindElement("(//input[@placeholder='filter'])[2]").SetText(CustomProperty_Name);
  //Delay(5000);
  CustomPropertiesCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
  Log.Message(CustomPropertiesCount.length);
  for(var k = 1; k <= CustomPropertiesCount.length ; k++)
  {
      var SelectedCustomProperty = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+k+"]/td[1]");
      //Log.Message(SelectedCustomProperty.textContent);
            
      //If the Item Name matches 
      if(SelectedCustomProperty.textContent.trim() == CustomProperty_Name )
      {  
              //Open Custom Property
              Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+k+"]/td[1]//a").Click();
              //SelectedCustomProperty.Click();
      }
  }

}
module.exports.Open_Custom_Property = Open_Custom_Property;