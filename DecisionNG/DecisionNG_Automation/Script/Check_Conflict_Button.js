function Resolve_Conflicts_Decision_Flows()
{
  let Check_Conflicts_Button = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Check Conflicts']");
  Check_Conflicts_Button.ClickButton();
  
  let Conflict_Text = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Assets in']//span").textContent;
  let Conflict = Conflict_Text.split(" ");
  Log.Message(Conflict[1]);
  if(Conflict[1] > 0)
  {
    Log.Message("Conflict is present");
    
    Delay(2000);
    
    let Conflict_icon = Aliases.browser.pageSapiensDecision2.FindElements("//i[contains(@class,'icon-conflict')]");
    Delay(1000)
    
    if(Conflict_icon.length > 0)
    {
      let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
      for(var i = 1; i <=AssetList.length ;i++)
      {
        let ConflictIcon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+i+"]//td[6]//i");
      
        if(ConflictIcon.length > 0)
        {         
          Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[6]//dcn-asset-conflict-indicator//i").Click();  
      
//          aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Conflicts");
  
          Conflicted_AssetList = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//tbody//tr//p-checkbox/div/div[2]");
          
          for(var j = 1; j <=Conflicted_AssetList.length ;j++)
          {
            Asset_Checkbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//tbody//tr["+j+"]//p-checkbox/div/div[2]");
          
            if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
            {
              Log.Checkpoint("Checkbox is selected") 
            }
            else
            {
              Asset_Checkbox.click();
              if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
              {
                Log.Checkpoint("Checkbox is selected") 
              }
              else
              {
                Log.Error("Checkbox is not selected")
              }
            }
          }          
//        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();       
        Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
           
        }
      }
    } 
  }
  else
  {
    Log.Message("No Conflicts present on current tab");
  }
}

function Resolve_Conflicts_Decisions()
{
  let Check_Conflicts_Button = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Check Conflicts']");
  Check_Conflicts_Button.ClickButton();
  
  let Conflict_Text = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Assets in']//span").textContent;
  let Conflict = Conflict_Text.split(" ");
  Log.Message(Conflict[1]);
  if(Conflict[1] > 0)
  {
    Log.Message("Conflict is present");
    
//    Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Decision Flows')]").Click();
  Delay(2000);
    
  let Conflict_icon = Aliases.browser.pageSapiensDecision2.FindElements("//i[contains(@class,'icon-conflict')]");
  Delay(1000)
    
  if(Conflict_icon.length > 0)
  {
    let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
    for(var i = 1; i <=AssetList.length ;i++)
    {
      let ConflictIcon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+i+"]//td[6]//i");
      
      if(ConflictIcon.length > 0)
      {        
          Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[6]//dcn-asset-conflict-indicator//i").Click();  
      
//          aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Conflicts");
  
          Conflicted_AssetList = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//tbody//tr//p-checkbox/div/div[2]");
          
          for(var j = 1; j <=Conflicted_AssetList.length ;j++)
          {
            Asset_Checkbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//tbody//tr["+j+"]//p-checkbox/div/div[2]");
          
            if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
            {
              Log.Checkpoint("Checkbox is selected") 
            }
            else
            {
              Asset_Checkbox.click();
              if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
              {
                Log.Checkpoint("Checkbox is selected") 
              }
              else
              {
                Log.Error("Checkbox is not selected")
              }
            }
          }          
//        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
        Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
                  
      }
    }
    }
  }
  else
  {
    Log.Message("No Conflicts present on current tab");
  }
}

function Resolve_Conflicts_Rule_Families()
{
  let Check_Conflicts_Button = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Check Conflicts']");
  Check_Conflicts_Button.ClickButton();
  
  let Conflict_Text = Aliases.browser.pageSapiensDecision2.FindElement("//*[text()=' Assets in']//span").textContent;
  let Conflict = Conflict_Text.split(" ");
  Log.Message(Conflict[1]);
  if(Conflict[1] > 0)
  {
    Log.Message("Conflict is present");
    
//    Aliases.browser.pageSapiensDecision2.FindElement("//*[(text()='Decision Flows')]").Click();
  Delay(2000);
    
  let Conflict_icon = Aliases.browser.pageSapiensDecision2.FindElements("//i[contains(@class,'icon-conflict')]");
  Delay(1000)
    
  if(Conflict_icon.length > 0)
  {
    let AssetList = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr");  
  
    for(var i = 1; i <=AssetList.length ;i++)
    {
      let ConflictIcon = Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+i+"]//td[7]//i");
              
      if(ConflictIcon.length > 0)
      {        
         Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+i+"]//td[7]//dcn-asset-conflict-indicator//i").Click();        
     
//         aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummary, "contentText", cmpContains, "Conflicts");
  
         Conflicted_AssetList = Aliases.browser.pageSapiensDecision.FindElements("//dcn-dialog//tbody//tr//p-checkbox/div/div[2]");
          
          for(var j = 1; j <=Conflicted_AssetList.length ;j++)
          {
            Asset_Checkbox = Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//tbody//tr["+j+"]//p-checkbox/div/div[2]");
          
            if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
            {
              Log.Checkpoint("Checkbox is selected") 
            }
            else
            {
              Asset_Checkbox.click();
              if(Asset_Checkbox.getAttribute("class").includes("ui-state-active"))
              {
                Log.Checkpoint("Checkbox is selected") 
              }
              else
              {
                Log.Error("Checkbox is not selected")
              }
            }
          }
          
          Aliases.browser.pageSapiensDecision.FindElement("//*[contains(@class,'spec-confirmed')]").Clickbutton();
        
//        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
          
      }

    }
  }
  }
  else
  {
    Log.Message("No Conflicts present on current tab");
  }
}