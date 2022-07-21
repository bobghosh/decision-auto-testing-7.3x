var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
//function FlowScreen_Add_Draft_Decision()
//{
//  
//}

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
//Policy Renewal Method (View: Base) [1.9]
 

    }

 

  return null;
  }
  else
    return null;

 

}