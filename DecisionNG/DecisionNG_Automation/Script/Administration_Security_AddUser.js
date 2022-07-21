var Picture_To_Log = require("Picture_To_Log");
var Verify_UserCreated_And_Roles = require("Verify_UserCreated_And_Roles");
var SelectingItem= require("SelectingItem_SingleItem_Match_MultipleRows");
function Administration_Security_AddUser()
{
  Project.Variables.Create_NewUser_Details.Reset();
    // Ceate New FactType using Add FT button
    for(; !Project.Variables.Create_NewUser_Details.IsEOF();)
  {
    
//    Aliases.browser.pageSapiensDecision.buttonSendToGlossary.ClickButton();
//    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.Click();
//    Aliases.browser.pageSapiensDecision.form.form2.form3.textboxName.SetText(Project.Variables.Create_NewUser_Details.Value("Name"));
//    Aliases.browser.pageSapiensDecision2.formF.textboxSorName.Click();
//    Aliases.browser.pageSapiensDecision2.formF.textboxSorName.SetText(Project.Variables.Create_NewUser_Details.Value("DisplayName"));
//    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
//    
//    Aliases.browser.pageSapiensDecision2.formF.label.panel10.Exists;
//    //Verify If user is Active (Round slider checked or not)
//    var element = Aliases.browser.pageSapiensDecision2.formF.label.panel10;  // Obtain the web element
//    var style = Aliases.browser.pageSapiensDecision.contentDocument.defaultView.getComputedStyle(element, "");
//    let backgroundcolor=style.background
//    let Active="rgb(74, 207, 246) none repeat scroll 0% 0% / auto padding-box border-box";
//    let Inactive="rgb(221, 221, 221) none repeat scroll 0% 0% / auto padding-box border-box";
//    
//    if(backgroundcolor == Active )
//    {
//      Log.Message("It is checked")
//      
//      Picture_To_Log.PictureToLog();
//      
//    }
//    else if(backgroundcolor == Inactive)
//    {
//      Log.Message("It is not checked")
//      
//      Picture_To_Log.PictureToLog();
//    }
//    else
//    {
//      Log.Error("Color of the toggle button might be changed");
//    }
//    
//    Aliases.browser.pageSapiensDecision.button6.ClickButton();
//    let str = Project.Variables.Create_NewUser_Details.Value("Roles")
//    let str_array = str.split(',');
//           Log.Message("Roles Length is "+str_array.length);
//            for(var i = 0; i < str_array.length; i++) 
//              { 
//                Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+str_array[i]+"']//*[@class='ui-chkbox ui-widget ng-star-inserted']").click();
//                           
//              }
//    
//    //Aliases.browser.pageSapiensDecision2.textnode7.textnode8.panel9.Click();
//    Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
//    
//    Aliases.browser.pageSapiensDecision2.linkPermissionGroups.textnodeUsers.Click();
//  
    Log.Message(Project.Variables.Create_NewUser_Details.Value("Name"));
    
    Verify_UserCreated_And_Roles.SelectingItem(Project.Variables.Create_NewUser_Details.Value("Name"))
    
    Project.Variables.Create_NewUser_Details.Next();
    
  }
  
}
