function igraPocinje4() {
  
let prviRed=document.querySelectorAll(".prviRed");
let skockoKolone2=document.querySelectorAll(".skockoKolone2");
let kolona1=document.querySelectorAll(".kolona1");
let skockoKolone3=document.querySelectorAll(".skockoKolone3");
let kolona3=document.querySelectorAll(".kolona3");
let kolona4=document.querySelectorAll(".kolona4");
let skockoKolone4=document.querySelectorAll(".skockoKolone4");
let kolona5=document.querySelectorAll(".kolona5");
let skockoKolone5=document.querySelectorAll(".skockoKolone5");
let kolona6=document.querySelectorAll(".kolona6");
let skockoKolone6=document.querySelectorAll(".skockoKolone6");
let kolona7=document.querySelectorAll(".kolona7");
let skockoKolone7=document.querySelectorAll(".skockoKolone7");
let kolona8=document.querySelectorAll(".kolona8");
let skockoKolone8=document.querySelectorAll(".skockoKolone8");
let kolona9=document.querySelectorAll(".kolona9");
let skockoKolone9=document.querySelectorAll(".skockoKolone9");
let skockoKolone10=document.querySelectorAll(".kolona10");
let skockoKolone1=document.querySelectorAll(".skockoKolone1");
let taster=document.querySelectorAll(".potvrda");
let slike=document.querySelectorAll("img");
let kalkulacija=document.querySelector(".igrac7");
let skorovanje=document.querySelector(".igrac8");
let jedinica=document.querySelectorAll(".jedinica");
let dvojka=document.querySelectorAll(".dvojka");
let jedinica2=document.querySelectorAll(".jedinica2");
let dvojka2=document.querySelectorAll(".dvojka2");
let brojka200=document.querySelector(".brojka200");
let skockoDva=document.querySelector(".skockoDva");
let prilog=document.querySelectorAll(".dodavanje");
let uspesanDodatak=document.querySelectorAll(".dodavanje1");
var prekid;
let sledeca;
let restartovanje;
let kreni;
let preokret;

let sveSlike=[

'111.jpg','222.jpg','333.jpg',
'444.jpg','555.jpg','777.jpg'

];

let sveSlike2=[

'555.jpg','777.jpg'

];

let sveSlike3=[

'111.jpg','222.jpg'

];


function rundaBrojJedan() {
  
let odbrojavanjeSkocka=parseInt(brojka200.textContent);   
brojka200.textContent=odbrojavanjeSkocka-1;

if(brojka200.textContent==0) {

clearInterval(sledeca);
prekid=setTimeout(kompjuteroveKolone, 2000);

 }

}

function algoritmiZaKompjuter1() {
 
for(let i=1; i < 4; i++)  {
for(let m=1; m < 4; m++)  {

if(kolona3[i].getAttribute("src")==sveSlike[m]) {

for(let l=1; l < 4; l++)  {

kolona1[l].src=sveSlike2[Math.floor(Math.random()*sveSlike2.length)];
kolona1[l].style.opacity=1;

   }

  }

 }

}

for(let i=1; i < 4; i++)  {
for(let g=3; g < 6; g++)  {

if(kolona3[i].getAttribute("src")==sveSlike[g]) {

for(let l=1; l < 4; l++)  {

kolona1[l].src=sveSlike3[Math.floor(Math.random()*sveSlike3.length)];
kolona1[l].style.opacity=1;

    }

   }

  }

 }

}

function algoritmiZaKompjuter2() {
 
for(let i=2; i < 4; i++)  {
for(let m=2; m < 4; m++)  {

if(kolona3[i].getAttribute("src")==sveSlike[m]) {

for(let l=2; l < 4; l++)  {

kolona4[l].src=sveSlike2[Math.floor(Math.random()*sveSlike2.length)];
kolona4[l].style.opacity=1;

   }

  }

 }

}

for(let i=2; i < 4; i++)  {
for(let g=4; g < 6; g++)  {

if(kolona3[i].getAttribute("src")==sveSlike[g]) {

for(let l=2; l < 4; l++)  {

kolona4[l].src=sveSlike2[Math.floor(Math.random()*sveSlike2.length)];
kolona4[l].style.opacity=1;

   }

  }

 }

}

}

function algoritmiZaKompjuter3() {

for(let i=0; i < 3; i++) {

if(kolona3[i].getAttribute("src")==sveSlike[i]) {

kolona5[3].src=sveSlike[4];
kolona5[3].style.opacity=1;

  }

 }


for(let m=3; m < 6; m++) {

if(kolona3[3].getAttribute("src")==sveSlike[m]) {

kolona5[3].src=sveSlike[0];
kolona5[3].style.opacity=1;

  }

 }


}

function bojaStoperice4() {
  
brojka200.style.background="turquoise";

}

function rundaBrojDva() {

let merenje=parseInt(brojka200.textContent); 
brojka200.textContent=merenje-1;

if(brojka200.textContent==85)  {

kolona1[0].src=kolona3[0].src;
kolona1[0].style.opacity=1;
skockoKolone3[0].style.background="cornflowerblue";
algoritmiZaKompjuter1();

}

if(brojka200.textContent==75)  {

for(let i=0; i < 2; i++)  {

kolona4[i].src=kolona3[i].src;
kolona4[i].style.opacity=1;
skockoKolone4[i].style.background="cornflowerblue";

}

algoritmiZaKompjuter2();

}

if(brojka200.textContent==65)  {

for(let i=0; i < 3; i++)  {

kolona5[i].src=kolona3[i].src;
kolona5[i].style.opacity=1;
skockoKolone5[i].style.background="cornflowerblue";

}

algoritmiZaKompjuter3();

}

if(brojka200.textContent==55)  {

for(let i=0; i < 4; i++)  {

kolona6[i].src=kolona3[i].src;
kolona6[i].style.opacity=1;
skockoKolone6[i].style.background="cornflowerblue";
kolona3[i].style.opacity=1;
setTimeout(bojaStoperice4, 4000);

  }

let dodatPoen=parseInt(skorovanje.textContent);
skorovanje.textContent=dodatPoen+10;
clearInterval(preokret);

}


if(brojka200.textContent==0) {

let dodatPoen=parseInt(skorovanje.textContent);
skorovanje.textContent=dodatPoen+10;
clearInterval(preokret);

 }

}

function kompjuterovaRunda() {

if(kalkulacija.textContent==10 || skorovanje.textContent==5) {

restartovanje=setInterval(zapocniNovu2, 4000);
clearInterval(kreni);
clearInterval(sledeca);

 } 

}

kreni=setInterval(kompjuterovaRunda, 1000);

function zapocniNovu2() {

if(brojka200.textContent==90) {

preokret=setInterval(rundaBrojDva, 1000);
clearInterval(restartovanje);
menjanjeSlika2();

}

for(let g=0; g < 4; g++)  {

kolona9[g].style.opacity=0;
kolona3[g].style.opacity=0;

}

for(let i=0; i < 24; i++)  {

prviRed[i].style.opacity=0;
$(".skockoKolone2").css("background","white");

  }
 brojka200.textContent=90;

}


function menjanjeSlika2() {	

for(let g=0; g < 4; g++)  {

kolona3[g].src=sveSlike[Math.floor(Math.random()*sveSlike.length)];

 }

}

let biranjeSlika=setInterval(menjanjeSlika2,50);

function zaustavljanjeSlika2() {
	
clearInterval(biranjeSlika);
sledeca=setInterval(rundaBrojJedan, 1000);

for(let i=0; i < 4; i++) {

if(kolona3[i].getAttribute("src")==sveSlike[0]) {

kolona3[i].classList.add("trojka");

   }

if(kolona3[i].getAttribute("src")==sveSlike[1]) {

kolona3[i].classList.add("cetvorka");

   }

if(kolona3[i].getAttribute("src")==sveSlike[2]) {

kolona3[i].classList.add("petorka");

   }

if(kolona3[i].getAttribute("src")==sveSlike[3]) {

kolona3[i].classList.add("sestorka");

   }

if(kolona3[i].getAttribute("src")==sveSlike[4]) {

kolona3[i].classList.add("sedmorka");

   }

if(kolona3[i].getAttribute("src")==sveSlike[5]) {

kolona3[i].classList.add("osmorka");

   }

 }


}

setTimeout(zaustavljanjeSlika2,100);


function kompjuteroveKolone() {
	
for(let g=0; g < 4; g++)  {

kolona9[g].src=kolona3[g].src;
kolona9[g].style.opacity=1;
kolona3[g].style.opacity=1;

}

if(kalkulacija.textContent==10) {

skorovanje.textContent=0;

}

if(kalkulacija.textContent==0) {

skorovanje.textContent=5;

}


}

for(let i=0; i < 4; i++)  {

kolona1[i].addEventListener("click", trazenjeReda);

}

let k=0;

function trazenjeReda() {

this.src=sveSlike[k];
k++;

if(k==sveSlike.length)  {

k=0;

} 

this.style.opacity=1;

}


taster[0].addEventListener("click",trazenjeResenja);

function trazenjeResenja() {

let skor=parseInt(kalkulacija.textContent);

this.style.border="1px solid white";  

// dodavanje klasa pocetak

for(let i=0; i < 4; i++) {

if(kolona1[i].getAttribute("src")==sveSlike[0]) {

kolona1[i].classList.add("prvaSlicica");

   }

if(kolona1[i].getAttribute("src")==sveSlike[1]) {

kolona1[i].classList.add("drugaSlicica");

   }

if(kolona1[i].getAttribute("src")==sveSlike[2]) {

kolona1[i].classList.add("trecaSlicica");

   }

if(kolona1[i].getAttribute("src")==sveSlike[3]) {

kolona1[i].classList.add("cetvrtaSlicica");

   }

if(kolona1[i].getAttribute("src")==sveSlike[4]) {

kolona1[i].classList.add("petaSlicica");

   }

if(kolona1[i].getAttribute("src")==sveSlike[5]) {

kolona1[i].classList.add("sestaSlicica");

   }

 }

if($(".prvaSlicica").length==3 || $(".prvaSlicica").length==2) {

$(".prvaSlicica").addClass("skocko3");

}

if($(".drugaSlicica").length==3 || $(".drugaSlicica").length==2) {

$(".drugaSlicica").addClass("skocko3");

}

if($(".trecaSlicica").length==3 || $(".trecaSlicica").length==2) {

$(".trecaSlicica").addClass("skocko3");

}

if($(".cetvrtaSlicica").length==3 || $(".cetvrtaSlicica").length==2) {

$(".cetvrtaSlicica").addClass("skocko3");

}

if($(".petaSlicica").length==3 || $(".petaSlicica").length==2) {

$(".petaSlicica").addClass("skocko3");

}

if($(".sestaSlicica").length==3 || $(".sestaSlicica").length==2) {

$(".sestaSlicica").addClass("skocko3");

}

// dodavanje klasa kraj

for(let m=0; m < 4; m++)  {

if(taster[0].style.border=="1px solid white") {

for(let i=0; i < 4; i++)  {

taster[0].removeEventListener("click", trazenjeResenja);
taster[1].addEventListener("click", trazenjeResenja1);
kolona4[i].addEventListener("click", trazenjeReda);
kolona1[i].removeEventListener("click", trazenjeReda);
kolona1[i].classList.remove("kolona1");
kolona1[i].setAttribute("id","prviRed");

  }

 }

}


/// algoritmi pocetak

for(let h=0; h < 4; h++)  {
for(let t=0; t < 4; t++)  {

if(skockoKolone3[0].style.background=="cornflowerblue" && skockoKolone3[1].style.background=="cornflowerblue"
  && skockoKolone3[2].style.background=="cornflowerblue" && skockoKolone3[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone4[0].style.background=="cornflowerblue" && skockoKolone4[1].style.background=="cornflowerblue"
  && skockoKolone4[2].style.background=="cornflowerblue" && skockoKolone4[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone5[0].style.background=="cornflowerblue" && skockoKolone5[1].style.background=="cornflowerblue"
  && skockoKolone5[2].style.background=="cornflowerblue" && skockoKolone5[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone6[0].style.background=="cornflowerblue" && skockoKolone6[1].style.background=="cornflowerblue"
  && skockoKolone6[2].style.background=="cornflowerblue" && skockoKolone6[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone7[0].style.background=="cornflowerblue" && skockoKolone7[1].style.background=="cornflowerblue"
  && skockoKolone7[2].style.background=="cornflowerblue" && skockoKolone7[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone8[0].style.background=="cornflowerblue" && skockoKolone8[1].style.background=="cornflowerblue"
  && skockoKolone8[2].style.background=="cornflowerblue" && skockoKolone8[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;

$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }


if(kolona1[t].src==kolona3[t].src) {

skockoKolone3[t].style.background="cornflowerblue";
skockoKolone3[t].classList.add("pobeda");

 }

else if(kolona1[h].src==kolona3[t].src) {

skockoKolone3[h].style.background="indianred";
skockoKolone3[h].classList.add("jedinica");
skockoKolone3[t].classList.add("dvojka");

 }

else if(kolona1[t].src==kolona3[h].src) {

skockoKolone3[h].classList.add("skocko1");
skockoKolone3[t].classList.add("skocko2");

 }


if($(".pobeda").hasClass("jedinica") || $(".pobeda").hasClass("dvojka")
  || $(".pobeda").hasClass("skocko1") || $(".pobeda").hasClass("skocko2")) {

$(".pobeda").removeClass("jedinica");
$(".pobeda").removeClass("dvojka");
$(".pobeda").removeClass("skocko1");
$(".pobeda").removeClass("skocko2");

   }

if($(".jedinica").length==1 && $(".dvojka").length==1
  && $(".skocko2").length==2 && $(".skocko1").length==2) {

$(".skocko2").css("background","white");
$(".skocko1").css("background","white");

   }

if($(".jedinica").length==2 && $(".dvojka").length==2
   && $(".skocko2").length==2 && $(".skocko1").length==2) {

$(".jedinica").css("background","indianred");

   }   

if($(".jedinica").length==2 && $(".dvojka").length==1
  && $(".skocko2").length==3 && $(".skocko1").length==1) {

let jedanSkocko=document.querySelectorAll(".jedinica");
jedanSkocko[0].style.background="white";

   }


if($(".jedinica").length==2 && $(".dvojka").length==3
  && $(".skocko2").length==1 && $(".skocko1").length==1) {

$(".skocko2").css("background","white");
$(".skocko1").css("background","indianred");

   }

if($(".jedinica").length==2 && $(".dvojka").length==3
  && $(".skocko2").length==2 && $(".skocko1").length==3) {

$(".jedinica").css("background","indianred");
$(".dvojka").css("background","white");
$(".jedinica").removeClass("dvojka");

   }

if($(".jedinica").length==2 && $(".dvojka").length==2
  && $(".skocko2").length==2 && $(".skocko1").length==3) {

$(".jedinica").css("background","white");
$(".dvojka").css("background","indianred");

   }

if($(".jedinica").length==2 && $(".dvojka").length==1
  && $(".skocko2").length==2 && $(".skocko1").length==1) {

$(".jedinica").css("background","white");
$(".dvojka").css("background","indianred");

   }

if($(".jedinica").length==2 && $(".dvojka").length==1
  && $(".skocko2").length==3 && $(".skocko1").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone3[i].style.background="indianred";

}

for(let m=2; m < 4; m++) {

skockoKolone3[m].style.background="white";

}

   }

if($(".jedinica").length==3 && $(".dvojka").length==3
  && $(".skocko2").length==3 && $(".skocko1").length==3) {

let skockoSkocko4=document.querySelectorAll(".skocko2");
skockoSkocko4[0].style.background="indianred";

   }


if($(".jedinica").length==3 && $(".dvojka").length==2
  && $(".skocko2").length==3 && $(".skocko1").length==2) {

let skockoSkocko3=document.querySelectorAll(".skocko2");
skockoSkocko3[0].style.background="white";

   }


if($(".jedinica").length==3 && $(".dvojka").length==2
  && $(".skocko2").length==1 && $(".skocko1").length==1) {

skockoKolone3[0].style.background="white";

   }

if($(".jedinica").length==3 && $(".dvojka").length==2
  && $(".skocko2").length==2 && $(".skocko1").length==1) {

$(".skocko2").css("background","indianred");
$(".skocko1").css("background","white");

   }

if($(".jedinica").length==3 && $(".dvojka").length==3
  && $(".skocko2").length==1) {

$(".skocko2").css("background","white");

   }

if($(".jedinica").length==3 && $(".dvojka").length==3
  && $(".skocko1").length==1 && $(".skocko2").length==1) {

$(".jedinica").css("background","indianred");

   }


if($(".jedinica").length==3 && $(".dvojka").length==3
  && $(".skocko2").length==2 && $(".skocko1").length==2) {

$(".dvojka").css("background","indianred");

   }


if($(".jedinica").length==3 && $(".dvojka").length==2
  && $(".skocko2").length==3 && $(".skocko1").length==1) {

let doDva=document.querySelectorAll(".dvojka");
doDva[0].style.background="white";

   }

if($(".jedinica").length==3 && $(".dvojka").length==1
  && $(".skocko2").length==3 && $(".skocko1").length==1) {

$(".jedinica").css("background","white");
$(".dvojka").css("background","indianred");

   }

if($(".jedinica").length==3 && $(".dvojka").length==3 && $(".skocko2").length==0 && $(".skocko1").length==0 
  && $(".pobeda").length !=0) {

for(let i=0; i < 2; i++) {

let dvaJedan=document.querySelectorAll(".dvojka");
dvaJedan[0].style.background="white";

}

   }

if($(".jedinica").length==3 && $(".dvojka").length==3 && $(".skocko2").length==0 && $(".skocko1").length==0 
  && $(".pobeda").length==0) {

for(let i=0; i < 2; i++) {

skockoKolone3[i].style.background="indianred";
skockoKolone3[2].style.background="white";
skockoKolone3[3].style.background="white";

}

   }

if($(".jedinica").length==4 && $(".dvojka").length==4 &&
$(".skocko2").length==0 && $(".skocko1").length==0) {

$(".dvojka").css("background","indianred");

   }

if($(".jedinica").length==4 && $(".dvojka").length==2
  && $(".skocko2").length==2 && $(".skocko1").length==1) {

$(".dvojka").css("background","indianred");
$(".skocko2").css("background","white");

   }

if($(".jedinica").length==4 && $(".dvojka").length==4
  && $(".skocko2").length==2 && $(".skocko1").length==2) {

$(".dvojka").css("background","indianred");

   }

if($(".jedinica").length==4 && $(".dvojka").length==3
  && $(".skocko2").length==1 && $(".skocko1").length==1) {

$(".dvojka").css("background","indianred");
$(".skocko2").css("background","white");

   }


if($(".jedinica").length==4 && $(".dvojka").length==3
  && $(".skocko2").length==1 && $(".skocko1").length==2) {

$(".dvojka").css("background","indianred");
$(".skocko2").css("background","white");

   }

if($(".jedinica").length==4 && $(".dvojka").length==2
  && $(".skocko2").length==2 && $(".skocko1").length==2) {

$(".skocko2").css("background","white");
$(".skocko1").css("background","indianred");

   }


if($(".jedinica").length==4 && $(".dvojka").length==3
  && $(".skocko2").length==4 && $(".skocko1").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone3[i].style.background="indianred";
skockoKolone3[3].style.background="white";

}
   }


if($(".jedinica").length==4 && $(".dvojka").length==4
  && $(".skocko2").length==4 && $(".skocko1").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone3[i].style.background="indianred";
skockoKolone3[3].style.background="white";

}
   }

if($(".skocko1").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone3[i].style.background="indianred";

}
   }


if($(".jedinica").length==4 && $(".dvojka").length==3
  && $(".skocko2").length==4 && $(".skocko1").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone3[i].style.background="indianred";
skockoKolone3[3].style.background="white";

}
   }   

if($(".jedinica").length==4 && $(".dvojka").length==4
  && $(".skocko2").length==3 && $(".skocko1").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone3[i].style.background="indianred";
skockoKolone3[3].style.background="white";

}
   }   


if($(".jedinica").length==4 && $(".dvojka").length==4
  && $(".skocko3").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone3[i].style.background="indianred";
skockoKolone3[2].style.background="white";
skockoKolone3[3].style.background="white";

}
   }

if($(".jedinica").length==3 && $(".dvojka").length==4
  && $(".skocko3").length==2) {

for(let i=0; i < 2; i++) {

skockoKolone3[i].style.background="indianred";
skockoKolone3[2].style.background="white";
skockoKolone3[3].style.background="white";

}
   }


if($(".jedinica").length==3 && $(".dvojka").length==4
  && $(".skocko2").length==2 && $(".skocko1").length==1) {

$(".skocko2").css("background","indianred");
$(".skocko1").css("background","indianred");

   }

if($(".jedinica").length==3 && $(".dvojka").length==4
  && $(".skocko2").length==2 && $(".skocko1").length==2) {

dvojka[0].style.background="white";

   }

if($(".jedinica").length==3 && $(".dvojka").length==4
  && $(".skocko2").length==3 && $(".skocko1").length==4) {

let skocko21=document.querySelectorAll(".dvojka");
skocko21[0].style.background="white";

   }



 }

}

/// algoritmi kraj

}

