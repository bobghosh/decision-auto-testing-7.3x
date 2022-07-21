var RevisionTasks_Buttons = require("RevisionTasks_Buttons");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
function Revision_Task_EditDepolymentDescriptor(Descriptive_View,AssetName,Month)
{
  //Set Descriptive View
  RevisionTasks_Buttons.DescriptiveView(Descriptive_View);
  
//  let AssetName = "ATR QM Decision Flow [V1.1]";
//  let Month = "Sep"; "Aug" "Jul" "Dec"
  aqUtils.Delay(2000)
  //Navigate to the Desired Asset to Edit Deployment Description
  let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//*[contains(@class,'p-datatable-frozen-view')]//tbody//tr");
  
  for(var i = 1; i <=AssetList.length ; i++)
  {
    let Asset_Name = Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'p-datatable-frozen-view')]//tbody//tr["+i+"]//td[3]").textContent.trim();
      
    if(AssetName.trim() == Asset_Name.trim())
    {
      Log.Message("Selected Asset is Available");
      
      Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'p-datatable-frozen-view')]//tbody//tr["+i+"]//td[4]//dcn-button-menu").HoverMouse();
      
      Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'p-datatable-frozen-view')]//tbody//tr["+i+"]//td[4]//dcn-button-menu").Click();
      
      Aliases.browser.pageSapiensDecision2.FindElement("//div[contains(@style,'display: block')]//ul//span[text()='Edit Deployment Descriptor']").Click();

      //Verify the pop up and enter Effective and expiration data 
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnodeTg1626167000507, "contentText", cmpContains, "Edit Deployment Descriptor");
  
//      Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-effective-date-field']//*[@class='wj-glyph-calendar']").Click();
//      SelectingDateFromCalendar.CalendarSelection("No","2021" , Month, "1");
//  
//      Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-effective-date-field']//*[@class='wj-glyph-clock']").Click();
//      SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");
      
      let EffectiveDate = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-effective-date-field']//input").Text;
  
      Log.Message(EffectiveDate);
      
      Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-expiration-date-field']//*[@class='wj-glyph-calendar']").Click();
      SelectingDateFromCalendar.CalendarSelection("No","2021" , Month, "30");
  
      Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-expiration-date-field']//*[@class='wj-glyph-clock']").Click();
      SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:45 AM" , "No");
      
      let ExpirationDate = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-expiration-date-field']//input").Text;
  
      Log.Message(ExpirationDate);
      
      //Closing the Edit Deplotment Descriptor Pop up
//      Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
      Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
      
      Delay(300);
         
      //Verify the Entered Data for a row
      
      let Effective_Date = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'p-datatable-unfrozen-view')]//tbody//tr["+i+"]//td[4]").textContent;
      
      let Expiration_Date = Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'p-datatable-unfrozen-view')]//tbody//tr["+i+"]//td[5]").textContent;
      
      Log.Message(Effective_Date);
      
      Log.Message(Expiration_Date);
      
       if(EffectiveDate == Effective_Date)
       {
         Log.Message("Effective Date Matches")
       }
       else
       {
         Log.Error("Effective Date doesn't match")
       }
       
       if(ExpirationDate == Expiration_Date)
       {
         Log.Message("Expiration Date Matches")
       }
       else
       {
         Log.Error("Expiration Date doesn't match")
       }
       
    }
  }
  
}