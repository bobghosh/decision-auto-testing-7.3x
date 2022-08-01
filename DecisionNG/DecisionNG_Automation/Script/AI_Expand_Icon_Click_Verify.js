function AI_Expand_Icon_Click_Verify(AssetNames)
{//let AssetNames ="Policy Renewal Method (View: Base) [V1.5]|Approved,Policy Renewal Method (View: Base) [V1.3]|Draft"
    var page =  Aliases.browser.pageSapiensDecision2;
    AssetName = AssetNames.toString().split(",");
    
    for(let i=0;i<AssetName.length;i++)
    {   
        let assetNamedivided = AssetName[i].toString().split('|')
        let expectedAssetName= assetNamedivided[0]
        let expectedAssetStatus= assetNamedivided[1]
        
        let statusOfAsset = page.FindElement("//*[text()="+"'"+""+expectedAssetName+""+"'"+"]//ancestor::div[contains(@class,'sub-tab__list')]")
        
        let Plus_Minus_Icon = page.FindElement("//*[text()="+"'"+""+expectedAssetName+""+"'"+"]//ancestor::dcn-additional-info//div[contains(@class,'item__expander-icon--wrapper')]//i")

        let className = Plus_Minus_Icon.getAttribute('class')
         
        if(className.includes("icon-link_plus"))
        {
          Plus_Minus_Icon.Click();
      
          let classNameAfterClick = Plus_Minus_Icon.getAttribute('class')
      
          {
      
            if(classNameAfterClick.includes("icon-link_minus"))
              {
                Log.Checkpoint("Icon is Expanded Successfully");
              }
        
            else if(classNameAfterClick.includes("icon-link_plus"))
              {
                Log.Error("Icon is not Expanded")
              }
        
          }
        }
        else if(classNameAfterClick.includes("icon-link_minus"))
            {
              Log.Warning("Icon is already Expanded no action needed");
            }
    }
}