LØKKE DEL 1

"WHILE" løkke 2
let i = 1;
while (i <= 25) {
    console.log(i);
    i++
}

"DO.... WHILE" løkke 3
let i = 1;
do {
    console.log(i);
    i++;
}
while (i <= 25);

"FOR" løkke 3
for (let i = 1; i <= 25; i++) {
    console.log(i);
}

løkker 4
for (let årstal = 2017; årstal >= 1917; årstal--) {
    console.log(årstal);
}

løkke 5
let ugedage = ["mandag", "tirsdag", "onsdag", "torsdag", "fredag", "lørdag", "søndag"]

for (let i = 0; i < ugedage.length; i++) {
    console.log(ugedage[i])
}

LØKKE 6 ER "LØKKER.MD"


DEL 2

løkke 7
let navne = ["jann", "rebekka", "jc", "freddie", "karsten", "lone", "joy", "dan"];
navne.forEach(function (navne) {
    console.log(navne);
});

løkke 8
let musik = ["kaliber", "C", "mgk", "sleiman"];
musik.forEach(function (musik, index) {
    console.log(musik + "musik er på plads" + index);
});

løkke 9
let alle_tal = [3, 6, 9, 7, 32, 18, 10, 23, 47, 30];
alle_tal.forEach(function (tal, index, arr) {

    console.log(tal + ' er større end ' + arr[index + 1]);
});