var GenerateRandomNumber = require("GenerateRandomNumber");
var Compare__Two_Arrays_Verify = require("Compare__Two_Arrays_Verify");
var Picture_To_Log = require("Picture_To_Log");
var WaitElement_ispresent = require("WaitElement_ispresent");
var Breadcrumb_Verify_Navigation = require("Breadcrumb_Verify_Navigation");

function Add_New_User(Name,DisplayName,Roles)
{ 
  let num= GenerateRandomNumber.get4DigitRandomInt()
  var rolesadded = [];  
  let page = Aliases.browser.pageSapiensDecision;
  let add_Btn= page.FindElement("//button[@class='add-btn-top-page']");
  
  add_Btn.Click();
  WaitElement_ispresent.Wait_Until_Element_ispresent("//new-user-form//user-mandatory-details//form");
   
  let name = page.FindElement("//input[@name='username']");
  let displayName = page.FindElement("//input[@name='displayname']");
  let continueBtn = page.FindElement("//button[@class='btn primary']");
  
  Breadcrumb_Verify_Navigation.Breadcrumb_Verify_Navigation("New User");
  name.SetText(Name+" "+num)
  Project.Variables.Security_NewUser_Created = Name+" "+num
  displayName.SetText(DisplayName+" "+num);
  Project.Variables.Security_New_DisplayName = DisplayName+" "+num
  continueBtn.ClickButton();
  WaitElement_ispresent.Wait_Until_Element_ispresent("//table//tr");
  
  //Verify If user is Active (Round slider checked or not)
  var element = Aliases.browser.pageSapiensDecision2.formF.label.panel10;  // Obtain the web element
  var style = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element, "");
  let backgroundcolor=style.background
  let Active="rgb(74, 207, 246) none repeat scroll 0% 0% / auto padding-box border-box";
  let Inactive="rgb(221, 221, 221) none repeat scroll 0% 0% / auto padding-box border-box";
    
  if(backgroundcolor == Active )
  {
    Log.CheckPoint("User is Active")
      
    Picture_To_Log.PictureToLog();
      
  }
  else if(backgroundcolor == Inactive)
  {
    Log.Error("User is not Active")
      
    Picture_To_Log.PictureToLog();
  }
  else
  {
    Log.Error("Color of the toggle button might be changed");
      
    Picture_To_Log.PictureToLog();
  }
 
    
  page.FindElement("//button[@class='add-btn-top-page']").ClickButton();
    
    
  var role_array = Roles.split(',');
 //Log.Message("Roles Length is "+str_array.length);
  for(var i = 0; i < role_array.length; i++) 
    { 
      Aliases.browser.pageSapiensDecision.WaitElement("//ul//li[@aria-label= '"+role_array[i]+"']//*[@class='p-checkbox p-component ng-star-inserted']",5000).click();           
    }
      
    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
      
    //verifying the roles added
    Delay(1000)
    let rolesTable= page.FindElements("//tbody//tr//td[1]")
      
    for(let j=0; j< rolesTable.length;j++)
    {
     let roleadded =rolesTable[j].textContent.trim();
      Log.Message(roleadded)
      rolesadded.push(roleadded)
    }

    Compare__Two_Arrays_Verify.compareArrays(role_array,rolesadded)     
}
