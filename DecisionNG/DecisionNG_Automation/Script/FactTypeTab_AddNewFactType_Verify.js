//USEUNIT RefLibrary
var GenerateRandomNumber = require("GenerateRandomNumber");
var Generate_Random_Number = require("Generate_Random_Number");
var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
var Picture_To_Log = require("Picture_To_Log");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");


function Tasks_Create_New_FactType()
{
   
  // Ceate New FactType using Add FT button
  Project.Variables.Create_New_FactType.Reset();
  for(; !Project.Variables.Create_New_FactType.IsEOF();)
  {
    if(Project.Variables.Create_New_FactType.Value("Flag")=="Yes")
    {
      var FactType_Name = GenerateRandomNumber.get4DigitRandomInt();

    //Starting point  of a testcase
    aqTestCase.Begin(Project.Variables.Create_New_FactType.Value("TestCase Name"));
    
    let page = Aliases.browser.pageSapiensDecision
    page.buttonAddFactType.ClickButton();
    
    aqObject.CheckProperty(page.FindElement(ORGeneric.FactTypeSummary), "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("CheckPoint FT Summary"));
    aqObject.CheckProperty(page.FindElement("//*[@class='fact-type-form ng-star-inserted']//span"), "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("Status"));
    
    page.FindElement(ORGeneric.ftName).Click();
    page.FindElement(ORGeneric.ftName).SetText(Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name);
      
    aqObject.CheckProperty(page.panel5, "contentText", cmpEqual, Project.Variables.Create_New_FactType.Value("FT Summary after FT entry")+" "+FactType_Name);
    
    page.FindElement(ORGeneric.Decription).Click();
    page.FindElement(ORGeneric.Decription).Keys(Project.Variables.Create_New_FactType.Value("Description"));
   
    //Checks the input if user wants to select Single Input or Multiple Input Enters the loops if its Single Value.
    if(Project.Variables.Create_New_FactType.Value("List Indicator") == "Single Value")
    {
      page.FindElement(ORGeneric.lblSingleValue).Click();
    }
    //Checks the input if user wants to select Single or Multiple List Indicator Enters the loops if its Multiple Value.
    else 
    {
      page.FindElement(ORGeneric.lblMultipleValue).Click();
    }
    
    page.FindElement(ORGeneric.ftDataType+"//button").Click(); 
    SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Create_New_FactType.Value("Data Type"),"No")

    aqUtils.Delay(1500)
    page.FindElement(ORGeneric.ftDisplayFormat+"//button").Click();
    SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Create_New_FactType.Value("Display Format"),"No")
      
    aqUtils.Delay(1500)
    page.FindElement(ORGeneric.ftAllowedValues+"//button").Click();
    SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Create_New_FactType.Value("Allowed Values "),"No")
      
    

    //If Allowed Values is Range then enters the loop and enter the set of range values 
    if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Range")
      {
        page.FindElement(ftAllowedValues).Click();
          
        if(Project.Variables.Create_New_FactType.Value("Data Type").includes("Date")||Project.Variables.Create_New_FactType.Value("Data Type") == 'Month & year')
        {
          //Select From
          page.FindElement(ORGeneric.PlaceholderFrom).HoverMouse()
          const datePickFrom = ORGeneric.datePickFrom
          page.FindElement(datePickFrom).Click()
          SelectingDateFromCalendar.CalendarSelection('No', '2018', 'May', '29');
            
          //Select To
          const datePickTo = ORGeneric.datePickTo
          page.FindElement(datePickTo).Click()
          SelectingDateFromCalendar.CalendarSelection('No', '2022', 'Dec', '6');
            
          page.FindElement("//*[@class='u-flex-container spec-add-button add-btn']").Click()
          Delay(1000);                   
            
        }
          
        else if(Project.Variables.Create_New_FactType.Value("Data Type").includes('Day')||Project.Variables.Create_New_FactType.Value("Data Type").includes('Month'))
        {
          Log.Message("Range set loop'else if day  loop'")
          page.form.form2.form4.label.Click();
          // Delay(1000);
          var str = Project.Variables.Create_New_FactType.Value("SetValues");
          var setValues = str.split(',');     
          for(var i = 0; i < setValues.length ; i++) 
          { 
              let rangeData = setValues[i].split('-');
              let fromData=rangeData[0];
              let toData=rangeData[1];
              Log.Message("fromdata is"+fromData)
              Log.Message("to data is"+toData)    
              let browser = Aliases.browser;
              let button = page.form.form2.form4;
              page.FindElement(ORGeneric.dcnPlaceholderFrom+"//button").Click()
              SelectingOptionfromDropDown.SelectingOptionfromDropdown(fromData,"No");
              page.FindElement(ORGeneric.dcnPlaceholderTo+"//button").Click()
              SelectingOptionfromDropDown.SelectingOptionfromDropdown(toData,"No");
                
              page.FindElement("//button[contains(@class,'add-btn')]").Click();           
                          
          }
        
        }
      else
      {
        page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();

        var str = Project.Variables.Create_New_FactType.Value("SetValues");
        var setValues = str.split(',');     
          for(var i = 0; i < setValues.length ; i++) 
          { 
            var rangeData = setValues[i].split('-');
            var fromData=rangeData[0];
            var toData=rangeData[1];          
     
            page.FindElement(ORGeneric.PlaceholderFrom).Click();              
            page.FindElement(ORGeneric.PlaceholderFrom).SetText(fromData);
              
            page.FindElement(ORGeneric.PlaceholderTo).Click();
            page.FindElement(ORGeneric.PlaceholderTo).SetText(toData);
            page.FindElement("//dcn-range-list-editor/div/button") .ClickButton();
 
          }
      }
          
      }
      //If Allowed Values is Regular set then enters the loop and enter the set of values 
      else if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Regular set")
      {
        page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();
          
        if(Project.Variables.Create_New_FactType.Value("Data Type").includes("Date")||Project.Variables.Create_New_FactType.Value("Data Type") == 'Month & year')
        {
          //Select date
          page.FindElement(ORGeneric.PlaceholderAddValue).HoverMouse()
          const datePicker = ORGeneric.nameValue+"//*[@wj-part='btn']"
          page.FindElement(datePicker).Click()
          SelectingDateFromCalendar.CalendarSelection('No', '2018', 'May', '29');
          page.FindElement("//*[@aria-label='Add']").Click()
          Delay(1000);
            
        }
        else if(Project.Variables.Create_New_FactType.Value("Data Type").includes("Day")||Project.Variables.Create_New_FactType.Value("Data Type").includes("Month"))
        {
          Log.Message("Regular set loop'else if day  loop'")
          var str = Project.Variables.Create_New_FactType.Value("SetValues");
          var str_array = str.split(',');
          for(var i = 0; i < str_array.length; i++) 
            { 
              SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],'Yes');
              page.WaitElement(page.FindElement("//button[contains(@class,'add-btn')]"),5000)
              page.FindElement("//button[contains(@class,'add-btn')]").Click();
                           
            }
        
        }
        else
        { 
          //Log.Message("Regular Set Normal loop'else loop'")
          page.form.form2.form4.label.Click();
          var str = Project.Variables.Create_New_FactType.Value("SetValues");
          var str_array = str.split(',');
          for(var i = 0; i < str_array.length; i++) 
          { 
          
            page.form.form2.form4.textbox4.Click();
            page.form.form2.form4.textbox4.SetText(str_array[i]);
            Delay(2000)
     
            page.WaitElement(page.FindElement("//button[contains(@class,'add-btn')]"),5000)
            page.FindElement("//button[contains(@class,'add-btn')]").Click();
          }
        }
     
      }
      //If Allowed Values is Dynamic set then enters the loop and enter the set of values
      else if(Project.Variables.Create_New_FactType.Value("Allowed Values ") == "Dynamic set")
      {
        page.form.form2.form4.label.Click();
          
        if(Project.Variables.Create_New_FactType.Value("Data Type").includes("Date")||Project.Variables.Create_New_FactType.Value("Data Type") == 'Month & year')
        {
          //Select date
          page.FindElement(ORGeneric.PlaceholderAddValue).HoverMouse()
          const datePicker = ORGeneric.nameValue+"//*[@wj-part='btn']"
          page.FindElement(datePicker).Click()
          SelectingDateFromCalendar.CalendarSelection('No', '2018', 'May', '29');
            
          page.FindElement("//*[@aria-label='Add']").Click()
          Delay(1000);                     
        }
        else if(Project.Variables.Create_New_FactType.Value("Data Type").includes("Day")||Project.Variables.Create_New_FactType.Value("Data Type").includes("Month"))
        {
          Log.Message("Regular set loop'else if day  loop'")
          var str = Project.Variables.Create_New_FactType.Value("SetValues");
          var str_array = str.split(',');
          for(var i = 0; i < str_array.length; i++) 
          { 
            SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],'Yes');
            page.WaitElement(page.FindElement(ORGeneric.btnAdd),5000)
            page.FindElement(ORGeneric.btnAdd).Click();
                           
          }
        
        }  
      else
      {
        page.form.form2.form4.label.Click();
        var str = Project.Variables.Create_New_FactType.Value("SetValues");
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        { 
        
          page.form.form2.form4.textbox4.Click();
          page.form.form2.form4.textbox4.SetText(str_array[i]);
          
          page.WaitElement(page.FindElement("//button[contains(@class,'add-btn')]"),5000)
          page.FindElement("//button[contains(@class,'add-btn')]").Click();
          
        }
        
      }
      }
      
      //clicking on Ok button after entering the data in add new FT feild
      page.FindElement("//button[contains(text(), 'OK')]").ClickButton();
      
      //Validating new FactType Created
      let FactTypeDataToCompare=Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name+" "+"[V0]"+" ";
        
      Log.Message(FactTypeDataToCompare);
        
      page.WaitElement(page.FindElement("//body//tr[1]//td[1]//*[contains(text(),"+"'"+""+FactTypeDataToCompare+""+"'"+")]"),10000);
      let FactTypeNameAfterCreation= page.FindElement("//body//tr[1]//td[1]").textContent;
        
      Log.Message(FactTypeNameAfterCreation);
      
      if (FactTypeNameAfterCreation == FactTypeDataToCompare )
      {
        Log.Checkpoint("FactType Created Successfully with the name "+FactTypeNameAfterCreation);
      }
      
      else
      {
        Log.Error("FactType Name is not matching with the created FT Name data")
      }
      
      let NewFTStatus= page.FindElement("//body//tr[1]//td[3]").textContent;
      
      if (NewFTStatus == Project.Variables.Create_New_FactType.Value("Status"))
      {
      Log.Checkpoint("FactType Created Successfully with the Status "+NewFTStatus);
      }
      
      else
      {
        Log.Error("FactType Status is missing");
      }
    
      let UnusedFTCheck= page.FindElement("//body//tr[1]//td[8]").textContent;
      if (UnusedFTCheck == "Unused")
      {
        Log.Checkpoint("FactType Created Successfully & the FT is "+UnusedFTCheck);
      }
      
      else
      {
        Log.Error("Unused field for this FactType is Empty");
      }

      let errorIcon= page.FindElement("//body//tr[1]//td[6]//dcn-validation-state//div").getAttribute('class')
      Log.Message(errorIcon)
      if(errorIcon.includes('icon-validation_error')) 
      {

        Log.Checkpoint("Facttype is Invalid");
        page.FindElement("//tbody//tr[1]//td[1]//a").Click();
        
        let FTSummaryErrorMessage=page.form.form2.panel10.textContent;
        Log.Checkpoint("Facttype is not valid. Error: " +FTSummaryErrorMessage);
      
        let browser = Aliases.browser;
        let textbox = page.form;
        let textbox2 = textbox.form2;
        let textbox3 = textbox2.form3;
      
        aqObject.CheckProperty(textbox3.textboxName, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name);
        aqObject.CheckProperty(textbox3.textareaDescription, "value", cmpEqual, Project.Variables.Create_New_FactType.Value("Description"));
      
        textbox3 = textbox2.form4;
        aqObject.CheckProperty(textbox3.textbox, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Data Type") );
        aqObject.CheckProperty(textbox3.textbox2, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Display Format"));
        aqObject.CheckProperty(textbox3.textbox3, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Allowed Values "));
      
        textbox.buttonOk.ClickButton();
       
      }
      else 
      {
      
        Log.Checkpoint("FactType Is valid");
        let page = Aliases.browser.pageSapiensDecision;
        page.FindElement("//tbody//tr[1]//td[1]//a").Click();
      
        let textbox = page.form;
        let textbox2 = textbox.form2;
        let textbox3 = textbox2.form3;
      
        aqObject.CheckProperty(textbox3.textboxName, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("FactType Name")+" "+FactType_Name);
        aqObject.CheckProperty(textbox3.textareaDescription, "value", cmpEqual, Project.Variables.Create_New_FactType.Value("Description"));
      
        textbox3 = textbox2.form4;
        aqObject.CheckProperty(textbox3.textbox, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Data Type") );
        aqObject.CheckProperty(textbox3.textbox2, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Display Format"));
        aqObject.CheckProperty(textbox3.textbox3, "Text", cmpEqual, Project.Variables.Create_New_FactType.Value("Allowed Values "));
        
        textbox.buttonOk.ClickButton();
         
      }
    }
      
  
      //Open FactType and Verify the data and error if any
      aqTestCase.End();
      Project.Variables.Create_New_FactType.Next();

  }
}

    
  
