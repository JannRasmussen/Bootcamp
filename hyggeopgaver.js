// HYGGE OPGAVER

// fix koden 1
//                         NOTAT:  jeg tilføjede "+" før de enkelte "="
// let navn = "";
// let alder = "";
// let adresse = "";

// let fejlbeskeder = "";

// if (navn == "") {
//     fejlbeskeder += "Du skal udfylde navn feltet\n";
// }

// if (alder == "") {
//     fejlbeskeder += "Du skal udfylde alder feltet\n";
// }

// if (adresse == "") {
//     fejlbeskeder += "Du skal udfylde adresse feltet\n";
// }

// console.log(fejlbeskeder);


// fix koden 2
//                      NOTAT: jeg tilføjede "+" før de enkelte "="
// var brugernavn = "";
// var password = "";
// var email = "";

// var fejlbeskeder = [];

// if (brugernavn == "") {
//     fejlbeskeder += ["Du skal udfylde brugernavn feltet\n"];
// }

// if (password == "") {
//     fejlbeskeder += ["Du skal udfylde password feltet\n"];
// }

// if (email == "") {
//     fejlbeskeder += ["Du skal udfylde email feltet\n"];
// }

// console.log(fejlbeskeder);


// fibonacci

// let fibonacci_series = function (n) {
//     if (n === 1) {
//         return [0, 1];
//     }
//     else {
//         let s = fibonacci_series(n - 1);
//         s.push(s[s.length - 1] + s[s.length - 2]);
//         return s;
//     }
// };

// console.log(fibonacci_series(17));


// palindrome
// function checkPalindrome(word) {
//     var l = word.length;
//     for (var i = 0; i < l / 2; i++) {
//         if (word.charAt(i) !== word.charAt(l - 1 - i)) {
//             return false;
//         }
//     }
//     return true;
// }

// if (checkPalindrome("sur rus")) {
//     console.log("The word is a palindrome");
// } else {
//     console.log("The word is NOT a palindrome");
// }


// plumbus
// for (let tal = 1; tal <= 20; tal++) {
//     let resultalt = tal;
//     if (tal % 3 == 0) {
//         resultalt = "plum";
//     }
//     if (tal % 5 == 0) {
//         resultalt = "bus";
//     }
//     if (tal % 15 == 0) {
//         resultalt = "plum bus";
//     }
//     console.log(resultalt);
// }