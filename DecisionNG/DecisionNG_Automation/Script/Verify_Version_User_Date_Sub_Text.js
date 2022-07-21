var Picture_To_Log = require("Picture_To_Log");
function Verify_Version_User_Date(noteVersion,noteUser,noteDate)
  {
    var page = Aliases.browser.pageSapiensDecision
    var version;
    var user;
    var date;
    var versionText
    var userText
    var dateText
    
    version = page.FindElement("//div[contains(@class,'note-form__label')]//span[text()='Asset Version:']//following-sibling::span");
    user = page.FindElement("//div[contains(@class,'note-form__label')]//span[text()='User:']//following-sibling::span");
    date = page.FindElement("//div[contains(@class,'note-form__label')]//span[text()='Date:']//following-sibling::span");
    
    versionText = version.textContent;
    userText = user.textContent; 
    dateText = date.textContent;
    
    Log.Message(versionText+' '+userText+' '+dateText);
    
      if(!noteVersion == "")
      {
        if(versionText == noteVersion)
        {
          Log.Checkpoint("Version is: "+versionText);
        }
        else{
          Log.Error("Expected version: "+noteVersion+" is not matching with "+"actual version: "+versionText);
          Picture_To_Log.PictureToLog();
        }
      }
      
    
    
      if(!noteUser == "")
      {
        if(userText == noteUser)
        {
          Log.Checkpoint("User is: "+userText);
        }
        else{
          Log.Error("Expected user: "+noteUser+" is not matching with actual user: "+userText);
          Picture_To_Log.PictureToLog();          
        }
      }
      
      if(!noteDate == "")
      {
        
        if(dateText == noteDate)
        {
          Log.Checkpoint("Date is: "+dateText);
        }
        else{
          Log.Error("Expected date "+noteDate+" is not matching with actual date "+dateText);
          Picture_To_Log.PictureToLog();          
        }
      }
    
    
  }