var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
var Open_Custom_Property = require("Open_Custom_Property");
function Edit_Custom_Property_All(CP_Name, CP_Edit_Attribute_Value)
{
    
  let CustomPropertiesTab = Aliases.browser.pageSapiensDecision2.FindElement("//span[contains(text(),'Custom Properties')]//ancestor::a/span[1]");
  if(CustomPropertiesTab.getAttribute("class").includes("pi-chevron-right"))
  {
      CustomPropertiesTab.click();
  }
  
//  let CP_Name = "Test";
//  let CP_Edit_Attribute_Value = "Name-Varsha,DataType-Amount,DisplayFormat-Currency USD,Required-Yes,Retired-Yes";
  Open_Custom_Property.Open_Custom_Property(CP_Name); 
  
  Delay(1000);
  
  let EditValue= CP_Edit_Attribute_Value;
  let CP_arr= EditValue.split(',')     
  Log.Message(CP_arr.length)
  
  
  for(var i = 0; i < CP_arr.length ; i++) 
  {
    var CP_data = CP_arr[i].split('-');          
    var FieldName = CP_data[0].trim();
    var EditedValue = CP_data[1];
    //var Condition = CP_data[2];
    Log.Message("--"+FieldName)
    Log.Message("--"+EditedValue)
    
    if (FieldName == "Name")
    {
      let CPName = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']");
      CPName.SetText(EditedValue);                                  
    }
    
    if(FieldName == "Required")
    {
       RequiredCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='required']//span");  
       Log.Message(RequiredCheckbox.getAttribute("class"));
       if(EditedValue == "Yes")
       {      
         if(RequiredCheckbox.getAttribute("class").includes("pi pi-check"))
         {
           Log.Checkpoint("Required is Selected");
         }
         else
         {
           Aliases.browser.pageSapiensDecision.FindElement("//*[@name='required']//div[2]").Click();
           Log.Checkpoint("Required is Selected");
         }
       }
       else
       {
         if(RequiredCheckbox.getAttribute("class").includes("pi pi-check"))
         {           
           Aliases.browser.pageSapiensDecision.FindElement("//*[@name='required']//div[2]").Click();
           Log.Checkpoint("Required is unselected");
         }
         else
         {           
           Log.Checkpoint("Required is unselected");
         }         
       }
    }
    
    if(FieldName == "Retired")
    {
       RetiredCheckbox = Aliases.browser.pageSapiensDecision.FindElement("//*[@name='retired']//span");
       if(EditedValue == "Yes")
       {      
         if(RetiredCheckbox.getAttribute("class").includes("pi pi-check"))
         {
           Log.Checkpoint("Retired is Selected");
         }
         else
         {
           Aliases.browser.pageSapiensDecision.FindElement("//*[@name='retired']//div[2]").Click();
           Log.Checkpoint("Retired is Selected");
         }
       }
       else
       {
         if(RetiredCheckbox.getAttribute("class").includes("pi pi-check"))
         {
           Aliases.browser.pageSapiensDecision.FindElement("//*[@name='retired']//div[2]").Click();
           Log.Checkpoint("Retired is not Selected");
         }
         else
         {           
           Log.Checkpoint("Retired is not Selected");
         }
         
       }
    }
    
    if(FieldName == "DataType")
    {
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='dataType']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(EditedValue,"No")
    }
    
    if(FieldName == "DisplayFormat")
    {
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='displayFormat']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(EditedValue,"No")
    }
    
    if(FieldName == "AllowedValue")
    {
      Aliases.browser.pageSapiensDecision.FindElement("//dcn-combo-box[@name='allowedValues']//button").Click();
      SelectingOptionfromDropDown.SelectingOptionfromDropdown(EditedValue,"No")
    }
    
  }
  
  let CustomPropertyName = Aliases.browser.pageSapiensDecision.FindElement("//div[@class='spec-body mat-dialog-content']//*[@name='name']").Text;
  Log.Message(CustomPropertyName);
  
  Project.Variables.Common_CP_MD = CustomPropertyName;   
  
  Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
  
  Aliases.browser.pageSapiensDecision.FindElement("(//input[@placeholder='filter'])[3]").SetText(CustomPropertyName);
        
  Delay(2000);
  
  CustomPropertiesCount = Aliases.browser.pageSapiensDecision.FindElements("//dcn-custom-properties-details//tbody//tr");
  Log.Message(CustomPropertiesCount.length);
  
  for(var j = 1; j <= CustomPropertiesCount.length ; j++)
  {
    
    var SelectedCustomProperty = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[1]").textContent.trim();
    
    if(SelectedCustomProperty == CustomPropertyName)
    {
      Log.Checkpoint("Fact Type Name is Selected");
      let EditedValue= CP_Edit_Attribute_Value;
      let CP_array= EditedValue.split(',')     
      Log.Message(CP_array.length);
      
      for(var k = 0; k < CP_array.length ; k++) 
      { 
        var EditedCP_data = CP_array[k].split('-');          
        var EditedFieldName = EditedCP_data[0].trim();
        var EditedUpdatedValue = EditedCP_data[1];
        //var EditedCondition = EditedCP_data[2];
      
        if(EditedFieldName == "Name")
        {
          if(SelectedCustomProperty == EditedUpdatedValue)
          {
            Log.Checkpoint("Custom Property Name is updated");
          }
          else
          {
            Log.Error("Custom Property name is not updated");
          }
        }        
        
        if(EditedFieldName == "DataType")
        {
          let DataType = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[2]");
          Log.Message(DataType.textContent.trim().toUpperCase())
          Log.Message(EditedUpdatedValue.toUpperCase())
          if(DataType.textContent.trim().toUpperCase() == EditedUpdatedValue.toUpperCase())
          {
            Log.Checkpoint("Data Type is updated");
          }
          else
          {
            Log.Error("Data Type is not updated");
          }
        } 
        
        if(EditedFieldName == "DisplayFormat")
        {
          let DisplayFormat = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[3]");
                  
          Log.Message(DisplayFormat.textContent.trim().toUpperCase())
          Log.Message(EditedUpdatedValue.toUpperCase())
          if(DisplayFormat.textContent.trim().toUpperCase() == EditedUpdatedValue.toUpperCase())
          {
            Log.Checkpoint("Display Format is updated");
          }
          else
          {
            Log.Error("Display Format is not updated");
          }
        }
             
        if(EditedFieldName == "AllowedValue")
        {
          let AllowedValue = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[4]");
          
          Log.Message(AllowedValue.textContent.trim().toUpperCase())
          Log.Message(EditedUpdatedValue.toUpperCase()) 
            
          if(AllowedValue.textContent.trim().toUpperCase() == EditedUpdatedValue.toUpperCase())
          {
            Log.Checkpoint("Allowed Value is updated");
          }
          else
          {
            Log.Error("Allowed Value is not updated");
          }
        }
        
        
        if(EditedFieldName == "Required" && EditedUpdatedValue == "Yes")
        {
          let RequiredValue = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[5]");
          Log.Message(RequiredValue.textContent.trim().toUpperCase())
          if(RequiredValue.textContent.trim().toUpperCase() == "REQUIRED")
          {
            Log.Checkpoint("Required is Marked");
          }
          else
          {
            Log.Error("Required is not Marked");
          }
        
        }
        else if(EditedFieldName == "Required" && EditedUpdatedValue == "No")
        {
          let RequiredValue = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[5]");
          Log.Message(RequiredValue.textContent.trim().toUpperCase())
          if(RequiredValue.textContent.trim().toUpperCase() == "REQUIRED")
          {
            Log.Error("Required is not unmarked");
          }
          else
          {
            Log.Checkpoint("Required is Unmarked");
          }
        }
                
        if(EditedFieldName == "Retired" && EditedUpdatedValue == "Yes")
        {
          let RetiredValue = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[6]");
          Log.Message(RetiredValue.textContent.trim().toUpperCase())
          
          if(RetiredValue.textContent.trim().toUpperCase() == "RETIRED")
          {
            Log.Checkpoint("Retired is Marked");
          }
          else
          {
            Log.Error("Retired is not Marked");
          }
        
        }
        else if(EditedFieldName == "Retired" && EditedUpdatedValue == "No")
        {
          let RetiredValue = Aliases.browser.pageSapiensDecision.FindElement("//dcn-custom-properties-details//tbody/tr["+j+"]/td[6]");
          Log.Message(RetiredValue.textContent.trim().toUpperCase())
          if(RetiredValue.textContent.trim().toUpperCase() == "RETIRED")
          {
            Log.Error("Retired is not unmarked");
          }
          else
          {
            Log.Checkpoint("Retired is Unmarked"); 
          }
        }
    
      }      
    
    }     
    
  }  
}
