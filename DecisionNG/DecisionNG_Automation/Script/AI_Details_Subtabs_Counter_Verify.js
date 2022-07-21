function AI_Details_subtab_Counter_Xpath(Details_SubTabName,Xpath_SubTab){
  let page= Aliases.browser.pageSapiensDecision;
  let Counter=page.findElements(Xpath_SubTab);
  let Counter_len=Counter.length;
 //Log.Message(Counter_len);
  let subTabs=page.FindElements("//div[contains(@aria-hidden,'false')]//a[contains(@class,'additional-info-container')]");
  
 for(let i=0 ; i< subTabs.length; i++)
  {
   let tabText = subTabs[i].textContent;
    let tabTextLowcase = tabText.replace(/[^a-z\s]/gi, '').toLowerCase().trim() 
    //https://stackoverflow.com/questions/18624457/how-do-i-extract-only-alphabet-from-a-alphanumeric-string
    // [^a-z] matches everything but a-z and \s for space
// the flag `g` means it should match multiple occasions
// the flag `i` is in case sensitive which means that `A` and `a` is treated as the same character ( and `B,b`, `C,c` etc )   
    
    if(tabTextLowcase ==Details_SubTabName.toLowerCase())
    { 
    let tabText_value=parseInt(tabText,10);
    //Log.Message(tabText_value)
      if(Counter_len==tabText_value)
      {
        Log.Checkpoint("Counter of "+Details_SubTabName+" tab is matching with list of "+Details_SubTabName+" and no of "+Details_SubTabName+" are "+tabText_value);
      }
      else
      {
        Log.Error("There is a mismatch between the counter and list of "+Details_SubTabName);
      }
    }
  
}  
}
function AI_Details_subtab_Counter(Details_SubTabName){
  
switch(Details_SubTabName)
{
  case "Notes":
  {
   Notes_xpath="//div[contains(@class,'note-list')]/div";
   AI_Details_subtab_Counter_Xpath(Details_SubTabName,Notes_xpath);
  break; 
  }
  case "Properties":
  {
    Properties_xpath="//dcn-additional-info-custom-property-tab//label";
   AI_Details_subtab_Counter_Xpath(Details_SubTabName,Properties_xpath);
    break;
  }
}
  
}