// 1

function trazenjeResenja1() {

let skor=parseInt(kalkulacija.textContent);

this.style.border="1px solid white";  

// dodavanje klasa pocetak

for(let i=0; i < 4; i++) {

if(kolona4[i].getAttribute("src")==sveSlike[0]) {

kolona4[i].classList.add("prvaSlicica1");

   }

if(kolona4[i].getAttribute("src")==sveSlike[1]) {

kolona4[i].classList.add("drugaSlicica1");

   }

if(kolona4[i].getAttribute("src")==sveSlike[2]) {

kolona4[i].classList.add("trecaSlicica1");

   }

if(kolona4[i].getAttribute("src")==sveSlike[3]) {

kolona4[i].classList.add("cetvrtaSlicica1");

   }

if(kolona4[i].getAttribute("src")==sveSlike[4]) {

kolona4[i].classList.add("petaSlicica1");

   }

if(kolona4[i].getAttribute("src")==sveSlike[5]) {

kolona4[i].classList.add("sestaSlicica1");

   }

 }

if($(".prvaSlicica1").length==3 || $(".prvaSlicica1").length==2) {

$(".prvaSlicica1").addClass("skocko30");

}

if($(".drugaSlicica1").length==3 || $(".drugaSlicica1").length==2) {

$(".drugaSlicica1").addClass("skocko30");

}

if($(".trecaSlicica1").length==3 || $(".trecaSlicica1").length==2) {

$(".trecaSlicica1").addClass("skocko30");

}

if($(".cetvrtaSlicica1").length==3 || $(".cetvrtaSlicica1").length==2) {

$(".cetvrtaSlicica1").addClass("skocko30");

}

if($(".petaSlicica1").length==3 || $(".petaSlicica1").length==2) {

$(".petaSlicica1").addClass("skocko30");

}

if($(".sestaSlicica1").length==3 || $(".sestaSlicica1").length==2) {

$(".sestaSlicica1").addClass("skocko30");

}

// dodavanje klasa kraj

for(let m=0; m < 4; m++)  {

if(taster[1].style.border=="1px solid white") {

for(let i=0; i < 4; i++)  {

taster[1].removeEventListener("click", trazenjeResenja1);
taster[2].addEventListener("click", trazenjeResenja2);
kolona5[i].addEventListener("click", trazenjeReda);
kolona4[i].removeEventListener("click", trazenjeReda);
kolona4[i].classList.remove("kolona4");
kolona4[i].setAttribute("id","prviRed");

  }

 }

}


/// algoritmi pocetak

for(let h=0; h < 4; h++)  {
for(let t=0; t < 4; t++)  {

if(skockoKolone3[0].style.background=="cornflowerblue" && skockoKolone3[1].style.background=="cornflowerblue"
  && skockoKolone3[2].style.background=="cornflowerblue" && skockoKolone3[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone4[0].style.background=="cornflowerblue" && skockoKolone4[1].style.background=="cornflowerblue"
  && skockoKolone4[2].style.background=="cornflowerblue" && skockoKolone4[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone5[0].style.background=="cornflowerblue" && skockoKolone5[1].style.background=="cornflowerblue"
  && skockoKolone5[2].style.background=="cornflowerblue" && skockoKolone5[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone6[0].style.background=="cornflowerblue" && skockoKolone6[1].style.background=="cornflowerblue"
  && skockoKolone6[2].style.background=="cornflowerblue" && skockoKolone6[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone7[0].style.background=="cornflowerblue" && skockoKolone7[1].style.background=="cornflowerblue"
  && skockoKolone7[2].style.background=="cornflowerblue" && skockoKolone7[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone8[0].style.background=="cornflowerblue" && skockoKolone8[1].style.background=="cornflowerblue"
  && skockoKolone8[2].style.background=="cornflowerblue" && skockoKolone8[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;

$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }


if(kolona4[t].src==kolona3[t].src) {

skockoKolone4[t].style.background="cornflowerblue";
skockoKolone4[t].classList.add("pobeda");

 }

else if(kolona4[h].src==kolona3[t].src) {

skockoKolone4[h].style.background="indianred";
skockoKolone4[h].classList.add("jedinica1");
skockoKolone4[t].classList.add("dvojka1");

 }

else if(kolona4[t].src==kolona3[h].src) {

skockoKolone4[h].classList.add("skocko10");
skockoKolone4[t].classList.add("skocko20");

 }


if($(".pobeda").hasClass("jedinica1") || $(".pobeda").hasClass("dvojka1")
  || $(".pobeda").hasClass("skocko10") || $(".pobeda").hasClass("skocko20")) {

$(".pobeda").removeClass("jedinica1");
$(".pobeda").removeClass("dvojka1");
$(".pobeda").removeClass("skocko10");
$(".pobeda").removeClass("skocko20");

   }

if($(".jedinica1").length==1 && $(".dvojka1").length==1
  && $(".skocko20").length==2 && $(".skocko10").length==2) {

$(".skocko20").css("background","white");
$(".skocko10").css("background","white");

   }

if($(".jedinica1").length==2 && $(".dvojka1").length==2
   && $(".skocko20").length==2 && $(".skocko10").length==2) {

$(".jedinica1").css("background","indianred");

   }   

if($(".jedinica1").length==2 && $(".dvojka1").length==1
  && $(".skocko20").length==3 && $(".skocko10").length==1) {

let jedanSkocko=document.querySelectorAll(".jedinica1");
jedanSkocko[0].style.background="white";

   }


if($(".jedinica1").length==2 && $(".dvojka1").length==3
  && $(".skocko20").length==1 && $(".skocko10").length==1) {

$(".skocko20").css("background","white");
$(".skocko10").css("background","indianred");

   }

if($(".jedinica1").length==2 && $(".dvojka1").length==3
  && $(".skocko20").length==2 && $(".skocko10").length==3) {

$(".jedinica1").css("background","indianred");
$(".dvojka1").css("background","white");
$(".jedinica1").removeClass("dvojka1");

   }

if($(".jedinica1").length==2 && $(".dvojka1").length==2
  && $(".skocko20").length==2 && $(".skocko10").length==3) {

$(".jedinica1").css("background","white");
$(".dvojka1").css("background","indianred");

   }

if($(".jedinica1").length==2 && $(".dvojka1").length==1
  && $(".skocko20").length==2 && $(".skocko10").length==1) {

$(".jedinica1").css("background","white");
$(".dvojka1").css("background","indianred");

   }

if($(".jedinica1").length==2 && $(".dvojka1").length==1
  && $(".skocko20").length==3 && $(".skocko10").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone4[i].style.background="indianred";

}

for(let m=2; m < 4; m++) {

skockoKolone4[m].style.background="white";

}

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==3
  && $(".skocko20").length==3 && $(".skocko10").length==3) {

let skockoSkocko4=document.querySelectorAll(".skocko20");
skockoSkocko4[0].style.background="indianred";

   }


if($(".jedinica1").length==3 && $(".dvojka1").length==2
  && $(".skocko20").length==3 && $(".skocko10").length==2) {

let skockoSkocko3=document.querySelectorAll(".skocko20");
skockoSkocko3[0].style.background="white";

   }


if($(".jedinica1").length==3 && $(".dvojka1").length==2
  && $(".skocko20").length==1 && $(".skocko10").length==1) {

skockoKolone4[0].style.background="white";

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==2
  && $(".skocko20").length==2 && $(".skocko10").length==1) {

$(".skocko20").css("background","indianred");
$(".skocko10").css("background","white");

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==3
  && $(".skocko20").length==1) {

$(".skocko20").css("background","white");

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==3
  && $(".skocko10").length==1 && $(".skocko20").length==1) {

$(".jedinica1").css("background","indianred");

   }


if($(".jedinica1").length==3 && $(".dvojka1").length==3
  && $(".skocko20").length==2 && $(".skocko10").length==2) {

$(".dvojka1").css("background","indianred");

   }


if($(".jedinica1").length==3 && $(".dvojka1").length==2
  && $(".skocko20").length==3 && $(".skocko10").length==1) {

let doDva=document.querySelectorAll(".dvojka1");
doDva[0].style.background="white";

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==1
  && $(".skocko20").length==3 && $(".skocko10").length==1) {

$(".jedinica1").css("background","white");
$(".dvojka1").css("background","indianred");

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==3 && $(".skocko20").length==0 && $(".skocko10").length==0 
  && $(".pobeda").length !=0) {

for(let i=0; i < 2; i++) {

let dvaJedan=document.querySelectorAll(".dvojka1");
dvaJedan[0].style.background="white";

}

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==3 && $(".skocko20").length==0 && $(".skocko10").length==0 
  && $(".pobeda").length==0) {

for(let i=0; i < 2; i++) {

skockoKolone4[i].style.background="indianred";
skockoKolone4[2].style.background="white";
skockoKolone4[3].style.background="white";

}

   }

if($(".jedinica1").length==4 && $(".dvojka1").length==4 &&
$(".skocko20").length==0 && $(".skocko10").length==0) {

$(".dvojka1").css("background","indianred");

   }

if($(".jedinica1").length==4 && $(".dvojka1").length==2
  && $(".skocko20").length==2 && $(".skocko10").length==1) {

$(".dvojka1").css("background","indianred");
$(".skocko20").css("background","white");

   }

if($(".jedinica1").length==4 && $(".dvojka1").length==4
  && $(".skocko20").length==2 && $(".skocko10").length==2) {

$(".dvojka1").css("background","indianred");

   }

if($(".jedinica1").length==4 && $(".dvojka1").length==3
  && $(".skocko20").length==1 && $(".skocko10").length==1) {

$(".dvojka1").css("background","indianred");
$(".skocko20").css("background","white");

   }


if($(".jedinica1").length==4 && $(".dvojka1").length==3
  && $(".skocko20").length==1 && $(".skocko10").length==2) {

$(".dvojka1").css("background","indianred");
$(".skocko20").css("background","white");

   }

if($(".jedinica1").length==4 && $(".dvojka1").length==2
  && $(".skocko20").length==2 && $(".skocko10").length==2) {

$(".skocko20").css("background","white");
$(".skocko10").css("background","indianred");

   }


if($(".jedinica1").length==4 && $(".dvojka1").length==3
  && $(".skocko20").length==4 && $(".skocko10").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone4[i].style.background="indianred";
skockoKolone4[3].style.background="white";

}
   }


if($(".jedinica1").length==4 && $(".dvojka1").length==4
  && $(".skocko20").length==4 && $(".skocko10").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone4[i].style.background="indianred";
skockoKolone4[3].style.background="white";

}
   }

if($(".skocko10").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone4[i].style.background="indianred";

}
   }


if($(".jedinica1").length==4 && $(".dvojka1").length==3
  && $(".skocko20").length==4 && $(".skocko10").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone4[i].style.background="indianred";
skockoKolone4[3].style.background="white";

}
   }   

if($(".jedinica1").length==4 && $(".dvojka1").length==4
  && $(".skocko20").length==3 && $(".skocko10").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone4[i].style.background="indianred";
skockoKolone4[3].style.background="white";

}
   }   


if($(".jedinica1").length==4 && $(".dvojka1").length==4
  && $(".skocko30").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone4[i].style.background="indianred";
skockoKolone4[2].style.background="white";
skockoKolone4[3].style.background="white";

}
   }

if($(".jedinica1").length==3 && $(".dvojka1").length==4
  && $(".skocko30").length==2) {

for(let i=0; i < 2; i++) {

skockoKolone4[i].style.background="indianred";
skockoKolone4[2].style.background="white";
skockoKolone4[3].style.background="white";

}
   }


if($(".jedinica1").length==3 && $(".dvojka1").length==4
  && $(".skocko20").length==2 && $(".skocko10").length==1) {

$(".skocko20").css("background","indianred");
$(".skocko10").css("background","indianred");

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==4
  && $(".skocko20").length==2 && $(".skocko10").length==2) {

dvojka1[0].style.background="white";

   }

if($(".jedinica1").length==3 && $(".dvojka1").length==4
  && $(".skocko20").length==3 && $(".skocko10").length==4) {

let skocko201=document.querySelectorAll(".dvojka1");
skocko201[0].style.background="white";

   }



 }

}

