

function logIn (username, password){
    let message = "";
    let specialUpper = /[A-Z]/g;
    let resultUpper = specialUpper.test(password);
    let specialLowerUser = /[a-z]/g;
    let resultLowerUser = specialLowerUser.test(username);
    let specialNum = /[0-9]/g;
    let resultNum = specialNum.test(password);
    let specialSimbol = /[@$!%*?&]/g;
    let resultSimbol = specialSimbol.test(password);
    
    
        if (username.length >= 8 && resultLowerUser === true && password.length >= 8 && resultUpper === true && resultNum === true && resultSimbol === true ) {
                    message = "login successful :)"
             } else if( username.length < 8 || resultLowerUser !== true ||password.length < 8 || resultUpper !== true || resultNum !== true || resultSimbol !== true){
                message = "username and password must be at least 8 characters long and password need at least one letter in UpperCase, one number, and one special characters @,#,$, %, ^, &"   
             } else {
                message = "error";
             }
             
             return message;       
            }

    console.log(logIn("katerina", "awawaaA@1"))
    

    
   