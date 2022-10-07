var page = Aliases.browser.pageSapiensDecision
function addButtonClick()
{
  let addButton = page.FindElement("//button[@class='add-btn-top-page']")
  addButton.click()
  
}
function okButtonClick()
{
  let okButton = page.FindElement("//button[@class='btn primary spec-confirmed']")
  okButton.Click();
}
function cancelButtonClick()
{
  let cancelButton =  page.FindElement("//button[contains(text(),'Cancel')]")
  cancelButton.Click();
}
function closeButtonClick()
{
  let closeButton =  page.FindElement("//button[contains(text(),'Close')]")
  closeButton.Click();
}
module.exports.okButtonClick = okButtonClick;
module.exports.cancelButtonClick = cancelButtonClick;
module.exports.addButtonClick = addButtonClick;
module.exports.closeButtonClick = closeButtonClick;