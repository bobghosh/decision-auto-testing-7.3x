function Drag_Drop_FT_Create_Supporting_RF(Name)
{
  let obj = Aliases.browser.pageSapiensDecision2.canvas
  var RF = GetTextBlockCustom(obj, Name);
   if (RF != null)
  {
    RF.Click()
    let x= Sys.Desktop.MouseX
    let y = Sys.Desktop.MouseY
    Log.Message(x)
    Log.Message(y)
    LLPlayer.MouseDown(MK_LBUTTON,x,y,200)
    LLPlayer.MouseMove(x+4,y+4,200)
    LLPlayer.MouseUp(MK_LBUTTON,x,y,200)
    
}
}
 


function GetTextBlockCustom(anObject, aPattern)
{
  let flag=0
  
  do{
  let obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {

    for (let i = 0; i < obj.BlockCount; i ++)
    {
        
      let re = new RegExp(aPattern);
      //Log.Message(re)
      Log.Message(obj.Block(i).Text)
      Matches = obj.Block(i).Text.match(re);
      if(obj.Block(i).Text.includes(aPattern))
      {
            return obj.Block(i)
            flag = 1; 
    
      }
    }
  
  }
  else
  return null;

  anObject.MouseWheel(-1);
  }while(flag==0)
  

}

function Enabled_Editing_SymbolVerify_and_Click(anObject, aPattern)
{
  let flag=0
  
  do{
  let obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {
    for (let i = 0; i < obj.BlockCount; i ++)
    {
        
      let re = new RegExp(aPattern);
      //Log.Message(re)
      Log.Message(obj.Block(i).Text)
      Matches = obj.Block(i).Text.match(re);
      if(obj.Block(i).Text.includes(aPattern))
      {        
            return obj.Block(i)
            flag = 1; 
           
          }
    
    }
  
  }
  else
  return null;

  anObject.MouseWheel(-1);
  }while(flag==0)
  

}

