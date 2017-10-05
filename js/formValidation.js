var FormValidation = function () {
    
        var name = document.forms["contact"]["name"].value;
    
        function nameValidation(name) {
    
            if(name=="") {
                alert("Enter name, required");
                return false;
            }else if(name==[0-9]) {
                alert("Only alphabets");
            }
    
            return true;
        }

        nameValidation(name);
};