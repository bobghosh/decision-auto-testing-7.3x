var VerifyUser_ManageRoles = require("VerifyUser_ManageRoles");
var SelectingOptionfromDropDown= require("SelectingOptionfromDropDown_Only1DDexsists");
function Administration_Community_AssignUser()
{     
       Project.Variables.Permission_Matrix.Reset();
    for(; ! Project.Variables.Create_NewUser_Details.IsEOF();)
    {
    Aliases.browser.pageSapiensDecision2.textnodeAdministration.Click();
    Aliases.browser.pageSapiensDecision.button6.ClickButton();
    delay(500)
    SelectingOptionfromDropDown.SelectingOptionfromDropdown(Project.Variables.Create_NewUser_Details.Value("Community"),"No")
    Aliases.browser.pageSapiensDecision2.linkUsers2.Click();
    aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.linkWorld.textnodeWorld, "contentText", cmpEqual, "WORLD");
    Aliases.browser.pageSapiensDecision.buttonSendToGlossary.ClickButton();
    
    let Username=Project.Variables.Create_NewUser_Details.Value("Name");
    Log.Message("Username: "+Username);
    let UserCheckbox=Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+Username+"']//div//div").getAttribute("class")
    if(!UserCheckbox.includes("ui-state-active"))
    {
      Log.Message("User checkbox is not checked")
      Aliases.browser.pageSapiensDecision.FindElement("//ul//li[@aria-label= '"+Username+"']//div//div").Click();
      Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton();
    }
    else
    {
      Log.Message("User checkbox is already checked");
      Aliases.browser.pageSapiensDecision.form.buttonOk.ClickButton(); 
    }
    VerifyUser_ManageRoles.SelectingItem(Project.Variables.Create_NewUser_Details.Value("Name"))
//  Aliases.browser.pageSapiensDecision.button6.ClickButton();
//  
//  Aliases.browser.pageSapiensDecision2.textnode7.textnode8.panel9.Click();
//  Aliases.browser.pageSapiensDecision2.textnode13.Click();
//  
//  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel14, "contentText", cmpEqual, "WORLD");
    Project.Variables.Create_NewUser_Details.Next();
    }


    
}

