function Verify_Audit_Record(actionCheck, userInput_Action, toStageCheck, userInput_toStage, toRoleCheck, userInput_toRole, toStatusCheck, userInput_toStatus, toAssigneeCheck, userInput_toAssignee)
{
//  let actionCheck = "Yes";
//  let userInput_Action = "Claim";
  
  let changed_On = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[1]");
  
  Log.Message(changed_On.textContent);  
    
  let changed_By = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[2]");
  
  Log.Message(changed_By.textContent);
  
  if(actionCheck == "Yes")
  {
    let action = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[3]"); 
  
    if(action.textContent.trim() == userInput_Action)
    {
      Log.Checkpoint(userInput_Action + " - Action has been performed");
    }
    else
    {
      Log.Error(userInput_Action + " - Action has not been performed")
    }
  }  
  
  if(toStageCheck == "Yes")
  {
    let to_Stage = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[4]");

    Log.Message(to_Stage.textContent);
  
    if(to_Stage.textContent.trim() == userInput_toStage)
    {
      Log.Checkpoint("Task is moved to stage " + userInput_toStage);
    }
    else
    {
      Log.Error("Task is not moved to stage " + userInput_toStage)
    }
    
  }

  if(toRoleCheck == "Yes")
  {
    let to_Role = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[5]");
  
    Log.Message(to_Role.textContent);
  
    if(to_Role.textContent.trim() == userInput_toRole)
    {
      Log.Checkpoint("Task is moved to role  " + userInput_toRole);
    }
    else
    {
      Log.Error("Task is not moved to role " + userInput_toRole)
    }
  }
  
    
  if(toStatusCheck == "Yes")
  {
    let to_Status = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[6]");

    Log.Message(to_Status.textContent);
  
    if(to_Status.textContent.trim() == userInput_toStatus)
    {
      Log.Checkpoint("Task Status is " + userInput_toStatus);
    }
    else
    {
      Log.Error("Task Status is not " + userInput_toStatus)
    }
    
  }
  
  if(toAssigneeCheck == "Yes")
  {
    let to_Assignee = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[7]");
  
    Log.Message(to_Assignee.textContent);
  
    if(to_Assignee.textContent.trim() == userInput_toAssignee)
    {
      Log.Checkpoint("Task is assigned to " + userInput_toAssignee)
    }
    else
    {
      Log.Error("Task is not assisgned to " + userInput_toAssignee)
    }
        
  }    
  
  let note = Aliases.browser.pageSapiensDecision.FindElement("//tbody//tr[1]//td[8]");
  
  Log.Message("Note - " + note.textContent);  
    
}
module.exports.Verify_Audit_Record = Verify_Audit_Record;