function Verify_Category_Exist_Not_Exists(messageCategoryToVerify,verifyExists,verifyNotExist)
{
 let messageCategorylisttoVerify =  messageCategoryToVerify.split(",");
 
 for(let j=0;j<messageCategorylisttoVerify.length;j++)
 {
  let page = Aliases.browser.pageSapiensDecision
  let messageCategorieslist = page.FindElements("//*[contains(@class,'message-category__header')]")
  for(let i =0;i< messageCategorieslist.length;i++)
  {
    let messageCategory = messageCategorieslist[i].textContent.trim();
    if(!verifyExists == "")
    {
        if(messageCategory == messageCategorylisttoVerify[j])
        {
          Log.Checkpoint(messageCategorylisttoVerify[j]+" : Message Category Exists")
          break
        }
        if(i== messageCategorieslist.length-1)
        {
          Log.Error(messageCategorylisttoVerify[j]+" : Message category Not Exists")
          break;
        }
    }
    
    if(!verifyNotExist == "")
    {
        if(messageCategory == messageCategorylisttoVerify[j])
        {
          Log.Error(messageCategorylisttoVerify[j]+" : Message Category Exists")
          break
        }
        if(i== messageCategorieslist.length-1)
        {
          Log.Checkpoint(messageCategorylisttoVerify[j]+" : Message Category Not Exists")
          break;
        }
    }
   

  }

}
}
module.exports.Verify_Category_Exist_Not_Exists = Verify_Category_Exist_Not_Exists;