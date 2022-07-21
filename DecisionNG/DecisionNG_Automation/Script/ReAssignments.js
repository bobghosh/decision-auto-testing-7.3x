//USEUNIT WaitElement_ispresent
//USEUNIT Perform_Click_On_Element
//USEUNIT SelectingOptionfromDropDown_Role
//USEUNIT Buttons_Actions
//USEUNIT RefLibrary

function ClickOnRessign_btn(){
  
  const element = ORRepository.clsUserReassign+"//*[text()='Reassign']"
  
  Wait_Until_Element_ispresent(element)
  Perform_Click_On_Element.Perform_Click_On_Element(element)
}

function Reassign_NewAssignee(NewAssignee, OkCancel){
  
  ClickOnRessign_btn();
  aqUtils.Delay(1000)
  Perform_Click_On_Element.Perform_Click_On_Element(ORGeneric.dcnComboBox+ORGeneric.newAssignee+"//span[@wj-part]")
  
  SelectingOptionfromDropdown(NewAssignee,"NO");
  
  if(OkCancel.toLowerCase() == 'ok')
    Buttons_Actions.okButtonClick()
  else if(OkCancel.toLowerCase() == 'cancel')
    Buttons_Actions.cancelButtonClick()
}