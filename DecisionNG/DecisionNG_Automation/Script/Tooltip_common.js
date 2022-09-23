//USEUNIT RefLibrary

function returnTooltipText_canvas(canvasText, preference)
{

  //--canvasText = "Tuition Fee Loan" --preference = spLeftMost(in keyword test add this as code)
  
  let page = Aliases.browser.pageSapiensDecision2.canvas
  OCR.Recognize(page).BlockByText(canvasText, preference).HoverMouse();
  var tipText = page.WaitElement("//*[contains(@class, 'p-tooltip-text')]",5000).innerText;
  
  //--capture this return value in KeyworT as variable and set Last operation result
  return tipText
}

function returnTooltipText_element(object, hoverX, hoverY)
{
  let page = Aliases.browser.pageSapiensDecision2
      page.WaitElement(object, -1).HoverMouse(hoverX, hoverY);
      
  var tipText = page.WaitElement("//*[contains(@class, 'p-tooltip-text')]",5000).innerText;
  
  //--capture this return value in KeyworT as variable and set Last operation result
  return tipText
}