/// algoritmi kraj

}

// 2

function trazenjeResenja2() {

let skor=parseInt(kalkulacija.textContent);

this.style.border="1px solid white";  

// dodavanje klasa pocetak

for(let i=0; i < 4; i++) {

if(kolona5[i].getAttribute("src")==sveSlike[0]) {

kolona5[i].classList.add("prvaSlicica10");

   }

if(kolona5[i].getAttribute("src")==sveSlike[1]) {

kolona5[i].classList.add("drugaSlicica11");

   }

if(kolona5[i].getAttribute("src")==sveSlike[2]) {

kolona5[i].classList.add("trecaSlicica12");

   }

if(kolona5[i].getAttribute("src")==sveSlike[3]) {

kolona5[i].classList.add("cetvrtaSlicica13");

   }

if(kolona5[i].getAttribute("src")==sveSlike[4]) {

kolona5[i].classList.add("petaSlicica14");

   }

if(kolona5[i].getAttribute("src")==sveSlike[5]) {

kolona5[i].classList.add("sestaSlicica15");

   }

 }

if($(".prvaSlicica10").length==3 || $(".prvaSlicica10").length==2) {

$(".prvaSlicica10").addClass("skocko31");

}

if($(".drugaSlicica11").length==3 || $(".drugaSlicica11").length==2) {

$(".drugaSlicica11").addClass("skocko31");

}

if($(".trecaSlicica12").length==3 || $(".trecaSlicica12").length==2) {

$(".trecaSlicica12").addClass("skocko31");

}

if($(".cetvrtaSlicica13").length==3 || $(".cetvrtaSlicica13").length==2) {

$(".cetvrtaSlicica13").addClass("skocko31");

}

if($(".petaSlicica14").length==3 || $(".petaSlicica14").length==2) {

$(".petaSlicica14").addClass("skocko31");

}

if($(".sestaSlicica15").length==3 || $(".sestaSlicica15").length==2) {

$(".sestaSlicica15").addClass("skocko31");

}

// dodavanje klasa kraj

for(let m=0; m < 4; m++)  {

if(taster[2].style.border=="1px solid white") {

for(let i=0; i < 4; i++)  {

taster[2].removeEventListener("click", trazenjeResenja2);
taster[3].addEventListener("click", trazenjeResenja3);
kolona6[i].addEventListener("click", trazenjeReda);
kolona5[i].removeEventListener("click", trazenjeReda);
kolona5[i].classList.remove("kolona5");
kolona5[i].setAttribute("id","prviRed");

  }

 }

}


/// algoritmi pocetak

for(let h=0; h < 4; h++)  {
for(let t=0; t < 4; t++)  {

if(skockoKolone3[0].style.background=="cornflowerblue" && skockoKolone3[1].style.background=="cornflowerblue"
  && skockoKolone3[2].style.background=="cornflowerblue" && skockoKolone3[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone4[0].style.background=="cornflowerblue" && skockoKolone4[1].style.background=="cornflowerblue"
  && skockoKolone4[2].style.background=="cornflowerblue" && skockoKolone4[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone5[0].style.background=="cornflowerblue" && skockoKolone5[1].style.background=="cornflowerblue"
  && skockoKolone5[2].style.background=="cornflowerblue" && skockoKolone5[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone6[0].style.background=="cornflowerblue" && skockoKolone6[1].style.background=="cornflowerblue"
  && skockoKolone6[2].style.background=="cornflowerblue" && skockoKolone6[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone7[0].style.background=="cornflowerblue" && skockoKolone7[1].style.background=="cornflowerblue"
  && skockoKolone7[2].style.background=="cornflowerblue" && skockoKolone7[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone8[0].style.background=="cornflowerblue" && skockoKolone8[1].style.background=="cornflowerblue"
  && skockoKolone8[2].style.background=="cornflowerblue" && skockoKolone8[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;

$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }


if(kolona5[t].src==kolona3[t].src) {

skockoKolone5[t].style.background="cornflowerblue";
skockoKolone5[t].classList.add("pobeda");

 }

else if(kolona5[h].src==kolona3[t].src) {

skockoKolone5[h].style.background="indianred";
skockoKolone5[h].classList.add("jedinica2");
skockoKolone5[t].classList.add("dvojka2");

 }

else if(kolona5[t].src==kolona3[h].src) {

skockoKolone5[h].classList.add("skocko11");
skockoKolone5[t].classList.add("skocko21");

 }


if($(".pobeda").hasClass("jedinica2") || $(".pobeda").hasClass("dvojka2")
  || $(".pobeda").hasClass("skocko11") || $(".pobeda").hasClass("skocko21")) {

$(".pobeda").removeClass("jedinica2");
$(".pobeda").removeClass("dvojka2");
$(".pobeda").removeClass("skocko11");
$(".pobeda").removeClass("skocko21");

   }

if($(".jedinica2").length==1 && $(".dvojka2").length==1
  && $(".skocko21").length==2 && $(".skocko11").length==2) {

$(".skocko21").css("background","white");
$(".skocko11").css("background","white");

   }

if($(".jedinica2").length==2 && $(".dvojka2").length==2
   && $(".skocko21").length==2 && $(".skocko11").length==2) {

$(".jedinica2").css("background","indianred");

   }   

if($(".jedinica2").length==2 && $(".dvojka2").length==1
  && $(".skocko21").length==3 && $(".skocko11").length==1) {

let jedanSkocko=document.querySelectorAll(".jedinica2");
jedanSkocko[0].style.background="white";

   }


if($(".jedinica2").length==2 && $(".dvojka2").length==3
  && $(".skocko21").length==1 && $(".skocko11").length==1) {

$(".skocko21").css("background","white");
$(".skocko11").css("background","indianred");

   }

if($(".jedinica2").length==2 && $(".dvojka2").length==3
  && $(".skocko21").length==2 && $(".skocko11").length==3) {

$(".jedinica2").css("background","indianred");
$(".dvojka2").css("background","white");
$(".jedinica2").removeClass("dvojka2");

   }

if($(".jedinica2").length==2 && $(".dvojka2").length==2
  && $(".skocko21").length==2 && $(".skocko11").length==3) {

$(".jedinica2").css("background","white");
$(".dvojka2").css("background","indianred");

   }

if($(".jedinica2").length==2 && $(".dvojka2").length==1
  && $(".skocko21").length==2 && $(".skocko11").length==1) {

$(".jedinica2").css("background","white");
$(".dvojka2").css("background","indianred");

   }

if($(".jedinica2").length==2 && $(".dvojka2").length==1
  && $(".skocko21").length==3 && $(".skocko11").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone5[i].style.background="indianred";

}

for(let m=2; m < 4; m++) {

skockoKolone5[m].style.background="white";

}

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==3
  && $(".skocko21").length==3 && $(".skocko11").length==3) {

let skockoSkocko4=document.querySelectorAll(".skocko21");
skockoSkocko4[0].style.background="indianred";

   }


if($(".jedinica2").length==3 && $(".dvojka2").length==2
  && $(".skocko21").length==3 && $(".skocko11").length==2) {

let skockoSkocko3=document.querySelectorAll(".skocko21");
skockoSkocko3[0].style.background="white";

   }


if($(".jedinica2").length==3 && $(".dvojka2").length==2
  && $(".skocko21").length==1 && $(".skocko11").length==1) {

skockoKolone5[0].style.background="white";

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==2
  && $(".skocko21").length==2 && $(".skocko11").length==1) {

$(".skocko21").css("background","indianred");
$(".skocko11").css("background","white");

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==3
  && $(".skocko21").length==1) {

$(".skocko21").css("background","white");

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==3
  && $(".skocko11").length==1 && $(".skocko21").length==1) {

$(".jedinica2").css("background","indianred");

   }


if($(".jedinica2").length==3 && $(".dvojka2").length==3
  && $(".skocko21").length==2 && $(".skocko11").length==2) {

$(".dvojka2").css("background","indianred");

   }


if($(".jedinica2").length==3 && $(".dvojka2").length==2
  && $(".skocko21").length==3 && $(".skocko11").length==1) {

let doDva=document.querySelectorAll(".dvojka2");
doDva[0].style.background="white";

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==1
  && $(".skocko21").length==3 && $(".skocko11").length==1) {

$(".jedinica2").css("background","white");
$(".dvojka2").css("background","indianred");

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==3 && $(".skocko21").length==0 && $(".skocko11").length==0 
  && $(".pobeda").length !=0) {

for(let i=0; i < 2; i++) {

let dvaJedan=document.querySelectorAll(".dvojka2");
dvaJedan[0].style.background="white";

}

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==3 && $(".skocko21").length==0 && $(".skocko11").length==0 
  && $(".pobeda").length==0) {

for(let i=0; i < 2; i++) {

skockoKolone5[i].style.background="indianred";
skockoKolone5[2].style.background="white";
skockoKolone5[3].style.background="white";

}

   }

if($(".jedinica2").length==4 && $(".dvojka2").length==4 &&
$(".skocko21").length==0 && $(".skocko11").length==0) {

$(".dvojka2").css("background","indianred");

   }

if($(".jedinica2").length==4 && $(".dvojka2").length==2
  && $(".skocko21").length==2 && $(".skocko11").length==1) {

$(".dvojka2").css("background","indianred");
$(".skocko21").css("background","white");

   }

if($(".jedinica2").length==4 && $(".dvojka2").length==4
  && $(".skocko21").length==2 && $(".skocko11").length==2) {

$(".dvojka2").css("background","indianred");

   }

if($(".jedinica2").length==4 && $(".dvojka2").length==3
  && $(".skocko21").length==1 && $(".skocko11").length==1) {

$(".dvojka2").css("background","indianred");
$(".skocko21").css("background","white");

   }


if($(".jedinica2").length==4 && $(".dvojka2").length==3
  && $(".skocko21").length==1 && $(".skocko11").length==2) {

$(".dvojka2").css("background","indianred");
$(".skocko21").css("background","white");

   }

if($(".jedinica2").length==4 && $(".dvojka2").length==2
  && $(".skocko21").length==2 && $(".skocko11").length==2) {

$(".skocko21").css("background","white");
$(".skocko11").css("background","indianred");

   }


if($(".jedinica2").length==4 && $(".dvojka2").length==3
  && $(".skocko21").length==4 && $(".skocko11").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone5[i].style.background="indianred";
skockoKolone5[3].style.background="white";

}
   }


if($(".jedinica2").length==4 && $(".dvojka2").length==4
  && $(".skocko21").length==4 && $(".skocko11").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone5[i].style.background="indianred";
skockoKolone5[3].style.background="white";

}
   }

if($(".skocko11").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone5[i].style.background="indianred";

}
   }


if($(".jedinica2").length==4 && $(".dvojka2").length==3
  && $(".skocko21").length==4 && $(".skocko11").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone5[i].style.background="indianred";
skockoKolone5[3].style.background="white";

}
   }   

if($(".jedinica2").length==4 && $(".dvojka2").length==4
  && $(".skocko21").length==3 && $(".skocko11").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone5[i].style.background="indianred";
skockoKolone5[3].style.background="white";

}
   }   


if($(".jedinica2").length==4 && $(".dvojka2").length==4
  && $(".skocko31").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone5[i].style.background="indianred";
skockoKolone5[2].style.background="white";
skockoKolone5[3].style.background="white";

}
   }

if($(".jedinica2").length==3 && $(".dvojka2").length==4
  && $(".skocko31").length==2) {

for(let i=0; i < 2; i++) {

skockoKolone5[i].style.background="indianred";
skockoKolone5[2].style.background="white";
skockoKolone5[3].style.background="white";

}
   }


if($(".jedinica2").length==3 && $(".dvojka2").length==4
  && $(".skocko21").length==2 && $(".skocko11").length==1) {

$(".skocko21").css("background","indianred");
$(".skocko11").css("background","indianred");

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==4
  && $(".skocko21").length==2 && $(".skocko11").length==2) {

dvojka2[0].style.background="white";

   }

if($(".jedinica2").length==3 && $(".dvojka2").length==4
  && $(".skocko21").length==3 && $(".skocko11").length==4) {

let skocko211=document.querySelectorAll(".dvojka2");
skocko211[0].style.background="white";

   }



 }

}

