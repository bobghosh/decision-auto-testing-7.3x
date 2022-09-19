var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
//USEUNIT RefLibrary
//USEUNIT SelectingOptionfromDropDown_Role

function GetTextBlockCustom(aPattern,searchDV,selectDV)
{
  var page= Aliases.browser.pageSapiensDecision2;
  anObject= Aliases.browser.pageSapiensDecision2.canvas;
  //aPattern="Policy Renewal Method"
  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {

 

    for (let i = 0; i < obj.BlockCount; i ++)
    {
      let re = new RegExp(aPattern);
      Log.Message(re)
      Matches = obj.Block(i).Text.match(re);
      Log.Message(obj.Block(i).Text)
      if (Matches != null)
      {
        obj.Block(i).DblClick();
        page.FindElement("//*[@placeholder='decision name']").Keys(searchDV);
        page.WaitElement(page.FindElement("//*[@role='option']"),10000);
        SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(selectDV);
        break;
      }

    }

 

  return null;
  }
  else
    return null;

 

}

function Add_New_Decsion_FromFlow(aPattern,searchDV,selectDV,view, folder)
{
  var page= Aliases.browser.pageSapiensDecision2;
  anObject= Aliases.browser.pageSapiensDecision2.canvas;

  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {
    for (let i = 0; i < obj.BlockCount; i ++)
    {
      let re = new RegExp(aPattern);
      Log.Message(re)
      Matches = obj.Block(i).Text.match(re);
      Log.Message(obj.Block(i).Text)
      if (Matches != null)
      {
        obj.Block(i).DblClick();
        page.FindElement("//*[@placeholder='decision name']").Keys(searchDV);
        page.WaitElement(page.FindElement("//*[@role='option']"),10000);
        SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown("Create New Decision "+'"'+selectDV+'"')
        //Create New Decision \"cdvfsdv\"']
        break;
      }

  }

  let viewNameBtn = page.FindElement(ORGeneric.ViewName+"//button")
  let folderBtn = page.FindElement(ORGeneric.FolderName+"//button")
  let taskName = page.FindElement("//label[contains(@class,'spec-task-label')]")
  
  aqObject.CheckProperty(page.FindElement(ORTasks.dcnCreateDecision+"//h1"),"textContent",cmpEqual," Create New Decision ")
  
  aqUtils.Delay(1200)
  viewNameBtn.WaitProperty("Enabled", true, 30000)
  viewNameBtn.click();
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(view)
  folderBtn.click()
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(folder)
  Buttons_Actions.okButtonClick()
  WaitElement_ispresent.Wait_Until_Element_ispresent("//canvas")

  }
}