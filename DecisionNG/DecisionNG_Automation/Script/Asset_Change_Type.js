function AssetChangeType(changeType)
{
    
    let page =  Aliases.browser.pageSapiensDecision2;
    
    let assetChangeType = page.FindElement("//tbody//tr[1]//td//dcn-asset-change-type").textContent.trim();

    if(assetChangeType== changeType.trim())
    {
      Log.Checkpoint("Asset Change Type Match : "+"Expected : "+changeType+" Actual : " +assetChangeType);
    }
    else
    {
      Log.Error("Asset Change Type mismatch : "+"Expected : "+changeType+" Actual : " +assetChangeType);
    }
}