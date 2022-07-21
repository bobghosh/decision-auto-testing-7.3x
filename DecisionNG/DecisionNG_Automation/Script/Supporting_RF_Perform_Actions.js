var Breadcrumb_Verify_Navigation = require("Breadcrumb_Verify_Navigation");
function Supporting_RF_Perform_RightClick(Name)
{
  let obj = Aliases.browser.pageSapiensDecision2.canvas
  var RF = GetTextBlockCustom(obj, Name);
  if (RF != null)
  {
    let page=Aliases.browser.pageSapiensDecision2
    RF.ClickR()

  }
}

function Supporting_RF_Perform_Click_Or_Select(Name)
{
  let obj = Aliases.browser.pageSapiensDecision2.canvas
  var RF = GetTextBlockCustom(obj, Name);
  if (RF != null)
  {
    let page=Aliases.browser.pageSapiensDecision2
    RF.ClickNextTo(toRight, 4)

  }
}

function Supporting_RF_Perform_DBlClick_Open(Name)
{
  let page = Aliases.browser.pageSapiensDecision2
  let obj = Aliases.browser.pageSapiensDecision2.canvas
  let RF = GetTextBlockCustom(obj, Name);
  if (RF != null)
  {
    RF.ClickNextTo(toRight, 6)
    
    let RF_DblClick = GetTextBlockCustom(obj, Name);
     if (RF_DblClick != null)
     {
      RF_DblClick.ClickNextTo(toRight, 4)
      let x= Sys.Desktop.MouseX
      let y = Sys.Desktop.MouseY-100;
//      Log.Message(x)
//      Log.Message(y)
      page.DblClick(x,y);
      page.WaitElement(page.FindElement("//dcn-table"),20000)
      aqObject.CheckProperty(page.FindElement("//*[contains(@class,'conclusionHeader')]"),"textContent",cmpEqual,Name)
      
      }
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
//      Log.Message(obj.Block(i).Text)
      Matches = obj.Block(i).Text.match(re);
      if(obj.Block(i).Text.includes(aPattern))
      {        
          if(count==1)
          {
            return obj.Block(i)
            flag = 1; 
           
          }
        count++
//        Log.Message(count)
        //
        
    
      }
    }
  
  }
  else
  return null;

  anObject.MouseWheel(-1);
  }while(flag==0)
  

}