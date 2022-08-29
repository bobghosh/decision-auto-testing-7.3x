var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");
var Generate_Random_Number = require("Generate_Random_Number");
function GetTextBlockCustom(anObject, aPattern)
{
  
  var obj = OCR.Recognize(anObject);
  if (obj.FullText != "" && obj.BlockCount > 1)
  {

    for (var i = 0; i < obj.BlockCount; i ++)
    {
      var re = new RegExp(aPattern);
      Log.Message(re)
      Matches = obj.Block(i).Text.match(re);
      if (Matches != null)
      {
        
        return obj.Block(i+1);
      }

    }

  return null;
  }
  else
    return null;

}

function EnterTextInFacttypetextbox(FacttypeName)
{
  let num = Generate_Random_Number.randomNumber()
  let page= Aliases.browser.pageSapiensDecision
  page.FindElement("//p-autocomplete//input").SetText(FacttypeName+num);
  Project.Variables.FTCreatedFromDVScreen = FacttypeName+num
  Delay(5000)
  page.Keys("[Enter]")
}
function DecisionScreen_ADD_FT(RFname,FacttypeName)
{
  // The search condition (a regular expression)
//  var RFname = "Condo Project Local Jurisdiction Document Issuance Indicator";

  // Get an onscreen object
  var obj = Aliases.browser.pageSapiensDecision2.canvas;

  // Get the text block that matches the search condition
  var b = GetTextBlockCustom(obj, RFname);
  if (b != null)
  {
    
    b.ClickNextTo(toRight, 2);
  
  }
  EnterTextInFacttypetextbox(FacttypeName);

}

function DecisionScreen_ADD_FT_Existing(RFname,FacttypeName){
  
  var obj = Aliases.browser.pageSapiensDecision2.canvas;

  var b = GetTextBlockCustom(obj, RFname);
  if (b != null)
  {
    
    b.ClickNextTo(toRight, 2);
  
  }

  let page= Aliases.browser.pageSapiensDecision
  page.WaitElement("//p-autocomplete//input", 5000).SetText(FacttypeName);
  Delay(4000)
  SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(FacttypeName,'No')

}