# Funktioner

## Hvad er en funktion
En funktion lader dig opbevare et stykke kode. Som udføre en opgave inde i en defineret block/kasse. Det et stykke kode du kan kalde til når du vil, altså en kode du kan genbruge så tosset du vil, så længe du kalder til den.

### Eksempel:
```javascript
    function safeMultiply(x, y) {

        console.log("tal " + x + " gange med tal " + y, "er lig med " + (x * y));
    }
    safeMultiply(13, 7);
```

Denne funktion, tager og ganger de to tal som er blevet oplyst når funktionen bliver kaldt på. Samt at den ligger lidt skrift oven i mit resultat.

## Hvad er et argument
1. et argument, efter hvad jeg har forstået på det hele. er stort set bare "funktionens navn".
1. i mit kode eksempel her over, er argumentet "safeMultiply". dette bliver brugt når jeg kalder til functionen.

## Hvad er en returværdi
en returværdi er på råt dansk: resultatet du for udprintet fra din funktion.

### Eksempel:
```javascript
    function Multiply(x, y) {   
        if (isNaN(x) || isNaN(y)) { 
            return "er ikke et nummer"; 
        }
    else {
        return x * y;               
    }
    }
    console.log(Multiply(13, 2))
```