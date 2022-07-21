function Edit_Existing_Notes(Sub_Existing_Notes,Sub_Updated_Notes,Text_to_Update){
let page = Aliases.browser.pageSapiensDecision2;
let Sub_Elements=page.FindElements("//div[contains(@class,'note-list additional-info')]//label[contains(text(),'Subject')]//following-sibling::div//input");
let flag="false";
for(let i=0;i<Sub_Elements.length;i++)
{
   let subjectText = OCR.Recognize(Sub_Elements[i]).FullText.trim();
   
   if(Sub_Existing_Notes.trim() == subjectText)
   {
     let k=i+1
     let textElement=page.FindElement("(//div[contains(@class,'note-list additional-info')]//label[contains(text(),'Text')]//following-sibling::div//textarea)["+k+"]");
     
     if((!Sub_Elements[i].hasAttribute("disabled"))&& (!textElement.hasAttribute("disabled")))
     {
       if(!Sub_Updated_Notes =="")
       {
        Sub_Elements[i].setText(Sub_Updated_Notes);
        }
        if(!Text_to_Update =="")
        {
        
        let Text = OCR.Recognize(textElement).FullText.trim(); 
        
        textElement.click();
        Delay(2000);
        textElement.keys("^a[Del]");
        textElement.keys(Text_to_Update);
        }
        flag="true"
     break;
     }
     else{
       Log.Error("Notes Exist with Subject but Subject & Text fields are disabled");
     }
   }
  
}
if(flag=="true")
{
  Log.Checkpoint("Note exist in the list of notes and Updated as per input");
}
else{
    Log.Error("Note doesn't exist in the list of notes");
}
}


