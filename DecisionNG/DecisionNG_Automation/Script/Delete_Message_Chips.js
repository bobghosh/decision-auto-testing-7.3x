function DeleteMessage_Chips_Verify(message)
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
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '%'+message.substr(1)+'%' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='%'+message.substr(1)+'%')
                        {
                          Log.Error('%'+message.substr(1)+'%'+" : Message Chip Exists")
                          break
                        }
                        if(k== chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('%'+message.substr(1)+'%'+" : Message Chip Not Exists")
                          break;
                        }
                     }
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
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '<'+message.substr(1)+'>' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='<'+message.substr(1)+'>')
                        {
                          Log.Error('<'+message.substr(1)+'>'+" : Message Chip Exists")
                          break
                        }
                        if(k == chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('<'+message.substr(1)+'>'+" : Message Chip Not Exists")
                          break;
                        }
                     }
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
                   Log.Message('('+message.substr(1)+')')
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '(Value:'+message.substr(1)+')' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='(Value:'+message.substr(1)+')')
                        {
                          Log.Error('(Value:'+message.substr(1)+')'+" : Message Chip Exists")
                          break
                        }
                        if(k == chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('(Value:'+message.substr(1)+')'+" : Message Chip Not Exists")
                          break;
                        }
                     }
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
                   Log.Message('('+message.substr(1)+')')
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '(Operator:'+message.substr(1)+')' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='(Operator:'+message.substr(1)+')')
                        {
                          Log.Error('(Operator:'+message.substr(1)+')'+" : Message Chip Exists")
                          break
                        }
                        if(k == chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('(Operator:'+message.substr(1)+')'+" : Message Chip Not Exists")
                          break;
                        }
                     }
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
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '@'+message.substr(1)+'@' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='@'+message.substr(1)+'@')
                        {
                          Log.Error('@'+message.substr(1)+'@'+" : Message Chip Exists")
                          break
                        }
                        if(k == chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('@'+message.substr(1)+'@'+" : Message Chip Not Exists")
                          break;
                        }
                     }
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
                   Log.Message('#'+"RF Name"+'#')
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '#'+"RF Name"+'#' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='#'+"RF Name"+'#')
                        {
                          Log.Error('#'+"RF Name"+'#'+" : Message Chip Exists")
                          break
                        }
                        if(k == chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('#'+"RF Name"+'#'+" : Message Chip Not Exists")
                          break;
                        }
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
                   Log.Message('!'+"Row ID"+'!')
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '!'+"Row ID"+'!' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='!'+"Row ID"+'!')
                        {
                          Log.Error('!'+"Row ID"+'!'+" : Message Chip Exists")
                          break
                        }
                        if(k == chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('!'+"Row ID"+'!'+" : Message Chip Not Exists")
                          break;
                        }
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
                   let deleteIcon = page.FindElements("//*[contains(@class,'chips__delete')]")
                   if(chipText == '"'+message+'"' )
                   {
                     deleteIcon[j].click();
                     Delay(1000);
                     let chipsAfterDelete = page.FindElements("//dcn-message-element-chips//dcn-chips//div/div") 
                     
                     for(let k=0;k<chipsAfterDelete.length;k++)
                     {
                       let chipTextAfterDelete = chipsAfterDelete[k].textContent.trim()
                       if(chipTextAfterDelete=='"'+message+'"')
                        {
                          Log.Error('"'+message+'"'+" : Message Chip Exists")
                          break
                        }
                        if(k == chipsAfterDelete.length-1)
                        {
                          Log.Checkpoint('"'+message+'"'+" : Message Chip Not Exists")
                          break;
                        }
                     }
                     break;  
                   }
                 }               
                 break;
            }
        }
    
}