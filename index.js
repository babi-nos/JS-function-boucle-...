// 3 facon de declarer une function

// function bonjour() {
//     console.log('salut');
// }

// const hola = function () {
//     console.log('salut');
// }

// const bonjourno = () => {
//     console.log('salut');
// }

// COMPRENDRE LES FUNCTION UTIISER AVEC DES PARAMETRE

// function bonjour(nom) {
//   console.log("salut" + nom);
// }

// bonjour(" didier");  // Dasn mon consol.log je donne un nom ce qui me donne salut didier
// bonjour(" sami");  // Dasn mon consol.log je donne un nom ce qui me donne salut sami

// function plus(compteur) {
//     compteur++;
//     return compteur;
// }

/**************************************************************************************************************************/

// let compteur = 1;
// compteur = plus(compteur)
// console.log(compteur);

// const tableau = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const addition = () => {
//   let somme = 0;
//   for (let i = 0; i < tableau.length; i++) {
//     somme += tableau[i];
//   }

//   return console.log(somme);
// };

// addition();

// console.log(somme);

/**************************************************************************************************************************/

// FUNCTION TROUVER LE PLUS GRAND NOMBRE

// const tab = [12, 45, 78, 64, 45,48,654,61,56,1856,1684,168,1,68,1,65,1,650,6,315065,3,41,05,6,31,065,3, 12, 54, 65, 12, 48, 63];

// // console.log(tab[0]);

// function maxNombre() {
//   let maximum = tab[0];
//   for (let i = 1; i < tab.length; i++) {
//     if (tab[i] > maximum) {
//       maximum = tab[i];
//     }
//   }
//   return console.log(maximum);;
// }
// maxNombre();

/**************************************************************************************************************************/

// FUNCTION TROUVER LE PLUS PETIT NOMNRE

// const tab = [12, 45, 78, 64, 45,48,654,61,56,1856,1684,168,1,68,1,65,1,650,6,315065,3,41,05,6,31,065,3, 12, 0.2, 54, 65, 12, 48, 63];

// // console.log(tab[0]);

// function minNombre() {
//   let minimum = tab[0];
//   for (let i = 1; i < tab.length; i++) {
//     if (tab[i] < minimum) {
//         minimum = tab[i];
//     }
//   }
//   return console.log(minimum);;
// }
// minNombre();

/**************************************************************************************************************************/

//FUNCTION TRoUVER LE NOMBRE DE VOYELLE

// const chaine = "je suis un jeune jouer de brighton et je suis acuellement en mls au los angles galaxies ";

// function compterLEsVoyelle() {
//   let voyelle = "aeiouyAEIOUY";
//   let compteur = 0;
//   let compteurConsonnes = 0;
//   let compteurEspace = 0;

//   for (let i = 0; i < chaine.length; i++) {
//     if (voyelle.includes(chaine[i])) {
//       compteur++;
//     } else if (chaine[i] == " ") {
//       compteurEspace++;
//     } else {
//       compteurConsonnes++;
//     }
//   }
//   return console.log(
//     `Dans ce texte: "${chaine}"Il y a ${compteur} voyelle ${compteurConsonnes} Consonnes et ${compteurEspace} espace`
//   );
// }

// compterLEsVoyelle();

/**************************************************************************************************************************/

// FUNCTION QUI INVERSE LES MAJ ET LE MIN

// let string =
//   "Bonjour mon BravE aveZ Vous DE la MArmelaDE Mon PETioit SaaalOpio";

// function reversLowUpCase() {
//   let newChaine = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i].toUpperCase()) {
//       newChaine += string[i].toLowerCase();
//     } else {
//       newChaine += string[i].toUpperCase();
//     }
//   }
//   return console.log(newChaine);
// }

// reversLowUpCase();

/**************************************************************************************************************************/
// FUNCTION QUI ME PERMET D'INVERSé LES MOTS (rikiki tout suis je samy c'est moi amis les salut)

// let chaine = "salut les amis moi c'est samy je suis tout rikiki";

// function reverseWord() {
//   let chainSplit = chaine.split(" ").reverse();
//   let newChaine = "";
//   for (let i = 0; i < chainSplit.length; i++) {
//     newChaine += chainSplit[i] + " ";
//   }
//   return console.log(newChaine);
// }

// reverseWord();

/**************************************************************************************************************************/
// Une fonction qui prend un tableau de chaînes de caractères en entrée et renvoie une nouvelle chaîne contenant toutes les chaînes concaténées, séparées par des virgules.

// const tab = [
//   {
//     string: "salut c'est encore samy ",
//   },
//   {
//     string: "j'aimerai savoir ce que devien le pc ",
//   },
//   {
//     string: "Car j'aimeria bien apprendre si tu vois ce que je veux dire ",
//   },
//   {
//     string: "Apprendre quoi samy ",
//   },
//   {
//     string: "LE javascriptn mon peiti ",
//   },
// ];

// function concatenneesString() {
//   let newChaine = "";
//   for (let i = 0; i < tab.length; i++) {
//     newChaine += tab[i].string;
//     if (i < tab.length - 1) {
//       newChaine += ", ";
//     }
//   }
//     return console.log(newChaine);
// }

// concatenneesString();

/**************************************************************************************************************************/

// FUNCTION QUI ME PERMET DE SAVOIR SI IL Y A BIEN UNE BANANE OU AUTRE

// const panier = ["poire", "pomme", "banane", "cerise", "legume"];

// console.log(panier.includes("banane")); // JUSTE AVEC INCLUDE PAS BESOIN DE FUNCTION 


// function inMyPanier(monFruit) {
    
//   for (let fruit of panier) {
//     if (fruit === monFruit) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(inMyPanier("Banane"));


/**************************************************************************************************************************/
// BOUCLE FOR OF 