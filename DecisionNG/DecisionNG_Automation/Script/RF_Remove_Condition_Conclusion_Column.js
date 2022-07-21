//USEUNIT RF_RightClick_HeaderColumns_SelectSubMenu


function Remove_Condition_Column_Header(ColumnText,SubOption)
{
  let page = Aliases.browser.pageSapiensDecision2;
  RightClick_Condition_Conclusion_header("condition",ColumnText,SubOption)
  page.FindElement("//button[contains(@class,'spec-confirmed')]").Click
  Log.Checkpoint("Condition Column is removed")
}



function Remove_Conclusion_Column_Header(ColumnText,SubOption)
{
  let page = Aliases.browser.pageSapiensDecision2;
  page.FindElement("//div[contains(@class,'conclusionHeader')]//*[text()='"+ColumnText+"']").clickR();
  var Option=Aliases.browser.pageSapiensDecision.FindElements("//ul//li");
    //Log.Message(Option.length)
      for(let i=0;i<Option.length;i++)
      {
        var Optiontext=Option[i].textContent;
        //Log.Message(Optiontext)
        if(Optiontext == SubOption)
          {
            Log.Error("Item Found")
}
}
Log.Checkpoint("Suboption not found")
}

