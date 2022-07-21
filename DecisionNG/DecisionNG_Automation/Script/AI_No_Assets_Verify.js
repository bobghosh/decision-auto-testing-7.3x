function AI_No_Assets_Verify(){
   let page =Aliases.browser.pageSapiensDecision2;
   let list=page.FindElements("//div[contains(@class,'sub-tab__list')]/dcn-link-label/parent::div");
   let list_len=list.length;
   if(list_len==0)
   {
     Log.Checkpoint(page.FindElement("//div//span[contains(@class,'no-data')]").textContent);
   }
   else
   {
     Log.Error("List contains Assets");
   }
}