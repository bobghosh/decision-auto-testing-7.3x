let super_array =[];
 let row_array=[];

function SelectingItemGetData ()
{
   
  let columnCount=Project.Variables.Permission_Matrix.ColumnCount;
  Log.Message(columnCount)
  
  let row_subarray=[];
  var ItemCount;
  var flag = 0;
  hasNext = true;
  
  do
  { 
    Delay(3000)
//    var Paginator = Aliases.browser.pageSapiensDecision.FindElement("//p-dropdown");
//    //Checking for Pagination
//    if(Paginator.Exists == true)
//    {
//      Aliases.browser.pageSapiensDecision.FindElement(".ui-dropdown-trigger").Click();
//      Aliases.browser.pageSapiensDecision.FindElement("//li[contains(., '100')]").Click();
////    }
//    else
//    {
//      Log.Message("Pagination is not present")
//    }

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
    
     for(let c=1;c<columnCount;c++)
    {
      let cname=Project.Variables.Permission_Matrix.ColumnName(c)
      if(c>=3)
      {
        if(rowarray.includes(cname))
        {
    //Row Counts in one page
     ItemCount = Aliases.browser.pageSapiensDecision.FindElements("//tbody/tr");
    
    //Iterate through all the rows and finding the desired Task
    for(var j = 1; j <= ItemCount.length ; j++)
    {
      let app_subarray=[];
      let app_array =[];
      var HighlightedItemName = Aliases.browser.pageSapiensDecision.FindElement("//tbody/tr["+j+"]/td[1]//a");
      
      if(cname == HighlightedItemName.textContent)
      {     Log.Message(HighlightedItemName.textContent)
            Log.Message(cname)
            var permissions= Aliases.browser.pageSapiensDecision.FindElements("//tbody//tr["+j+"]//td[2]//div//div//div")
            Log.Message(permissions.length)
            for(var k=1;k <=permissions.length; k++)
            { 
              let text=Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr["+j+"]//td[2]//div//div//div["+k+"]").textContent
              var txtval=text.toString().trim();     
              app_subarray.push(txtval)
              flag =1;
//  
            }
           
             app_array.push(app_subarray);
   
    var newarr= new Array();
    newarr=app_array.toString().split(","); 
      
   let pervalarray=[];
    Project.Variables.Permission_Matrix.Reset();
    for(; ! Project.Variables.Permission_Matrix.IsEOF();)
    {
      
      //Project.Variables.Permission_Matrix.ColumnName()
      if(Project.Variables.Permission_Matrix.Value(cname) =="ü")
      {
        let PermissionValue=Project.Variables.Permission_Matrix.Value("Permissions");
        let perval=PermissionValue.toString().trim();
        pervalarray.push(perval);
        var excel_arr=new Array();
        excel_arr=pervalarray.toString().split(","); 
        
        if (!newarr.includes(perval))
        {
          Log.Message("Permission "+PermissionValue+" is not checked")
          HighlightedItemName.click();
         // Delay(1000)
          Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+PermissionValue+"']//*[contains(@class,'p-checkbox')]").click();
          Aliases.browser.pageSapiensDecision.form.buttonOk.Click();
          Log.Message("Permission"+PermissionValue+" Is set")
          
        }
        else
        {
          Log.Message("Permission "+PermissionValue+" is already checked")
          
        }
       
    
      }
      
       Project.Variables.Permission_Matrix.Next();
    }
    let dif1 = newarr.diff(excel_arr);  
    let differ_arr=new Array();
    differ_arr=dif1.toString().split(",");
    
    Log.Message(excel_arr.length)
    Log.Message(newarr.length)    
    
    if(newarr.length>excel_arr.length)
    {
     HighlightedItemName.click();
     for(m=0; m<differ_arr.length; m++)
     {
       Log.Message(differ_arr[m]) 
       Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label='"+differ_arr[m]+"']//*[contains(@class,'p-checkbox')]").click(); 
     }
     Aliases.browser.pageSapiensDecision.form.buttonOk.Click();            
    }
    
    }

    }
    }
    
    else
    {
      
      Log.Message("Group missing is "+cname );
      Aliases.browser.pageSapiensDecision.buttonSendToGlossary.ClickButton();
      Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(cname);
      
      Project.Variables.Permission_Matrix.Reset();
    for(; ! Project.Variables.Permission_Matrix.IsEOF();)
    {
      
      //Project.Variables.Permission_Matrix.ColumnName()
      if(Project.Variables.Permission_Matrix.Value(cname) =="ü")
      {
        
          let PermissionValue=Project.Variables.Permission_Matrix.Value("Permissions")
       
          Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+PermissionValue+"']//*[contains(@class,'p-checkbox')]").click();
          Log.Message("Missed group Permission"+PermissionValue+" is created and set")

      }
      
       Project.Variables.Permission_Matrix.Next();
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

Array.prototype.diff = function(a) {
    return this.filter(function(i) {return a.indexOf(i) < 0;});
};