var SelectingOptionfromDropDown_Role = require("SelectingOptionfromDropDown_Role");
//function FlowScreen_Add_Draft_Decision()
//{
//  
//}

function Add_Gateway_FT(existingGateWayFT,searchFT,selectFT,newFT)
{
  var page= Aliases.browser.pageSapiensDecision2;
  anObject= Aliases.browser.pageSapiensDecision2.canvas;
  //aPattern="Policy Renewal Method"
  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {

 

    for (let i = 0; i < obj.BlockCount; i ++)
    {
      let re = new RegExp(existingGateWayFT);
      Log.Message(re)
      Matches = obj.Block(i).Text.match(re);
      Log.Message(obj.Block(i).Text)
      if (Matches != null)
      {
        obj.Block(i).DblClick();
        page.WaitElement("//input",5000).Keys(searchFT);
        page.WaitElement(page.FindElement("//*[@role='option']"),10000);
        if(newFT == "")
        {
        
        SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown(selectFT);
        break;
        }
        else{
          SelectingOptionfromDropDown_Role.SelectingOptionfromDropdown("Create New Fact Type "+'"'+ selectFT +'"')
          break;
        }
        
      }
//Policy Renewal Method (View: Base) [1.9]
 

    }

 

  return null;
  }
  else
    return null;

 

}