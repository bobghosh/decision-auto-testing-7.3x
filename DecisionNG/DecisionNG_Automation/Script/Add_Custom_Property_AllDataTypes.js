var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");

function Add_Custom_Property()
{ 
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.FindElement("//span[contains(text(),'Custom Properties')]//ancestor::a/span[1]");
  if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
  {
      CustomPropertiesTab.click();
  }
  
  Project.Variables.MD_CustomProperty.Reset();
  
  // Ceate New FactType using Add FT button
  for(; !Project.Variables.MD_CustomProperty.IsEOF();)
  {
    if(Project.Variables.MD_CustomProperty.Value("Flag")=="Yes")
    {
      aqTestCase.Begin(Project.Variables.MD_CustomProperty.Value("RowID") + " " +Project.Variables.MD_CustomProperty.Value("TestCase Name"));
      
      let AllowedValue = Project.Variables.MD_CustomProperty.Value("Allowed Values");
      let DataType = Project.Variables.MD_CustomProperty.Value("Data Type");
      let DisplayFormat = Project.Variables.MD_CustomProperty.Value("Display Format");
      let set_values = Project.Variables.MD_CustomProperty.Value("SetValues");
      let Required = Project.Variables.MD_CustomProperty.Value("Required Check Box");
      
      Log.Message(AllowedValue + DataType + DisplayFormat + set_values + Required);
      
      var timestamp = new Date();
      var CustomProperty_Name = "CP " + timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
      
      //Click on Add button
      Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='custom-properties-details--add-btn']").Click();
      
      //aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.textnode11_new.textnodeDelete, "contentText", cmpEqual, "Add");
      
      //Name Field
      Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']").SetText(CustomProperty_Name);
      
      //Required Checkbox
      if(Required == "Yes")
      {  
          Aliases.browser.pageSapiensDecision2.form4.panel9.Click();
      }
      
      //Date type Dropdown
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='dataType']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(DataType,"No");
  
      //Display Format DropDown
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='displayFormat']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(DisplayFormat,"No");
  
      //Allowed Value DropDown
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='allowedValues']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(AllowedValue,"No");
      
      //If Allowed Values is Range then enters the loop and enter the set of range values 
      if(AllowedValue == "Range")
      {
        //Just to make sure Set values are reflected
        Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
        
        if((DataType=="Date")||(DataType == "Month & year"))
        {      
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='from']//*[@class='wj-glyph-down']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");      

      		Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='to']//*[@class='wj-glyph-down']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1998" , "Mar", "18"); 
          
          //Clicking on + icon
//          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
            Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='u-flex-container spec-add-button add-btn']").ClickButton();
                                                     
        }
        
        else if(DataType=="Date & time")
        {      
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='from']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");
          //Select on Clock icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='from']//*[@class='wj-glyph-clock']").Click();
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");

      		Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='to']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1998", "Jul", "27");       
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='to']//*[@class='wj-glyph-clock']").Click();                        
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:45 PM" , "No");
          
          //Clicking on + icon
