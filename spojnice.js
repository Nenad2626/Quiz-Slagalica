//igra Spojnice

function igraPocinje3() {

let pitanja=[

"Главни градови држава",
"Спортисти",
"Младунчад животиња",
"Антоними у српском језику",
"Нумере познатих извођача"

];


//prvi parovi koji spajaju

let drzave=[

"Русија","Кина","Кенија","Бразил","Аустралија",
"Аустрија","Индија","Немачка","Канада","Колумбија"

];


let gradovi=[

"Отава","Бразилија","Богота","Беч","Њу Делхи",
"Москва","Пекинг","Берлин","Канбера","Најроби",

];



let imena=[

"Дејан","Предраг","Александар","Петар","Иван",
"Владе","Синиша","Вања","Никола","Ратко"

];

let prezimena=[

"Грбић","Михајловић","Миљковић","Шапић","Николић",
"Ненадић","Мијатовић","Дивац","Бодирога","Удовичић"

];

let odrasleZivotinje=[

"Пас","Мачка","Коза","Овца","Крава",
"Коњ","Свиња","Јелен","Кокошка","Зец",

];

let deca=[

"Пиле","Прасе","Јаре","Кунић","Јагње",
"Маче","Ждребе","Штене","Теле","Лане"

];

let antonimi1=[

"Јако","Брзо","Високо","Топло","Тешко",
"Храбро","Црно","Суво","Светло","Скупо"

];

let antonimi2=[

"Хладно","Мокро","Лако","Слабо","Ниско",
"Тамно","Уплашено","Споро","Јефтино","Бело"

];

let pevaci=[

"Здравко Чолић","Дино Дворник","Жељко Јоксимовић","Дино Мерлин","Оливер Мандић",
"Оливер Драгојевић","Владо Георгиев","Тоше Проески","Бајага","Кемал Монтено"

];

let pesme=[

"Џени","Лане моје","Није хтјела","Одлазим а волим те","Анђеле",
"Чија си","Ти си ми у мислима","Пјевам дању пјевам ноћу","Смехом страх покријем увијек","Музика на струју"

];

//drugi parovi koji spajaju

let pitanja2=[

"Здраво на страним језицима",
"Слатко или слано",
"Филмови познатих глумаца",
"Докторске специјализације",
"Дела познатих писаца"

];

let jezici=[

"Енглески","Турски","Мађарски","Шпански","Фински",
"Немачки","Руски","Португалски","Италијански","Француски"

];

let zdravo=[

"Hola","Salut","Hei","Ciao","Здравствуйте",
"Olá","Szia","Merhaba","Hello","Hallo"

];

let hrana=[

"Смоки","Чоколада","Штапићи","Кока-кола","Чипс",
"Пица","Торта","Шпагете","Пудинг","Кекс"

];

let ili=[

"Слатко","Слано","Слатко","Слано","Слатко",
"Слатко","Слано","Слатко","Слано","Слано"

];

let glumci=[

"Силвестер Сталоне","Арнолд Шварценегер","Жан Клод Ван Дам","Дензел Вашингтон","Том Круз",
"Брус Вилис","Еди Марфи","Џеки Чен","Том Хенкс","Данијел Редклиф"

];


let filmovi=[

"Гас до даске","Хари Потер","Доктор Дулитл","Умри мушки","Форест Гамп",
"Дан обуке","Немогућа мисија","Роки","Кикбоксер","Терминатор"

];

let grane=[

"Кардиолог","Нефролог","Ортопед","Офталмолог","Педијатар",
"Гастроентеролог","Пулмолог","Неуролог","Ендокринолог","Дерматолог"

];

let organi=[

"Бубрези","Срце","Плућа","Очи","Стомак",
"Хормони","Дечије болести","Ноге","Кожа","Нервни систем"

];

let pisci=[

"Јован Дучић","Лаза Лазаревић","Стеван Сремац","Бранко Ћопић","Петар Кочић",
"Данило Киш","Иво Андрић","Милован Глишић","Бранислав Нушић","Милош Црњански"

];

let knjige=[

"Ветар","Кроз маглу","Благо цара Радована","Сеобе","Ни око шта",
"Протекција","Рани јади","Вукадин","Госпођица","Глуви барут"

];

let tekstoviParova=document.querySelectorAll(".Parova");
let tekstoviDelova=document.querySelectorAll(".Delova");
let igra=document.querySelector(".pitanja");
let redni=document.querySelectorAll(".prviParovi");
let razliciti=document.querySelectorAll(".drugiParovi");
let elementP=document.querySelectorAll("p");
let grupa1=document.querySelectorAll(".grupa");
let deo1=document.querySelectorAll(".deo");

let covekIgrac1=document.querySelector(".igrac5");
let kompjuterIgrac1=document.querySelector(".igrac6");

let nastavljamoIgru;
let krugPitanja;
let igraGotova;
let zaustavljanjeIgreOdmah;

let kompjuterovaSpojnica=document.querySelector(".vreme1");

function spojnice()  {

igra.textContent=pitanja[Math.floor(Math.random()*pitanja.length)];

}

let vrti=setInterval(spojnice, 5);

function zaustaviPar() {
	
clearInterval(vrti);
igranje();

}

setTimeout(zaustaviPar, 300);

function igranje()  {


if (igra.textContent===pitanja[0]) {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=drzave.pop();   
Parovi();

}

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=gradovi.shift();
Pogoci1();

}
 

}

