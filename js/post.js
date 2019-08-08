function editPost()
{
    document.getElementById('editButton').innerHTML = "Save "+'<i class="fa fa-save"></i>';

    document.getElementById('blogBody').contentEditable = "true";
    document.getElementById('blogBody').style="border"

    document.getElementById('blogTitleNew').contentEditable = "true";

}

function commentDisplay(id)
{
   var addComment = id.value +'<br>';
   var a = document.getElementById('userComments');
   if(addComment=="")
   {
       alert("Enter comments!");
   }

   else
   {
       document.getElementById('addComments').innerHTML +='<p>'+addComment+'</p>';
       a.value=a.defaultValue;
   }

}

// function addComment(id){
//     var addEventName = id.value +'<br>';
//       var a = document.getElementById('userComments');
//       document.getElementById('addEventNames').innerHTML += '<p>'+addEventName+'</p>';          
//       a.value=a.defaultValue;
// }