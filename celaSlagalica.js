let dodavanjePoena1=document.querySelector(".igrac1");
let dodavanjePoena2=document.querySelector(".igrac2");
let dodavanjePoena3=document.querySelector(".igrac3");
let dodavanjePoena4=document.querySelector(".igrac4");
let dodavanjePoena5=document.querySelector(".igrac5");
let dodavanjePoena6=document.querySelector(".igrac6");
let dodavanjePoena7=document.querySelector(".igrac7");
let dodavanjePoena8=document.querySelector(".igrac8");
let dodavanjePoena9=document.querySelector(".igrac9");
let dodavanjePoena10=document.querySelector(".igrac10");
let dodavanjePoena11=document.querySelector(".igrac11");
let dodavanjePoena12=document.querySelector(".igrac12");
let covekoviPoeni=document.querySelectorAll(".ljudskiIgrac");
let kompjuteroviPoeni=document.querySelectorAll(".kompjuterskiIgrac");
let vremeOtkucavaKraj;
let skor1Coveka=document.querySelectorAll(".rezultati1");
let skor2Kompjutera=document.querySelectorAll(".rezultati2");

function izracunatiRezultati() {

let poen1=parseInt(dodavanjePoena1.textContent);	
let poen3=parseInt(dodavanjePoena3.textContent);
let poen5=parseInt(dodavanjePoena5.textContent);	
let poen7=parseInt(dodavanjePoena7.textContent);
let poen9=parseInt(dodavanjePoena9.textContent);	
let poen11=parseInt(dodavanjePoena11.textContent);

let poen2=parseInt(dodavanjePoena2.textContent);	
let poen4=parseInt(dodavanjePoena4.textContent);
let poen6=parseInt(dodavanjePoena6.textContent);	
let poen8=parseInt(dodavanjePoena8.textContent);
let poen10=parseInt(dodavanjePoena10.textContent);	
let poen12=parseInt(dodavanjePoena12.textContent);

for(let i=0; i < skor1Coveka.length; i++)  {
for(let m=0; m < skor2Kompjutera.length; m++)  {

skor1Coveka[i].textContent=poen1+poen3+poen5+poen7+poen9+poen11;
skor2Kompjutera[m].textContent=poen2+poen4+poen6+poen8+poen10+poen12;
$(".covek7").text(skor1Coveka[i].textContent);
$(".kompjuter7").text(skor2Kompjutera[i].textContent);
	
 }

}

$(".covek1").text(dodavanjePoena1.textContent);
$(".covek2").text(dodavanjePoena3.textContent);
$(".covek3").text(dodavanjePoena5.textContent);
$(".covek4").text(dodavanjePoena7.textContent);
$(".covek5").text(dodavanjePoena9.textContent);
$(".covek6").text(dodavanjePoena11.textContent);

$(".kompjuter1").text(dodavanjePoena2.textContent);
$(".kompjuter2").text(dodavanjePoena4.textContent);
$(".kompjuter3").text(dodavanjePoena6.textContent);
$(".kompjuter4").text(dodavanjePoena8.textContent);
$(".kompjuter5").text(dodavanjePoena10.textContent);
$(".kompjuter6").text(dodavanjePoena12.textContent);

}

vremeOtkucavaKraj=setInterval(izracunatiRezultati, 1);

let igraJeZavrsena;

let menjano=document.querySelector(".odbrojavanje");

function konacanRezultatKviza() {

$(".konacanSkor").css("visibility","visible");
$(".sveIgre").css("visibility","hidden");

}

function uporedi() {
	
if(menjano.style.background=="turquoise")  {

setTimeout(konacanRezultatKviza, 5000);

}

}

igraJeZavrsena=setInterval(uporedi, 1000);

let fabricko=document.querySelector(".restartIgrice");

fabricko.addEventListener("click", iznova);

function iznova() {
	
location.reload();

}