if (igra.textContent===pitanja[1]) {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=imena.pop();   
Parovi();
igra.style.marginLeft="590px";

}

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=prezimena.shift();
Pogoci2();

}

}	

if(igra.textContent===pitanja[2])  {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=odrasleZivotinje.pop();   
Parovi();

}

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=deca.shift();
Pogoci3();

}

}

if(igra.textContent===pitanja[3])  {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=antonimi1.pop();   
Parovi();

}

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=antonimi2.shift();
Pogoci4();

}

 }

if(igra.textContent===pitanja[4])  {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=pevaci.pop();   
Parovi();

}

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=pesme.shift();
Pogoci5();

}

 }


}


let istiRed=[10,9,8,7,6,5,4,3,2,1];

function Parovi()  {

for(let a=0; a < redni.length; ++a)  {

redni[a].textContent=istiRed[a];

}


}

//gradovi


let razlicitRed1=[9,4,10,6,7,1,2,8,5,3];

function Pogoci1()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed1[a];

  }

}

//sportisti

let razlicitRed2=[9,7,5,3,10,4,2,6,1,8];

function Pogoci2()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed2[a];

  }

}


//zivotinje

let razlicitRed3=[9,7,3,10,4,2,6,1,5,8];

function Pogoci3()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed3[a];

  }

}

//antonimi

let razlicitRed4=[4,8,5,1,3,9,6,2,10,7];

function Pogoci4()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed4[a];

  }

}


//pevaci

let razlicitRed5=[6,3,10,5,7,8,2,1,4,9];

function Pogoci5()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed5[a];

  }

}

//jezici

let razlicitRed6=[4,10,5,9,7,8,3,2,1,6];

function Pogoci6()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed6[a];

  }

}

//slatko ili slano

let razlicitRed7=[1,3,2,6,10,9,8,7,5,4];

function Pogoci7()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed7[a];

  }

}

//glumci

let razlicitRed8=[8,10,7,6,9,4,5,1,3,2];

function Pogoci8()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed8[a];

  }

}

//doktori

let razlicitRed9=[2,1,7,4,6,9,5,3,10,8];

function Pogoci9()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed9[a];

  }

}

//pisci

let razlicitRed10=[2,5,1,10,8,9,6,3,7,4];

function Pogoci10()  {

for(let a=0; a < razliciti.length; ++a)  {

razliciti[a].textContent=razlicitRed10[a];

  }

}



//kliktanje odgovora

for(let drugi=0; drugi < deo1.length; ++drugi)  {

deo1[drugi].addEventListener("click", Par2);

}

let zaustaviIgruSpojnica;
let noviSatSpojnica;
let novijaSpojnica;

let isto=["10","9","8","7","6","5","4","3","2","1"];
let pogadjanje=1;
let pogadjanje2=0;

let a1=0;
let b1=0;

function Par1() {

grupa1[a1].classList.add("obojiPar");
a1 +=1;

}

novijaSpojnica=setTimeout(Par1, 1500);

let kompjuteroviPoeni;
let numerickiBroj=document.querySelector(".vreme2");

