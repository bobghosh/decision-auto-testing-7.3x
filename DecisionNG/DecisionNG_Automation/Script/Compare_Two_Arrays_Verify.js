function compareArrays(Compare_Array1, Compare_Array2) 
{

        var arr1 =new Array();
        var arr2 = new Array();
  
        arr1= Compare_Array1.toString().split(",");
        arr2= Compare_Array2.toString().split(",");       
        for(let i=0; i<arr1.length; i++) 
        {

            if(arr1[i] != arr2[i])
            {
                Log.Error('The Compared Items are different: '+arr1[i] + "|" +arr2[i]);
                 
            }
            else 
            {
                Log.Checkpoint('The Compared Items are same: '+arr1[i] + "|" +arr2[i]);
            }

        }
  }
module.exports.compareArrays = compareArrays;