/// algoritmi kraj

}

// 3

function trazenjeResenja3() {

let skor=parseInt(kalkulacija.textContent);

this.style.border="1px solid white";  

// dodavanje klasa pocetak

for(let i=0; i < 4; i++) {

if(kolona6[i].getAttribute("src")==sveSlike[0]) {

kolona6[i].classList.add("prvaSlicica21");

   }

if(kolona6[i].getAttribute("src")==sveSlike[1]) {

kolona6[i].classList.add("drugaSlicica22");

   }

if(kolona6[i].getAttribute("src")==sveSlike[2]) {

kolona6[i].classList.add("trecaSlicica23");

   }

if(kolona6[i].getAttribute("src")==sveSlike[3]) {

kolona6[i].classList.add("cetvrtaSlicica24");

   }

if(kolona6[i].getAttribute("src")==sveSlike[4]) {

kolona6[i].classList.add("petaSlicica25");

   }

if(kolona6[i].getAttribute("src")==sveSlike[5]) {

kolona6[i].classList.add("sestaSlicica26");

   }

 }

if($(".prvaSlicica21").length==3 || $(".prvaSlicica21").length==2) {

$(".prvaSlicica21").addClass("skocko32");

}

if($(".drugaSlicica22").length==3 || $(".drugaSlicica22").length==2) {

$(".drugaSlicica22").addClass("skocko32");

}

if($(".trecaSlicica23").length==3 || $(".trecaSlicica23").length==2) {

$(".trecaSlicica23").addClass("skocko32");

}

if($(".cetvrtaSlicica24").length==3 || $(".cetvrtaSlicica24").length==2) {

$(".cetvrtaSlicica24").addClass("skocko32");

}

if($(".petaSlicica25").length==3 || $(".petaSlicica25").length==2) {

$(".petaSlicica25").addClass("skocko32");

}

if($(".sestaSlicica26").length==3 || $(".sestaSlicica26").length==2) {

$(".sestaSlicica26").addClass("skocko32");

}

// dodavanje klasa kraj

for(let m=0; m < 4; m++)  {

if(taster[3].style.border=="1px solid white") {

for(let i=0; i < 4; i++)  {

taster[3].removeEventListener("click", trazenjeResenja3);
taster[4].addEventListener("click", trazenjeResenja4);
kolona7[i].addEventListener("click", trazenjeReda);
kolona6[i].removeEventListener("click", trazenjeReda);
kolona6[i].classList.remove("kolona6");
kolona6[i].setAttribute("id","prviRed");

  }

 }

}


/// algoritmi pocetak

for(let h=0; h < 4; h++)  {
for(let t=0; t < 4; t++)  {

if(skockoKolone3[0].style.background=="cornflowerblue" && skockoKolone3[1].style.background=="cornflowerblue"
  && skockoKolone3[2].style.background=="cornflowerblue" && skockoKolone3[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone4[0].style.background=="cornflowerblue" && skockoKolone4[1].style.background=="cornflowerblue"
  && skockoKolone4[2].style.background=="cornflowerblue" && skockoKolone4[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone5[0].style.background=="cornflowerblue" && skockoKolone5[1].style.background=="cornflowerblue"
  && skockoKolone5[2].style.background=="cornflowerblue" && skockoKolone5[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone6[0].style.background=="cornflowerblue" && skockoKolone6[1].style.background=="cornflowerblue"
  && skockoKolone6[2].style.background=="cornflowerblue" && skockoKolone6[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone7[0].style.background=="cornflowerblue" && skockoKolone7[1].style.background=="cornflowerblue"
  && skockoKolone7[2].style.background=="cornflowerblue" && skockoKolone7[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone8[0].style.background=="cornflowerblue" && skockoKolone8[1].style.background=="cornflowerblue"
  && skockoKolone8[2].style.background=="cornflowerblue" && skockoKolone8[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;

$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }


if(kolona6[t].src==kolona3[t].src) {

skockoKolone6[t].style.background="cornflowerblue";
skockoKolone6[t].classList.add("pobeda");

 }

else if(kolona6[h].src==kolona3[t].src) {

skockoKolone6[h].style.background="indianred";
skockoKolone6[h].classList.add("jedinica3");
skockoKolone6[t].classList.add("dvojka3");

 }

else if(kolona6[t].src==kolona3[h].src) {

skockoKolone6[h].classList.add("skocko12");
skockoKolone6[t].classList.add("skocko22");

 }


if($(".pobeda").hasClass("jedinica3") || $(".pobeda").hasClass("dvojka3")
  || $(".pobeda").hasClass("skocko12") || $(".pobeda").hasClass("skocko22")) {

$(".pobeda").removeClass("jedinica3");
$(".pobeda").removeClass("dvojka3");
$(".pobeda").removeClass("skocko12");
$(".pobeda").removeClass("skocko22");

   }

if($(".jedinica3").length==1 && $(".dvojka3").length==1
  && $(".skocko22").length==2 && $(".skocko12").length==2) {

$(".skocko22").css("background","white");
$(".skocko12").css("background","white");

   }

if($(".jedinica3").length==2 && $(".dvojka3").length==2
   && $(".skocko22").length==2 && $(".skocko12").length==2) {

$(".jedinica3").css("background","indianred");

   }   

if($(".jedinica3").length==2 && $(".dvojka3").length==1
  && $(".skocko22").length==3 && $(".skocko12").length==1) {

let jedanSkocko=document.querySelectorAll(".jedinica3");
jedanSkocko[0].style.background="white";

   }


if($(".jedinica3").length==2 && $(".dvojka3").length==3
  && $(".skocko22").length==1 && $(".skocko12").length==1) {

$(".skocko22").css("background","white");
$(".skocko12").css("background","indianred");

   }

if($(".jedinica3").length==2 && $(".dvojka3").length==3
  && $(".skocko22").length==2 && $(".skocko12").length==3) {

$(".jedinica3").css("background","indianred");
$(".dvojka3").css("background","white");
$(".jedinica3").removeClass("dvojka3");

   }

if($(".jedinica3").length==2 && $(".dvojka3").length==2
  && $(".skocko22").length==2 && $(".skocko12").length==3) {

$(".jedinica3").css("background","white");
$(".dvojka3").css("background","indianred");

   }

if($(".jedinica3").length==2 && $(".dvojka3").length==1
  && $(".skocko22").length==2 && $(".skocko12").length==1) {

$(".jedinica3").css("background","white");
$(".dvojka3").css("background","indianred");

   }

if($(".jedinica3").length==2 && $(".dvojka3").length==1
  && $(".skocko22").length==3 && $(".skocko12").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone6[i].style.background="indianred";

}

for(let m=2; m < 4; m++) {

skockoKolone6[m].style.background="white";

}

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==3
  && $(".skocko22").length==3 && $(".skocko12").length==3) {

let skockoSkocko4=document.querySelectorAll(".skocko22");
skockoSkocko4[0].style.background="indianred";

   }


if($(".jedinica3").length==3 && $(".dvojka3").length==2
  && $(".skocko22").length==3 && $(".skocko12").length==2) {

let skockoSkocko3=document.querySelectorAll(".skocko22");
skockoSkocko3[0].style.background="white";

   }


if($(".jedinica3").length==3 && $(".dvojka3").length==2
  && $(".skocko22").length==1 && $(".skocko12").length==1) {

skockoKolone6[0].style.background="white";

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==2
  && $(".skocko22").length==2 && $(".skocko12").length==1) {

$(".skocko22").css("background","indianred");
$(".skocko12").css("background","white");

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==3
  && $(".skocko22").length==1) {

$(".skocko22").css("background","white");

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==3
  && $(".skocko12").length==1 && $(".skocko22").length==1) {

$(".jedinica3").css("background","indianred");

   }


if($(".jedinica3").length==3 && $(".dvojka3").length==3
  && $(".skocko22").length==2 && $(".skocko12").length==2) {

$(".dvojka3").css("background","indianred");

   }


if($(".jedinica3").length==3 && $(".dvojka3").length==2
  && $(".skocko22").length==3 && $(".skocko12").length==1) {

let doDva=document.querySelectorAll(".dvojka3");
doDva[0].style.background="white";

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==1
  && $(".skocko22").length==3 && $(".skocko12").length==1) {

$(".jedinica3").css("background","white");
$(".dvojka3").css("background","indianred");

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==3 && $(".skocko22").length==0 && $(".skocko12").length==0 
  && $(".pobeda").length !=0) {

for(let i=0; i < 2; i++) {

let dvaJedan=document.querySelectorAll(".dvojka3");
dvaJedan[0].style.background="white";

}

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==3 && $(".skocko22").length==0 && $(".skocko12").length==0 
  && $(".pobeda").length==0) {

for(let i=0; i < 2; i++) {

skockoKolone6[i].style.background="indianred";
skockoKolone6[2].style.background="white";
skockoKolone6[3].style.background="white";

}

   }

if($(".jedinica3").length==4 && $(".dvojka3").length==4 &&
$(".skocko22").length==0 && $(".skocko12").length==0) {

$(".dvojka3").css("background","indianred");

   }

if($(".jedinica3").length==4 && $(".dvojka3").length==2
  && $(".skocko22").length==2 && $(".skocko12").length==1) {

$(".dvojka3").css("background","indianred");
$(".skocko22").css("background","white");

   }

if($(".jedinica3").length==4 && $(".dvojka3").length==4
  && $(".skocko22").length==2 && $(".skocko12").length==2) {

$(".dvojka3").css("background","indianred");

   }

if($(".jedinica3").length==4 && $(".dvojka3").length==3
  && $(".skocko22").length==1 && $(".skocko12").length==1) {

$(".dvojka3").css("background","indianred");
$(".skocko22").css("background","white");

   }


if($(".jedinica3").length==4 && $(".dvojka3").length==3
  && $(".skocko22").length==1 && $(".skocko12").length==2) {

$(".dvojka3").css("background","indianred");
$(".skocko22").css("background","white");

   }

if($(".jedinica3").length==4 && $(".dvojka3").length==2
  && $(".skocko22").length==2 && $(".skocko12").length==2) {

$(".skocko22").css("background","white");
$(".skocko12").css("background","indianred");

   }


if($(".jedinica3").length==4 && $(".dvojka3").length==3
  && $(".skocko22").length==4 && $(".skocko12").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone6[i].style.background="indianred";
skockoKolone6[3].style.background="white";

}
   }


if($(".jedinica3").length==4 && $(".dvojka3").length==4
  && $(".skocko22").length==4 && $(".skocko12").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone6[i].style.background="indianred";
skockoKolone6[3].style.background="white";

}
   }

if($(".skocko12").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone6[i].style.background="indianred";

}
   }


if($(".jedinica3").length==4 && $(".dvojka3").length==3
  && $(".skocko22").length==4 && $(".skocko12").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone6[i].style.background="indianred";
skockoKolone6[3].style.background="white";

}
   }   

if($(".jedinica3").length==4 && $(".dvojka3").length==4
  && $(".skocko22").length==3 && $(".skocko12").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone6[i].style.background="indianred";
skockoKolone6[3].style.background="white";

}
   }   


if($(".jedinica3").length==4 && $(".dvojka3").length==4
  && $(".skocko32").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone6[i].style.background="indianred";
skockoKolone6[2].style.background="white";
skockoKolone6[3].style.background="white";

}
   }

if($(".jedinica3").length==3 && $(".dvojka3").length==4
  && $(".skocko32").length==2) {

for(let i=0; i < 2; i++) {

skockoKolone6[i].style.background="indianred";
skockoKolone6[2].style.background="white";
skockoKolone6[3].style.background="white";

}
   }


if($(".jedinica3").length==3 && $(".dvojka3").length==4
  && $(".skocko22").length==2 && $(".skocko12").length==1) {

$(".skocko22").css("background","indianred");
$(".skocko12").css("background","indianred");

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==4
  && $(".skocko22").length==2 && $(".skocko12").length==2) {

dvojka3[0].style.background="white";

   }

if($(".jedinica3").length==3 && $(".dvojka3").length==4
  && $(".skocko22").length==3 && $(".skocko12").length==4) {

let skocko221=document.querySelectorAll(".dvojka3");
skocko221[0].style.background="white";

   }



 }

}