function Par2()  {

let covekoviPoeni=parseInt(covekIgrac1.textContent);

for(let i=0; i < 10; ++i)  {

    if(redni[i].textContent===this.children[1].textContent && redni[i].parentElement.classList.contains("obojiPar")) {

       this.classList.add("pogodjenPar");
       redni[i].parentElement.classList.add("pogodjenPar");
       this.style.background="#d98cb3";
       redni[i].parentElement.style.background="#d98cb3";
       this.removeEventListener("click", Par2);
       covekIgrac1.textContent=covekoviPoeni+1;
       grupa1[i].classList.remove("obojiPar");
       grupa1[i].classList.remove("grupa");
       grupa1[i].id="grupa2";
       zaustaviIgruSpojnica=setTimeout(Par1,500);
       clearTimeout(novijaSpojnica);
       kompjuterovaSpojnica.textContent=5;

     } 


     if(covekIgrac1.textContent > 9) {

       nastavljamoIgru=setInterval(nivo2, 1000);
       a1=0;
       clearInterval(noviSatSpojnica);
       clearInterval(otkucavanjeSpojnica);
       clearInterval(istekloVreme);
       kompjuterovaSpojnica.textContent=3;

     }
      
    if(redni[i].textContent !==this.children[1].textContent && redni[i].parentElement.classList.contains("obojiPar")) {

       for(let drugi=0; drugi < 10; ++drugi)  {

        deo1[drugi].removeEventListener("click", Par2);
        this.classList.add("pogresanPar");
        redni[i].parentElement.classList.add("pogresanPar");
        this.style.background="#292F33";
        redni[i].parentElement.style.background="#292F33";                 
        
           }    

       }   
       
   }      
  
}

let stanje;
let otkucavanjeSpojnica;
let matematickiDodatak;
let istekloVreme;

function resiPreAlarma() {
  
let start=parseInt(kompjuterovaSpojnica.textContent);
kompjuterovaSpojnica.textContent=start-1;

if(kompjuterovaSpojnica.textContent==0) {

clearInterval(istekloVreme);

for(let g=0; g < deo1.length; g++) {

deo1[g].removeEventListener("click", Par2);

    }

  }


for(let i=0; i < grupa1.length; i++)  {

if(grupa1[i].classList.contains("obojiPar") && kompjuterovaSpojnica.textContent==0) {

$(".obojiPar").addClass("pogresanPar");
$(".obojiPar").css("background","#292F33");
deo1[9].style.background="#292F33";
kompjuterovaSpojnica.textContent=3;

for(let g=0; g < deo1.length; g++) {

deo1[g].removeEventListener("click", Par2);

   }

  }

 }

}

istekloVreme=setInterval(resiPreAlarma, 1000);

function ciljaj()  {

for(let y=0; y < 10; y++)  {

if(grupa1[y].classList.contains("pogresanPar")) {

   noviSatSpojnica=setInterval(kompjuterOsvajaPoene,1000);
   otkucavanjeSpojnica=setInterval(Par1,2100);
   clearInterval(stanje);
   clearTimeout(zaustaviIgruSpojnica);
   clearInterval(istekloVreme);
   kompjuterovaSpojnica.textContent=3;

     }

   }

}

stanje=setInterval(ciljaj, 1000);

let bodSpojnica;

function kompjuterOsvajaPoene() {

if(a1==10)  {

nastavljamoIgru=setInterval(nivo2, 1500);
clearInterval(noviSatSpojnica);
clearInterval(otkucavanjeSpojnica);
а1=0;

}

if(kompjuterIgrac1.textContent==10) {

clearInterval(bodSpojnica);

}

for(let y=0; y < 10; ++y)  {

if(grupa1[y].classList.contains("pogresanPar") || deo1[y].classList.contains("pogresanPar")) {

     deo1[y].style.background="";       
     grupa1[y].classList.remove("pogresanPar");
     deo1[y].classList.remove("pogresanPar");
     clearInterval(istekloVreme);

  }  

}

for(let i=0; i < 10; ++i)  {

for(let j=0; j < 10; ++j)  {

if(redni[j].textContent===razliciti[i].textContent && redni[j].parentElement.classList.contains("obojiPar"))  {

  grupa1[j].style.background="#998066";
  deo1[i].style.background="#998066";

         }       

       }   

    }

}

