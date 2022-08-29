//USEUNIT SelectingOptionfromDropDown_Role
//USEUNIT Perform_Click_On_Element
//USEUNIT GenerateRandomNumber
//USEUNIT Buttons_Actions
//USEUNIT WaitElement_ispresent
//USEUNIT RefLibrary

function Start_New_Decision_From_Home(community, taskName, DecisionName, view, folder){
  
  let page = Aliases.browser.pageSapiensDecision2
  
  page.WaitElement(ORGeneric.splitbutton, 20000).Click();
  page.WaitElement(ORHomepage.StartDecision, 20000).Click();
  //Perform_Click_On_Element.Perform_Click_On_Element(ORHomepage.StartDecision)
  
  //select community
  page.WaitElement(ORGeneric.dcnComboBox+ORGeneric.community+"//button").WaitProperty("disabled",false,30000);
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.dcnComboBox+ORGeneric.community+"//button")
  SelectingOptionfromDropdown(community, "No");
  
  //select task
  aqUtils.Delay(1000)
  page.WaitElement("//*[@name='task']//button").WaitProperty("enabled",true,30000);
  Perform_Click_On_Element.Perform_Click_On_Element("//*[@name='task']//button")
  SelectingOptionfromDropdown(taskName, "No");
  
  //Decision Name
  page.FindElement(ORGeneric.DecisionName+"//input").SetText(DecisionName);
  page.WaitElement("//*[contains(text(),'Create New Fact Type')]/..",5000).Click();
  aqUtils.Delay(2000)
  
  //select  view
  if(view != null || view != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.ViewName+"//button")
  SelectingOptionfromDropdown(view, "No");
  }
  
  //select folder
  if(folder != null || folder != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.FolderName+"//button")
  SelectingOptionfromDropdown(folder, "No");
  }
  
  Buttons_Actions.okButtonClick()
  WaitElement_ispresent.Wait_Until_Element_ispresent("//canvas")
}

function Start_New_Decision_New_Task(community, taskName, DecisionName, view, folder){
  
  let page = Aliases.browser.pageSapiensDecision2
  
  page.WaitElement(ORGeneric.splitbutton, 20000).Click();
  page.WaitElement(ORHomepage.StartDecision, 20000).Click();
  //Perform_Click_On_Element.Perform_Click_On_Element(ORHomepage.StartDecision)
  
  //select community
  page.WaitElement(ORGeneric.dcnComboBox+ORGeneric.community+"//button").WaitProperty("disabled",false,30000);
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.dcnComboBox+ORGeneric.community+"//button")
  SelectingOptionfromDropdown(community, "No");
  
  //select task
  aqUtils.Delay(1000)
  page.WaitElement("//*[@name='task']//button").WaitProperty("enabled",true,30000);
  //Perform_Click_On_Element.Perform_Click_On_Element("//*[@name='task']//input")
  let num = GenerateRandomNumber.get4DigitRandomInt()
  Project.Variables.NewTaskName = taskName+num;
  page.WaitElement("//*[@name='task']//input").SetText(taskName+num)
  dropDownVal = "Create New Task \""+taskName+num+"\""
  page.WaitElement("//span[text()='"+dropDownVal+"'"+"]",5000).Click();
  
  //Decision Name
  page.FindElement(ORGeneric.DecisionName+"//input").SetText(DecisionName);
  page.WaitElement("//*[contains(text(),'Create New Fact Type')]/..",5000).Click();
  aqUtils.Delay(2000)
  
  //select  view
  if(view != null || view != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.ViewName+"//button")
  SelectingOptionfromDropdown(view, "No");
  }
  
  //select folder
  if(folder != null || folder != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.FolderName+"//button")
  SelectingOptionfromDropdown(folder, "No");
  }
  
  Buttons_Actions.okButtonClick()
  WaitElement_ispresent.Wait_Until_Element_ispresent("//canvas")
}

function Start_New_Decision_Existing_FT(community, taskName, DecisionName, view, folder){
  
  let page = Aliases.browser.pageSapiensDecision2
  
  page.WaitElement(ORGeneric.splitbutton, 20000).Click();
  page.WaitElement(ORHomepage.StartDecision, 20000).Click();
  //Perform_Click_On_Element.Perform_Click_On_Element(ORHomepage.StartDecision)
  
  //select community
  page.WaitElement(ORGeneric.dcnComboBox+ORGeneric.community+"//button").WaitProperty("disabled",false,30000);
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.dcnComboBox+ORGeneric.community+"//button")
  SelectingOptionfromDropdown(community, "No");
  
  //select task
  aqUtils.Delay(1000)
  page.WaitElement("//*[@name='task']//button").WaitProperty("enabled",true,30000);
  Perform_Click_On_Element.Perform_Click_On_Element("//*[@name='task']//button")
  SelectingOptionfromDropdown(taskName, "No");
  
  //Decision Name
  page.FindElement(ORGeneric.DecisionName+"//input").SetText(DecisionName);
  aqUtils.Delay(2000)
  SelectingOptionfromDropdown(DecisionName, "No");
  //page.WaitElement("//*[contains(text(),'Create New Fact Type')]/..",5000).Click();
  aqUtils.Delay(1000)
  
  //select  view
  if(view != null || view != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.ViewName+"//button")
  SelectingOptionfromDropdown(view, "No");
  }
  
  //select folder
  if(folder != null || folder != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.FolderName+"//button")
  SelectingOptionfromDropdown(folder, "No");
  }
  
  Buttons_Actions.okButtonClick()
  WaitElement_ispresent.Wait_Until_Element_ispresent("//canvas")
}

function Start_New_Decision_No_Save(community, taskName, DecisionName, view, folder, okCancel){
  
  let page = Aliases.browser.pageSapiensDecision2
  
  page.WaitElement(ORGeneric.splitbutton, 20000).Click();
  page.WaitElement(ORHomepage.StartDecision, 20000).Click();
  //Perform_Click_On_Element.Perform_Click_On_Element(ORHomepage.StartDecision)
  
  //select community
  page.WaitElement(ORGeneric.dcnComboBox+ORGeneric.community+"//button").WaitProperty("disabled",false,30000);
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.dcnComboBox+ORGeneric.community+"//button")
  SelectingOptionfromDropdown(community, "No");
  
  //select task
  aqUtils.Delay(1000)
  page.WaitElement("//*[@name='task']//button").WaitProperty("enabled",true,30000);
  Perform_Click_On_Element.Perform_Click_On_Element("//*[@name='task']//button")
  SelectingOptionfromDropdown(taskName, "No");
  
  //Decision Name
  page.FindElement(ORGeneric.DecisionName+"//input").SetText(DecisionName);
  aqUtils.Delay(2000)
  SelectingOptionfromDropdown(DecisionName, "No");
  //page.WaitElement("//*[contains(text(),'Create New Fact Type')]/..",5000).Click();
  aqUtils.Delay(1000)
  
  //select  view
  if(view != null || view != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.ViewName+"//button")
  SelectingOptionfromDropdown(view, "No");
  }
  
  //select folder
  if(folder != null || folder != ""){
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.FolderName+"//button")
  SelectingOptionfromDropdown(folder, "No");
  }
  
  if(okCancel.toLowerCase() == 'ok')
    Buttons_Actions.okButtonClick()
  else if(okCancel.toLowerCase() == 'cancel')
    Buttons_Actions.cancelButtonClick()
}