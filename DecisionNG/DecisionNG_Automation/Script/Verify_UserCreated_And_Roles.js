 let app_array=[]; 

function SelectingItem(Item)
{
  var ItemCount;
  var flag = 0;
  //var ItemName = Item
  //var CommunityName = Project.Variables.TaskName.Value("CommunityName");
  hasNext = true;
  
  let att=Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-first ui-paginato']").getAttribute("class")
  if(!att.includes("ui-state-disabled"))
  {
      Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-first ui-paginato']").Click();
  }
  else
  {
    Log.Message("Already 1st page")
  }
             
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
      if(ItemLinkName == Item)
      {
        Log.Message("Match")
        var CommunitiesForRoles= Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+j+"]//td[3]//div//div")
            Log.Message(CommunitiesForRoles.length)
            for(var k=1;k <=CommunitiesForRoles.length; k++)
            { 
              let text=Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[3]//div//div["+k+"]").textContent;
              //Log.Message(text);
              let roleText=text.toString().trim();
              //Log.Message(roleText)
              app_subarray.push(roleText);  
                       

            }flag=1;
              app_array.push(app_subarray);
              let sub_array = [];
              let newarr= new Array();
              newarr=app_array.toString().split(",");
              Log.Message(newarr)
              
              //Now compare the Appdata to the exceldata
              
                  let str = Project.Variables.Create_NewUser_Details.Value("Roles");
                  let str_array = str.split(',');
                  let role_array = [];
                  let missingrolearray=[];
                  for(var n = 0; n <str_array.length; n++) 
                  {  
                    
                    let Role=str_array[n]+":".toString().trim();
                    //Log.Message(Role)
                    
                      if(newarr.includes(Role))
                      {
                        Log.Message("The Role "+str_array[n]+" Exist")
                        
                      }
                      else if (!newarr.includes(Role))
                      {
                        
                        Log.Message("The Role "+str_array[n]+" Does not Exist");
                        role_array.push(str_array[n]);
                        //Log.Message(role_array)
//                        HighlightedItemName.Click();
//                        Aliases.browser.pageSapiensDecision.button6.ClickButton();
//                        Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+str_array[n]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();
//                        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
//                        Aliases.browser.pageSapiensDecision2.linkPermissionGroups.textnodeUsers.Click();
                        break;
        
                      }
                       if(n==(str_array.length-1))
                         {
                           Log.Message("Last one")
                          flag=1;  
                    
                         }
                          
                  }
                  missingrolearray.push(role_array)
                  Log.Message("This is missing role array"+missingrolearray)
                  HighlightedItemName.Click();
                  for(let p=1; p<= missingrolearray.length;p++)
                  {
                    //HighlightedItemName.Click();
                    Aliases.browser.pageSapiensDecision.button6.ClickButton();
                    Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+str_array[n]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();
                    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
                    //Aliases.browser.pageSapiensDecision2.linkPermissionGroups.textnodeUsers.Click();
                  }
                  Aliases.browser.pageSapiensDecision2.linkPermissionGroups.textnodeUsers.Click();
              //
              
          
                    
      } 
            

    }
     if(flag == 1)
      {
        
        break;
      }
      Delay(1000);
      var Next_Page_Button = Aliases.browser.pageSapiensDecision.FindElement("//a[@ng-reflect-klass='ui-paginator-next ui-paginator']");
      
      if(Next_Page_Button.getAttribute("class") == "ui-paginator-next ui-paginator-element ui-state-default ui-corner-all")
      {
      Next_Page_Button.click();          
      }
      
      else
      {
        hasNext = false;
      }
        
    }while (hasNext==true)

}
module.exports.SelectingItem = SelectingItem;
