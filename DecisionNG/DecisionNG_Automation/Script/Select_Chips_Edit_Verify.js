var SelectingTimeFromDropDown = require("SelectingTimeFromDropDown");
var WaitElement_ispresent = require("WaitElement_ispresent");
var SelectingOptionfromDropdown_UL_LI = require("SelectingOptionfromDropdown_UL_LI");

function EditChip_Verify(message,messageToAdd)
{   
    var page = Aliases.browser.pageSapiensDecision2
    let chips = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
    
       
        let type = message.substr(0,1);
        
        Log.Message("Type is: "+type);

        switch(type)
        {
            //Facttype
            case "%":
            {                 
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   Log.Message(chipText)
                   Log.Message('%'+message.substr(1)+'%')
                   
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '%'+message.substr(1)+'%' )
                   {
                     
                     chips[j].click();
                     Delay(500)
                     let textBox = page.FindElement("//dcn-fact-type-message-element-editor//input")
                     aqObject.CheckProperty(textBox,"value",cmpEqual,message.substr(1))
                     textBox.setText(messageToAdd);
                     Delay(5000);
                     WaitElement_ispresent.Wait_Until_Element_ispresent("//ul//li")
                     SelectingOptionfromDropdown_UL_LI.SelectingOptionfromDropdown(messageToAdd,"No");
                     editOkBtn.click();
                     aqObject.CheckProperty(chips[j],"textContent",cmpEqual,'%'+messageToAdd+'%')
                     break;
                   }
                 }               
                 break;
            }
            
            //Supporting RF
            case "<":
            {
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   Log.Message(chipText)
                   Log.Message('<'+message.substr(1)+'>')
                   
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '<'+message.substr(1)+'>' )
                   {
                     
                     chips[j].click();
                     Delay(500)
                     let textBox = page.FindElement("//dcn-supporting-rfv-message-element-editor//input")
                     aqObject.CheckProperty(textBox,"value",cmpEqual,message.substr(1))
                     textBox.setText(messageToAdd);
                     //Delay(5000);
                     WaitElement_ispresent.Wait_Until_Element_ispresent("//ul//li")
                     textBox.Keys("[Tab]")
                     editOkBtn.click();
                     aqObject.CheckProperty(chips[j],"textContent",cmpEqual,'<'+messageToAdd+'>',false)
                     break;
                   }
                 }      
                 break;
            }
            
            //Value
            case "(":
            {      
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   Log.Message(chipText)
                   Log.Message('(Value:'+message.substr(1)+')')
                   
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '(Value:'+message.substr(1)+')' )
                   {
                     
                     chips[j].click();
                     Delay(500)
                     page.FindElement("//dcn-message-operand-operator-element//button").Click()
                     SelectingTimeFromDropDown.SelectingTimeFromDropdown(messageToAdd,"No")
                     editOkBtn.click();
                     aqObject.CheckProperty(chips[j],"textContent",cmpEqual,'(Value:'+messageToAdd+')',false)
                     break;
                   }
                 } 
                 break;
            } 
            
            //Operator
            case "&":
            {
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   Log.Message(chipText)
                   Log.Message('(Operator:'+message.substr(1)+')')
                   
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '(Operator:'+message.substr(1)+')' )
                   {
                     
                     chips[j].click();
                     Delay(500)
                     page.FindElement("//dcn-message-operand-operator-element//button").Click()
                     SelectingTimeFromDropDown.SelectingTimeFromDropdown(messageToAdd,"No")
                     editOkBtn.click();
                     aqObject.CheckProperty(chips[j],"textContent",cmpEqual,'(Operator:'+messageToAdd+')')
                     break;
                   }
                 } 
                 
                 break;
            }
            
            //Message
            case "@":
            {
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   Log.Message(chipText)
                   Log.Message('@'+message.substr(1)+'@')
                   
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '@'+message.substr(1)+'@' )
                   {
                     
                     chips[j].click();
                     Delay(500)
                     page.FindElement("//dcn-categories-message-element-editor//button").Click()
                     SelectingTimeFromDropDown.SelectingTimeFromDropdown(messageToAdd,"No")
                     editOkBtn.click();
                     aqObject.CheckProperty(chips[j],"textContent",cmpEqual,'@'+messageToAdd+'@')
                     break;
                   }
                 } 

                 break;
            }
            
            //RF Name
            case "#":
            {     
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   Log.Message(chipText)
                   Log.Message('#'+message.substr(1)+'#')
                   
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '#'+message.substr(1)+'#' )
                   {
                     
                     chips[j].click();
                     Delay(500)
                     let textBox = page.FindElement("//dcn-message-element-editor//input")
                     aqObject.CheckProperty(textBox,"Text",cmpEqual,message.substr(1))
                     if(editOkBtn.hasAttribute('disabled'))
                     {
                       Log.Checkpoint("Edit Message Categoty Ok Button is Disabled")
                     }
                     else{
                       Log.Error("Edit Message Categoty Ok Button is Enabled")
                     }
                     
                     break;
                   }
                 }  
                 break;
                 
            }
            
            //Row ID
            case "!":
            {
              
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   Log.Message(chipText)
                   Log.Message('!'+message.substr(1)+'!')
                   
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '!'+message.substr(1)+'!' )
                   {
                     
                     chips[j].click();
                     Delay(500)
                     let textBox = page.FindElement("//dcn-message-element-editor//input")
                     aqObject.CheckProperty(textBox,"Text",cmpEqual,message.substr(1))
                     if(editOkBtn.hasAttribute('disabled'))
                     {
                       Log.Checkpoint("Edit Message Categoty Ok Button is Disabled")
                     }
                     else{
                       Log.Error("Edit Message Categoty Ok Button is Enabled")
                     }
                     
                     break;
                   }
                 }               

                 break;
                 
            }
            
            //Text
            default:{
                 for(let j=0;j<chips.length;j++)
                 {
                   let chipText = chips[j].textContent.trim()
                   let textBox = page.FindElement("//dcn-message-element-editor//textarea")
                   let editOkBtn = page.FindElement("//button[contains(@class,'rule-message-edit-cell__button')]")
                   if(chipText == '"'+message+'"' )
                   {
                     chips[j].click();
                     Delay(500)
                     aqObject.CheckProperty(textBox,"value",cmpEqual,message)
                     textBox.dblclick()
                     textBox.keys("[Del]")
                     textBox.Keys(messageToAdd)
                     editOkBtn.click();
                     aqObject.CheckProperty(chips[j],"textContent",cmpEqual,'"'+messageToAdd+'"')
                     break;
                   }
                 }

                  break;
            }
        }
    
}

