function Breadcrumb_Verify_Navigation(breadcrumb_Toverify)
{
  let page = Aliases.browser.pageSapiensDecision2;
  let totalBreadcrumbs = page.FindElements("//*[@class='breadcrumb-link']//span[@class='breadcrumb-holder__tooltip--label ellipsis']");
  //Log.Message(totalBreadcrumbs.length)
  for(let i=1; i<= totalBreadcrumbs.length; i++)
  {
    if(i == totalBreadcrumbs.length-1)
    {
     let breadcrumb_Text = totalBreadcrumbs[i].textcontent

     //let breadcrumb_Toverify = "Non-Residential/Commercial Space Compliance"
     if(breadcrumb_Text.includes(breadcrumb_Toverify))
     {
       Log.Checkpoint("Navigated successfully using breadcrumb")
     }
     else
     {
       Log.Error("Navigation was not successful")
     }
    }
  }
}
module.exports.Breadcrumb_Verify_Navigation = Breadcrumb_Verify_Navigation;