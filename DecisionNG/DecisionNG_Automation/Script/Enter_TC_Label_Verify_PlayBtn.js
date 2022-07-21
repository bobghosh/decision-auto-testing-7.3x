var page= Aliases.browser.pageSapiensDecision2
function Enter_TC_Label_Verify(Label)
{   
   page.WaitElement(page.FindElement("//div[@class='test-case__details--title']//span//input"),10000);
   let labelTextFeild = page.FindElement("//div[@class='test-case__details--title']//span//input");
   
   labelTextFeild.Keys(Label);
   Delay(1000);
   let labelText= page.FindElement("//tbody//tr[1]//td[3]").textContent
   Log.Message("LabelText is : "+labelText)
   if(labelText == Label)
   {
     Log.Checkpoint("Label : "+Label+" is updated successfully in the Testcase row");
   }
   else
   {
     Log.Error("Label : "+Label+" is not updated in the Testcase row");
   }
}

function Testcase_Run_Btn()
{
  page.FindElement("//dcn-test-case-details//button[contains(@class,'spec-test-case-detail__run-button test-case')]").Click();
  
}
