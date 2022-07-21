function RF_Notes_Header_Label(){
  let page = Aliases.browser.pageSapiensDecision2;
  let header=page.FindElement("//*[contains(@class,'additional-info-notes-list__header')]");
  let label_Element=header.firstElementChild;
  if(label_Element=="[HTMLLabelElement]")
  {
    let Label_text=(label_Element.TextContent)
    if(Label_text.includes('Cell'))
    {
      Log.Checkpoint("Cell is selected to Add Notes");
    }
    else if(Label_text.includes('Row'))
    {
      Log.Checkpoint("Row is selected to Add Notes");
    }
    else if(Label_text.includes('Column'))
    {
      Log.Checkpoint("Column is selected to Add Notes");
    }
    
  }
  else{
    Log.Error("Row/Column/Cell is not selected to Add Notes.So Header is not available");
  }
  
  
}