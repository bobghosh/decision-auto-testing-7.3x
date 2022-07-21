function QuickSearch_SearchAllVersions_Checkbox(selectCheckBox)
{
  
  let searchAllVersionCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-quick-search//p-checkbox/div/div[2]");

  if(selectCheckBox == "Yes")
  {
      if(searchAllVersionCheckbox.getAttribute("class").includes("ui-state-active"))
      {
        Log.Message("Checkbox is already selected");
      }
      else
      {
        searchAllVersionCheckbox.click();
    
        if(searchAllVersionCheckbox.getAttribute("class").includes("ui-state-active"))
        {
          Log.Checkpoint("User selected the Checkbox"); 
        }
        else
        {
          Log.Error("Checkbox doesn't get selected");
        }
    
    
      }
      
  }
  else
  {
    if(searchAllVersionCheckbox.getAttribute("class").includes("ui-state-active"))
      {
        searchAllVersionCheckbox.click();
        
        Log.Message("User de-selected the Checkbox");
        
        if(searchAllVersionCheckbox.getAttribute("class").includes("ui-state-active"))
        {
          Log.Error("Checkbox is still selected"); 
        }
        else
        {
          Log.Checkpoint("User de-selected the Checkbox");
        }
      }
      else
      {  
        Log.Message("Checkbox is not selected");    
      }
    
  }
}
module.exports.QuickSearch_SearchAllVersions_Checkbox = QuickSearch_SearchAllVersions_Checkbox;