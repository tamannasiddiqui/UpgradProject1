
//Function specifies what happens on-clicking the edit button
function editPost()
{
    //toggling between save and edit button
    var buttonEdit = document.getElementById('editButton');
    buttonEdit.style.display = "none";
    var buttonSave = document.getElementById('saveButton');
    buttonSave.style.display = "block"; 
    
    //making the content editable
    document.getElementById('blogBody').contentEditable = "true";
    document.getElementById('blogTitleNew').contentEditable = "true";

    //highlights the editable area
    document.getElementById('blogBody').style="border: 2px solid pink";   
    document.getElementById('blogTitleNew').style="border: 2px solid pink";


}

function savePost(){
    
    //toggling between save and edit button
    var buttonSave1 = document.getElementById('saveButton');
    buttonSave1.style.display = "none";
    var buttonEdit1 = document.getElementById('editButton');
    buttonEdit1.style.display = "block";

    //making the content non-editable, saving it
    document.getElementById('blogBody').contentEditable = "false";
    document.getElementById('blogTitleNew').contentEditable = "false";

     //highlights the editable area
    document.getElementById('blogBody').style="border : none";
    document.getElementById('blogTitleNew').style="border: none";

}

//Function specifies what happens on-clicking the Comment button
function commentDisplay(id)
{
   if(id.value!="")
    {
        var addComment = id.value + '<br>';
        document.getElementById('addComments').innerHTML +='<p id="commentAdded">'+ addComment +'</p>'+'<br>';    
        var addComment = document.getElementById('userComments');      
        addComment.value = addComment.defaultValue;

    }
    else{
        alert('Enter comments to display');
    }
   
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