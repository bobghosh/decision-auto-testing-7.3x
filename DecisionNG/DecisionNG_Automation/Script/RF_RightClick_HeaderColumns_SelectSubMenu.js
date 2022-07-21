function RightClick_Condition_Conclusion_header(FTType,ColumnText,SubOption)
{
  let page = Aliases.browser.pageSapiensDecision2;
   
  if (FTType.toLowerCase() == "condition")
   {
       page.FindElement("//div[contains(@class,'condition-fact-type-name')]//*[text()='"+ColumnText+"']/ancestor::dcn-fact-type-status-view/..").clickR();
       page.WaitElement("//span[contains(text(), '"+SubOption+"')]",5000).click();
     
   }
  else if(FTType.toLowerCase() == "conclusion")
   {
       page.FindElement("//div[contains(@class,'conclusionHeader')]//*[text()='"+ColumnText+"']").clickR();
       page.WaitElement("//span[contains(text(), '"+SubOption+"')]",5000).click();
   }
  else if(FTType.toLowerCase() == "message")
   {
       page.FindElement("//div[contains(@class,'spec-category')]//*[contains(text(),'"+ColumnText+"')]").clickR();
       page.WaitElement("//span[contains(text(), '"+SubOption+"')]",5000).click();
   }
  else{
     Log.Error("Column header name is not matching")
   }
}

module.exports.RightClick_Condition_Conclusion_header = RightClick_Condition_Conclusion_header;