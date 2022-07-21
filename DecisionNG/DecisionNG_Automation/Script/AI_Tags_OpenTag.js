function AI_Tags_OpenTag()
{
  var tagname = "dg/TagName"
  var page = Aliases.browser.pageSapiensDecision2;
  let flag = 'false'
  
    var tagsList = page.FindElements("//span[text()='Tags: ']//parent::div//div//dcn-link-label/div//a");
    let vgIconList = page.FindElements("//span[text()='Tags: ']//parent::div//div//dcn-link-label/div/i");
    for(let i=0; i<tagsList.length; i++)
    {
        let tagName= tagsList[i].textContent.replace(/\s/g, '')
        //Log.Message(tagName)
        if(tagName == tagname.replace(/\s/g, ''))
        {
          if(vgIconList[i].visibleOnScreen)
          {
            Log.Checkpoint(tagname+" VG Icon is displayed")
          }
          
          else
          {
            Log.Error(tagname+" VG Icon is not displayed")
          }
          
          Log.CheckPoint("Tag Present & Verified: "+tagname)
          tagsList[i].click();
          page.WaitElement(page.FindElement("//h5[text()='Revision']"));
          CheckProperty(page.FindElement("//h5[text()='Revision']"),'textContent',cmpEqual,"Revision");
          
          flag = 'true';
          
        }
        
    }
    if(flag == 'true')
    {
      Log.Checkpoint("TagName is verified Successfully")
    }
    else{
      Log.Error("TagName does not exist in the list of Tags")
    }
}