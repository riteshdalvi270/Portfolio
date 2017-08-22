'use strict';

var formValidation = function () {

return {
    nameValidation: function() {
        
        this.name = document.forms["contact"]["name"].value;
        
        if(this.name=="") {
            alert("Enter name, required");
            return false;
        }else if(this.name==[0-9]) {
            alert("Only alphabets");
        }

        return true;
    },
    
    addressValidation: function() {
        
    }
  }
};

var nameValidation = formValidation().nameValidation;

document.getElementById('submit').addEventListener('click',nameValidation);
