function AI_Collapse_Icon_Click_Verify(AssetNames)
{//let AssetNames ="asset1,asset2"
    var page =  Aliases.browser.pageSapiensDecision2;
    AssetName = AssetNames.toString().split(",");
    
for(let i=0;i<AssetName.length;i++)
    {    
        Plus_Minus_Icon = page.FindElement("//*[text()="+"'"+""+AssetName[i]+""+"'"+"]//ancestor::dcn-additional-info//div[contains(@class,'item__expander-icon--wrapper')]//i")
  
        let className = Plus_Minus_Icon.getAttribute('class')
    
        if(className.includes("icon-link_minus"))
        {
          Plus_Minus_Icon.Click();
      
          let classNameAfterClick = Plus_Minus_Icon.getAttribute('class')
      
          {
      
            if(classNameAfterClick.includes("icon-link_plus"))
              {
                Log.Checkpoint("Icon is Collapsed Successfully");
              }
        
            else if(classNameAfterClick.includes("icon-link_minus"))
              {
                Log.Error("Icon is not Collapsed")
              }
        
          }
        }
        else if(classNameAfterClick.includes("icon-link_minus"))
            {
              Log.Warning("Icon is already Collapsed no action needed");
            }
    }
}