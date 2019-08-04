function validateForm2(){
    var username = document.getElementById('username').value;
    var fullname = document.getElementById('fullname').value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("cpassword").value;


    
    if( fullname == "" ) {
        alert( "Please provide your fullname!" );
        fullname.focus() ;
        return false;
     }

    if( username == "" ) {
        alert( "Please provide your username!" );
        username.focus() ;
        return false;
    }

    
     if( password == "" ) {
        alert( "Please provide your password!" );
        password.focus() ;
        return false;
    }
    
     if( confirmPassword == "" ) {
        alert( "Please confirm your password!" );
        confirmPassword.focus() ;
        return false;
    }


    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;

     
}

function validateForm1(){
    var userName = document.getElementById('username1').value;
    var password = document.getElementById("password1").value;

    if( userName == "" ) {
        alert( "Please provide your name!" );
        userName.focus() ;
        return false;
     }

     if( password == "" ) {
        alert( "Please provide your password!" );
        password.focus() ;
        return false;
     }
     
}

function resetForm1(){
    document.getElementById("signInForm").reset();
    
}
