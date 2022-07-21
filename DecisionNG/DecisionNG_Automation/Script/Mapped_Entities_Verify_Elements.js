function Mapped_Entities_Verify_Elements(MD_Name,MD_Version,verify_Associated_FT_Exists_Not_Exists)
{
//  let MD_Name ="Test"
//  let MD_Version="1.0.0"
//  let verify_Associated_FT_Exists_Not_Exists ="Exists"
  let page = Aliases.browser.pageSapiensDecision
  let md_NameObj = page.FindElement("//label[text()='Model Definition']//parent::div//following-sibling::div/span")
  let md_VersionObj = page.FindElement("//label[text()='Model Version']//parent::div//following-sibling::div/span")
  
  
  if(!MD_Name == "")
  {
    aqObject.CheckProperty(md_NameObj,"contentText", cmpEqual,MD_Name);
  }
  if(!MD_Version == "")
  {
    aqObject.CheckProperty(md_VersionObj,"contentText",cmpEqual,MD_Version);
  }
  if(!verify_Associated_FT_Exists_Not_Exists == "")
  {
    let associatedFacttypesGrid = page.FindElements("//dcn-associated-fact-types/div")
    
      if(verify_Associated_FT_Exists_Not_Exists == "Exists")
      {
        if(associatedFacttypesGrid.length>0)
        {
          Log.Checkpoint("Associated Fact types Exists")
        }
        else
        {
          Log.Error("Associated Fact types does not Exists")
        }
        
      }
      else
      {
        if(associatedFacttypesGrid.length>0)
        {
          Log.Error("Associated Fact types Exists")
        }
        else
        {
          Log.Checkpoint("Associated Fact types does not Exists")
        }
      }
  }
}

function verify_FTName_MappedName_Status(FactTypeName,Mappedname,MappedStatus)
{
//      var FactTypeName ="Abdul Applicant Age"
//      var Mappedname = "Test"
//      var MappedStatus ="CANDIDATE"
    let page = Aliases.browser.pageSapiensDecision;
    let flag = 0;
    let Paginator; 
    let hasNext = "true";
    
    if(page.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    
    
    do{
  
          ItemCount = page.FindElements("//tbody//tr");
          
          for(var j = 1; j <= ItemCount.length ; j++)
          {
                var factTypeName = page.FindElement("//tbody/tr["+j+"]/td[1]").textContent.trim();
                

                //If the Task Name matches 
                if(factTypeName.trim() == FactTypeName.trim()) 
                { 
                var mappedName = page.FindElement("//tbody/tr["+j+"]/td[2]")
                var mappedStatus = page.FindElement("//tbody/tr["+j+"]/td[3]")
                
                  aqObject.CheckProperty(page.FindElement("//tbody/tr["+j+"]/td[1]"),"contentText",cmpEqual,FactTypeName.trim())
                  aqObject.CheckProperty(mappedName,"contentText",cmpEqual,Mappedname) 
                  aqObject.CheckProperty(mappedStatus,"contentText",cmpEqual,MappedStatus) 
                  flag =1;
                        
                 }
                 if(flag == 1)
                 {
                    break;
                 }
            }
            if(flag ==1)
            {
              break;
            }
          
          if(Paginator == "Yes")
          {
            if(page.FindElement("//*[contains(@class,'i-paginator-next')]").getAttribute("class").includes("ui-state-disabled"))
            { 
              hasNext = "false";
            }
            else
            {
              page.FindElement("//*[contains(@class,'i-paginator-next')]").click();         
            }
          }
          else
          {
            hasNext = "false";
          }
      

    }while(hasNext == "true")
}

function verify_Counters()
{

  let page = Aliases.browser.pageSapiensDecision
  if(page.FindElement("//span[text()='Total Mapping Status:']").Exists)
  {
    let approvedCountText = page.FindElement("//span[contains(text(),'Approved')]/span")
    let candidateCountText = page.FindElement("//span[contains(text(),'Candidate')]/span")
    let draftCountText = page.FindElement("//span[contains(text(),'Draft')]/span")
    
    var candidateStatus = 0
    var draftstatus = 0
    var approvedstatus = 0
    
    let list = page.FindElements("//tbody//tr")
    for(let i=1;i<=list.length;i++)
    {
      var mappedStatus = page.FindElement("//tbody/tr["+i+"]/td[3]")
      let statusText = mappedStatus.textContent.trim()
      if(statusText == "CANDIDATE")
      {
        candidateStatus+= 1
        
      }
      if(statusText == "DRAFT")
      {
        draftstatus+= 1
        
      }
      if(statusText == "APPROVED")
      {
        approvedstatus+= 1
       
      }
      
    }

    aqObject.CheckProperty(draftCountText,"contentText",cmpEqual,draftstatus)
    aqObject.CheckProperty(approvedCountText,"contentText",cmpEqual,approvedstatus)
    aqObject.CheckProperty(candidateCountText,"contentText",cmpEqual,candidateStatus)
  }

  
   
}