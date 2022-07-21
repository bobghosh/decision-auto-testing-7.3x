function CalendarSelection(flag, YearValue, MonthValue, DateValue)
{
  
//    let browser = Aliases.browser;
//    let page = browser.pageSapiensDecision;
//    let phoneInput = page.form.form2.form4;
//    let phoneInput2 = phoneInput.textbox4;

    if(flag == "Yes")
    {
    Aliases.browser.pageSapiensDecision.form.form2.button9.textnode4.Click();
    Log.Message("Clicked on dropdownbutton")    
    }
    
    Delay(300);
    Aliases.browser.pageSapiensDecision.textnodeMarch2021.Click();
    Delay(300);
    //Aliases.browser.pageSapiensDecision.cell9.Click();
    Aliases.browser.pageSapiensDecision.FindElement("//table[@wj-part='tbl-year']/tr[1]").Click();
    Delay(300);
    
    //This is for Year selection
    let Year=Aliases.browser.pageSapiensDecision.FindElements("//div[@role='option']")
    let YearLength=Year.length;
    Log.Message(YearLength)
    for(let i=1;i<=YearLength;i++)
    {
    let YearText=Aliases.browser.pageSapiensDecision.FindElement("//div[@role='option']["+i+"]").textContent
    //Log.Message(YearText)
    if(YearText == YearValue)
    {
      Delay(300)
     Aliases.browser.pageSapiensDecision.FindElement("//div[@role='option']["+i+"]").click();
     Delay(1000)
     Log.Message("Selected the Year Successfully") 
     break;
    }
    
    }
    
   //This is to select the Month 
   
   let MonthRows=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-year']//tr")
   let MonthsRowsCount=MonthRows.length;
   //Log.Message(MonthsRowsCount)
   for(let i=1;i<=MonthsRowsCount;i++)
    {
      let MonthCell=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-year']//tr["+i+"]//td")
      let MonthCellCount=MonthCell.length
     // Log.Message(MonthCellCount)
      
      for(let j=1;j<=MonthCellCount;j++)
      {
        let MonthCelltext=Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-year']//tr["+i+"]//td["+j+"]").textContent
        //Log.Message(MonthCelltext)
        if(MonthCelltext == MonthValue)
        {
          Delay(300)
          Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-year']//tr["+i+"]//td["+j+"]").click();
          Delay(300)
          Log.Message("Selected Month Successfully")
        }
        
      }

    //aqObject.CheckProperty(Aliases.browser.pageSapiensDecision.form.form2.form4.textbox4, "value", cmpEqual, "2/3/2021");
  
  }
  //Selecting the date from calendar
  let DateRows=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-month']//tr");
   let DateRowsCount=DateRows.length;
   //Log.Message(DateRowsCount)
   for(let i=1;i<=DateRowsCount;i++)
    {
      let DateCell=Aliases.browser.pageSapiensDecision.FindElements("//table[@class='wj-calendar-month']//tr["+i+"]//td")
      let DateCellCount=DateCell.length
     // Log.Message(DateCellCount)
      
      for(let j=1;j<=DateCellCount;j++)
      {
          let DateCellText=Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-month']//tr["+i+"]//td["+j+"]").textContent.trim();
         // Log.Message(DateCellText)
          
        
        if(DateCellText == DateValue)
        {
          
          if(i==2)
          {
            let arr=["24","25","26","27","28","29","30","31"]
            
            if(arr.includes(DateCellText))
              Log.Message("Ignore 1st row");
                     
            else
            {
               Delay(300)
               Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-month']//tr["+i+"]//td["+j+"]").click(); 
               Delay(300)       
               Log.Message("Selected Date Successfully");
               break;
            }
          }
          else
          {    
            Delay(300)
          Aliases.browser.pageSapiensDecision.FindElement("//table[@class='wj-calendar-month']//tr["+i+"]//td["+j+"]").click();    
          Delay(300)    
          Log.Message("Selected Date Successfully");
          break;
         
          }
   
          }
  }
  
  
  }
  //Delay(300);
 // Aliases.browser.pageSapiensDecision.form.form2.form4.button5.ClickButton();
  //Delay(300);
  }

module.exports.CalendarSelection = CalendarSelection;