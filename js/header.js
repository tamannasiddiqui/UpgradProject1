
//Function called on clicking the Sign In button
function sumbitSignIn()
{
    //Gets the username field and clears it
    document.getElementById('username1').innerHTML="";

    //Get the value of the password field and clears it
     document.getElementById("password1").innerHTML="";
     
       
}

//Function called on clickig the Sign Up Button
function sumbitSignUp()
{      
    //Gets the fullname and clears it
    document.getElementById('fullname').innerHTML="";

    //Gets the username field and clears it
     document.getElementById('username').innerHTML="";

    //checks if the password and the confirm password matches
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("cpassword").value;

    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
     return true;
     

}

 
