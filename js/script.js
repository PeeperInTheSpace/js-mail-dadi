// Dichiaro le variabili che rappresentano i dadi

let dadoblu;
let dadorosso;

// 

dadoblu = Math.floor(Math.random()*6)+1;

console.log(dadoblu);

dadorosso = Math.floor(Math.random()*6)+1;

console.log(dadorosso);


if (dadoblu == dadorosso) {

    alert("Parità")

}

else if (dadoblu > dadorosso) {

    alert("Dado Blu vince!")

}

else {

    alert("Dado Rosso vince!")

}