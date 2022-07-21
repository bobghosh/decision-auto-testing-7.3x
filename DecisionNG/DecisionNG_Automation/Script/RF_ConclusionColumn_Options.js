function ConclusionColumn_Options(SelectOption)
{
//  let Option = "Insert Column"

   if (SelectOption == "Add Message Category")
   {
       Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Add Message Category']").click();
      
     
   }
   else if(SelectOption == "Insert Column")
   {
       Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Insert Column']").click();     
   }
     
   else if(SelectOption.includes("Change Conclusion Operator"))
   {         
        Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Change Conclusion operator']").HoverMouse();
         
         if(SelectOption.includes("Is"))
         {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Is')]").Click();
         }
         else if(SelectOption.includes("Is Incremented By"))
         {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Is Incremented By')]").Click();         
         }
         else if(SelectOption.includes("Is Appended With"))
         {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Is Appended With')]").Click();         
         }
         
   }
   else if(SelectOption == "Open Fact Type Summary")
   {
       Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Open Fact Type Summary']").click();     
   }
     
   else if(SelectOption == "Revert Fact Type")
   {
         Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Revert Fact Type']").click();     
   }
   
   else if(SelectOption == "Update Fact Type to Latest Version")
   {
         Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Update Fact Type to Latest Version']").click();     
   }
   
   else if(SelectOption == "Change Fact Type Version")
   {
         Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Change Fact Type Version']").click();     
   }
   
  
    
}
module.exports.ConclusionColumn_Options = ConclusionColumn_Options;

