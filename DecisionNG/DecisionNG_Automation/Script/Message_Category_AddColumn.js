//USEUNIT RefLibrary
var Verify_Category_Exist_Not_Exists = require("Verify_Category_Exist_Not_Exists");
var rightClickOnElementAndSelect = require("RightClickOnElement_Select");

function Message_Category_AddColumn(MessageCategory)
{   
   let page = Aliases.browser.pageSapiensDecision2;
   let MessageCategorylist = MessageCategory.split(",")
   for(let i=0;i< MessageCategorylist.length;i++)
   {
     rightClickOnElementAndSelect.rightClickOnElementAndSelect("//div[contains(@class,'conclusionHeader')]", "Add Message Category");
     page.FindElement(ORGeneric.dcnAutoComplete+"//input[@placeholder='category name']").keys(MessageCategorylist[i]);
     aqUtils.Delay(1000)
     page.FindElement(ORGeneric.dcnAutoComplete+"//input[@placeholder='category name']").keys("[Tab]");
   }
     
   Aliases.browser.pageSapiensDecision2.FindElement("//*[@wj-part='root']").scrollLeft += 1000;
   
   //verify message category
   Verify_Category_Exist_Not_Exists.Verify_Category_Exist_Not_Exists(MessageCategory,"Yes","")
     
}