function Verify_Created_Roles_Exists_NotExists (Role,verify_role_Exists_NotExists)
{
  
  var ItemCount;
  var flag = "0";
  var page = Aliases.browser.pageSapiensDecision;
  let Paginator;  
  
  
    if(page.FindElements("//p-paginator/div").length > 0)
    {
      Paginator = "Yes";
    }
    else
    {
      Paginator = "No";
    }
    
    let hasNext = "true";
             
  do
  {     
    //Row Counts in one page
    ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
 
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      var exist = "No"
      let app_subarray =[];
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
      let ItemLinkName=HighlightedItemName.textContent.toString().trim();
      Log.Message(ItemLinkName)
      Log.Message(Role)
      if(ItemLinkName == Role)
      {
        flag = "1";
        exist="Yes"
      }
  
      if(flag == "1")      
      {
        break;
      }

    }
    if(verify_role_Exists_NotExists == "Not Exists")
    {
      if(exist == "No")
      {
         Log.Checkpoint("Role "+Role+" dosen't exists");
      }
      else{
        Log.Error("Role "+Role+" Exists");
      }
    }
    else if(verify_role_Exists_NotExists == "Exists")
    {
      if(exist == "Yes")
      {
         Log.Checkpoint("Role "+Role+" Exists");
      }
      else{
        Log.Error("Role "+Role+" dosen't Exists");
      }
    }
    
    if(flag == "1")      
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
              Delay(2000);       
            }
          }
          else
          {
            hasNext = "false";
          }
        
    }while (hasNext==true)
    }
    
module.exports.Verify_Created_Roles_Exists_NotExists = Verify_Created_Roles_Exists_NotExists;    