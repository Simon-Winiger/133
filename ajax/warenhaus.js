const API = "https://gibm.becknet.ch/warenhaus/getFiliale.php";
const selectLocation = document.getElementById("selectLocation");
console.log("Dies ist das Dropdown", selectLocation);

// nicht "var" benützen sondern "let"
let request = new XMLHttpRequest();
request.open("GET", API);
request.send();
//AJAX erstellen

request.onreadystatechange = function () {
    if (this.readyState == 4 && request.status == 200) {
        // "+=" führt dazu, dass der Inhalt angehängt und nicht überschrieben wird.
        selectLocation.innerHTML += request.responseText;
        //Antwort von Options ausgeben in "Dropdown"
    }
};


selectLocation.addEventListener("change", function () {
    let selectedValue = selectLocation.value
    console.log("Ausgewähltes Element", selectedValue);

    // Request nur dürchführen, wenn das Element nicht "0 - Choose location ist"
    // if (selectedValue < 1) return;

    
    selectLocation.remove(0);


    // API URL zusammensetzen: "https://gibm.becknet.ch/warenhaus/getFiliale.php?filiale=[value]"
    const URL = API + "?filiale=" + selectedValue;
    request.open("GET", `${API}?filiale=${selectedValue}`);
    request.send();
    //AJAX erstellen, für wenn eine andere Option ausgewählt wird (change). 

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                document.getElementById("locationInfo").innerHTML = this.responseText;
            } else {
                alert("Fehler bei der Abfrage, versuchen Sie es erneut")
            }
        }
    }
});

