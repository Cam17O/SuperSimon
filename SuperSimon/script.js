let a = 1;
let sequence = [];
let saisie = null;
let etape = 4;
const nbCouleurs = 4;

function generersequence(){
    for (let i = 0; i < etape; i++) {
        sequence[i] = Math.floor(Math.random() * nbCouleurs);;
      }
    return sequence;
}

function affichersequence(){
    for (let i = 0; i < etape; i++){
        if (sequence[i] == 0){
            switchrouge();
        }
        if (sequence[i] == 1){
            switchvert();
        }
        if (sequence[i] == 2){
            switchjaune();
        }
        if (sequence[i] == 3){
            switchbleu();
        }
        sleep(2000); 
    }
}

{/* permet de savoir quand le bouton start est appuyé */ }
let boutonStart = document.getElementById('start');
boutonStart.addEventListener('click', startgame);

{/* permet de savoir quand la case rouge est appuyé */ }
let btnrouge = document.getElementById('rouge');
btnrouge.addEventListener('click', switchrouge);

{/* permet de savoir quand la case vert est appuyé */ }
let btnvert = document.getElementById('vert');
btnvert.addEventListener('click', switchvert);

{/* permet de savoir quand la case bleu est appuyé */ }
let btnbleu = document.getElementById('bleu');
btnbleu.addEventListener('click', switchbleu);

{/* permet de savoir quand la case jaune est appuyé */ }
let btnjaune = document.getElementById('jaune');
btnjaune.addEventListener('click', switchjaune);

{/* allume les bouton dans l'ordre */ }
function startgame() {
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

    generersequence();
    console.log(sequence);
    setTimeout(affichersequence, 7000);


    etape = etape + 1;
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
        setTimeout(eteindrouge, 1000)
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
        setTimeout(eteindvert, 1000)
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
        setTimeout(eteindjaune, 1000)
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
        setTimeout(eteindbleu, 1000)
    }

}