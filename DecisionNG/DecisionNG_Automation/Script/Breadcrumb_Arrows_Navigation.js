var page = Aliases.browser.pageSapiensDecision;
function Breadcrumb_Arrow_Click(dropdownToClick)
{
  let breadcrumb_DropdownBtn = page.FindElement("//dcn-breadcrumb//span[1][text()= '" + dropdownToClick  +"']//ancestor::a//following-sibling::dcn-breadcrumb-popup")
  breadcrumb_DropdownBtn.click();
}
function Select_OptionFrom_DropDown(optionToSelect)
{
  let options = page.FindElements("//*[contains(@class,'breadcrumb-popup-link')]//span")
  for(let i=0;i<options.length;i++)
  {
    let optionText = options[i].textContent
    if(optionText == optionToSelect)
    {
      options[i].click()
    }
  }
}