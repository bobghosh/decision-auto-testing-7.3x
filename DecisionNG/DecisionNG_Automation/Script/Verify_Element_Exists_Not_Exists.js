function verify_Element_Exists_NotExists(Element,verify_Exists_Not_Exists)
{
  let page = Aliases.browser.pageSapiensDecision
  let elements = page.FindElements(Element)
  
  if(verify_Exists_Not_Exists=="Exists")
  {
    if(elements.length>0)
    {
      Log.Checkpoint("Element Exists on page")
    }
    else
    {
      Log.Error("Element does not Exists on page")
    }
  }
  else{
    if(elements.length>0)
    {
      Log.Error("Element Exists on page")
    }
    else
    {
      Log.Checkpoint("Element does not Exists on page")
    }
  
  }
  
}