function kompjuterDobijaPoene() {

let skor=parseInt(kompjuterIgrac1.textContent);

for(let h=0; h < 10; h++)  {

if(deo1[h].style.background=="rgb(153, 128, 102)")  {

kompjuterIgrac1.textContent=skor+1;

    }

  }

}

bodSpojnica=setInterval(kompjuterDobijaPoene, 1855);


function nivo2() {

let satPara=parseInt(kompjuterovaSpojnica.textContent);
kompjuterovaSpojnica.textContent=satPara-1;

if(kompjuterovaSpojnica.textContent==2) {

clearInterval(bodSpojnica);

}

if(kompjuterovaSpojnica.textContent==0)  {

clearInterval(nastavljamoIgru);
clearInterval(otkucavanjeSpojnica);
clearInterval(istekloVreme);

for(let x=0; x < 10; ++x)  {

    tekstoviParova[x].textContent="";
    tekstoviDelova[x].textContent="";
    tekstoviParova[x].style.color="black";
    tekstoviDelova[x].style.color="black";
    redni[x].textContent="";
    razliciti[x].textContent="";
    grupa1[x].style.background="white";
    deo1[x].style.background="white";
    $(".obojiPar").removeClass("obojiPar");
    

}


let igraSeNastavlja;

 function zaustaviReci() {
  	
   clearInterval(krugPitanja);
   spojnice2();
   igraSeNastavlja=setInterval(kompjuterResavaSpojnice, 1500);

  }
  
 setTimeout(zaustaviReci, 300); 

 function trazenjeReci() {
  	
 igra.textContent=pitanja2[Math.floor(Math.random()*pitanja2.length)];  

  }

 krugPitanja=setInterval(trazenjeReci, 5);
  
let vreme2=0;
let vreme3=0;

function bojaStoperice3() {
  
kompjuterovaSpojnica.style.background="turquoise";

}

function kompjuterResavaSpojnice() {

 redni[vreme2].parentElement.classList.add("kompjuteroviParovi");
 redni[vreme3].parentElement.style.background="#998066";
 ++vreme2;
 ++vreme3;

 if(vreme2 > 9)  {

clearInterval(nastavljamoIgru);
clearInterval(igraSeNastavlja);
setTimeout(bojaStoperice3, 4000);

 }

let kompjuteroviPoeni=parseInt(kompjuterIgrac1.textContent);
kompjuterIgrac1.textContent=kompjuteroviPoeni+1;

for(let i=0; i < 10; ++i)  {

for(let j=0; j < 10; ++j)  {

if(redni[j].textContent===razliciti[i].textContent && grupa1[j].classList.contains("kompjuteroviParovi"))  {

  grupa1[j].style.background="#998066";
  deo1[i].style.background="#998066";
 

      }

    }  

  }

}

 function spojnice2() {

 if (igra.textContent===pitanja2[0]) {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=jezici.pop();   
Parovi();

     }

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=zdravo.shift();
Pogoci6();

    }
 
  }

if (igra.textContent===pitanja2[1]) {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=hrana.pop();   
Parovi();

     }

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=ili.pop();
Pogoci7();

    }
 
  }


if(igra.textContent===pitanja2[2]) {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=glumci.pop();   
Parovi();

     }

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=filmovi.shift();
Pogoci8();

       }
 
    }   

if(igra.textContent===pitanja2[3]) {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=grane.pop();   
Parovi();

     }

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=organi.shift();
Pogoci9();

       }
 
    }    

if(igra.textContent===pitanja2[4]) {

for(let i=0; i < tekstoviParova.length; ++i)  {

tekstoviParova[i].textContent=pisci.pop();   
Parovi();

     }

for(let x=0; x < tekstoviDelova.length; ++x)  {

tekstoviDelova[x].textContent=knjige.shift();
Pogoci10();

       }
 
    }    


     }


  }


}

}


let spojnicaNoviPocetak=document.querySelector(".tajmer");
let drugaIgra1=document.querySelector(".drugaIgra");
let trecaIgra1=document.querySelector(".trecaIgra");
let noviPocetak;

function igraMozeDaPocne2() {
  
if(spojnicaNoviPocetak.style.background=="turquoise")  {

igraPocinje3();
clearInterval(noviPocetak);
drugaIgra1.style.visibility="hidden";
trecaIgra1.style.visibility="visible";

 }

}

noviPocetak=setInterval(igraMozeDaPocne2, 5000);