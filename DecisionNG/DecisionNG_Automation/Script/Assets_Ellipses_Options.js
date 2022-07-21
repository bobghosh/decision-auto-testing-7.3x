function Assets_Ellipses_Options(SelectOption)
{  
  //let SelectOption = "Test Groups";
  
  //Click on Ellipses
  Aliases.browser.pageSapiensDecision2.linkVersions.panel11.Click();
  
  //Aliases.browser.pageSapiensDecision2.FindElements("//*[contains(@class,'ui-tieredmenu')]").length();
  
 // Log.Message(Aliases.browser.pageSapiensDecision2.FindElements("//*[contains(@class,'ui-tieredmenu')]").length);
  
  if(Aliases.browser.pageSapiensDecision2.FindElements("//p-tieredmenusub//*[contains(@class,'p-menuitem-link')]").length > 0 )
  {  
     if (SelectOption == "Test Groups")
     {
       if(Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Test Groups')]").Enabled == true)
       {
         Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Test Groups')]").click();
         
         aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeTestGroups, "contentText", cmpEqual, "Test Groups");
         
       }
       else
       {
         Log.Error("Validation Fails");
       }
     
     }
     
     else if(SelectOption.includes("Compare"))
     {
         
         Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Compare with')]//following-sibling::span").HoverMouse();
         
         if(SelectOption.includes("Original"))
         {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Original')]").Click();
         }
         else if(SelectOption.includes("Version") || SelectOption.includes("View"))
         {
            Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Other version or View')]").Click();         
         }
         
     }
     
     else if (SelectOption == "Export")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Export')]").click();
       
       aqObject.CheckProperty(page.panel21, "contentText", cmpEqual, "Export process has started and may take a while to complete");
       
     }
     
     else if (SelectOption == "Clone")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Clone')]").click();       
     }
     
     else if (SelectOption == "Knowledge Source")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Knowledge Source')]").click();       
       aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//dcn-dialog//*[@class='knowledge-source__title']/span[1]"), "contentText", cmpContains, "Associated Knowledge Sources", false);
  
     
     }
     
     else if (SelectOption == "Force Revalidate")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Force Revalidate')]").click();       
     }
     
     else if (SelectOption == "Mark Private to this Community")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Mark Private to this Community')]").click();       
     }
     
     else if (SelectOption == "Unmark Private to this Community")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Unmark Private to this Community')]").click();       
     }
     
     else if (SelectOption == "revert")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'revert')]").click();       
     }
     
     else if (SelectOption == "clone")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'clone')]").click();       
     }
     
     else if (SelectOption == "Not Latest Decisions")
     {
       Aliases.browser.pageSapiensDecision2.FindElement("//*[(text() = 'Not Latest Decisions')]").click();       
     }
     
     else if (SelectOption == "Update to latest")
     {
       aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//a[contains(., 'Update to latest')]"), "contentText", cmpEqual, "Update to latest");
       Aliases.browser.pageSapiensDecision2.FindElement("//*[text()='Update to latest']").click();       
     }
     
     
  } 
  
  
}
module.exports.Assets_Ellipses_Options = Assets_Ellipses_Options;