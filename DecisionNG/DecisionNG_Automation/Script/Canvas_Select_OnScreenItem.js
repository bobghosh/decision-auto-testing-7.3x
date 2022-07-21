function Canvas_Select_OnScreenItem(aPattern)
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
        obj.Block(i).Click();
        Delay(2000);
        break;
      }
      
    }
    
  return null;
  }
  else
    return null;

 

}