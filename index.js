let eEYlikon = 0
let eEEnergy = 0
let eEsintirisi = 0
let eEAsfalistron = 0
let eEAposvesis = 0
let eVresergazomenon= 0

let eAAYlon = 0
let eAErgatikon= 0


let AKostosAYlon= document.getElementById('AKostosAYlon')
let AKostosAmesisErgasias= document.getElementById('AKostosAmesisErgasias')
let AVresAmesisErgasias= document.getElementById('AVresAmesisErgasias')

let GBE = 0
let GBEParag = 0


function Calculate() {
    eEYlikon = parseInt(document.getElementById('eEYlikon').value)
    eEEnergy = parseInt(document.getElementById('eEEnergy').value)
    eEsintirisi = parseInt(document.getElementById('eEsintirisi').value)
    eEAsfalistron = parseInt(document.getElementById('eEAsfalistron').value)
    eEAposvesis = parseInt(document.getElementById('eEAposvesis').value)
    eAAYlon = parseInt(document.getElementById('eAAYlon').value)
    eAErgatikon= parseInt(document.getElementById('eAErgatikon').value)
    eVresergazomenon = parseInt(document.getElementById('eVresergazomenon').value)
    GBE = eEYlikon + eEEnergy + eEsintirisi + eEAsfalistron + eEAposvesis

    //Υπολογισμος Ωρες Αμεσης Εργασιας
    
    Avresamesisergasias.textContent = GBE/eVresergazomenon + "|| Η επιβαρυνση επι των ωρων αμεσης εργασιας για καθε κεντρο κοστους"

    //Υπολογισμος Κοστους Α Υλων
    
    AKostosAYlon.textContent = (GBE / eAAYlon)*100 + "%  || Ποσοστο κοστους επιβαρυνσης Α' Υλων για καθε κεντρο κοστους"

    //Υπολογισμος Κοστου Αμεσης Εργασιας
   
    AKostosAmesisErgasias.textContent = (GBE/eAErgatikon)*100 + "% || Ποσοστο επιβαρυνσης στο κοστος εργατικων για καθε κεντρο κοστους"
    


}