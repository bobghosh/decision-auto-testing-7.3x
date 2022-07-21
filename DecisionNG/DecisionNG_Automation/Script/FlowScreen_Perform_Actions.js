function DFScreen_Open(DFName)
{
  OCR.Recognize(Aliases.browser.pageSapiensDecision2.canvas).BlockByText(DFName).ClickNextTo(toBottom, 20)
  let x= Sys.Desktop.MouseX
  let y = Sys.Desktop.MouseY-100;
  Log.Message(x)
  Log.Message(y)
  Aliases.browser.pageSapiensDecision2.DblClick(x,y);
  //Aliases.browser.pageSapiensDecision2.WaitElement(Aliases.browser.pageSapiensDecision2.FindElement("//dcn-table"),20000)
}
function DFScreen_Select(Name)
{
  var obj = Aliases.browser.pageSapiensDecision2.canvas;
  var objToPerformAction = GetTextBlockCustom(obj, Name);
  if (objToPerformAction != null)
  {
  let page=Aliases.browser.pageSapiensDecision2 
  objToPerformAction.Click();
  Delay(1000)
  }

}

function GetTextBlockCustom(anObject, aPattern)
{
  
  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {

 

    for (let i = 0; i < obj.BlockCount; i ++)
    {
      let re = new RegExp(aPattern);
      Log.Message(re)
      Log.Message(obj.Block(i).Text);
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
function DFScreen_Perform_RightClick(Name)
{
  var obj = Aliases.browser.pageSapiensDecision2.canvas;
  var objToPerformAction = GetTextBlockCustom(obj, Name);
  if (objToPerformAction != null)
  {
  let page=Aliases.browser.pageSapiensDecision2 
  objToPerformAction.ClickR()
  }
}
module.exports.DFScreen_Open = DFScreen_Open;
module.exports.DFScreen_Select = DFScreen_Select;
module.exports.GetTextBlockCustom = GetTextBlockCustom;
module.exports.DFScreen_Perform_RightClick = DFScreen_Perform_RightClick;