const API = "https://gibm.becknet.ch/warenhaus/getFiliale.php";
const API2 = "https://gibm.becknet.ch/warenhaus/getFiliale.php?filiale=[value]";

var twente = new XMLHttpRequest();
twente.open("GET",  API);
twente.send();
//AJAX erstellen

twente.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        document.getElementById("Dropdown").innerHTML = this.responseText;
        //Antwort von Options ausgeben in "Dropdown"
    }
};

document.getElementById("Dropdown").addEventListener("change", function() {
    console.log(this.value);
    var vitesse = new XMLHttpRequest();
    vitesse.open("GET", API2);
    vitesse.send();
    //AJAX erstellen, für wenn eine andere Option ausgewählt wird (change). 

    vitesse.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("Dropdown2").innerHTML = this.responseText;
        }
    }
});

