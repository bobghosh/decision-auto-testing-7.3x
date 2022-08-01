//USEUNIT RefLibrary
var Buttons_Actions = require("Buttons_Actions");
var SelectingOptionfromDropDown= require("SelectingOptionfromDropDown_Role");
var Picture_To_Log = require("Picture_To_Log");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");

function Tasks_Edit_FactType(Name,Description,ListIndicator,Datatype,DisplayFormat,AllowedValue,Status,SetValues)
{
  
  let page = Aliases.browser.pageSapiensDecision
  var timestamp = new Date();
  var FactType_Name = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
  
  aqObject.CheckProperty(page.FindElement("//fact-type-form"+ORGeneric.dcnLaundryLine+"/div/span"), "contentText", cmpEqual, Status);

  if(Name != null && Name != "")
  {
    page.FindElement(ORGeneric.ftName).Click();
    page.FindElement(ORGeneric.ftName).SetText(Name+" "+FactType_Name);      
    aqObject.CheckProperty(page.FindElement(ORGeneric.dcnDialog+"/div/div"), "contentText", cmpEqual, "Fact Type Summary:"+" "+Name+" "+FactType_Name+" "+'[V1.0]');
  
  }
      
  if(Description != null && Description != "")
  {
    page.FindElement(ORGeneric.Decription).Click();
    page.FindElement(ORGeneric.Decription).Keys(Description);
      
  }
      
  if(ListIndicator != null && ListIndicator != "")
  { 
      
  //Checks the input if user wants to select Single Input or Multiple Input Enters the loops if its Single Value.
  if(ListIndicator == "Single Value")
  {
     page.FindElement(ORGeneric.lblSingleValue).Click();
  }
  //Checks the input if user wants to select Single or Multiple List Indicator Enters the loops if its Multiple Value.
  else 
  {
    page.FindElement(ORGeneric.lblMultipleValue).Click();
  }
    
  }
      
  if(Datatype != null && Datatype != "")
  { 
    page.FindElement(ORGeneric.ftDataType+"//button").Click();
    SelectingOptionfromDropDown.SelectingOptionfromDropdown(Datatype,"No")
    aqUtils.Delay(1500)  
  }
  if(DisplayFormat != null && DisplayFormat != "")
  { 
    page.FindElement(ORGeneric.ftDisplayFormat+"//button").Click();
    SelectingOptionfromDropDown.SelectingOptionfromDropdown(DisplayFormat,"No")
  }
      
  if(AllowedValue != null && AllowedValue != "")
  { 
    page.FindElement(ORGeneric.ftAllowedValues+"//button").Click();
    SelectingOptionfromDropDown.SelectingOptionfromDropdown(AllowedValue,"No")
    aqUtils.Delay(1000)
  }
    

  //If Allowed Values is Range then enters the loop and enter the set of range values 
  if(AllowedValue == "Range")
  {
    page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();
    //not implemented as there is an issue which blocks to create this scenario
    if(Datatype =="Date")
    {
      SelectingDateFromCalendar.CalendarSelection();
                                
    }
    else if(Datatype.includes('Day')||Datatype.includes('Month'))
    {
      Log.Message("Range set loop'else if day  loop'")
      page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();
      var str = SetValues;
      var setValues = str.split(',');     
      for(var i = 0; i < setValues.length ; i++) 
      { 
        var rangeData = setValues[i].split('-');
        var fromData=rangeData[0];
        var toData=rangeData[1];
        Log.Message("fromdata is"+fromData)
        Log.Message("to data is"+toData)    
        page.FindElement(ORGeneric.dcnPlaceholderFrom+"//button").Click()
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(fromData,"No");
        page.FindElement(ORGeneric.dcnPlaceholderTo+"//button").Click()
        SelectingOptionfromDropDown.SelectingOptionfromDropdown(toData,"No");
        page.FindElement("//button[contains(@class, 'spec-add-button')]").ClickButton();      
                                
      }
        
      }
    else
    {
      page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();

      var str = SetValues;
      var setValues = str.split(',');     
      for(var i = 0; i < setValues.length ; i++) 
      { 
        var rangeData = setValues[i].split('-');
        var fromData=rangeData[0];
        var toData=rangeData[1];          
     
        page.FindElement(ORGeneric.PlaceholderFrom).Click()
        page.FindElement(ORGeneric.PlaceholderFrom).SetText(fromData);
              
        page.FindElement(ORGeneric.PlaceholderTo).Click()
        page.FindElement(ORGeneric.PlaceholderTo).SetText(toData);
        page.FindElement("//button[contains(@class, 'spec-add-button')]").ClickButton();
    
      }
    }
          
    }
    //If Allowed Values is Regular set then enters the loop and enter the set of values 
    else if(AllowedValue == "Regular set")
    {
      page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();
      if(Datatype =="Date")
      {
        SelectingDateFromCalendar.CalendarSelection();
                                
      }
      else if(Datatype.includes("Day")||Datatype.includes("Month"))
      {
        Log.Message("Regular set loop'else if day  loop'")
        var str = SetValues;
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        { 
          SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],'Yes');
          page.FindElement("//button[contains(@class, 'spec-add-button')]").ClickButton();
        }
        
      }
      else
      { 
        page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();
        var str = SetValues;
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        {
          page.FindElement(ORGeneric.PlaceholderAddValue).Click()
          page.FindElement(ORGeneric.PlaceholderAddValue).SetText(str_array[i]);
          page.FindElement("//button[contains(@class, 'spec-add-button')]").ClickButton();
        }
    }
     
    }
    //If Allowed Values is Dynamic set then enters the loop and enter the set of values
    else if(AllowedValue == "Dynamic set")
    {
      page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();
      if(Datatype =="Date")
      {
        SelectingDateFromCalendar.CalendarSelection();
                                
      }
      else if(Datatype.includes("Day")||Datatype.includes("Month"))
      {
        Log.Message("Regular set loop'else if day  loop'")
        var str = SetValues;
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        { 
          SelectingOptionfromDropDown.SelectingOptionfromDropdown(str_array[i],'Yes');
          page.FindElement("//button[contains(@class, 'spec-add-button')]").ClickButton();
                           
        }
      }  
      else
      {
        page.FindElement("//label[contains(text(), 'Allowed Values')]").Click();
        var str = SetValues;
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        {
          page.FindElement(ORGeneric.PlaceholderAddValue).Click()
          page.FindElement(ORGeneric.PlaceholderAddValue).SetText(str_array[i]);
          page.FindElement("//button[contains(@class, 'spec-add-button')]").ClickButton();          
        }
        
      }
    }
    //clicking on Ok button after entering the data in add new FT feild
   page.buttonOk.ClickButton();
}