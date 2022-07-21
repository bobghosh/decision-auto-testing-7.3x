function PictureToLog()
{
  var w = Sys.Desktop.Picture();
  Log.Picture(w, "Screen Image");
}
module.exports.PictureToLog = PictureToLog;