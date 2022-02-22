////////////////////Bill////////////////////////////////////////////////////////////////////

/* Detecteur input activé */

bill.addEventListener('input', setBillValue);

/* valeur de base */

let billValue = 0.0;


/* chiffre only */

function validateFloat(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}


/* veirfie si il y a uniquement chiffre, empéche d'écrire lettre*/

function setBillValue() {
    if (bill.value.includes(',')) {
        bill.value = bill.value.replace(',', '.');
    }

    if (!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length - 1);
    }

/* sélection dans input et parsefloat selection uniquement chiffre */

   billValue = parseFloat(bill.value);
    console.log('prix',billValue);
}


////////////////////tip////////////////////////////////////////////////////////////////////


let tipValue = 1;

const cadre = document.querySelectorAll('.cadre');
const five = document.querySelector(".five");
const ten = document.querySelector(".ten");
const fifteen = document.querySelector(".fifteen");
const twentyfive = document.querySelector(".twentyfive");
const fifty = document.querySelector(".fifty");
const custom = document.querySelector(".custom");


function removebtn(){  
   document.getElementById('customvalue').value = "";
   custom.classList.remove("inputactive");

   cadre.forEach(btn => {
     btn.classList.remove("active");
    });
}


/* 5% */

five.addEventListener("click", () => {
 
 removebtn();
 five.classList.add("active")
 tipValue = parseFloat(1.05);
})

/* 10% */

ten.addEventListener("click", () => {
    
  removebtn();  
  ten.classList.add("active")
  tipValue = parseFloat(1.1);
})

/* 15% */

fifteen.addEventListener("click", () => {
    
  removebtn();
  fifteen.classList.add("active")
  tipValue = parseFloat(1.15);
})

/* 25% */

twentyfive.addEventListener("click", () => {
    
  removebtn();
  twentyfive.classList.add("active")
  tipValue = parseFloat(1.25);
})

/* 50% */

fifty.addEventListener("click", () => {
    
  removebtn();
  fifty.classList.add("active")
  tipValue = parseFloat(1.5);
})

/* Custom */

custom.addEventListener("click", () => {
    
 cadre.forEach(btn => {
 btn.classList.remove("active");
});

  custom.classList.add("inputactive")
})

customvalue.addEventListener('input', setcustomvalue);

let customvaluebasic = 0;

function validateFloat2(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function setcustomvalue() {
    if (customvalue.value.includes(',')) {
        customvalue.value = customvalue.value.replace(',', '.');
    }

    if (!validateFloat2(customvalue.value)) {
        customvalue.value = customvalue.value.substring(0, customvalue.value.length - 1);
    }

   customvaluebasic = parseFloat(customvalue.value);
   tipValue = customvaluebasic/100+1
}


/////////////////////////People////////////////////////////////////////////////////////

numberpeople.addEventListener('input', setnumberpeopleValue);

let numberpeopleValue = 1;

function validateFloat2(s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function setnumberpeopleValue() {
    if (numberpeople.value.includes(',')) {
        numberpeople.value = numberpeople.value.replace(',', '.');
    }

    if (!validateFloat2(numberpeople.value)) {
        numberpeople.value = numberpeople.value.substring(0, numberpeople.value.length - 1);
    }

   numberpeopleValue = parseFloat(numberpeople.value)
    console.log('nombre de personne', numberpeopleValue);
}

/* détection  valeur 0 donc erreur */

var error = document.querySelector(".error");
numberpeople.addEventListener('input', errorzero);



function errorzero(){  
 if( !numberpeople.value.replace(/\s+/, '').length ){
    error.classList.remove("erroractive")
    numberpeopleValue = parseFloat(1);
    }else{
 if (numberpeople.value == 0){
        error.classList.add("erroractive");
        console.log("Error people value");        
    }else{
        error.classList.remove("erroractive")
         }
    }     
};


/////////////////////////calcul////////////////////////////////////////////////////////

var screentip = document.querySelector(".screentip");
var screentotal = document.querySelector(".screentotal");

function calcul() {

 calculpriceperpeople = billValue/numberpeopleValue

 calcultipamount = (billValue*tipValue-billValue)/numberpeopleValue

 calcultotalperpeople = calculpriceperpeople+calcultipamount

/* screen affichage */

 screentip.innerText = calcultipamount.toFixed(2);
 screentotal.innerText = calcultotalperpeople.toFixed(2);

    console.log('tip valeur', tipValue)
    console.log('calcul tip par personne', calcultipamount)
    console.log('total par personne', calcultotalperpeople)
    console.log('-------------------------------------------')
}

/* lance calcul lors du clique sur bill */
bill.addEventListener('input', calcul);


/* lance calcul lors du clique sur numbre people */
numberpeople.addEventListener('input', calcul);

/* lance calcul lors du clique btn tip */
 cadre.forEach(btn => {
 btn.addEventListener('click', calcul);
});

/* lance calcul lors du clique sur custom */
custom.addEventListener('input', calcul);

///////////////////////////reset ////////////////////


var btnreset = document.querySelector(".btn");
var reset = "$0";


btnreset.addEventListener("click", () => {

    document.getElementById('bill').value = "";
    document.getElementById('numberpeople').value = "";

    error.classList.remove("erroractive")
    screentip.innerText = reset;
    screentotal.innerText = reset;

    billValue = parseFloat(0);
    tipValue = parseFloat(1);
    numberpeopleValue = parseFloat(1);


    console.log(tipValue)
})

btnreset.addEventListener('click', removebtn);