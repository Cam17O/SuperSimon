let a = 1;
let sequence = [];

let sequencejoueur = [];
let saisie = null;
let etape = 1;
let fin = "non";
const nbCouleurs = 4;

function generersequence(){
    sequence.push(Math.floor(Math.random() * nbCouleurs));
    console.table(sequence)
    return sequence;
}

function affichersequence(){
    for (let i = 0; i <= etape; i++){
        if (sequence[i] == 0){
            setTimeout(switchrouge,500*i);
        }
        if (sequence[i] == 1){
            setTimeout(switchvert,500*i);
        }
        if (sequence[i] == 2){
            setTimeout(switchjaune,500*i);
        }
        if (sequence[i] == 3){
            setTimeout(switchbleu,500*i);
        } 
    }
}

{/* permet de savoir quand le bouton start est appuyé */ }
let boutonStart = document.getElementById('start');
boutonStart.addEventListener('click', startgame);

{/* permet de savoir quand la case rouge est appuyé */ }
let btnrouge = document.getElementById('rouge');
btnrouge.addEventListener('click', function() {
    switche(0);
});

{/* permet de savoir quand la case vert est appuyé */ }
let btnvert = document.getElementById('vert');
btnvert.addEventListener('click', function() {
    switche(1);
});

{/* permet de savoir quand la case bleu est appuyé */ }
let btnbleu = document.getElementById('bleu');
btnbleu.addEventListener('click', function() {
    switche(2);
});

{/* permet de savoir quand la case jaune est appuyé */ }
let btnjaune = document.getElementById('jaune');
btnjaune.addEventListener('click', function() {
    switche(3);
});

{/* allume les bouton dans l'ordre */ }
function startgame() {
    {/* animation de debut */}
    setTimeout(allumerouge, 1000)
    setTimeout(allumevert, 1000)
    setTimeout(allumejaune, 1000)
    setTimeout(allumebleu, 1000)

    setTimeout(eteindrouge, 2000)
    setTimeout(eteindvert, 2000)
    setTimeout(eteindjaune, 2000)
    setTimeout(eteindbleu, 2000)

    setTimeout(allumerouge, 3000)
    setTimeout(allumevert, 3000)
    setTimeout(allumejaune, 3000)
    setTimeout(allumebleu, 3000)

    setTimeout(eteindrouge, 4000)
    setTimeout(eteindvert, 4000)
    setTimeout(eteindjaune, 4000)
    setTimeout(eteindbleu, 4000)

    setTimeout(allumerouge, 5000)
    setTimeout(allumevert, 5000)
    setTimeout(allumejaune, 5000)
    setTimeout(allumebleu, 5000)

    setTimeout(eteindrouge, 6000)
    setTimeout(eteindvert, 6000)
    setTimeout(eteindjaune, 6000)
    setTimeout(eteindbleu, 6000)

    {/* fin animation de debut */} 
    setTimeout(generersequence, 7000)
    setTimeout(affichersequence, 7000)  
}

{/* allume le bouton rouge */ }
function allumerouge() {
    let rouge = document.getElementById("rouge");
    rouge.classList.remove("off");
}
{/* eteind le bouton rouge */ }
function eteindrouge() {
    let rouge = document.getElementById("rouge");
    rouge.classList.add("off");
}
{/* allumer eteindre rouge */ }
function switchrouge() {
    let rouge = document.getElementById("rouge")
    if (rouge.classList.contains("off") == true) {
        allumerouge();
        sequencejoueur.push(0)
        setTimeout(eteindrouge, 500)
    }
}

{/* allume le bouton vert */ }
function allumevert() {
    let vert = document.getElementById("vert");
    vert.classList.remove("off");
}
{/* eteind le bouton vert */ }
function eteindvert() {
    let vert = document.getElementById("vert");
    vert.classList.add("off");
}
{/* allumer eteindre vert */ }
function switchvert() {
    let vert = document.getElementById("vert")
    if (vert.classList.contains("off") == true) {
        allumevert()
        sequencejoueur.push(1)
        setTimeout(eteindvert, 500)
    }

}

{/* allume le bouton jaune */ }
function allumejaune() {
    let jaune = document.getElementById("jaune");
    jaune.classList.remove("off");
}
{/* eteind le bouton jaune */ }
function eteindjaune() {
    let vert = document.getElementById("jaune");
    vert.classList.add("off");
}
{/* allumer eteindre jaune */ }
function switchjaune() {
    let jaune = document.getElementById("jaune")
    if (jaune.classList.contains("off") == true) {
        allumejaune()
        sequencejoueur.push(2)
        setTimeout(eteindjaune, 500)
    }

}

{/* allume le bouton bleu */ }
function allumebleu() {
    let bleu = document.getElementById("bleu");
    bleu.classList.remove("off");
}
{/* eteind le bouton bleu */ }
function eteindbleu() {
    let vert = document.getElementById("bleu");
    vert.classList.add("off");
}
{/* allumer eteindre bleu */ }
function switchbleu() {
    let bleu = document.getElementById("bleu")
    if (bleu.classList.contains("off") == true) {
        allumebleu()
        sequencejoueur.push(3)
        setTimeout(eteindbleu, 500)
    }

}

function switche(couleur){
    console.log(couleur)
    console.table(sequencejoueur)
    if (couleur == 0){
        switchrouge()
        sequencejoueur.push(couleur)
    }
    else if (couleur == 1){
        switchvert()
        sequencejoueur.push(couleur)
    }
    else if (couleur == 2){
        switchbleu()
        sequencejoueur.push(couleur)
    }
    else if (couleur == 3){
        switchjaune()
        sequencejoueur.push(couleur)   
    } 


    if (sequencejoueur[sequencejoueur.length -1] != sequence[sequencejoueur.length -1]){
        alert("perdu")
    }
    else if (sequencejoueur.length == sequence.length){
        console.log("manche gagne")
    }

}