//          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
          Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='u-flex-container spec-add-button add-btn']").ClickButton();
               
        }
        else if((DataType =="Day")||(DataType =="Month"))
        {
          Log.Message("Range set loop'else if day  loop'")
          var setValues = set_values.split(',');
          for(var i = 0; i < setValues.length ; i++) 
          {
            var rangeData = setValues[i].split('-');
            var fromData=rangeData[0];
            var toData=rangeData[1];
            Log.Message("fromdata is"+fromData)
            Log.Message("to data is"+toData)    
        
            let browser = Aliases.browser;
            let page = browser.pageSapiensDecision;
            let button = page.form.form2.form4;
            page.FindElement("//dcn-domain-input[@placeholder='from']//button").Click()
            SelectingOptionfromDropDown.SelectingOptionfromDropdown(fromData,"No");
        
            page = browser.pageSapiensDecision2;
            page.FindElement("//dcn-domain-input[@placeholder='to']//button").Click()
            SelectingOptionfromDropDown.SelectingOptionfromDropdown(toData,"No");
//            button.button5.ClickButton();   
            Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='u-flex-container spec-add-button add-btn']").ClickButton();
                    
          } 
          
        }
        else
        {
          var setValues = set_values.split(',');     
          for(var i = 0; i < setValues.length ; i++) 
          {
          
            var rangeData = setValues[i].split('-');
            var fromData=rangeData[0];
            var toData=rangeData[1];
            Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").Click();
            Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").SetText(fromData);
              
            Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").Click();
            Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").SetText(toData);
              
            Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='u-flex-container spec-add-button add-btn']").ClickButton();
                  
          }
    
        } 
          
      }
      //If Allowed Values is Regular set then enters the loop and enter the set of values 
      else if(AllowedValue == "Regular set")
      {
        //Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
        
        if((DataType=="Date")||(DataType == "Month & year"))
        {
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//*[@class='wj-glyph-down']").Click();		
          SelectingDateFromCalendar.CalendarSelection("No", "1998", "Jul", "27");
          
//          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
          Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='add-btn spec-add-button']").ClickButton();
                                                 
        }
        else if(DataType=="Date & time")
        {      
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");
          //Select on Clock icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//*[@class='wj-glyph-clock']").Click();
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");

          //Clicking on + icon
         Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='add-btn spec-add-button']").ClickButton();
                     
  
        }
        else if((DataType =="Day")||(DataType =="Month"))
        {
          Log.Message("Regular set loop'else if day  loop'")
          var str_array = set_values.split(',');
          for(var i = 0; i < str_array.length; i++) 
          { 
            
            Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//button").Click();		
            SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],"No");
//            Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
            Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='add-btn spec-add-button']").ClickButton();
               
                           
          }
        
        }
        else
        {
          Log.Message("Regular Set Normal loop'else loop'")
          //Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          var str_array = set_values.split(',');
          for(var i = 0; i < str_array.length; i++) 
          { 
          
          let AddValue = Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='Add a value']");		
          AddValue.Click();
          AddValue.SetText(str_array[i]);     
//          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
            Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='add-btn spec-add-button']").ClickButton();
               
          }
            
        }
        
      }
      //If Allowed Values is Dynamic set then enters the loop and enter the set of values
      else if(AllowedValue == "Dynamic set")
      {
        //Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
        
        if((DataType=="Date")||(DataType == "Month & year"))
        {
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//*[@class='wj-glyph-down']").Click();		
          SelectingDateFromCalendar.CalendarSelection("No", "1998", "Jul", "27");
          
//          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
          Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='add-btn spec-add-button']").ClickButton();
                                    
        }
        else if(DataType=="Date & time")
        {      
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");
          //Select on Clock icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//*[@class='wj-glyph-clock']").Click();
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");

          //Clicking on + icon
//          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
          Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='u-flex-container spec-add-button add-btn']").ClickButton();
                  
        }
        else if((DataType =="Day")||(DataType =="Month"))
        {
          Log.Message("Regular set loop'else if day  loop'")
          var str_array = set_values.split(',');
          for(var i = 0; i < str_array.length; i++) 
          { 
            Aliases.browser.pageSapiensDecision.FindElement("//*[@placeholder='Add a value']//button").Click();		
            SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],"No");
//            Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton(); 
            Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='add-btn spec-add-button']").ClickButton();
                                            
          }        
    
         }
         else
         {  
           Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
           var str_array = set_values.split(',');
           for(var i = 0; i < str_array.length; i++) 
           {
              let AddValue = Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='Add a value']");		
              AddValue.Click();
              AddValue.SetText(str_array[i]);         
//              Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
              Aliases.browser.pageSapiensDecision.FindElement("//dcn-dialog//button[@class='add-btn spec-add-button']").ClickButton();
                
           }
          }
        
      }
        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();      
    }
    
    aqTestCase.End();    
    Project.Variables.MD_CustomProperty.Next();
    
  }
  
}
    