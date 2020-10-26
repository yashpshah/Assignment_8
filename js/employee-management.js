/*eslint-env browser*/
employee = [["Sally Smith", "Quality Assurance", 3423], ["Mark Martin", "VP Sales", 3346], ["John Johnson", "Marketing", 3232], ["Yash", "Development", 3244], ["Abhishek", "designing", 3255]]

var btnadd = window.document.getElementById("add");
btnadd.addEventListener("click", add);

function display() {
    "use strict";
    window.document.getElementById("num").innerHTML = employee.length;
    var tbody = window.document.getElementById("tablebody");
    var content = "";
    for (var i = 0; i < employee.length; i += 1) {
        content += '<tr>';
        for (var j = 0; j < employee[i].length; j += 1) {
            content += '<td>' + employee[i][j] + '</td>';
        }
        content += '<td><button class="btn" id=' + i + ' onClick="del(id)">Delete</button></td></tr>';
    }
    tbody.innerHTML = content;
}

display();

function add() {
    "use strict";
    var txtName = window.document.getElementById("name");
    var txtTitle = window.document.getElementById("title");
    var txtExt = window.document.getElementById("extension");
    if (!txtName.value) {
        window.document.getElementById("nError").innerHTML = " Please Enter a valid name";
    }
    else {
        window.document.getElementById("nError").innerHTML = "";
    }
    if (!txtTitle.value) {
        window.document.getElementById("tError").innerHTML = " Please Enter a valid title";
    }
    else {
        window.document.getElementById("tError").innerHTML = "";
    }
    if (!txtExt.value) {
        window.document.getElementById("eError").innerHTML = " Please Enter a valid extension";
    }
    else {
        window.document.getElementById("eError").innerHTML = "";
    }
    if (txtName.value && txtTitle.value && txtExt.value) {
        var newRow = [txtName.value, txtTitle.value, txtExt.value];
        employee.push(newRow);
        txtName.value="";
        txtTitle.value="";
        txtExt.value="";
        display();
    }
}

function del(id) {
    employee.splice(id, 1);
    display();
}
