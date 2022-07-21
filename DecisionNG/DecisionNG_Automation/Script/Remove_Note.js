function Remove_First_Note()
{
  var page = Aliases.browser.pageSapiensDecision
  let removeBtnsBefore = page.FindElements("//dcn-note-form//button");
  let lengthBefore = removeBtnsBefore.length;
  Log.Message(removeBtnsBefore.length);
  
  for(let i=0; i<removeBtnsBefore.length; i++)
  {
    if(i == 0)
    {
      removeBtnsBefore[i].click();
    }
  }
  
  Delay(1000);
  
  let removeBtnsAfter = page.FindElements("//dcn-note-form//button");
  let lengthAfter= removeBtnsAfter.length;
  Log.Message(removeBtnsAfter.length);
 
  if(lengthAfter < lengthBefore )
  {
    Log.Checkpoint("Notes removed successfully");
  }
  else
  {
    Log.Error("Notes not removed");
  }
}

function Remove_Last_Note()
{
  var page = Aliases.browser.pageSapiensDecision
  var removeBtnsBefore = page.FindElements("//dcn-note-form//button");
  var removeBtnsAfter
  var lengthAfter
  var lengthBefore = removeBtnsBefore.length;
  Log.Message(removeBtnsBefore.length);
  
  for(let i=0; i<removeBtnsBefore.length; i++)
  {
    if(i == removeBtnsBefore.length-1)
    {
      removeBtnsBefore[i].click();
    }
  }
  
  Delay(1000)
  
  removeBtnsAfter = page.FindElements("//dcn-note-form//button");
  lengthAfter= removeBtnsAfter.length;
  Log.Message(removeBtnsAfter.length);
   
  if(lengthAfter < lengthBefore)
  {
    Log.Checkpoint("Notes removed successfully");
  }
  else
  {
    Log.Error("Notes not removed");
  }
}