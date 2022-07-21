function Location_in_Repo_Open_OR_Verify(Repo_Path,verify_Asset,open_Asset)
{
var page= Aliases.browser.pageSapiensDecision2
let RepoPathElement = page.FindElement("//h2[contains(text(),'Location')]/parent::div//dcn-link-label//div//a")
let RepoPathText = RepoPathElement.textContent.trim();

if(verify_Asset == "Yes"&& !verify_Asset == "")
{
if(Repo_Path == RepoPathText)
{
let icon= page.FindElement("//h2[contains(text(),'Location')]/parent::div//dcn-link-label//div//i");
Log.Checkpoint("Location in Repository "+Repo_Path+" is matching with "+RepoPathText)
if(icon.VisibleOnScreen )
{
  if(icon.getAttribute('class').includes('icon-community'))
  {
    Log.Checkpoint("Community icon is displayed on screen");
  }
  else if(icon.getAttribute('class').includes('icon-viewgroup'))
  {
    Log.Checkpoint("View Group/Folder icon is displayed on screen");
  }
  else if(icon.getAttribute('class').includes('icon-glossary'))
  {
    Log.Checkpoint("Glossary icon is displayed on screen");
  }
 else
 {
   Log.Checkpoint("Community or View Group/Folder or Glossary icon is not presnt")
 }
}
else
{
Log.Error("No icon is not displayed on screen");
}



}
else
{
Log.Error("Location in Repository "+Repo_Path+" is not matching with "+RepoPathText)
}
}


else if(open_Asset == "Yes" && !open_Asset== "")
{
if(Repo_Path == RepoPathText)
{
let icon= page.FindElement("//h2[contains(text(),'Location')]/parent::div//dcn-link-label//div//i");
Log.Checkpoint("Location in Repository "+Repo_Path+" is matching with "+RepoPathText);

if(icon.VisibleOnScreen )
{
if(icon.getAttribute('class').includes('icon-community'))
  {
    Log.Checkpoint("Community icon is displayed on screen");
    RepoPathElement.Click();
    Delay(2000);
    
    page.WaitElement(page.FindElement("//span[text()='Repository']"),2000);
    
    if(page.FindElement("//li//a//span[text()='Assets']//ancestor::ul//following-sibling::div//span[text()='Knowledge Sources']//parent::a").getAttribute('aria-selected')=="true")
    {
      Log.Checkpoint("Navigated to Repository->Community->Asssets->Knowledge Sources tab successfully");
    }
    else if(page.FindElement("//li//a//span[text()='Assets']//ancestor::ul//following-sibling::div//span[text()='Decision Flows']//parent::a").getAttribute('aria-selected')=="true")
    {
      Log.Checkpoint("Navigated to Repository->Community->Asssets->Decision Flows tab successfully");
    }
    
    else{
      Log.Error("Navigation to Repository->Community->Asssets->Decision Flows/Knowledge Sources tab was not successful/delayed")
    }
    
    
    
    
  }
  else if(icon.getAttribute('class').includes('icon-viewgroup'))
  {
    Log.Checkpoint("View Group/Folder icon is displayed on screen");
    RepoPathElement.Click();
    
    page.WaitElement(page.FindElement("//span[text()='Repository']"),2000);
    
    if(page.FindElement("//li//a//span[text()='Assets']//ancestor::ul//following-sibling::div//span[text()='Decisions']//parent::a").getAttribute('aria-selected'))
    {
      Log.Checkpoint("Navigated to Repository->Community->Folder->Asssets->Decisions tab successfully");
    }
    else{
      Log.Error("Navigation to Repository->Community->Folder->Asssets->Decisions tab was not successful/delayed")
    }
    
  }
  else if(icon.getAttribute('class').includes('icon-glossary'))
  {
    Log.Checkpoint("Glossary icon is displayed on screen");
    RepoPathElement.Click();
    
    page.WaitElement(page.FindElement("//span[text()='Repository']"),2000);
    
    if(page.FindElement("//li//a//span[text()='Assets']//ancestor::ul//following-sibling::div//span[text()='Glossary (Fact Types)']//parent::a").getAttribute('aria-selected'))
    {
      Log.Checkpoint("Navigated to Repository->Community->Asssets->Glossary (Fact Types) tab successfully");
    }
    else{
      Log.Error("Navigation to Repository->Community->Asssets->Glossary (Fact Types) tab was not successful/delayed")
    }
    
    
  }
 else
 {
   Log.Checkpoint("Community or View Group/Folder or Glossary icon is not presnt")
 }
}
else
{
  Log.Error("No icon is not displayed on screen");
}
}
else
{
  Log.Error("Location in Repository "+Repo_Path+" is not matching with "+RepoPathText);
}

}



}