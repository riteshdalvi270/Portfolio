var FormValidation = function () {
    
        var name = document.forms["contact"]["name"].value;

        nameValidation(name);

        var email = document.forms["contact"]["name"].value;

        emailValidation(email);
};

var nameValidation = function(name) {
    
            if(name=="") {
                alert("Enter name, required");
                return false;
            }else if(name==[0-9]) {
                alert("Only alphabets");
            }
    
            return true;
        }

var emailValidation = function emailValidation(email) {
    
                if(email=="") {
                    alert("Enter email Id, required");
                }
    }
