//var SelectingOptionfromDropDown= require("SelectingOptionfromDropDown_Only1DDexsists");
var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
var Picture_To_Log = require("Picture_To_Log");

  var SelectingDateFromCalendar = require("SelectingDateFromCalendar");


  function Tasks_Create_New_FactType_single(Name,Description,ListIndicator,Datatype,DisplayFormat,AllowedValue,Status,SetValues)
  {

      var timestamp = new Date();
      var FactType_Name = timestamp.getMilliseconds().toString() + timestamp.getHours().toString() + timestamp.getMinutes().toString();
         
      Aliases.browser.pageSapiensDecision.buttonAddFactType.ClickButton();
    
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.textnodeFactTypeSummarySd, "contentText", cmpEqual, "Fact Type Summary:");
    
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.textnodeDraft2, "contentText", cmpEqual, Status);
    
      Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
    
      Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(Name+" "+FactType_Name);
      //Delay(2000);
      Project.Variables.NewFactTypeName = Name+" "+FactType_Name
      
      aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.panel5, "contentText", cmpEqual, "Fact Type Summary:"+" "+Name+" "+FactType_Name);
      Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Click();
    
      Aliases.browser.pageSapiensDecision.form.form2.form3.textareaDescription.Keys(Description);
   
      //Checks the input if user wants to select Single Input or Multiple Input Enters the loops if its Single Value.
      if(ListIndicator == "Single Value")
      {
      Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeSingleValue.Click();
      }
      //Checks the input if user wants to select Single or Multiple List Indicator Enters the loops if its Multiple Value.
      else 
      {
        Aliases.browser.pageSapiensDecision.form.form2.form3.textnodeMultipleValues.Click();
      }
    
     
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='dataType']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(Datatype,"No")

      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='displayFormat']//button").Click();
      
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(DisplayFormat,"No")
      
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='allowedValues']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(AllowedValue,"No")
      
    

      //If Allowed Values is Range then enters the loop and enter the set of range values 
      if(AllowedValue == "Range")
        {
            Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          //not implemented as there is an issue which blocks to create this scenario
          if(Datatype =="Date")
          {
            SelectingDateFromCalendar.CalendarSelection();
                                
          }
          else if(Datatype.includes('Day')||Datatype.includes('Month'))
          {
            Log.Message("Range set loop'else if day  loop'")
            Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
            // Delay(1000);
            var str = SetValues;
            var setValues = str.split(',');     
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
                //button.button10.ClickButton();
                SelectingOptionfromDropDown.SelectingOptionfromDropdown(fromData,"No");
                page = browser.pageSapiensDecision2;
                page.FindElement("//dcn-domain-input[@placeholder='to']//button").Click()
               //page.formF.form2.button3.ClickButton();
                SelectingOptionfromDropDown.SelectingOptionfromDropdown(toData,"No");
                button.button5.ClickButton();      
                                
            }
        
          }
        else
        {
          Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          // Delay(1000);
          var str = SetValues;
          var setValues = str.split(',');     
            for(var i = 0; i < setValues.length ; i++) 
            { 
              var rangeData = setValues[i].split('-');
              var fromData=rangeData[0];
              var toData=rangeData[1];          
     
              Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
              
              //Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").Click();
              
              Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(fromData);
              
              // Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='from']").SetText(fromData);
              Aliases.browser.pageSapiensDecision.form.form2.form4.textbox5.Click();
     
              Aliases.browser.pageSapiensDecision.form.form2.form4.textbox5.SetText(toData);
  
               //Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").Click();
     
               //Aliases.browser.pageSapiensDecision.FindElement("//input[@placeholder='to']").SetText(toData);
      
              Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
              
              //Aliases.browser.pageSapiensDecision.FindElement("//dcn-range-list-editor/div/button") .ClickButton();
              
            }
        }
          
        }
        //If Allowed Values is Regular set then enters the loop and enter the set of values 
        else if(AllowedValue == "Regular set")
        {
          Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          
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
                 Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
                           
              }
        
          }
          else
          { 
            //Log.Message("Regular Set Normal loop'else loop'")
        Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
       // Delay(2000);
        var str = SetValues;
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        { 
          
        Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
      
        Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(str_array[i]);
     
        Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
        }
        }
     
        }
        //If Allowed Values is Dynamic set then enters the loop and enter the set of values
        else if(AllowedValue == "Dynamic set")
        {
        Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
          
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
                 Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
                           
              }
        
          }  
        else
        {
           Aliases.browser.pageSapiensDecision.form.form2.form4.label.Click();
       // Delay(2000)
        
        //Split the input data using comma's
        var str = SetValues;
        var str_array = str.split(',');
        for(var i = 0; i < str_array.length; i++) 
        { 
        
          Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.Click();
          
          Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4.SetText(str_array[i]);
          
          Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
          
        }
        
        }
        }
        //clicking on Ok button after entering the data in add new FT feild
          Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
      
        //Validating new FactType Created
        let FactTypeDataToCompare= Name+" "+FactType_Name+" "+"[V0]"+" ";
        
        Log.Message(FactTypeDataToCompare);
        
        //Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]").WaitElement(FactTypeDataToCompare,4000);
        
        Aliases.browser.pageSapiensDecision.WaitElement( Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]//*[contains(text(),"+"'"+""+FactTypeDataToCompare+""+"'"+")]"),10000);
        let FactTypeNameAfterCreation= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[1]").textContent;
        
        Log.Message(FactTypeNameAfterCreation);
        
     
        if (FactTypeNameAfterCreation == FactTypeDataToCompare )
        {
         
        Log.Checkpoint("FactType Created Successfully with the name "+FactTypeNameAfterCreation);
        }
      
        else
        {
          Log.Error("FactType Name is not matching with the created FT Name data")
        }
      
        let NewFTStatus= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[3]").textContent;
      
        if (NewFTStatus == Status)
        {
        Log.Checkpoint("FactType Created Successfully with the Status "+NewFTStatus);
        }
      
        else
        {
          Log.Error("FactType Status is missing");
        }
    
        let UnusedFTCheck= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[8]").textContent;
      
        if (UnusedFTCheck == "Unused")
        {
        Log.Checkpoint("FactType Created Successfully & the FT is Unused "+UnusedFTCheck);
        }
      
        else
        {
          Log.Error("Unused field for this FactType is Empty");
        }
        //Delay(2000)
        let errorIcon= Aliases.browser.pageSapiensDecision.FindElement("//body//tr[1]//td[6]//dcn-validation-state//div").getAttribute('class')
        Log.Message(errorIcon)
        if(errorIcon.includes('icon-validation_error')) 
        {

        Log.Checkpoint("Facttype is Invalid");
      
        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[1]").Click();
        
        let FTSummaryErrorMessage=Aliases.browser.pageSapiensDecision.form.form2.panel10.textContent;
       
        Log.Checkpoint("Facttype is not valid. Error: " +FTSummaryErrorMessage);
      
        let browser = Aliases.browser;
        let page = browser.pageSapiensDecision;
        let textbox = page.form;
        let textbox2 = textbox.form2;
        let textbox3 = textbox2.form3;
      
        aqObject.CheckProperty(textbox3.textboxName, "Text", cmpEqual, Name+" "+FactType_Name);
      
        aqObject.CheckProperty(textbox3.textareaDescription, "value", cmpEqual, Description);
      
        textbox3 = textbox2.form4;
        aqObject.CheckProperty(textbox3.textbox, "Text", cmpEqual, Datatype );
      
        aqObject.CheckProperty(textbox3.textbox2, "Text", cmpEqual, DisplayFormat);
      
        aqObject.CheckProperty(textbox3.textbox3, "Text", cmpEqual, AllowedValue );
      
        //textbox.buttonCancel.ClickButton();
    
        textbox.buttonOk.ClickButton();
       
        }
        else 
        {
      
        Log.Checkpoint("FactType Is valid");
      
        Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[1]").Click();
      
        let browser = Aliases.browser;
        let page = browser.pageSapiensDecision;
        let textbox = page.form;
        let textbox2 = textbox.form2;
        let textbox3 = textbox2.form3;
      
        aqObject.CheckProperty(textbox3.textboxName, "Text", cmpEqual, Name+" "+FactType_Name);
      
        aqObject.CheckProperty(textbox3.textareaDescription, "value", cmpEqual, Description);
      
        textbox3 = textbox2.form4;
      
        aqObject.CheckProperty(textbox3.textbox, "Text", cmpEqual, Datatype );
      
      
        aqObject.CheckProperty(textbox3.textbox2, "Text", cmpEqual, DisplayFormat);
      
        aqObject.CheckProperty(textbox3.textbox3, "Text", cmpEqual, AllowedValue);
        
        //textbox.buttonCancel.ClickButton();
    
        textbox.buttonOk.ClickButton();
         
        }
        

    }

    
  
