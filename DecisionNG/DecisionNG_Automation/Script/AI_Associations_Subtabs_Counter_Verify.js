function AI_Subtabs_Counter_Verify(SubTabName){
  
   let page =Aliases.browser.pageSapiensDecision2
  Delay(1000);
  let source_assets_array= page.FindElements("//div[contains(@class,'sub-tab__list')]/dcn-link-label/parent::div");
  let source_elements=source_assets_array.length;
  
  //Log.Message("No of Assets displayed in Additional info"+source_elements);
  
  
  let subTabs = page.FindElements("//div[contains(@aria-hidden,'false')]//a[contains(@class,'additional-info-container')]");
  
  //Log.Message(subTabs.length);
  //Log.Message(SubTabName);
  for(let i=0 ; i< subTabs.length; i++)
  {
    

    let tabText = subTabs[i].textContent;
    let tabTextLowcase = tabText.replace(/[^a-z\s]/gi, '').toLowerCase().trim() 
    //https://stackoverflow.com/questions/18624457/how-do-i-extract-only-alphabet-from-a-alphanumeric-string
    // [^a-z] matches everything but a-z
// the flag `g` means it should match multiple occasions
// the flag `i` is in case sensitive which means that `A` and `a` is treated as the same character ( and `B,b`, `C,c` etc )  
    
    
  //Log.Message(tabTextLowcase)
    
    if(tabTextLowcase == SubTabName.toLowerCase())
    { 
    let tabText_value=parseInt(tabText,10);
    //Log.Message('asha'+tabText_value+"asha");
      if(source_elements == tabText_value)
      {
        Log.Checkpoint("Counter of "+SubTabName+" tab is matching with list of assets and no of elements are "+tabText_value);
      }
      else
      {
        Log.Error("There is a mismatch between the counter and list of assets");
      }
    }
  
}
}