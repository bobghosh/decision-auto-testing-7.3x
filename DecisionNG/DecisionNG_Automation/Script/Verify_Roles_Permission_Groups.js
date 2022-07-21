 let app_array=[]; 

function Verify_Created_Roles_and_PermissionGroups (Role,permissionGrps)
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
      let app_subarray =[];
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
      let ItemLinkName=HighlightedItemName.textContent.toString().trim();
      
      if(ItemLinkName == Role)
      {
            
            var rolesToCheck= page.FindElements("//tbody//tr["+j+"]//td[2]//div//div//div")
  
            for(var k=1;k <=rolesToCheck.length; k++)
            { 
              let text= page.FindElement("//tbody//tr["+j+"]//td[2]//div//div//div["+k+"]").textContent;
              let roleText=text.toString().trim();
              app_subarray.push(roleText);   

            }
              flag="1";
              app_array.push(app_subarray);
              let sub_array = [];
              let newarr= new Array();
              newarr=app_array.toString().split(",");
              Log.Message(newarr)
              
              //Now compare the Appdata with actual data 
                if(!permissionGrps == "")
                {
                  let str_array = permissionGrps.split(',');
                  let role_array = [];
                  let missingrolearray=[];
                  for(var n = 0; n <str_array.length; n++) 
                  {  
                    
                    let permissionGrp=str_array[n].toString().trim()
                    
                    
                      if(newarr.includes(permissionGrp))
                      {
                        Log.Checkpoint("The permission group "+str_array[n]+" Exist")
                        
                      }
                      else if (!newarr.includes(permissionGrp))
                      {
                        
                        Log.Error("The permission group"+str_array[n]+" Does not Exist");
                        role_array.push(str_array[n]);
                        
                        break;
        
                      }
                          
                  }
                  
                }
                else
                {
                  Log.Message("No Permission groups present")
                }
                  

          
                    
      } 
      if(flag == "1")      
      {
        break;
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
