//Function specifies what happens on clicking 'Yes' on the delete modal
function deleteYes(){
    alert("The post will be deleted!");
   
} 
//Get the <span> element that closes the SignIn modal
var span =  document.getElementById('signInModal');

//when the user clicks on <span> , modal closes
span.onclick = function()
{
    signInModal.style.direction = "none";
}
 
//Get the <span> element that closes the SignUp modal
var span =  document.getElementById('signUp');

//when the user clicks on <span> , modal closes
span.onclick = function()
{
    signUp.style.direction = "none";
}




 