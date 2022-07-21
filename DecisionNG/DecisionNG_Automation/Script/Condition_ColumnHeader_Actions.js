//USEUNIT RF_RightClick_HeaderColumns_SelectSubMenu
//USEUNIT SelectingOptionfromDropdown_UL_LI
//USEUNIT RefLibrary

function ConditionColumn_OpenSupportingRF()
{
   
  let page=Aliases.browser.pageSapiensDecision2
  page.FindElement("//div[@class='content-padding decision-table__conclusion-cell--normal ng-star-inserted']").click();
  let ConditionColumns= page.FindElements("//div[@class='fact-type-status-view rule-family-view-fact-type__condition-header']")
  Log.Message(ConditionColumns.length)
  for(let i=1;i<=ConditionColumns.length;i++)
  {
    let ConditionFT=page.FindElement("//div["+i+"][@class='wj-cell wj-header']//dcn-fact-type-status-view//span")
    let FT_Text= ConditionFT.textcontent
    Log.Message(FT_Text)
    if(FT_Text == "Condo Project Local Jurisdiction Certificate of Occupancy Issued Indicator")
    {
      ConditionFT.DblClick();
      break;
    }
    
  }
  //Verify if the navigation to Supporting RF is successfull
    let Supporting_RF_Conclusion = page.FindElement("//div[@class='wj-cell wj-header conclusionHeader']//span").textContent
    if(Supporting_RF_Conclusion == 'Condo Project Local Jurisdiction Certificate of Occupancy Issued Indicator')
    {
      Log.Checkpoint('Navigated to Supporting RF successfully')
    }
}

//######################################################################################
function Replace_FactType_ConditionColumn(columnName, FTName, newOrExistsingCondition){
  
  let page = Aliases.browser.pageSapiensDecision2;
  RightClick_Condition_Conclusion_header('condition',columnName, 'Replace')
  
  page.WaitElement(ORGeneric.dcnAutoComplete+ORGeneric.placeholderName, 5000).keys(FTName);
  aqUtils.Delay(5000)     
  if(newOrExistsingCondition == "New")
  {
    Log.Message("Create New Fact Type "+" "+FTName+" ")
    SelectingOptionfromDropdown("Create New Fact Type "+'"'+FTName+'"')
  }
  else{
    SelectingOptionfromDropdown(FTName)
  }
  
}