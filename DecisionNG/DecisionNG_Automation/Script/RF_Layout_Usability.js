function Validate_RuleFamily_Icons_OnScreen(optionToValidate)
{
  var page = Aliases.browser.pageSapiensDecision;
  switch(aqString.ToLower(optionToValidate))
  {
    case "validation":
    var RfScreenObject = page.FindElement("//div[contains(@class,'validation-button')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Validation button is visible on rule family screen")
    }
    else{
     Log.Error("Validation button is not visible on rule family screen") 
    }
    break
    
    
    case "testing":
    var RfScreenObject = page.FindElement("//div[contains(@class,'testing-button')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("testing button is visible on rule family screen")
    }
    else{
     Log.Error("testing button is not visible on rule family screen") 
    }
    break
    
    case "bim":
    var RfScreenObject = page.FindElement("//div[contains(@class,'bim-button')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("bim button is visible on rule family screen")
    }
    else{
     Log.Error("bim button is not visible on rule family screen") 
    }
    break
    
    case "...":
    var RfScreenObject = page.FindElement("//div[@type='button']")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("... button is visible on rule family screen")
    }
    else{
     Log.Error("... button is not visible on rule family screen") 
    }
    break
    
    case "test groups":
    page.FindElement("//div[@type='button']").Click()
    var RfScreenObject = page.FindElement("//*[(text() = 'Test Groups')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Test Groups list item is visible on rule family screen")
    }
    else{
     Log.Error("Test Groups list item is not visible on rule family screen") 
    }
    break
    
    case "revert":
    page.FindElement("//div[@type='button']").Click()
    var RfScreenObject = page.FindElement("//*[(text() = 'revert')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Revert list item is visible on rule family screen")
    }
    else{
     Log.Error("Revert list item is not visible on rule family screen") 
    }
    break
    
    case "knowledge source":
    page.FindElement("//div[@type='button']").Click()
    var RfScreenObject = page.FindElement("//*[(text() = 'Knowledge Source')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("knowledge source list item is visible on rule family screen")
    }
    else{
     Log.Error("knowledge source list item is not visible on rule family screen") 
    }
    break
    
    case "force revalidate":
    page.FindElement("//div[@type='button']").Click()
    var RfScreenObject = page.FindElement("//*[(text() = 'Force Revalidate')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Force Revalidate list item is visible on rule family screen")
    }
    else{
     Log.Error("Force Revalidate list item is not visible on rule family screen") 
    }
    break
    
    case "mark private to this community":
    page.FindElement("//div[@type='button']").Click()
    var RfScreenObject = page.FindElement("//*[(text() = 'Mark Private to this Community')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Mark Private to this Community list item is visible on rule family screen")
    }
    else{
     Log.Error("Mark Private to this Community list item is not visible on rule family screen") 
    }
    break
    
    case "compare with":
    page.FindElement("//div[@type='button']").Click()
    var RfScreenObject = page.FindElement("//*[(text() = 'Compare with')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Compare with list item is visible on rule family screen")
    }
    else{
     Log.Error("Compare with list item is not visible on rule family screen") 
    }
    break 
    
    case "compare with_original":
    page.FindElement("//div[@type='button']").Click()
    var RfObject = page.FindElement("//*[(text() = 'Compare with')]").HoverMouse()
    var RfScreenObject = page.FindElement("//*[(text() = 'Original')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Compare with original list item is visible on rule family screen")
    }
    else{
     Log.Error("Compare with original list item is not visible on rule family screen") 
    }
    page.FindElement("//div[@type='button']").Click()
    break 
    
    case "compare with_other version or view":
    page.FindElement("//div[@type='button']").Click()
    var RfObject = page.FindElement("//*[(text() = 'Compare with')]").HoverMouse()
    var RfScreenObject = page.FindElement("//*[(text() = 'Other version or View')]")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Compare with other version or view list item is visible on rule family screen")
    }
    else{
     Log.Error("Compare with other version or view list item is not visible on rule family screen") 
    }
    page.FindElement("//div[@type='button']").Click()
    break 
    
    case "additional info":
    var RfScreenObject = page.FindElement("//button[text()=' Additional Info ']")
    if(RfScreenObject.Exists && RfScreenObject.VisibleOnScreen)
    {
      Log.Checkpoint("Additional info button is visible on rule family screen")
    }
    else{
     Log.Error("Additional info button is not visible on rule family screen") 
    }
    break 
    
    case "draft":
    var DraftPanelObject = page.FindElement("//div[contains(@class,'laundry-line')]//span[contains(@class,'label--draft')]")
    if(DraftPanelObject.Exists && DraftPanelObject.VisibleOnScreen)
    {
      Log.Checkpoint("Draft is visible on top of rule family table")
    }
    else{
     Log.Error("Draft is not visible on top of rule family table") 
    }
    break
    
    case "approved":
    var ApprovedPanelObject = page.FindElement("//div[@class='action-panel ']")
    if(aqString.StrMatches("This is an approved version of this Rule Family. To edit this version click Enable Editing. ",ApprovedPanelObject.textContent))
    {
      Log.Checkpoint(ApprovedPanelObject.textContent+" is visible on screen")
    }
    else
    {
      Log.Error(ApprovedPanelObject.textContent+" is not visible on screen")
    }
    break
  }
}
