function Edit_Popup_SearchFilter_CheckBox_verify(searchFilter,searchCheckBox_Check_Uncheck,ElementsToVerify,verify_All_Checked_Unchecked)
{
      let page = Aliases.browser.pageSapiensDecision2
      if(!searchFilter == "")
      {
        let inputBox= page.FindElement("//dcn-multi-select//input[contains(@class,'ui-inputtext')]")
        let inputBoxBeforeText = inputBox.Text
        inputBox.Keys(searchFilter)
        let inputBoxAfterText = inputBox.Text
        if(inputBoxBeforeText == inputBoxAfterText)
        {
          Log.Error("Text "+searchFilter+" is not entered in the search box")
        }
        else
        {
          Log.Message("Text "+searchFilter+" is Entered successfully") 
        }
      }
      if(!searchCheckBox_Check_Uncheck == "")
      {
        var checkbox = page.FindElement("//dcn-multi-select//input[contains(@class,'inputtext')]//parent::div//parent::div/div[1]/div//following-sibling::div")
        var checkBoxClass= checkbox.getAttribute('class')
        if(searchCheckBox_Check_Uncheck == "Check")
        {
          if(checkBoxClass.includes('highlight'))
          {
            Log.Checkpoint("Checkbox is already Checked")
          }
          else
          {
            checkbox.Click();
            var checkBoxAfterCheck =checkbox.getAttribute('class')
            if(checkBoxAfterCheck.includes('highlight'))
            {
              Log.Checkpoint("Checkbox is Checked Successfully")
            }
            else
            {
              Log.Error("Checkbox not checked")
            }
          }
        }
        else
        {
          if(checkBoxClass.includes('highlight'))
          {
            checkbox.Click();
            let checkBoxAfterCheck =checkbox.getAttribute('class')
            if(checkBoxAfterCheck.includes('highlight'))
            {
              Log.Error("Checkbox is still Checked")
            }
            else
            {
              Log.Checkpoint("Checkbox is Unchecked successfully")
            }
          }
          else
          {
              Log.Checkpoint("Checkbox is already UnChecked")
          }
        }
      }

      if(!ElementsToVerify == "")
      {
        
      if(ElementsToVerify == "All")
      {
        let elementsToVerifylist = page.FindElements("//ul//li//*[@class='p-checkbox p-component ng-star-inserted']")
        for(var j = 0; j < elementsToVerifylist.length; j++) 
        {
         
          let firstchild = elementsToVerifylist[j].firstchild
          //Log.Message(firstchild.getAttribute('class'))
          let firstChildClass= firstchild.getAttribute('class')
          let textoftheCheckbox = page.FindElements("//ul//li//*[@class='p-checkbox p-component ng-star-inserted']//following-sibling::span")
          if(verify_All_Checked_Unchecked == "Checked")
          {
            
            if(firstChildClass.includes('highlight'))
            {
              Log.Checkpoint(textoftheCheckbox[j].textContent+" : Element is checked")
            }
            else
            {
              Log.Error(textoftheCheckbox[j].textContent+" : Element is Unchecked")
            }
          }
          else
          {
            if(firstChildClass.includes('highlight'))
            {
              Log.Error(textoftheCheckbox[j].textContent+" : Element is checked")
            }
            else
            {
              Log.Checkpoint(textoftheCheckbox[j].textContent+" : Element is Unchecked")
            }
          }
        }
      }
      else
      {
      var elementsToVerify_array = ElementsToVerify.split(',');
  
      for(var i = 0; i < elementsToVerify_array.length; i++) 
      { 
        let permission_group = page.FindElement("//ul//li[@aria-label= '"+elementsToVerify_array[i]+"']//*[@class='p-checkbox p-component ng-star-inserted']")
        let firstchild = permission_group.firstchild
        //Log.Message(firstchild.getAttribute('class'))
        let firstChildClass= firstchild.getAttribute('class')

          
          if(firstChildClass.includes('highlight'))
          {
            Log.Checkpoint(elementsToVerify_array[i]+" : Element is checked")
          }
          else
          {
            Log.Error(elementsToVerify_array[i]+" : Element is Unchecked")
          }
        

       }
      }

                   
      }
}