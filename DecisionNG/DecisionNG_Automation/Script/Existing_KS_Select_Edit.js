function Existing_KS_Select_Edit(AssetName){
  let page =Aliases.browser.pageSapiensDecision2;
  
  //let AssetName="Validate Tuition Fee Loan_KS_Auto_Add_Info [2.0]";
  let KS_List_Elements=page.FindElements("//dcn-asset-knowledge-sources-list//div//span[contains(@class,'ks-list-component')]");
 
  let flag=0;
  let i;
  for(i=0;i<KS_List_Elements.length;i++){
    
    let KS_ElementText =KS_List_Elements[i].textContent.trim();
    
    if(AssetName.trim() == KS_ElementText)
    {
      //Log.Message("i value is "+ i);
      flag="1";
      KS_List_Elements[i].Click(); 
      Delay(1000);   
       //once the asset is selected checking whether fields are enabled or disabled  
      if((page.FindElement("//div//span//input[@name='ksName']").hasAttribute('readonly'))&& (page.FindElement("//div//span//input[@name='ksVersion']").hasAttribute('readonly'))) 
      {
        Log.Checkpoint(AssetName+" fields are not editablei.e.Read only");
            
        let element = page.FindElement("//*[contains(@class,'knowledge-source__details')]").Child(1);
        
        
        if(element.getAttribute('class').includes('knowledge-source__dialog__error')){
          
          Log.Error(page.FindElement("//span[@class = 'error_message']").textContent);
        }
        else{   
        //if fields are disabled and no warning then click on enable editing
        page.FindElement("//dcn-action-panel//span//a").click();
       
          Delay(2000);
        if((page.FindElement("//div//span//input[@name='ksName']").hasAttribute('readonly'))&& (page.FindElement("//div//span//input[@name='ksVersion']").hasAttribute('readonly')))
        {
          Log.Error(AssetName+" fields are not editable even after clicking on Enable Editing");
        }
        else{
          Log.Checkpoint(AssetName+" fields are editable on click of Enable Editing option");
        }
          
       } 
       
      }
      else{
        Log.CheckPoint(AssetName +" already exists as Draft Version and fields are Editable");
      }
  break;    
   } 
  
  }
//if asset is not selected but it checks the entire list then ks doesn't exist.
if ((flag=="0") && (i == KS_List_Elements.length)){

      Log.Error(AssetName+" doesn't exist in the list of knowledge sources");
}
  
}