var Collapse_Icon_Click_Verify = require("Collapse_Icon_Click_Verify");
var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
var Source_Select_Assets_Checkboxes = require("Source_Select_Assets_Checkboxes");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
//var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Only1DDexsists");
var Community_VG_Folder_Select = require("Community_VG_Folder_Select");
var Expand_Icon_Click_Verify = require("Expand_Icon_Click_Verify");
var RevisionTasks_Buttons = require("RevisionTasks_Buttons");
function Add_Assets_to_RevisionTasks(Tabs_Assets,CommunityName,Community_VG_Folder_Name, Month)
{
//  let Tabs_Assets = "Decision-Mortgage Effective Income Amount (View: Base) [V1.8],DecisionFlows-ATR QM Decision Flow [V1.1]";
  
  RevisionTasks_Buttons.Assets_Add().Click();
  
//  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpEqual, "Add Assets to the Revision Task");

  //Source should be selected
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnode2.textnodeSource, "className", cmpContains, "p-highlight ng-star-inserted");

  //Verify the Default Values in Version, Status and 
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//mat-dialog-container//dcn-multiple-combo-box/div[1]//input"), "Text", cmpContains, "Latest");

  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//mat-dialog-container//dcn-multiple-combo-box/div[2]//input"), "Text", cmpContains, "Not In Branch");
  
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.FindElement("//mat-dialog-container//dcn-multiple-combo-box/div[3]//input"), "Text", cmpContains, "Approved");
  
  //Select Respective Dropdowns
  Aliases.browser.pageSapiensDecision2.FindElement("//mat-dialog-container//dcn-multiple-combo-box/div[1]//button").Click();
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("Version: All","No");
  
  Aliases.browser.pageSapiensDecision2.FindElement("//mat-dialog-container//dcn-multiple-combo-box/div[2]//button").Click();
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("Location: All","No");
  
  Aliases.browser.pageSapiensDecision2.FindElement("//mat-dialog-container//dcn-multiple-combo-box/div[3]//button").Click();
  SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("Status: Approved","No");
  
  
  //Click on Expand icons
  Expand_Icon_Click_Verify.Community_Expand_Verify(CommunityName);
  
  //Select Community 
  Community_VG_Folder_Select.Community_VG_Folder_Select("Community",Community_VG_Folder_Name)
  
  //Select ViewGroup & Enable below code if Viewgroup folder is also involved
  //Expand_Icon_Click_Verify.Community_Expand_Verify("Underwriting");  
  //Community_VG_Folder_Select.Community_VG_Folder_Select("General");
  
  //Select Assets from Right Side
  Source_Select_Assets_Checkboxes.Select_Assets_Checkboxes(Tabs_Assets);
  
  //Selected Asset code
  
  let EffectiveDate = "Yes";
  
  if(EffectiveDate == "Yes")
  {  
    Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='effective-date ng-star-inserted']//*[@class='wj-glyph-calendar']").Click();
    SelectingDateFromCalendar.CalendarSelection("No","2021" , Month, "1");
  
    Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='effective-date ng-star-inserted']//*[@class='wj-glyph-clock']").Click();
    SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");
  
    let EffectiveDateValue = Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='effective-date ng-star-inserted']//input").Text;
  }
  
  //Click on Okay
//  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  
  Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
  
  Delay(5000);
  
  //Verify the Assets Available  
  let Asset_Type_Name = Tabs_Assets.split(',');
  
  for(var m = 0; m <Asset_Type_Name.length ; m++)
  {
    let Asset = Asset_Type_Name[m].split('-')
    let AssetName = Asset[1];
    
    let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");
  
    for(var i = 1; i <=AssetList.length ; i++)
    {
      let Asset_Name = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[3]").textContent;
      
      if(AssetName.trim() == Asset_Name.trim())
      {
        Log.Message("Selected Asset is Available");
      }
    }
  }
  
  
  
  
  
}