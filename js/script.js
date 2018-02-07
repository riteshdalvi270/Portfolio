'use strict';

var text = '{"employees":[{"firstName":"Ritesh","lastName":"Dalvi"}]}';

var parseJson = function() {
    return JSON.parse(text);
}

var obj = parseJson();
document.getElementById("name").innerHTML = obj.employees[0].firstName + " "+ obj.employees[0].lastName;
