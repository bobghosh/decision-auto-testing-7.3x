 let app_array=[]; 

function Verify_Created_User_and_Roles (userName,Roles)
{
  var ItemCount;
  var flag = "0";
  //var ItemName = Item
  //var CommunityName = Project.Variables.TaskName.Value("CommunityName");

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
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      let app_subarray =[];
      //Log.Message("Ittitating")
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
      //var HighlightedCommunityName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+ j + "]/td[2]");
      let ItemLinkName=HighlightedItemName.textContent.toString().trim();
      //If the Item Name matches 
      if(ItemLinkName == userName)
      {
        var CommunitiesForRoles= Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+j+"]//td[3]//div//div")
            //Log.Message(CommunitiesForRoles.length)
            for(var k=1;k <=CommunitiesForRoles.length; k++)
            { 
              let text=Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[3]//div//div["+k+"]").textContent;
              //Log.Message(text);
              let roleText=text.toString().trim();
              //Log.Message(roleText)
              app_subarray.push(roleText);  
                       

            }flag="1";
              app_array.push(app_subarray);
              let sub_array = [];
              let newarr= new Array();
              newarr=app_array.toString().split(",");
              Log.Message(newarr)
              
              //Now compare the Appdata with actual data 
              
                  let str_array = Roles.split(',');
                  let role_array = [];
                  let missingrolearray=[];
                  for(var n = 0; n <str_array.length; n++) 
                  {  
                    
                    let Role=str_array[n].toString().trim()+":"
                    //Log.Message(Role)
                    
                      if(newarr.includes(Role))
                      {
                        Log.Checkpoint("The Role "+str_array[n]+" Exist")
                        
                      }
                      else if (!newarr.includes(Role))
                      {
                        
                        Log.Error("The Role "+str_array[n]+" Does not Exist");
                        role_array.push(str_array[n]);
                        //Log.Message(role_array)
//                        HighlightedItemName.Click();
//                        Aliases.browser.pageSapiensDecision.button6.ClickButton();
//                        Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+str_array[n]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();
//                        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
//                        Aliases.browser.pageSapiensDecision2.linkPermissionGroups.textnodeUsers.Click();
                        break;
        
                      }
                          
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
