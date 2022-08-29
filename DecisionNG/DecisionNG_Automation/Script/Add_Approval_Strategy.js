var SelectingOptionfromDropDown_Only1DDexsists = require("SelectingOptionfromDropDown_Role");

function Add_Approval_Strategy(ApprovalStrategy, ImportApprovalStrategy, DistinctUser, Users)
{   

  let ApprovalStrategyTab = Aliases.browser.pageSapiensDecision2.FindElement("//span[contains(text(),'Approval Strategy')]//ancestor::a/span[1]");
  if(ApprovalStrategyTab.getAttribute("class").includes("pi-chevron-right"))
  {
    ApprovalStrategyTab.click();
  }
    
  Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='spec-approval-strategy-value']//button").click();
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(ApprovalStrategy,"No");
  
  Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[@class='spec-import-approval-strategy-value']//button").click();
  SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(ImportApprovalStrategy, "No");
  
  if(ApprovalStrategy == "All" || ApprovalStrategy == "Any")
  {
     
  var element = Aliases.browser.pageSapiensDecision2.FindElement("//div/dcn-switch-button/div/div[2]/label/div/div");
  var style = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element, "");
    
  if((style.background).includes("rgb(74, 207, 246)"))
  {
    Log.Message("It is Already checked");
    if(DistinctUser == "No")
    {
      element.Click();
      //Don't Select Distinct User
      if((style.background).includes("rgb(221, 221, 221)"))
      {
        Log.Checkpoint("Distinct User is unchecked")
      }
      else
      {
        Log.Error("Distinct User is still checked")
      }
    }
  }
  else if((style.background).includes("rgb(221, 221, 221)"))
  {
    Log.Message("It is not checked"); 
    if(DistinctUser == "Yes")
    {
      element.Click();
      //Select Distinct User
      if((style.background).includes("rgb(74, 207, 246)"))
        {
          Log.Checkpoint("Distinct User is Checked")
        }
        else
        {
          Log.Error("Distinct User is still unchecked")
        }
    }
  }

  if(ApprovalStrategy == "All")
  {          
        
    let MessageforAll = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-approval-strategy//tbody//span");
    aqObject.CheckProperty(MessageforAll, "textContent", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ALL'");
  }
  else if(ApprovalStrategy == "Any")
  {
    let MessageforAny = Aliases.browser.pageSapiensDecision2.FindElement("//dcn-approval-strategy//tbody//span");
    aqObject.CheckProperty(MessageforAny, "textContent", cmpEqual, "At least one approver has to be selected for Approval Strategy 'ANY'");       
  }
    
      let User_array = Users.split(',');
      for(let i = 0; i < User_array.length; i++)
      {
    
          Aliases.browser.pageSapiensDecision2.FindElement("//button[@class='approval-strategy--add-btn dcn-light-button--dark']").click();
          Aliases.browser.pageSapiensDecision2.FindElement("//dcn-combo-box[contains(@class,'spec-approval-strategy--approver-list__datagrid__combo-box')]//button").click();
    
          SelectingOptionfromDropDown_Only1DDexsists.SelectingOptionfromDropdown(User_array[i],'No');

          Aliases.browser.pageSapiensDecision2.FindElement("//i[@class='icon-valid']").click();
    
          if(Aliases.browser.pageSapiensDecision2.FindElement("//dcn-approval-strategy//tbody//tr[1]//td[1]").textContent.trim().toUpperCase() == (User_array[i]).toUpperCase())
          {
            Log.Checkpoint("User matches");
          }
          else
          {
            Log.Error("User Selected is different");
            Log.Message("User selected is " + Aliases.browser.pageSapiensDecision2.FindElement("//dcn-approval-strategy//tbody//tr[1]//td[1]").Text.trim().toUpperCase());
          }
    
      }  
      
  }
  
  
  
    //Verify Approval Strategy/Import Approval Strategy
    if(Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'spec-approval-strategy-label')]//input").Text.trim().toUpperCase() == ApprovalStrategy.toUpperCase())
    {
      Log.Checkpoint("Approval Strategy matches");
    }
    else
    {
      Log.Error("Approval Strategy is different");
    }
    
    if(Aliases.browser.pageSapiensDecision2.FindElement("//*[contains(@class,'spec-import-approval-strategy-label')]//input").Text.trim().toUpperCase() == ImportApprovalStrategy.toUpperCase())
    {
      Log.Checkpoint("Import Approval Strategy matches");
    }
    else
    {
      Log.Error("Import Approval Strategy is different");
    }  
    
}