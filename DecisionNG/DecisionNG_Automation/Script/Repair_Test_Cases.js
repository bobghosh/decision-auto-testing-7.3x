function Verify_Repair_and_Click(condition, factType_Name)
{
  aqObject.CheckProperty(Aliases.browser.pageSapiensDecision2.panel31, "contentText", cmpEqual, "The Test Group is no longer valid due to model changes. Click here to\nRepair");
  Aliases.browser.pageSapiensDecision.FindElement("//*[text()=' Repair ']").click();  

  Aliases.browser.pageSapiensDecision.FindElement("//div[contains(@class,'test-case-progress-bar')]").WaitProperty("Exists", false, 100000);
  
  let RepairLink = Aliases.browser.pageSapiensDecision.FindElements("//*[text()=' Repair ']");
  if(RepairLink.length == 0)
  {
    Log.Checkpoint("Test Group is repaired")    
  }
  else
  {
   Log.Error("Test Group is not repaired"); 
  }
  
//  let condition = "Add Fact Type to BIM";
//  let factType_Name = "TestRG Persistent 1";
  switch(condition)
  
        {
          //Add/Update Fact Type to Asset
            case "Update or Adding Name Fact Type":
            {
               let FactType = Aliases.browser.pageSapiensDecision2.FindElements("//label[text()=' "+ factType_Name +" ']");
               if(FactType.length > 0)
              {
                Log.Checkpoint(factType_Name + " Fact Type is addded, Test Cases are repaired successfully");               
              }
              else
              {
                Log.Error(factType_Name + " Fact Type is not removed")
              }
              break;
            }
            
            //Remove Fact Type from Asset
            case "Remove Fact Type":
            {
              let FactType = Aliases.browser.pageSapiensDecision2.FindElements("//label[text()=' "+ factType_Name +" ']");
               
              if(FactType.length > 0)
              {
                Log.Error(factType_Name + " Fact Type is not removed")
              }
              else
              {
                Log.Checkpoint(factType_Name + " Fact Type is removed, Test Cases are repaired successfully");
              }
              break;
            }
            
            //Add Fact Type from Root to RG
            case "Add Fact Type to BIM":
            {
              let FactType = Aliases.browser.pageSapiensDecision2.FindElements("//*[contains(@class,'testing-vm-list__repeating-group')]//label[text()=' "+ factType_Name +" ']");
               
              if(FactType.length > 0)
              {
                Log.Checkpoint(factType_Name + " Fact Type is added to the BIM, Test Cases are repaired successfully");
                
              }
              else
              {
                Log.Error(factType_Name + " Fact Type is not added from BIM");
              }
              break;
            }
                        
            //Add Fact type from RG to Root
            case "Remove Fact Type from BIM":
            {
              //*[(contains(@class,'testing-vm-list__fact-type')) and not (contains(@class,'testing-vm-list__repeating-group'))]//label
              let FactType = Aliases.browser.pageSapiensDecision2.FindElements("//*[(contains(@class,'testing-vm-list__fact-type')) and not (contains(@class,'testing-vm-list__repeating-group'))]//label[text()=' "+ factType_Name +" ']");
               
              if(FactType.length > 0)
              {
                Log.Checkpoint(factType_Name+ " Fact Type is removed, Test Cases are repaired successful");
              }
              else
              {
                Log.Error(factType_Name + " Fact Type is not removed from BIM");
                
                let FactTypeCheck = Aliases.browser.pageSapiensDecision2.FindElements("//*[contains(@class,'testing-vm-list__repeating-group')]//label[text()=' "+ factType_Name +" ']");
                if(FactTypeCheck.length > 0)
                {
                  Log.Message(FactTypeCheck+ " Fact Type is still inside BIM")
                }
              }
              break;
            }                    
        }
                
        Log.Message("Repair of Test Cases has completed"); 
}