/// algoritmi kraj

}

// 4 

function trazenjeResenja4() {

let skor=parseInt(kalkulacija.textContent);

this.style.border="1px solid white";  

// dodavanje klasa pocetak

for(let i=0; i < 4; i++) {

if(kolona7[i].getAttribute("src")==sveSlike[0]) {

kolona7[i].classList.add("prvaSlicica01");

   }

if(kolona7[i].getAttribute("src")==sveSlike[1]) {

kolona7[i].classList.add("drugaSlicica02");

   }

if(kolona7[i].getAttribute("src")==sveSlike[2]) {

kolona7[i].classList.add("trecaSlicica03");

   }

if(kolona7[i].getAttribute("src")==sveSlike[3]) {

kolona7[i].classList.add("cetvrtaSlicica04");

   }

if(kolona7[i].getAttribute("src")==sveSlike[4]) {

kolona7[i].classList.add("petaSlicica05");

   }

if(kolona7[i].getAttribute("src")==sveSlike[5]) {

kolona7[i].classList.add("sestaSlicica06");

   }

 }

if($(".prvaSlicica01").length==3 || $(".prvaSlicica01").length==2) {

$(".prvaSlicica01").addClass("skocko33");

}

if($(".drugaSlicica22").length==3 || $(".drugaSlicica22").length==2) {

$(".drugaSlicica22").addClass("skocko33");

}

if($(".trecaSlicica23").length==3 || $(".trecaSlicica23").length==2) {

$(".trecaSlicica23").addClass("skocko33");

}

if($(".cetvrtaSlicica24").length==3 || $(".cetvrtaSlicica24").length==2) {

$(".cetvrtaSlicica24").addClass("skocko33");

}

if($(".petaSlicica25").length==3 || $(".petaSlicica25").length==2) {

$(".petaSlicica25").addClass("skocko33");

}

if($(".sestaSlicica26").length==3 || $(".sestaSlicica26").length==2) {

$(".sestaSlicica26").addClass("skocko33");

}

// dodavanje klasa kraj

for(let m=0; m < 4; m++)  {

if(taster[4].style.border=="1px solid white") {

for(let i=0; i < 4; i++)  {

taster[4].removeEventListener("click", trazenjeResenja4);
taster[5].addEventListener("click", trazenjeResenja5);
kolona8[i].addEventListener("click", trazenjeReda);
kolona7[i].removeEventListener("click", trazenjeReda);
kolona7[i].classList.remove("kolona7");
kolona7[i].setAttribute("id","prviRed");

  }

 }

}


/// algoritmi pocetak

for(let h=0; h < 4; h++)  {
for(let t=0; t < 4; t++)  {

if(skockoKolone3[0].style.background=="cornflowerblue" && skockoKolone3[1].style.background=="cornflowerblue"
  && skockoKolone3[2].style.background=="cornflowerblue" && skockoKolone3[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone4[0].style.background=="cornflowerblue" && skockoKolone4[1].style.background=="cornflowerblue"
  && skockoKolone4[2].style.background=="cornflowerblue" && skockoKolone4[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone6[0].style.background=="cornflowerblue" && skockoKolone6[1].style.background=="cornflowerblue"
  && skockoKolone6[2].style.background=="cornflowerblue" && skockoKolone6[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone5[0].style.background=="cornflowerblue" && skockoKolone5[1].style.background=="cornflowerblue"
  && skockoKolone5[2].style.background=="cornflowerblue" && skockoKolone5[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }



if(skockoKolone7[0].style.background=="cornflowerblue" && skockoKolone7[1].style.background=="cornflowerblue"
  && skockoKolone7[2].style.background=="cornflowerblue" && skockoKolone7[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone8[0].style.background=="cornflowerblue" && skockoKolone8[1].style.background=="cornflowerblue"
  && skockoKolone8[2].style.background=="cornflowerblue" && skockoKolone8[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;

$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }


if(kolona7[t].src==kolona3[t].src) {

skockoKolone7[t].style.background="cornflowerblue";
skockoKolone7[t].classList.add("pobeda");

 }

else if(kolona7[h].src==kolona3[t].src) {

skockoKolone7[h].style.background="indianred";
skockoKolone7[h].classList.add("jedinica4");
skockoKolone7[t].classList.add("dvojka4");

 }

else if(kolona7[t].src==kolona3[h].src) {

skockoKolone7[h].classList.add("skocko13");
skockoKolone7[t].classList.add("skocko23");

 }


if($(".pobeda").hasClass("jedinica4") || $(".pobeda").hasClass("dvojka4")
  || $(".pobeda").hasClass("skocko13") || $(".pobeda").hasClass("skocko23")) {

$(".pobeda").removeClass("jedinica4");
$(".pobeda").removeClass("dvojka4");
$(".pobeda").removeClass("skocko13");
$(".pobeda").removeClass("skocko23");

   }

if($(".jedinica4").length==1 && $(".dvojka4").length==1
  && $(".skocko23").length==2 && $(".skocko13").length==2) {

$(".skocko23").css("background","white");
$(".skocko13").css("background","white");

   }

if($(".jedinica4").length==2 && $(".dvojka4").length==2
   && $(".skocko23").length==2 && $(".skocko13").length==2) {

$(".jedinica4").css("background","indianred");

   }   

if($(".jedinica4").length==2 && $(".dvojka4").length==1
  && $(".skocko23").length==3 && $(".skocko13").length==1) {

let jedanSkocko=document.querySelectorAll(".jedinica4");
jedanSkocko[0].style.background="white";

   }


if($(".jedinica4").length==2 && $(".dvojka4").length==3
  && $(".skocko23").length==1 && $(".skocko13").length==1) {

$(".skocko23").css("background","white");
$(".skocko13").css("background","indianred");

   }

if($(".jedinica4").length==2 && $(".dvojka4").length==3
  && $(".skocko23").length==2 && $(".skocko13").length==3) {

$(".jedinica4").css("background","indianred");
$(".dvojka4").css("background","white");
$(".jedinica4").removeClass("dvojka4");

   }

if($(".jedinica4").length==2 && $(".dvojka4").length==2
  && $(".skocko23").length==2 && $(".skocko13").length==3) {

$(".jedinica4").css("background","white");
$(".dvojka4").css("background","indianred");

   }

if($(".jedinica4").length==2 && $(".dvojka4").length==1
  && $(".skocko23").length==2 && $(".skocko13").length==1) {

$(".jedinica4").css("background","white");
$(".dvojka4").css("background","indianred");

   }

if($(".jedinica4").length==2 && $(".dvojka4").length==1
  && $(".skocko23").length==3 && $(".skocko13").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone7[i].style.background="indianred";

}

for(let m=2; m < 4; m++) {

skockoKolone7[m].style.background="white";

}

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==3
  && $(".skocko23").length==3 && $(".skocko13").length==3) {

let skockoSkocko4=document.querySelectorAll(".skocko23");
skockoSkocko4[0].style.background="indianred";

   }


if($(".jedinica4").length==3 && $(".dvojka4").length==2
  && $(".skocko23").length==3 && $(".skocko13").length==2) {

let skockoSkocko3=document.querySelectorAll(".skocko23");
skockoSkocko3[0].style.background="white";

   }


if($(".jedinica4").length==3 && $(".dvojka4").length==2
  && $(".skocko23").length==1 && $(".skocko13").length==1) {

skockoKolone7[0].style.background="white";

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==2
  && $(".skocko23").length==2 && $(".skocko13").length==1) {

$(".skocko23").css("background","indianred");
$(".skocko13").css("background","white");

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==3
  && $(".skocko23").length==1) {

$(".skocko23").css("background","white");

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==3
  && $(".skocko13").length==1 && $(".skocko23").length==1) {

$(".jedinica4").css("background","indianred");

   }


if($(".jedinica4").length==3 && $(".dvojka4").length==3
  && $(".skocko23").length==2 && $(".skocko13").length==2) {

$(".dvojka4").css("background","indianred");

   }


if($(".jedinica4").length==3 && $(".dvojka4").length==2
  && $(".skocko23").length==3 && $(".skocko13").length==1) {

let doDva=document.querySelectorAll(".dvojka4");
doDva[0].style.background="white";

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==1
  && $(".skocko23").length==3 && $(".skocko13").length==1) {

$(".jedinica4").css("background","white");
$(".dvojka4").css("background","indianred");

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==3 && $(".skocko23").length==0 && $(".skocko13").length==0 
  && $(".pobeda").length !=0) {

for(let i=0; i < 2; i++) {

let dvaJedan=document.querySelectorAll(".dvojka4");
dvaJedan[0].style.background="white";

}

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==3 && $(".skocko23").length==0 && $(".skocko13").length==0 
  && $(".pobeda").length==0) {

for(let i=0; i < 2; i++) {

skockoKolone7[i].style.background="indianred";
skockoKolone7[2].style.background="white";
skockoKolone7[3].style.background="white";

}

   }

if($(".jedinica4").length==4 && $(".dvojka4").length==4 &&
$(".skocko23").length==0 && $(".skocko13").length==0) {

$(".dvojka4").css("background","indianred");

   }

if($(".jedinica4").length==4 && $(".dvojka4").length==2
  && $(".skocko23").length==2 && $(".skocko13").length==1) {

$(".dvojka4").css("background","indianred");
$(".skocko23").css("background","white");

   }

if($(".jedinica4").length==4 && $(".dvojka4").length==4
  && $(".skocko23").length==2 && $(".skocko13").length==2) {

$(".dvojka4").css("background","indianred");

   }

if($(".jedinica4").length==4 && $(".dvojka4").length==3
  && $(".skocko23").length==1 && $(".skocko13").length==1) {

$(".dvojka4").css("background","indianred");
$(".skocko23").css("background","white");

   }


if($(".jedinica4").length==4 && $(".dvojka4").length==3
  && $(".skocko23").length==1 && $(".skocko13").length==2) {

$(".dvojka4").css("background","indianred");
$(".skocko23").css("background","white");

   }

if($(".jedinica4").length==4 && $(".dvojka4").length==2
  && $(".skocko23").length==2 && $(".skocko13").length==2) {

$(".skocko23").css("background","white");
$(".skocko13").css("background","indianred");

   }


if($(".jedinica4").length==4 && $(".dvojka4").length==3
  && $(".skocko23").length==4 && $(".skocko13").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone7[i].style.background="indianred";
skockoKolone7[3].style.background="white";

}
   }


if($(".jedinica4").length==4 && $(".dvojka4").length==4
  && $(".skocko23").length==4 && $(".skocko13").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone7[i].style.background="indianred";
skockoKolone7[3].style.background="white";

}
   }

if($(".skocko13").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone7[i].style.background="indianred";

}
   }


if($(".jedinica4").length==4 && $(".dvojka4").length==3
  && $(".skocko23").length==4 && $(".skocko13").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone7[i].style.background="indianred";
skockoKolone7[3].style.background="white";

}
   }   

if($(".jedinica4").length==4 && $(".dvojka4").length==4
  && $(".skocko23").length==3 && $(".skocko13").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone7[i].style.background="indianred";
skockoKolone7[3].style.background="white";

}
   }   


if($(".jedinica4").length==4 && $(".dvojka4").length==4
  && $(".skocko33").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone7[i].style.background="indianred";
skockoKolone7[2].style.background="white";
skockoKolone7[3].style.background="white";

}
   }

if($(".jedinica4").length==3 && $(".dvojka4").length==4
  && $(".skocko33").length==2) {

for(let i=0; i < 2; i++) {

skockoKolone7[i].style.background="indianred";
skockoKolone7[2].style.background="white";
skockoKolone7[3].style.background="white";

}
   }


if($(".jedinica4").length==3 && $(".dvojka4").length==4
  && $(".skocko23").length==2 && $(".skocko13").length==1) {

$(".skocko23").css("background","indianred");
$(".skocko13").css("background","indianred");

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==4
  && $(".skocko23").length==2 && $(".skocko13").length==2) {

dvojka4[0].style.background="white";

   }

if($(".jedinica4").length==3 && $(".dvojka4").length==4
  && $(".skocko23").length==3 && $(".skocko13").length==4) {

let skocko231=document.querySelectorAll(".dvojka4");
skocko231[0].style.background="white";

   }



 }

}

