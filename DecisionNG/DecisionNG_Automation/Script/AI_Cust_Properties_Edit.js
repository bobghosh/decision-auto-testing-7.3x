var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Role");
var SelectingDateFromCalendar = require("SelectingDateFromCalendar");
var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
//var SelectingOptionfromDropDown = require("SelectingOptionfromDropDown_Only1DDexsists");
function AI_Edit_Custom_Property(CP_name_DT_AV_InputValue)
{
   var page=Aliases.browser.pageSapiensDecision2
  let CustompropertyExist=Aliases.browser.pageSapiensDecision.FindElement("//dcn-additional-info-custom-property-tab//div//div//div").Child(0).getAttribute("class")
  //Log.Message(CustompropertyExist);
  
  if(!CustompropertyExist.includes('no-data spec-no-assets'))
  {
    let CustomProperty_count;
    let CP= CP_name_DT_AV_InputValue
    let CP_arr= CP.split(',') 
        
        //Log.Message(CP_arr.length);
        
        for(var i = 0; i < CP_arr.length ; i++) 
        { 
         
          var CP_data = CP_arr[i].split('-');
          var cust_Property=CP_data[0].trim();
          var cust_Property_Datatype=CP_data[1];
          var cust_Property_AllowedValue=CP_data[2]
          var cust_property_Input=CP_data[3];

          CustomProperty_count= page.FindElements("//dcn-additional-info-custom-property-tab//fx-field//label");

          for(let j=0; j<CustomProperty_count.length; j++)
          {
            
            let CP_App_data= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//label").textContent.trim();
          
            if(CP_App_data == cust_Property)       
            {
              switch(cust_Property_AllowedValue)
              {
              case "Regular Set":{
                                      let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                      let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                      Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);
                                        
                                      if(CP_textbox.Enabled==true)
                                      {
                                          let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                          dropDownbtn.click();
                                          SelectingOptionfromDropDown.SelectingOptionfromDropdown(cust_property_Input,"No");
                                          
                                          let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                          Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                          if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                             {
                                               Log.Error("Custom Property is not updated or the input is same as existing")
                                             }
                                             else
                                             {
                   
                                               Log.Checkpoint("Custom Property is updated successfully");
                                             }                                         
                                          break;
                        
                                      }
                                      else
                                      {
                                          Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                          break;
                                      }
                                      break;
                                  }
                                  
            case "Dynamic Set": {
                                      let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                      let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                      Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);
                                      
                                      if(CP_textbox.Enabled==true)
                                      {
                                          let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                          dropDownbtn.click();
                                          SelectingOptionfromDropDown.SelectingOptionfromDropdown(cust_property_Input,"No");
                                          
                                          let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                          Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                          if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                             {
                                               Log.Error("Custom Property is not updated or the input is same as existing")
                                             }
                                             else
                                             {
                   
                                               Log.Checkpoint("Custom Property is updated successfully");
                                             }      
                                          break;
                        
                                      }
                                      else
                                      {
                                          Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                          break;
                                      }
                                      break;
                                 }
                                 
                                           
            case "Range":         switch (cust_Property_Datatype)
                                  {
                                    case "Date":
                                          {   
                                              let CalendarValues=cust_property_Input.split("/");
                                              let Date=CalendarValues[0];
                                              let Month=CalendarValues[1];
                                              let Year=CalendarValues[2]
                                              let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                              let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                              Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);
                                              if(CP_textbox.Enabled==true)
                                              {
                                                  let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                                  dropDownbtn.click();
                                                  SelectingDateFromCalendar.CalendarSelection("No",Year,Month,Date);
                                                  let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                                  break;
                        
                                              }
                                              else
                                              {
                                                  Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                                  break;
                                              }
                                          
                                            break;
                                          }
                                  
                                      
                                  
                                    case "Date Time":
                                          {
                                              let CalendarValues=cust_property_Input.split("/");
                                              let Date=CalendarValues[0];
                                              let Month=CalendarValues[1];
                                              let Year=CalendarValues[2];
                                              let Time=CalendarValues[3];
                                              let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                              let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                              Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);  
                                              
                                              if(CP_textbox.Enabled==true)
                                              {
                                                  let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                                  dropDownbtn.click();
                                                  SelectingDateFromCalendar.CalendarSelection("No",Year,Month,Date);
                                                  SelectingTimeFromDropDown.SelectingTimeFromDropdown(Time,"Yes");
                                                  let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                                  break;
                        
                                              }
                                              else
                                              {
                                                  Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                                  break;
                                              }
                                              
                                            break;
                                          }
                                          
                                    case "Month Year":
                                          {
                                              let CalendarValues=cust_property_Input.split("/");
                                              let Date=CalendarValues[0];
                                              let Month=CalendarValues[1];
                                              let Year=CalendarValues[2]
                                              let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                              let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                              Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);
                                                
                                              if(CP_textbox.Enabled==true)
                                              {
                                                  let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                                  dropDownbtn.click();
                                                  SelectingDateFromCalendar.CalendarSelection("No",Year,Month,Date);
                                                  let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                                  break;
                        
                                              }
                                              else
                                              {
                                                  Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                                  break;
                                              }
                                              
                                             break;
                                           }
                                          
                                    case "Month":
                                          {
                                            let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                            let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                            Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);  
                                                       
                                            if(CP_textbox.Enabled==true)
                                            {
                                              let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                              dropDownbtn.click();
                                              SelectingOptionfromDropDown.SelectingOptionfromDropdown(cust_property_Input,"No");
                                              let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                              break;
                        
                                            }
                                            else
                                            {
                                              Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                              break;
                                            }
                                            
                                            break;
                                          
                                          }
                                          
                                    default:
                                          {
                                            let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                            let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                            Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);    
                                            if(CP_textbox.Enabled==true)
                                            {
                                              CP_textbox.click();
                                              CP_textbox.SetText(cust_property_Input);
                                              let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                              break;  
                                            }
                                            else
                                            {
                                              Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                              break;
                                            }   
                                            
                                            break;
                                          }  
                                                  
                                      
                                  }
                                  verifyError.rangeError(j);
                                  break;
     
              
              default:     switch (cust_Property_Datatype)
                                  {
                                    case "Date":
                                          {   
                                              let CalendarValues=cust_property_Input.split("/");
                                              let Date=CalendarValues[0];
                                              let Month=CalendarValues[1];
                                              let Year=CalendarValues[2]
                                              let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                              let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                              Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);  
                                              
                                              if(CP_textbox.Enabled==true)
                                              {
                                                  let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                                  dropDownbtn.click();
                                                  SelectingDateFromCalendar.CalendarSelection("No",Year,Month,Date);
                                                  let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                                  break;
                        
                                              }
                                              else
                                              {
                                                  Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                                  break;
                                              }
                                          
                                            
                                          }
                                          break;
                                  
                                      
                                  
                                    case "Date Time":
                                          {
                                              let CalendarValues=cust_property_Input.split("/");
                                              let Date=CalendarValues[0];
                                              let Month=CalendarValues[1];
                                              let Year=CalendarValues[2];
                                              let Time=CalendarValues[3];
                                              let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                              let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                              Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit); 
                                              
                                              if(CP_textbox.Enabled==true)
                                              {
                                                  let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                                  dropDownbtn.click();
                                                  SelectingDateFromCalendar.CalendarSelection("No",Year,Month,Date);
                                                  SelectingTimeFromDropDown.SelectingTimeFromDropdown(Time,"Yes");
                                                  let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                                  break;
                        
                                              }
                                              else
                                              {
                                                  Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                                  break;
                                              }
                                              
                                            break;
                                          }
                                          break;
                                          
                                    case "Month Year":
                                          {
                                              let CalendarValues=cust_property_Input.split("/");
                                              let Date=CalendarValues[0];
                                              let Month=CalendarValues[1];
                                              let Year=CalendarValues[2]
                                              let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                              let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                              Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit); 
                                              
                                              if(CP_textbox.Enabled==true)
                                              {
                                                  let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                                  dropDownbtn.click();
                                                  SelectingDateFromCalendar.CalendarSelection("No",Year,Month,Date);
                                                  let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                                  break;
                        
                                              }
                                              else
                                              {
                                                  Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                                  break;
                                              }
                                              
                                             
                                           }
                                           break;
                                          
                                    case "Month":
                                          {
                                            let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                            let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                            Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit);               
                                            if(CP_textbox.Enabled==true)
                                            {
                                              let dropDownbtn= page.Findelement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//button")
                                              dropDownbtn.click();
                                              SelectingOptionfromDropDown.SelectingOptionfromDropdown(cust_property_Input,"No");
                                              let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }      
                                              break;
                        
                                            }
                                            else
                                            {
                                              Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                              break;
                                            }
                                            
                                            
                                          
                                          }
                                          break;
                                          default:
                                          {
                                              let CP_textbox= page.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//span//input")
                                              let CP_Text_BeforeEdit = CP_textbox.Text
                                      
                                              Log.Message("Custom Property before editing is "+CP_Text_BeforeEdit); 
                                                
                                              if(CP_textbox.Enabled==true)
                                              {
                                                CP_textbox.click();
                                                CP_textbox.SetText(cust_property_Input);
                                                let CP_Text_AfterEdit = CP_textbox.Text;
                                          
                                                  Log.Message("Custom Property after editing is "+CP_Text_AfterEdit);
                                          
                                                  if(CP_Text_BeforeEdit == CP_Text_AfterEdit)
                                                     {
                                                       Log.Error("Custom Property is not updated or the input is same as existing")
                                                     }
                                                     else
                                                     {
                   
                                                       Log.Checkpoint("Custom Property is updated successfully");
                                                     }   
                                                break;  
                                              }
                                              else
                                              {
                                                Log.Message("CustomProperty "+cust_Property+" feild is disabled");
                                                break;
                                              }  
                                          }
                                          break;
                            
                            

                   }
                   break;
                 
            }
            break;
          
          }
    
        }
  }
  
  }
  
  else
  {
    Log.Message("The selected Model Definition has no Properties ")
    let textNode = page.FindElement("//dcn-additional-info-custom-property-tab//div//div//div//span")
    aqObject.CheckProperty(textNode, "contentText", cmpEqual, "No Custom Properties were defined by the administrator for  Decision Flow");
    aqObject.CheckProperty(textNode, "Exists", cmpEqual, true);
  }
 
}




var verifyError ={
rangeError : function (j)
{
    let textboxCount= Aliases.browser.pageSapiensDecision2.FindElement("//dcn-additional-info-custom-property-tab//fx-field["+(j+1)+"]//div//div").childElementCount
    
    if(textboxCount>1)
    {
      let ErrorMessage=Aliases.browser.pageSapiensDecision2.FindElement("//dcn-additional-info-custom-property-tab//fx-field//label[contains(@class,'fx-field__error')]").textContent;
      Log.Message(ErrorMessage); 
    }
    else
    Log.Message("Property Value is in range");
    return;
}
}