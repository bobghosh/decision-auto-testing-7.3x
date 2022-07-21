var SelectingOptionfromDropdown = require("SelectingOptionfromDropdown_UL_LI");

function DecisionScreen_RightClickDRF_ThenSelectOption(FacttypeName,SubOption)
{

  var obj = Aliases.browser.pageSapiensDecision2.canvas;


  var b = GetTextBlockCustom(obj,FacttypeName);
  if (b != null)
  {
    b.HoverMouse(10,7);

    let x = Sys.Desktop.MouseX
    let y = Sys.Desktop.MouseY
    let w = Sys.ObjectFromPoint(x, y);
    // Convert screen-relative coordinates to object-relative
    let p = w.ScreenToWindow(x, y);
    w.ClickR(p.X, p.Y);
    SelectingOptionfromDropdown.SelectingOptionfromDropdown(SubOption,"No");
  }

}

function GetTextBlockCustom(anObject, FTName)
{

  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 0)
  {

    for (var i = 0; i < obj.BlockCount; i ++)
    {
      var re = new RegExp(FTName);
      Log.Message(re)
      Matches = obj.Block(i).Text.match(re);
      if (Matches != null)
      {
        
        return obj.Block(i);
      }

    }

  return null;
  }
  else
    return null;

}

module.exports.DecisionScreen_RightClickDRF_ThenSelectOption = DecisionScreen_RightClickDRF_ThenSelectOption;