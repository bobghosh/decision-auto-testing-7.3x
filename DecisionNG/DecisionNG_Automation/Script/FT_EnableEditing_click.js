//USEUNIT RefLibrary
function Enable_Editing_FT(){
  
  let page =Aliases.browser.pageSapiensDecision2;
  page.WaitElement("//fact-type-dialog//a[text()='Enable Editing']", 20000).click();
  page.WaitElement("//div[contains(@class,'fact-type-form-laundry-line')]"+ORGeneric.clsLabelDraft, 10000);
  Delay(1000);
}

function Enable_Editing_RF(){
  
  let page =Aliases.browser.pageSapiensDecision2;
  page.WaitElement("//a[text()='Enable Editing']", 20000).click();
  page.WaitElement("//div[contains(@class,'spec-laundry-line')]"+ORGeneric.clsLabelDraft, 10000);
  Delay(1000);
}