function DecisionScreen_Enable_Editing(Name)
{

  let obj = Aliases.browser.pageSapiensDecision2.canvas
  var RF = GetTextBlockCustom(obj, Name);
   if (RF != null)
  {
     let flag =1
    let page=Aliases.browser.pageSapiensDecision2
    RF.ClickNextTo(toRight, 4)
//    OCR.Recognize(page.canvas).BlockByText('Enable Editing').ClickNextTo(toBottom, 2)
//    Delay(10000);
    let EE = Enabled_Editing_SymbolVerify_and_Click(obj,'Enable Editing')
    EE.click()

}
}
 


function GetTextBlockCustom(anObject, aPattern)
{
  let flag=0
  
  do{
  let obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {

    
    let count =0
    for (let i = 0; i < obj.BlockCount; i ++)
    {
        
      let re = new RegExp(aPattern);
      //Log.Message(re)
      Log.Message(obj.Block(i).Text)
      Matches = obj.Block(i).Text.match(re);
      if(obj.Block(i).Text.includes(aPattern))
      {        
          if(count==1)
          {
            return obj.Block(i)
            flag = 1; 
           
          }
        count++
        Log.Message(count)
        //
        
    
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
