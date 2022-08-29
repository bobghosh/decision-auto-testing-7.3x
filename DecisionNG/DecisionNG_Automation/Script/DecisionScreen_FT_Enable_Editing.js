var DecisionScreen_EditFT = require("DecisionScreen_EditFT");

function FT_Enable_Editing(FT_to_Edit){
  let page =Aliases.browser.pageSapiensDecision2;
  DecisionScreen_EditFT.DecisionScreen_EditFT(FT_to_Edit);
  page.FindElement("//a[text()='Enable Editing']").click();
  Delay(1000);
  page.WaitElement(page.FindElement("//div[contains(@class,'fact-type-form-laundry-line')]//span[contains(@class,'label--draft')]"));
  page.FindElement("//*[contains(text(),'OK')]").click();
  Delay(2000);
}