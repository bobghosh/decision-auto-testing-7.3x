var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
function Add_Custom_Properties_Single(AllowedValue, DataType,DisplayFormat, set_values, Required)
{     
  
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.FindElement("//span[contains(text(),'Custom Properties')]//ancestor::a/span[1]");
  if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
  {
      CustomPropertiesTab.click();
  }
  
  let flag = 0;
      
  //Log.Message(AllowedValue + DataType + DisplayFormat + set_values + Required); 
  
  Aliases.browser.pageSapiensDecision2.FindElement("//*[@class='custom-properties-details--add-btn']").Click();
  
  //aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.form5.textnodeAdd, "contentText", cmpEqual, "Add");
  
  var timestamp = new Date();
  var CustomProperty_Name = "CP_" + timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
      
  //Name Field
      Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']").SetText(CustomProperty_Name);
  
  if(Required == "Yes")
  {  
      //Required Checkbox
      Aliases.browser.pageSapiensDecision.FindElement("//*[@name='required']").Click();
  }
  
  //Date type Dropdown
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='dataType']//button").Click();
  SelectingOptionfromDropDown.SelectingOptionfromDropdown(DataType,"No")
  
  //Display Format DropDown
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='displayFormat']//button").Click();
  SelectingOptionfromDropDown.SelectingOptionfromDropdown(DisplayFormat,"No")
  //Select Dropdown
  
  //Allowed Value DropDown
  Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='allowedValues']//button").Click();
  SelectingOptionfromDropDown.SelectingOptionfromDropdown(AllowedValue,"No")
  //Select Dropdown
  
  
  //If Allowed Values is Range then enters the loop and enter the set of range values 
  if(AllowedValue == "Range")
  {
    Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
    
    if((DataType=="Date")||(DataType == "Month & year"))
    {
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='from']//*[@class='wj-glyph-down']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");      

      		Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='to']//*[@class='wj-glyph-down']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1998" , "Mar", "18"); 
          
          //Clicking on + icon
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();                      
                                
    }
    else if(DataType=="Date & time")
    {      
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='from']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");
          //Select on Clock icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='from']//*[@class='wj-glyph-clock']").Click();
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");

      		Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='to']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1998", "Jul", "27");       
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='to']//*[@class='wj-glyph-clock']").Click();                        
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:45 PM" , "No");
          
          //Clicking on + icon
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
  
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
            button.button5.ClickButton();        
          } 
          
        }else
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
              
            Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
                  
          }
    
        } 
          
      }
      //If Allowed Values is Regular set then enters the loop and enter the set of values 
      else if(AllowedValue == "Regular set")
      {
        //Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
        
        if((DataType=="Date")||(DataType == "Month & year"))
        {
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//*[@class='wj-glyph-down']").Click();		
          SelectingDateFromCalendar.CalendarSelection("No", "1998", "Jul", "27");
          
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();                                
        }
        else if(DataType=="Date & time")
        {      
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");
          //Select on Clock icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//*[@class='wj-glyph-clock']").Click();
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");

          //Clicking on + icon
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
  
        }
        else if((DataType =="Day")||(DataType =="Month"))
        {
          Log.Message("Regular set loop'else if day  loop'")
          var str_array = set_values.split(',');
          for(var i = 0; i < str_array.length; i++) 
          { 
            
            Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//button").Click();		
            SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],"No");
            Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
                           
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
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
          }
            
        }
        
      }
      //If Allowed Values is Dynamic set then enters the loop and enter the set of values
      else if(AllowedValue == "Dynamic set")
      {
        //Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
        
        if((DataType=="Date")||(DataType == "Month & year"))
        {
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//*[@class='wj-glyph-down']").Click();		
          SelectingDateFromCalendar.CalendarSelection("No", "1998", "Jul", "27");
          
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
                                
        }
        else if(DataType=="Date & time")
        {      
          //Select on Calender icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//*[@class='wj-glyph-calendar']").Click();		
      		SelectingDateFromCalendar.CalendarSelection("No", "1989" , "Mar", "8");
          //Select on Clock icon
          Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//*[@class='wj-glyph-clock']").Click();
          SelectingTimeFromDropDown.SelectingTimeFromDropdown("12:15 AM" , "No");

          //Clicking on + icon
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
  
        }
        else if((DataType =="Day")||(DataType =="Month"))
        {
          Log.Message("Regular set loop'else if day  loop'")
          var str_array = set_values.split(',');
          for(var i = 0; i < str_array.length; i++) 
          { 
            Aliases.browser.pageSapiensDecision.FindElement("//*[@ng-reflect-placeholder='Add a value']//button").Click();		
            SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],"No");
            Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();                           
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
              Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
           }
          }
        
      }
        
      Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
      
      //Verify the created Custom Property
      //Aliases.browser.pageSapiensDecision.FindElement("(//input[@placeholder='filter'])[2]").SetText(CustomProperty_Name);
      Delay(5000);
      CustomPropertiesCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
      Log.Message(CustomPropertiesCount.length);
      for(var j = 1; j <= CustomPropertiesCount.length ; j++)
      {
            var SelectedCustomProperty = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody//tr["+j+"]//td[1]//a");
            //Log.Message(SelectedCustomProperty.textContent);
            
            //If the Item Name matches 
            if(SelectedCustomProperty.textContent.trim() == CustomProperty_Name )
            {          
                  Log.Checkpoint("Custom Property matches");
                  
                  if (Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[2]").textContent.trim().toUpperCase() == DataType.toUpperCase())
                  {
                    Log.Checkpoint("Data Type matches");
                  }
                  else
                  {
                    Log.Error("Data Type is different");
                  }
                  
                  if (Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[3]").textContent.trim().toUpperCase() == DisplayFormat.toUpperCase())
                  {
                    Log.Checkpoint("Display Format matches");
                  }
                  else
                  {
                    Log.Error("Display Format is different");
                  }
                  
                  if (Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[4]").textContent.trim().toUpperCase().replace("_", " ") == AllowedValue.toUpperCase())
                  {
                    Log.Checkpoint("Allowed Value matches");
                  }
                  else
                  {
                    Log.Error("Allowed Value is different");
                  }
                  
                  if (Required == "Yes")
                  {
                    if(Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[5]").textContent.trim() == "Required")
                    {
                    Log.Checkpoint("Property is marked Required");
                    }
                    else
                    {
                      Log.Error("Property is marked Required but not shown in Custom Properties detail screen");
                    }
                  }
                  else
                  {
                    Log.Checkpoint("Required is not marked");
                  }
                  
                  //Verify the Custom Property Edit box
                  Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody//tr["+j+"]//td[1]//a").Click();
                  if (Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']").Text.trim().toUpperCase() == CustomProperty_Name.toUpperCase())
                  {
                    Log.Checkpoint("Custom Property name matches");
                  }
                  else
                  {
                    Log.Error("Custom Property name is different");
                  }
                  
                  if (Required == "Yes")
                  {
                    let RequiredCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='required']");
                    if(RequiredCheckbox.getAttribute("ng-reflect-model") == "true")
                    {
                      Log.Checkpoint("Required is Selected");
                    }
                    else
                    {
                      Log.Error("Required is not selected");
                    }
                  }
                  else
                  {
                    Log.Checkpoint("Required is not marked");
                  }  
                  
//                  if (Retired == "Yes")
//                  {
//                    let RetiredCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='retired']");
//                    if(RequiredCheckbox.getAttribute("ng-reflect-model") == "true")
//                    {
//                      Log.Checkpoint("Retired is Selected");
//                    }
//                    else
//                    {
//                      Log.Error("Retired is not selected");
//                    }
//                  }
//                  else
//                  {
//                    Log.Checkpoint("Retired is not marked");
//                  }
                  
                  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//*[@label='Data Type']//input"), "Text", cmpEqual, DataType );
      
                  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//*[@label='Display Format']//input"), "Text", cmpEqual, DisplayFormat);
      
                  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.FindElement("//*[@label='Allowed Values']//input"), "Text", cmpEqual, AllowedValue);
                                     
                  flag =1;  
             }
             if(flag == 1)
             {
                break;
             }
        }
        
        
        Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
        
        Project.Variables.Common_CP_MD = CustomProperty_Name;

        
        
}