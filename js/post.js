
//Function specifies what happens on-clicking the edit button
function editPost()
{
    document.getElementById('editButton').innerHTML = "Save "+'<i class="fa fa-save"></i>';
    
    document.getElementById('blogBody').contentEditable = "true";
    document.getElementById('blogBody').style="border: 2px solid pink";
  
    document.getElementById('blogTitleNew').contentEditable = "true";
    document.getElementById('blogTitleNew').style="border: 2px solid pink";


}

//Function specifies what happens on-clicking the Comment button
function commentDisplay(id)
{
   var addComment = id.value +'<br>';
   var a = document.getElementById('userComments');
   document.getElementById('addComments').innerHTML += '<p>'+addComment+'</p>';          
   a.value=a.defaultValue;

}

//Function specifies what happens on-clicking the Like button
var numberOfClicks = 0;
function postLiked()
{
    document.getElementById('likeBlog').innerHTML ='<i class="fa fa-thumbs-up">'+" Liked!";
    numberOfClicks +=1;
    if(numberOfClicks!=0){
        if (numberOfClicks==1){
            document.getElementById('likeCount').innerHTML = numberOfClicks + " person likes this!";
        }
        else {
            document.getElementById('likeCount').innerHTML = numberOfClicks + " people have liked this!";
        }
        }

}