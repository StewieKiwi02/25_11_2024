/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* 


function crazySum (a, b){

    if (a === b){
    
        return (a+b)*3
    }else{
    
        return a+b
    }

}

let primoValore = parseInt(prompt("Inserisci il primo valore:"))
let secondoValore = parseInt(prompt("Inserisci il secondo valore:"))

let risultato = crazySum (primoValore, secondoValore)

console.log("il risultato è: " + risultato)

*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* 

function boundary (a){

    if (a > 20 && a < 100){
    
      return true
    }else {
    
      return false
    }


}

let valore = parseInt(prompt("inserisci un valore a tua scelta:"))

let risultato = boundary(valore)
console.log(risultato)


*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* 

function reverseString (a){

    return a.split("").reverse().join("")
}

let stringa = prompt("inserisci una parola a piacere:")

let finale = reverseString(stringa)
console.log(finale)


*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* 

function upperFirst(str) {
    
    let parole = str.split(" ")

    let paroleMaiuscole = parole.map(parola => {
        return parola.charAt(0).toUpperCase() + parola.slice(1).toLowerCase();
    })

    return paroleMaiuscole.join(" ")
}


let frase = prompt("inserisci una frase a tup piacimento: ")

let finale = upperFirst(frase)
console.log(finale)


*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* 

function giveMeRandom (n){

    let randomArray = []
    for (let i = 0; i < n; i++){
    
        randomArray.push(Math.floor(Math.random() * 11))
    }

    return randomArray

}

let numero = parseInt(prompt("inserisci il numero di items che vuoi creare"))
let finale = giveMeRandom(numero)
console.log(finale)

*/

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* 

function area (l1, l2){

return l1*l2 

}

let primoValore = parseInt(prompt("inserisci la base:"))
let secondoValore = parseInt(prompt("inserisci l'altezza:"))

let finale = area(primoValore, secondoValore)
console.log("l'area del rettangolo è: " + finale)


*/

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* 

function crazyDiff (n){

    let differenza = Math.abs(n - 19) 
    
    if (differenza > 19){
    
        return differenza * 3
    }else {
    
        return differenza
    
    }


}

let valore = parseInt(prompt("inserisci un valore a scelta tra positivo o negativo:"))

let finale = crazyDiff(valore)
console.log(finale)


*/

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* 

function codify (str){

    if(str.startsWith("code")){
    
        return str
    }else{
    
        return "Code" + str
    }

}

let parola = prompt("inserisci una parola:")
let stringa = codify(parola)
console.log(stringa)

*/

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*

function check3and7 (n){

  return n % 3 === 0 || n % 7 === 0
}

let numeroIntero = parseInt(prompt("inserisci un numero intero positivo:"))
let finale = check3and7(numeroIntero)
console.log(finale) 



*/

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* 

function cutString (str){

 return str.slice(1, str.length - 1)

}

let parola = prompt("inserisci una parola")
let finale = cutString(parola)
console.log(finale)


*/
