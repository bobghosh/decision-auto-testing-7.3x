//USEUNIT RefLibrary

function imageCompare(expectedImg,runTimeObj){

//  imageCompare("TC_001", Aliases.browser.pageSapiensDecision2.canvas)
  
  Aliases.browser.pageSapiensDecision.FindElement("//div[@role='img']").HoverMouse();
  let actualImg = runTimeObj
//  let objTest=actualImg.Picture()
//  Regions.AddPicture(objTest,expectedImg,false,Project.Path+"\Stores\\Regions\\")
  
  Log.Message("Expected Image Name:"+expectedImg)
  Log.Picture(Regions.GetPicture(expectedImg) ,"Expected Image is ")
  Log.Picture(actualImg,"Actual Image is ")

  if(Regions.Compare(expectedImg,runTimeObj,false,false,true,0,2)){
    Log.Checkpoint("Actual image is identical with expected image")
    return true
  }
  else{
    Log.Warning("Actual Image is not matching with Expected Image. Please Confirm Manually")
    return false 
  }
}

//*****************************************************************************************************
function imageCompareWithTolerance(expectedImg,runTimeObj,strTol){
 
  let actualImg = runTimeObj
//  Set objTest=actualImg.Picture
//  Regions.AddPicture objTest,expectedImg,False,Project.Path+"\Stores\\""
  Log.Message("Expected Image Name:" &expectedImg)
  Log.Picture(Regions.GetPicture(expectedImg) ,"Expected Image is ")
  Log.Picture(actualImg,"Actual Image is ")  

  if(Regions.Compare(expectedImg,runTimeObj,"","","",strTol,"")){
    Log.Checkpoint("Actual image is identical with expected")
    return true;}
  else{
    Log.Warning("Actual Image is not matching with Expected Image. Please Confirm Manually")
    return false
  }
  
}