function Select_First_LastChip_Verify_DisabledBtns()
{
  let page = Aliases.browser.pageSapiensDecision
  let chips = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div");
  let typeBtn = page.FindElement("//dcn-combo-box//button");

  for(let i=0;i<chips.length;i++)
  {
    if(i==0)
    {
      chips[i].click();
      let previousBtn = page.FindElement("//button[contains(@class,'spec-prev btn')]");
      let nextBtn = page.FindElement("//button[contains(@class,'spec-next btn')]")
      let previousBtnClass= previousBtn.getAttribute('class')
      let nextBtnClass = nextBtn.getAttribute('class')
      Log.Message(previousBtnClass)
      Log.Message(nextBtnClass)
      
      if(previousBtnClass.includes('empty'))
      {
        Log.Checkpoint("Previous button is Disabled") 
      }
      else
      {
        Log.Error("Previous button is Enabled")
      }
      if(nextBtnClass.includes('empty'))
      {
        Log.Error("Next button is Disabled") 
      }
      else
      {
        Log.Checkpoint("Next button is Enabled") 
      }
      if(typeBtn.hasAttribute('disabled'))
      {
        Log.Checkpoint("Type button is Disabled")
      }
      else{
        Log.Error("Type button is Enabled")
      }
      
    }
    if(i== chips.length-1)
    {
      chips[i].click();
      let previousBtn = page.FindElement("//button[contains(@class,'spec-prev btn')]");
      let nextBtn = page.FindElement("//button[contains(@class,'spec-next btn')]")
      let previousBtnClass= previousBtn.getAttribute('class')
      let nextBtnClass = nextBtn.getAttribute('class')
      
      if(previousBtnClass.includes('empty'))
      {
        Log.Error("Previous button is Disabled") 
      }
      else
      {
        Log.Checkpoint("Previous button is Enabled")
      }
      if(nextBtnClass.includes('empty'))
      {
        Log.Checkpoint("Next button is Disabled") 
      }
      else
      {
        Log.Error("Next button is Enabled") 
      }
      if(typeBtn.hasAttribute('disabled'))
      {
        Log.Checkpoint("Type button is Disabled")
      }
      else{
        Log.Error("Type button is Enabled")
      }
    }
  }
}