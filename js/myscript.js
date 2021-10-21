/* 
 Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
 Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
 il prezzo del biglietto è definito in base ai km (0.21 € al km)
 va applicato uno sconto del 20% per i minorenni
 va applicato uno sconto del 40% per gli over 65.
*/

//dichiarazione variabili
const prezzo = 0.21;
elemento = document.getElementById("mio_id");

// input dei dati
let km = prompt("Inserisci i Km che vuoi percorrere...");
let eta = parseInt(prompt("Inserisci la tua età per usufruire di eventuali sconti..."));

//elaborazione
let prezzoNoSconto = prezzo * km;

if(eta < 18){
    let scontoGiovani = prezzoNoSconto - prezzoNoSconto / 100 * 20;
    elemento.innerHTML = "Beneficiando dello sconto del 20%, il prezzo del tuo biglietto è: " + scontoGiovani + "€";
}else if(eta >= 65){
    let scontoAnziani = prezzoNoSconto - prezzoNoSconto / 100 * 40;
    elemento.innerHTML = "Beneficiando dello sconto del 40%, il prezzo del tuo biglietto è: " + scontoAnziani + "€";
}else{
    elemento.innerHTML = "Non beneficiando di sconti, il prezzo del tuo biglietto è: " + prezzoNoSconto + "€";
}

