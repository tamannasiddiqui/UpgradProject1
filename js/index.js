 //Get the create modal post
 var createModalPost = document.getElementById("createPostModal");

 //Get the button that opens the create post mmodal
 var createBtn = document.getElementById("createPost");

 //Get the <span> element that closes the modal
 var span =  document.getElementById('closePost');

 //when the user clicks on <span> , modal closes
 span.onclick = function()
 {
     createModalPost.style.direction = "none";
 }

//Function specifies what happens on clicking the create post button--clears the field
function sumbitCreatePost()
{
    window.location.reload();
}
