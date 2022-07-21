var Buttons_Actions = require("Buttons_Actions");
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
function Decision_Screen_ContextMenu_Select_Option(contextMenuItem,viewNametoSelect,verifyStatus,radioToSelect,defaultSelectRadio,conclusionNameToChange)
{
  let page = Aliases.browser.pageSapiensDecision
  let contextMenuList = page.FindElements("//ul//li//a")  
  for(let i=0;i<contextMenuList.length;i++)
  {
    let menuText = contextMenuList[i].textContent;
    if(menuText == contextMenuItem)
    {
      contextMenuList[i].Click();
      break;
    }
    if(i == (contextMenuList.length-1))
     {
       Log.Error("Option doesn't exists/Wrong Input Data"); 
       break;
     }
  }
 
  aqObject.CheckProperty(page.FindElement("//dcn-rule-family-change-view-dialog//h1"),"textContent",cmpEqual," Change View and/or Conclusion ")
  let conclusionNameBox = page.FindElement("//*[@name='Conclusion Name']//input");
  if(!conclusionNameToChange == "")
  {
    conclusionNameBox.SetText(conclusionNametoChange)
    SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(conclusionNametoChange,"No")
  }
  
  page.FindElement("//dcn-rule-family-change-view-dialog//p-autocomplete//button").click()
  Select_View_FromDropDown(viewNametoSelect,"No")
  let status = page.FindElement("//span[contains(@class,'view-dialog__view-status')]")
  
  if(!verifyStatus == "")
  {
    aqObject.CheckProperty(status,"textContent",cmpEqual,verifyStatus)
  }
  
  let radioBtnTextElements = page.FindElements("//span[contains(@class,'change-view-dialog__operation-summary')]")
  let radiobtns = page.FindElements("//p-radiobutton//div[contains(@class,'radiobutton-box')]") 
  
  //verify default selection
    if(!defaultSelectRadio=="")
    {
      for(let i=0 ; i<radiobtns.length;i++)
      {
        let radioClass = radiobtns[i].getAttribute('class')
        let radiotext = radioBtnTextElements[i].textContent
        if(radiotext.includes(defaultSelectRadio))
        {
         if(radioClass.includes('state-active') )
          {
            Log.Checkpoint(radiotext+" is selected by Default");
          }
          else{
            Log.Error(radiotext+" is not Selected")
          }
        }

      }
    }
  //select radio button
  for(let i=0 ; i<radiobtns.length;i++)
  {
    let radiotext = radioBtnTextElements[i].textContent.trim()
    Log.Message(radiotext)
    Log.Message(radioToSelect)
    if(radiotext == radioToSelect)
    {
      radioBtnTextElements[i].click()
    }
  }
  Buttons_Actions.okButtonClick();
}





function Select_View_FromDropDown(option,flag)
{

  if(flag=="Yes")
  {
    Aliases.browser.pageSapiensDecision.form.form2.form4.button10.ClickButton();    
  }
    var Option=Aliases.browser.pageSapiensDecision.FindElements("//dcn-rule-family-change-view-dialog//ul//li");
    //Log.Message(Option.length)
      for(let i=0;i<Option.length;i++)
      {
        var Optiontext=Option[i].textContent;
        //Log.Message(Optiontext)
        if(Optiontext == option)
          {
            Option[i].Click(2,2);
            break;
          }
        
         if(i == (Option.length-1))
         {
           Log.Error("Option doesn't exists/Wrong Input Data"); 
           Option[0].Click();
           break;
         }  
      }
  
}