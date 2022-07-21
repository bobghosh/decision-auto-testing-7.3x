 
 let super_array =[];
 let app_array =[];
 let row_array=[];
function SelectingItemGetData ()
{
  let columnCount=Project.Variables.Roles.ColumnCount;
  Log.Message(columnCount)
  let app_subarray=[];
  let row_subarray=[];
  var ItemCount;
  var flag = 0;
  hasNext = true;
  
  do
  {    
//    if(Aliases.browser.pageSapiensDecision.FindElement(".ui-dropdown-trigger").Exists)
//    {
//      Aliases.browser.pageSapiensDecision.FindElement(".ui-dropdown-trigger").Click();
//      Aliases.browser.pageSapiensDecision.FindElement("//li[contains(., '50')]").Click();
//    }
//    
    
    TotalRows = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    
    for(var j = 1; j <= TotalRows.length ; j++)
    {
      
      
      let Row = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a").textContent
         row_subarray.push(Row);
    
    }
    row_array.push(row_subarray);
    var rowarray= new Array();
    rowarray=row_array.toString().split(",");  
    //Log.Message("This is rowarray"+row_array)
    
     for(let c=1;c<columnCount;c++)
    {
      let cname=Project.Variables.Roles.ColumnName(c)
      if(c>=2)
      {
        if(rowarray.includes(cname))
        {
    //Row Counts in one page
     ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
      //var HighlightedCommunityName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+ j + "]/td[2]");
    
      //If the Item Name matches 
      //Log.Message(cname)
      if(cname == HighlightedItemName.textContent)
      {     Log.Message(HighlightedItemName.textContent)
            Log.Message(cname)
            var permissions= Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+j+"]//td[2]//div//div//div")
            Log.Message(permissions.length)
            for(var k=1;k <=permissions.length; k++)
            { 
              let text=Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[2]//div//div//div["+k+"]").textContent
              var txtval=text.toString().replace(/_/g,"").trim();     
              app_subarray.push(txtval)
              flag =1;
//  
            }
           
             app_array.push(app_subarray);
             let sub_array = [];
    var newarr= new Array();
    newarr=app_array.toString().split(",");  
    //Log.Message(newarr)
      
     
   
    Project.Variables.Roles.Reset();
    for(; ! Project.Variables.Roles.IsEOF();)
    {
      
      //Project.Variables.Permission_Matrix.ColumnName()
      if(Project.Variables.Roles.Value(cname) =="ü")
      {
        sub_array.push(Project.Variables.Roles.Value("Permission Groups"));
        //Log.Message(Project.Variables.Permission_Matrix.Value("Permissions"));
        let PermissionValue=Project.Variables.Roles.Value("Permission Groups")
        let perval=PermissionValue.toString().replace(/_/g,"").trim();
        //Log.Message("after replace"+perval)
        
        if (!newarr.includes(perval))
        {
          Log.Message("Permission "+PermissionValue+" is not checked")
          HighlightedItemName.click();
          Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+PermissionValue+"']//*[contains(@class,'p-checkbox')]").click();
          Aliases.browser.pageSapiensDecision.form.buttonOk.Click();
          Log.Message("Permission"+PermissionValue+" Is set")
          
        }
        else
        {
          Log.Message("Permission "+PermissionValue+" is already checked")
          
        }
       
    
      }
      
       Project.Variables.Roles.Next();
    }
    
    }

    }
    }
    else
    {
      
      Log.Message("Group missing is "+cname );
      Aliases.browser.pageSapiensDecision.buttonSendToGlossary.ClickButton();
      Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(cname);
      
      Project.Variables.Roles.Reset();
    for(; ! Project.Variables.Roles.IsEOF();)
    {
      
      //Project.Variables.Permission_Matrix.ColumnName()
      if(Project.Variables.Roles.Value(cname) =="ü")
      {
        
          let PermissionValue=Project.Variables.Roles.Value("Permission Groups")
       
          Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+PermissionValue+"']//*[contains(@class,'p-checkbox')]").click();
          Log.Message("Missed group Permission"+PermissionValue+" is created and set")

      }
      
       Project.Variables.Roles.Next();
    }
    Aliases.browser.pageSapiensDecision.form.buttonOk.Click();
    flag=1;
      
      

    }
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
