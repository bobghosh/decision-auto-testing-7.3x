//function Email_By_Script()
//{  
// 
//  if (SendMail("ClareJ@clarejeffersoncorp.com", "mail.johnsmithcorp.com", "John Smith", "JohnS@johnsmithcorp.com", "Notification", "Hello Clare, Your application is nice.", "C:\\File1.txt", "C:\\File2.txt"))
//  {
//    Log.Message("Mail was sent");
//  }
//  else
//  {
//    Log.Warning("Mail was not sent");
//  }
//
//}


function EventControl2_OnStopTest(Sender)
{
  var emailRecipients = "varsha.chitray@sapiens.com,sumant.pattanshetti@sapiens.com";

  SendMail(emailRecipients, "yoursmtp.yoursite.com", "QA", "", "Test Results", "message");

}