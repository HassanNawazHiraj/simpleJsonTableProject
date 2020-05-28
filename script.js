var list = [];

function loadAllPeople() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            list = JSON.parse(this.responseText);
            showAllPeople();
        }
    };
    xhttp.open("GET", "geslachten.json", true);
    xhttp.send();
}

function showAllPeople() {
    var table = document.getElementById("tableBody");
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
    list.forEach(function(person, index) {
        var row = table.insertRow();
        var forenameCell = row.insertCell(0);
        var personCell = row.insertCell(1);
        var genderCell = row.insertCell(2);
        var pictureCell = row.insertCell(3);

        forenameCell.appendChild(document.createTextNode(person.forename));
        personCell.appendChild(document.createTextNode(person.name));
        var genderPicture = document.createElement("img");
        if (person.gender == "man") {
            genderPicture.src = "images/" + "man.png";
        } else {
            genderPicture.src = "images/" + "vrouw.png";
        }
        genderCell.appendChild(genderPicture);
        var picture = document.createElement("img");
        picture.src = "images/" + person.picture;
        pictureCell.appendChild(picture);
    });
}

function showMaleOnly() {
    hideGender("vrouw");
}

function showFemaleOnly() {
    hideGender("man");
}

function hideGender(gender) {
    var table = document.getElementById("tableBody");
    for (var i = 0, row; row = table.rows[i]; i++) {
        var genderOfRow = row.cells[2].innerText;
        if (genderOfRow == gender) {
            row.style.display = "none";
        } else {
            row.style.display = "";
        }
    }
}