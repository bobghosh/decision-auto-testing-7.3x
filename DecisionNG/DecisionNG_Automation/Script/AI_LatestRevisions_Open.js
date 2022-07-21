function AI_LatestRevisions_Open()
{ 
  var revisions= "ATR DF V1.1/Master/8614183"
  var page = Aliases.browser.pageSapiensDecision2;

    let flag = 'false'
    var revisionsList = page.FindElements("//span[text()='Latest Revisions: ']//parent::div//div//dcn-link-label/div//a");
    let vgIconList = page.FindElements("//span[text()='Latest Revisions: ']//parent::div//div//dcn-link-label/div//i");
    for(let i=0; i<revisionsList.length; i++)
    {
        let revisionName= revisionsList[i].textContent.replace(/\s/g, '')
//        Log.Message(revisionName)
//        Log.Message(revisions[j])
        if(revisionName == revisions.replace(/\s/g, ''))
        {
          if(vgIconList[i].visibleOnScreen)
          {
            Log.Checkpoint(revisions+" VG Icon is displayed")
          }
          
          else
          {
            Log.Error(revisions+" VG Icon is not displayed")
          }
          
          Log.CheckPoint("Revision Present & Verified: "+revisions)
          
          revisionsList[i].click();
          page.WaitElement(page.FindElement("//h5[text()='Revision']"));
          CheckProperty(page.FindElement("//h5[text()='Revision']"),'textContent',cmpEqual,"Revision");
          
          flag = 'true';
          
        }
        
    }
    if(flag == 'true')
    {
      Log.Checkpoint("Revision is verified Successfully")
    }
    else{
      Log.Error("Revision does not exist in the list of Latest Revisions")
    }
}