/// algoritmi kraj

}

// 5

function trazenjeResenja5() {

let skor=parseInt(kalkulacija.textContent);

this.style.border="1px solid white";  

// dodavanje klasa pocetak

for(let i=0; i < 4; i++) {

if(kolona8[i].getAttribute("src")==sveSlike[0]) {

kolona8[i].classList.add("prvaSlicicaA");

   }

if(kolona8[i].getAttribute("src")==sveSlike[1]) {

kolona8[i].classList.add("drugaSlicicaB");

   }

if(kolona8[i].getAttribute("src")==sveSlike[2]) {

kolona8[i].classList.add("trecaSlicicaC");

   }

if(kolona8[i].getAttribute("src")==sveSlike[3]) {

kolona8[i].classList.add("cetvrtaSlicicaD");

   }

if(kolona8[i].getAttribute("src")==sveSlike[4]) {

kolona8[i].classList.add("petaSlicicaE");

   }

if(kolona8[i].getAttribute("src")==sveSlike[5]) {

kolona8[i].classList.add("sestaSlicicaF");

   }

 }

if($(".prvaSlicicaA").length==3 || $(".prvaSlicicaA").length==2) {

$(".prvaSlicicaA").addClass("skocko34");

}

if($(".drugaSlicica22").length==3 || $(".drugaSlicica22").length==2) {

$(".drugaSlicica22").addClass("skocko34");

}

if($(".trecaSlicica23").length==3 || $(".trecaSlicica23").length==2) {

$(".trecaSlicica23").addClass("skocko34");

}

if($(".cetvrtaSlicica24").length==3 || $(".cetvrtaSlicica24").length==2) {

$(".cetvrtaSlicica24").addClass("skocko34");

}

if($(".petaSlicica25").length==3 || $(".petaSlicica25").length==2) {

$(".petaSlicica25").addClass("skocko34");

}

if($(".sestaSlicica26").length==3 || $(".sestaSlicica26").length==2) {

$(".sestaSlicica26").addClass("skocko34");

}

// dodavanje klasa kraj

for(let m=0; m < 4; m++)  {

if(taster[5].style.border=="1px solid white") {

for(let i=0; i < 4; i++)  {

taster[5].removeEventListener("click", trazenjeResenja5);
kolona8[i].removeEventListener("click", trazenjeReda);
kolona8[i].classList.remove("kolona8");
kolona8[i].setAttribute("id","prviRed");

  }

if(taster[5].style.border=="1px solid white" && kalkulacija.textContent==0)  {

setTimeout(kompjuteroveKolone, 5000);
clearInterval(sledeca);

  }

if(taster[5].style.border=="1px solid white" && kalkulacija.textContent==10)  {

$(".kolona9").css("opacity","0");
clearInterval(sledeca);

  }



 }

}


/// algoritmi pocetak

for(let h=0; h < 4; h++)  {
for(let t=0; t < 4; t++)  {

if(skockoKolone3[0].style.background=="cornflowerblue" && skockoKolone3[1].style.background=="cornflowerblue"
  && skockoKolone3[2].style.background=="cornflowerblue" && skockoKolone3[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone4[0].style.background=="cornflowerblue" && skockoKolone4[1].style.background=="cornflowerblue"
  && skockoKolone4[2].style.background=="cornflowerblue" && skockoKolone4[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

 if(skockoKolone5[0].style.background=="cornflowerblue" && skockoKolone5[1].style.background=="cornflowerblue"
  && skockoKolone5[2].style.background=="cornflowerblue" && skockoKolone5[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone6[0].style.background=="cornflowerblue" && skockoKolone6[1].style.background=="cornflowerblue"
  && skockoKolone6[2].style.background=="cornflowerblue" && skockoKolone6[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }

if(skockoKolone7[0].style.background=="cornflowerblue" && skockoKolone7[1].style.background=="cornflowerblue"
  && skockoKolone7[2].style.background=="cornflowerblue" && skockoKolone7[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;
$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }


if(skockoKolone8[0].style.background=="cornflowerblue" && skockoKolone8[1].style.background=="cornflowerblue"
  && skockoKolone8[2].style.background=="cornflowerblue" && skockoKolone8[3].style.background=="cornflowerblue") {

kalkulacija.textContent=10;

$(".kolona3").css("opacity","1");

for(let m=0; m < taster.length; m++) {

taster[m].disabled=true;
taster[m].style.border="1px solid white";

  }

for(let l=0; l < prviRed.length; l++) {

prviRed[l].removeEventListener("click", trazenjeReda);

  }

 }


if(kolona8[t].src==kolona3[t].src) {

skockoKolone8[t].style.background="cornflowerblue";
skockoKolone8[t].classList.add("pobeda");

 }

else if(kolona8[h].src==kolona3[t].src) {

skockoKolone8[h].style.background="indianred";
skockoKolone8[h].classList.add("jedinica5");
skockoKolone8[t].classList.add("dvojka5");

 }

else if(kolona8[t].src==kolona3[h].src) {

skockoKolone8[h].classList.add("skocko14");
skockoKolone8[t].classList.add("skocko24");

 }


if($(".pobeda").hasClass("jedinica5") || $(".pobeda").hasClass("dvojka5")
  || $(".pobeda").hasClass("skocko14") || $(".pobeda").hasClass("skocko24")) {

$(".pobeda").removeClass("jedinica5");
$(".pobeda").removeClass("dvojka5");
$(".pobeda").removeClass("skocko14");
$(".pobeda").removeClass("skocko24");

   }

if($(".jedinica5").length==1 && $(".dvojka5").length==1
  && $(".skocko24").length==2 && $(".skocko14").length==2) {

$(".skocko24").css("background","white");
$(".skocko14").css("background","white");

   }

if($(".jedinica5").length==2 && $(".dvojka5").length==2
   && $(".skocko24").length==2 && $(".skocko14").length==2) {

$(".jedinica5").css("background","indianred");

   }   

if($(".jedinica5").length==2 && $(".dvojka5").length==1
  && $(".skocko24").length==3 && $(".skocko14").length==1) {

let jedanSkocko=document.querySelectorAll(".jedinica5");
jedanSkocko[0].style.background="white";

   }


if($(".jedinica5").length==2 && $(".dvojka5").length==3
  && $(".skocko24").length==1 && $(".skocko14").length==1) {

$(".skocko24").css("background","white");
$(".skocko14").css("background","indianred");

   }

if($(".jedinica5").length==2 && $(".dvojka5").length==3
  && $(".skocko24").length==2 && $(".skocko14").length==3) {

$(".jedinica5").css("background","indianred");
$(".dvojka5").css("background","white");
$(".jedinica5").removeClass("dvojka5");

   }

if($(".jedinica5").length==2 && $(".dvojka5").length==2
  && $(".skocko24").length==2 && $(".skocko14").length==3) {

$(".jedinica5").css("background","white");
$(".dvojka5").css("background","indianred");

   }

if($(".jedinica5").length==2 && $(".dvojka5").length==1
  && $(".skocko24").length==2 && $(".skocko14").length==1) {

$(".jedinica5").css("background","white");
$(".dvojka5").css("background","indianred");

   }

if($(".jedinica5").length==2 && $(".dvojka5").length==1
  && $(".skocko24").length==3 && $(".skocko14").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone8[i].style.background="indianred";

}

for(let m=2; m < 4; m++) {

skockoKolone8[m].style.background="white";

}

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==3
  && $(".skocko24").length==3 && $(".skocko14").length==3) {

let skockoSkocko4=document.querySelectorAll(".skocko24");
skockoSkocko4[0].style.background="indianred";

   }


if($(".jedinica5").length==3 && $(".dvojka5").length==2
  && $(".skocko24").length==3 && $(".skocko14").length==2) {

let skockoSkocko3=document.querySelectorAll(".skocko24");
skockoSkocko3[0].style.background="white";

   }


if($(".jedinica5").length==3 && $(".dvojka5").length==2
  && $(".skocko24").length==1 && $(".skocko14").length==1) {

skockoKolone8[0].style.background="white";

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==2
  && $(".skocko24").length==2 && $(".skocko14").length==1) {

$(".skocko24").css("background","indianred");
$(".skocko14").css("background","white");

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==3
  && $(".skocko24").length==1) {

$(".skocko24").css("background","white");

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==3
  && $(".skocko14").length==1 && $(".skocko24").length==1) {

$(".jedinica5").css("background","indianred");

   }


if($(".jedinica5").length==3 && $(".dvojka5").length==3
  && $(".skocko24").length==2 && $(".skocko14").length==2) {

$(".dvojka5").css("background","indianred");

   }


if($(".jedinica5").length==3 && $(".dvojka5").length==2
  && $(".skocko24").length==3 && $(".skocko14").length==1) {

let doDva=document.querySelectorAll(".dvojka5");
doDva[0].style.background="white";

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==1
  && $(".skocko24").length==3 && $(".skocko14").length==1) {

$(".jedinica5").css("background","white");
$(".dvojka5").css("background","indianred");

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==3 && $(".skocko24").length==0 && $(".skocko14").length==0 
  && $(".pobeda").length !=0) {

for(let i=0; i < 2; i++) {

let dvaJedan=document.querySelectorAll(".dvojka5");
dvaJedan[0].style.background="white";

}

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==3 && $(".skocko24").length==0 && $(".skocko14").length==0 
  && $(".pobeda").length==0) {

for(let i=0; i < 2; i++) {

skockoKolone8[i].style.background="indianred";
skockoKolone8[2].style.background="white";
skockoKolone8[3].style.background="white";

}

   }

if($(".jedinica5").length==4 && $(".dvojka5").length==4 &&
$(".skocko24").length==0 && $(".skocko14").length==0) {

$(".dvojka5").css("background","indianred");

   }

if($(".jedinica5").length==4 && $(".dvojka5").length==2
  && $(".skocko24").length==2 && $(".skocko14").length==1) {

$(".dvojka5").css("background","indianred");
$(".skocko24").css("background","white");

   }

if($(".jedinica5").length==4 && $(".dvojka5").length==4
  && $(".skocko24").length==2 && $(".skocko14").length==2) {

$(".dvojka5").css("background","indianred");

   }

if($(".jedinica5").length==4 && $(".dvojka5").length==3
  && $(".skocko24").length==1 && $(".skocko14").length==1) {

$(".dvojka5").css("background","indianred");
$(".skocko24").css("background","white");

   }


if($(".jedinica5").length==4 && $(".dvojka5").length==3
  && $(".skocko24").length==1 && $(".skocko14").length==2) {

$(".dvojka5").css("background","indianred");
$(".skocko24").css("background","white");

   }

if($(".jedinica5").length==4 && $(".dvojka5").length==2
  && $(".skocko24").length==2 && $(".skocko14").length==2) {

$(".skocko24").css("background","white");
$(".skocko14").css("background","indianred");

   }


if($(".jedinica5").length==4 && $(".dvojka5").length==3
  && $(".skocko24").length==4 && $(".skocko14").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone8[i].style.background="indianred";
skockoKolone8[3].style.background="white";

}
   }


if($(".jedinica5").length==4 && $(".dvojka5").length==4
  && $(".skocko24").length==4 && $(".skocko14").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone8[i].style.background="indianred";
skockoKolone8[3].style.background="white";

}
   }

if($(".skocko14").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone8[i].style.background="indianred";

}
   }


if($(".jedinica5").length==4 && $(".dvojka5").length==3
  && $(".skocko24").length==4 && $(".skocko14").length==4) {

for(let i=0; i < 3; i++) {

skockoKolone8[i].style.background="indianred";
skockoKolone8[3].style.background="white";

}
   }   

if($(".jedinica5").length==4 && $(".dvojka5").length==4
  && $(".skocko24").length==3 && $(".skocko14").length==3) {

for(let i=0; i < 3; i++) {

skockoKolone8[i].style.background="indianred";
skockoKolone8[3].style.background="white";

}
   }   


if($(".jedinica5").length==4 && $(".dvojka5").length==4
  && $(".skocko34").length==3) {

for(let i=0; i < 2; i++) {

skockoKolone8[i].style.background="indianred";
skockoKolone8[2].style.background="white";
skockoKolone8[3].style.background="white";

}
   }

if($(".jedinica5").length==3 && $(".dvojka5").length==4
  && $(".skocko34").length==2) {

for(let i=0; i < 2; i++) {

skockoKolone8[i].style.background="indianred";
skockoKolone8[2].style.background="white";
skockoKolone8[3].style.background="white";

}
   }


if($(".jedinica5").length==3 && $(".dvojka5").length==4
  && $(".skocko24").length==2 && $(".skocko14").length==1) {

$(".skocko24").css("background","indianred");
$(".skocko14").css("background","indianred");

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==4
  && $(".skocko24").length==2 && $(".skocko14").length==2) {

dvojka5[0].style.background="white";

   }

if($(".jedinica5").length==3 && $(".dvojka5").length==4
  && $(".skocko24").length==3 && $(".skocko14").length==4) {

let skocko241=document.querySelectorAll(".dvojka5");
skocko241[0].style.background="white";

   }



 }

}

/// algoritmi kraj

}


}

let isticanje=document.querySelector(".vreme1");
let cetvrtaIgra=document.querySelector(".cetvrtaIgra");
let trecaIgra=document.querySelector(".trecaIgra");
let otkucavanje;

function igraMozeDaPocne4() {
  
if(isticanje.style.background=="turquoise")  {

igraPocinje4();
cetvrtaIgra.style.visibility="visible";
trecaIgra.style.visibility="hidden";
clearInterval(otkucavanje);

 }

}

otkucavanje=setInterval(igraMozeDaPocne4, 5000);