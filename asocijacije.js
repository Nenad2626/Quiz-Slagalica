function igraPocinje6() {

let kolonaA=document.querySelectorAll(".kolonaA");
let kolonaB=document.querySelectorAll(".kolonaB");
let kolonaC=document.querySelectorAll(".kolonaC");
let kolonaD=document.querySelectorAll(".kolonaD");

let objekti1=document.querySelectorAll(".objekti1");
let objekti2=document.querySelectorAll(".objekti2");
let objekti3=document.querySelectorAll(".objekti3");
let objekti4=document.querySelectorAll(".objekti4");

let slike=["url(A1.jpg)","url(A2.jpg)","url(A3.jpg)","url(A4.jpg)"
            ,"url(C4.jpg)","url(C3.jpg)","url(C2.jpg)","url(C1.jpg)"
            ,"url(B1.jpg)","url(B2.jpg)","url(B3.jpg)","url(B4.jpg)"
            ,"url(D4.jpg)","url(D3.jpg)","url(D2.jpg)","url(D1.jpg)"];

let pogadjanje1=document.querySelectorAll(".pogadjanje1");
let kolone=document.querySelectorAll(".kolone");

let covekIgracAsocijacija=document.querySelector(".igrac11");
let kompjuterIgracAsocijacija=document.querySelector(".igrac12");
let polovinaPolovine=document.querySelectorAll(".cetvrtina");
let unosOdgovora=document.querySelectorAll(".unosOdgovora");
let pretrazivanje=document.querySelector(".pretraga");
let asocijacijeVreme=document.querySelector(".prekidPretrage");
let protokVremena=document.querySelector(".odbrojavanje");
let zamenaTakmicara=document.querySelector(".menjanje");
let listaBrojeva=[1,2,3,4,5,6,7,8,9,10];
let kompPolje1=document.querySelectorAll(".kompPolje");
let kompjuterResio1=document.querySelectorAll(".kompjuterResio");
let konacnoResenje=document.querySelector(".konacnoResenje");
let divovi=document.querySelectorAll("div");

let svi=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let svi1=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let resenjeA=document.querySelector(".resenjeA");
let resenjeB=document.querySelector(".resenjeB");
let resenjeC=document.querySelector(".resenjeC");
let resenjeD=document.querySelector(".resenjeD");

function dodavanjePozadine() {
  
for(let g=0; g < kolone.length; g++)  {

kolone[g].style.background=slike[g];

  }

}

dodavanjePozadine();

// skrivalice1

let carobnjak=["магија","шешир","мерлин","оз"];
let skola=["табла","књига","клупа","оцене"];
let sova=["дрво","птица","хук","ноћ"];
let naocare=["сунце","очи","диоптрија","офталмолог"];

// skrivalice2

let crkva=["свештеник","крст","слава","икона"];
let mesec=["дан","фебруар","небо","дванаест"];
let zid=["цигла","кућа","сат","слика"];
let dzep=["панталоне","ношење","преграда","затворен"];

// skrivalice 3

let sator=["камповање","спавање","свадба","војска"];
let zabava=["музика","смех","уживање","журка"];
let klovn=["шминка","костим","тачка","деца"];
let zivotinje1=["пас","мачка","коњ","орао"];

// skrivalice 4

let oruzje=["нож","мач","пиштољ","лук"];
let vek=["сто","радни","животни","нови"];
let srednji=["између","род","централни","прст"];
let konj=["реп","потковица","седло","јахање"];

// skrivalice 5

let boks=["џак","сала","трчање","рукавице"];
let glumac=["улога","позориште","биоскоп","уметник"];
let film=["трилер","акција","комедија","цртани"];
let stalone=["мишићи","плаћеници","рамбо","специјалиста"];

// skrivalice 6

let pet=["један","два","три","четири"];
let mreza=["риба","рачунар","плетење","паук"];
let sport=["утакмица","тренинг","такмичење","пехар"];
let igrac=["појединац","плес","сингл","капитен"];

// skrivalice 7

let pesak=["пустиња","камила","олуја","плажа"];
let karta=["аутобус","игра","град","музеј"];
let pariz=["престоница","сена","нотр дам","лувр"];
let objekat=["стамбени","спортски","летећи","затворен"];

// skrivalice 8

let vesti=["дневник","новине","најновије","јутарње"];
let televizija=["емисија","станица","кабловска","сателитска"];
let radio=["антена","водитељ","фреквенција","милева"];
let video=["камера","касета","рекордер","снимак"];

// skrivalice 9

let kocija=["точак","превоз","краљица","вучење"];
let bal=["хаљина","маске","валцер","краљ"];
let bundeva=["наранџаста","плод","семе","пита"];
let cipela=["пар","обућа","кожа","стара"];

// skrivalice 10

let njujork=["вол стрит","менхетн","централ парк","кип слободе"];
let velika=["мала","катарина","морава","британија"];
let vilijamTel=["јунак","швајцарска","лук","мета"];
let sin=["отац","мајка","ћерка","рођени"];

let listaResenja=[

"хари потер","календар","циркус","витез","роки","кошарка",
"кула","пренос","пепељуга","јабука"

];

let istek1;
let istek2;
let istek3;
let istek4;
let istek5;

let numerickiBroj1=[1,2,3,4,5,6];
let numerickiBroj2=[7,8,9,10];

function dodavanjeAsocijacija1() {
  
pretrazivanje.textContent=numerickiBroj1[Math.floor(Math.random()*numerickiBroj1.length)];
let stopericaJedan=parseInt(asocijacijeVreme.textContent);

asocijacijeVreme.textContent=stopericaJedan+1;

if(asocijacijeVreme.textContent==5) {

clearInterval(istek3);
dodavanjeReci();

 }

}

istek3=setInterval(dodavanjeAsocijacija1, 50);

function dodavanjeAsocijacija2() {
  
let stopericaDva=parseInt(asocijacijeVreme.textContent);
asocijacijeVreme.textContent=stopericaDva+1;

dodavanjeReci();
pretrazivanje.textContent=numerickiBroj2[Math.floor(Math.random()*numerickiBroj2.length)];

for(let i=0; i < unosOdgovora.length; i++)  {

unosOdgovora[i].readOnly=true;
unosOdgovora[i].value="";

  }


if(asocijacijeVreme.textContent==5) {

clearInterval(istek4);
dodavanjeReci();
istek2=setInterval(vremenskiTok2, 1000);
clearInterval(istek5);

 }

}

function noveAsocijacije() {
  
if(konacnoResenje.style.background=="cornflowerblue" || konacnoResenje.style.background=="indianred") {

asocijacijeVreme.textContent=0;
istek4=setInterval(dodavanjeAsocijacija2, 50);
dodavanjePozadine();
$(".pogadjanje1").css("opacity",0);
$(".kolone").css("color","black");
$(".unosOdgovora").css("background","white");
$(".unosOdgovora").css("color","black");
$(".unosOdgovora").val("");
$(".unosOdgovora").addClass("cetvrtina");
protokVremena.textContent=15;
protokVremena.style.background="indianred";
zamenaTakmicara.textContent="Компјутер погађа";
$(".covekPolje").removeClass("covekPolje");
$(".resenaKolona").removeClass("resenaKolona");
$(".kompjuterResio").removeClass("kompjuterResio");
dodajOduzmi();
$(".gotovo").text("1");
resenjeA.addEventListener("keydown", prvoResenje);
resenjeB.addEventListener("keydown", drugoResenje);
resenjeC.addEventListener("keydown", treceResenje);
resenjeD.addEventListener("keydown", cetvrtoResenje);
konacnoResenje.addEventListener("keydown", tacnoResenjeAsocijacije);

for(let i=0; i < unosOdgovora.length; i++)  {

unosOdgovora[i].readOnly=true;

}

for(let m=0; m < svi1.length; m++)  {

svi.push(svi1[m]);

  }

 }

}

istek5=setInterval(noveAsocijacije, 10000);

let obelezenaKolona;

function otklanjanjeKlasa() {
  
for(let m=0; m < svi.length; m++)  {

if(pogadjanje1[svi[m]].style.opacity==1) {

svi.splice(m, 1);

  }

 }

if(zamenaTakmicara.textContent=="Компјутер погађа") {


$(".cetvrtina").prop("readonly",true);

 } else {

$(".cetvrtina").prop("readonly",false);

 }

}

obelezenaKolona=setInterval(otklanjanjeKlasa, 1);

function skup() {
 
protokVremena.style.background="turquoise";

}

let prvobitna;

function glavnaAsocijacija() {

$(".resenaKolona").prop("readOnly", true);
$(".kompjuterResio").prop("readOnly", true);

for(let i=0; i < kolone.length; i++)  {
for(let m=0; m < polovinaPolovine.length; m++)  {  
for(let h=0; h < divovi.length; h++)  { 

if(konacnoResenje.style.background=="cornflowerblue" && $(".gotovo").text()=="1")  {

setTimeout(skup, 4000);

  }

if(konacnoResenje.style.background=="indianred" && $(".gotovo").text()=="1")  {

setTimeout(skup, 4000);

  }


if(konacnoResenje.style.background=="indianred" )  {

konacnoResenje.style.color="white";

  }

if(kolone[i].style.background=="indianred" || kolone[i].style.background=="cornflowerblue")  {

kolone[i].classList.remove("pokusaj");

  }  

if(polovinaPolovine[m].style.background=="indianred" || polovinaPolovine[m].style.background=="cornflowerblue")  {

polovinaPolovine[m].classList.remove("pokusaj");
polovinaPolovine[m].style.color="white";

    }  

if(divovi[h].style.background=="indianred" || divovi[h].style.background=="cornflowerblue")  {

divovi[h].style.color="white";

    }  

   }

  }

 }

}

prvobitna=setInterval(glavnaAsocijacija, 1);

function dodajOduzmi() {
  
for(let i=0; i < kolone.length; i++)  {

kolone[i].classList.add("pokusaj");

}

for(let m=0; m < polovinaPolovine.length; m++)  {

polovinaPolovine[m].classList.add("pokusaj");

 }

}

dodajOduzmi();

function dodavanjeReci() {
 
if(pretrazivanje.textContent==1) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=carobnjak[g];
objekti2[g].textContent=skola[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=sova[h];
objekti4[h].textContent=naocare[h];

  }

}

if(pretrazivanje.textContent==2) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=crkva[g];
objekti2[g].textContent=mesec[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=zid[h];
objekti4[h].textContent=dzep[h];

  }
  
}

if(pretrazivanje.textContent==3) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=sator[g];
objekti2[g].textContent=zabava[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=klovn[h];
objekti4[h].textContent=zivotinje1[h];

  }
  
}

if(pretrazivanje.textContent==4) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=oruzje[g];
objekti2[g].textContent=vek[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=srednji[h];
objekti4[h].textContent=konj[h];

  }
  
}

if(pretrazivanje.textContent==5) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=boks[g];
objekti2[g].textContent=glumac[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=film[h];
objekti4[h].textContent=stalone[h];

  }
  
}

if(pretrazivanje.textContent==6) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=pet[g];
objekti2[g].textContent=mreza[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=sport[h];
objekti4[h].textContent=igrac[h];

  }
  
}

if(pretrazivanje.textContent==7) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=pesak[g];
objekti2[g].textContent=karta[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=pariz[h];
objekti4[h].textContent=objekat[h];

  }
  
}

if(pretrazivanje.textContent==8) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=vesti[g];
objekti2[g].textContent=televizija[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=radio[h];
objekti4[h].textContent=video[h];

  }
  
}

if(pretrazivanje.textContent==9) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=kocija[g];
objekti2[g].textContent=bal[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=bundeva[h];
objekti4[h].textContent=cipela[h];

  }
  
}

if(pretrazivanje.textContent==10) {

for(let g=0; g < 4; g++)  {

objekti1[g].textContent=njujork[g];
objekti2[g].textContent=velika[g];

  } 

for(let h=0; h < 4; h++)  {

objekti3[h].textContent=vilijamTel[h];
objekti4[h].textContent=sin[h];

  }
  
 }

}


for(let f=0; f < kolone.length; f++)  {

kolone[f].addEventListener("click", pogadjanje);

}

let par=[0,2,4,6,8,10,12,14];
let nepar=[1,3,5,7,9,11,13,15];
let razno1=[0,3,4,7,8,11,12,15];
let razno2=[1,2,,56,9,10,13,14];
let sveZajedno=$(".pokusaj").length;

function poentiranje1() {
  
let poenCoveku=parseInt(covekIgracAsocijacija.textContent);
covekIgracAsocijacija.textContent=poenCoveku+1;  
protokVremena.textContent=10;

if(konacnoResenje.style.background=="cornflowerblue") {

covekIgracAsocijacija.textContent=poenCoveku+1+sveZajedno;

    }

}

function poentiranje2() {
  
let poenKompu=parseInt(kompjuterIgracAsocijacija.textContent);
kompjuterIgracAsocijacija.textContent=poenKompu+4;  
protokVremena.textContent=10;

if(konacnoResenje.style.background=="indianred") {

kompjuterIgracAsocijacija.textContent=poenKompu+1+sveZajedno;

    }

}


function pogadjanje() {
  
this.children[0].style.opacity=1;
this.style.background="white";

if(this.children[0].style.opacity==1)  {

this.classList.add("covekPolje");

for(let f=0; f < svi.length; f++)  {

kolone[svi[f]].removeEventListener("click", pogadjanje);

    }

  }

}


let listaA=["чаробњак","црква","шатор","оружје","бокс","пет","песак","вести","кочија","њујорк"];
let listaB=["школа","мeсeц","забава","век","глумац","мрежа","карта","телевизија","бал","велика"];
let listaC=["сова","зид","кловн","средњи","филм","спорт","париз","радио","бундева","вилијам тел"];
let listaD=["наочаре","џеп","животиње","коњ","сталоне","играч","објекат","видео","ципела","син"];

resenjeA.addEventListener("keydown", prvoResenje);

function prvoResenje(event) {

for(let m=0; m < listaA.length; m++)  {

for(let r=0; r < listaBrojeva.length; r++)  {

if(event.keyCode===13 && pretrazivanje.textContent==listaBrojeva[r] && this.value==listaA[m])  {

this.removeEventListener("keydown",prvoResenje);

for(let g=0; g < 4; g++)  {

objekti1[g].style.opacity=1;
objekti1[g].parentElement.style.background="cornflowerblue";
this.classList.add("resenaKolona");
this.classList.remove("cetvrtina");
this.readOnly=true;
this.style.background="cornflowerblue";
this.style.color="white";
kolone[g].removeEventListener("click", pogadjanje);
poentiranje1();

   } 

  }

}

}


}

resenjeB.addEventListener("keydown", drugoResenje);

function drugoResenje(event) {

for(let m=0; m < listaB.length; m++)  {

for(let r=0; r < listaBrojeva.length; r++)  {

if(event.keyCode===13 && pretrazivanje.textContent==listaBrojeva[r] && this.value==listaB[m])  {

this.removeEventListener("keydown",drugoResenje);

for(let g=0; g < 4; g++)  {

objekti2[g].style.opacity=1;
objekti2[g].parentElement.style.background="cornflowerblue";
this.classList.add("resenaKolona");
this.classList.remove("cetvrtina");
this.readOnly=true;
this.style.background="cornflowerblue";
this.style.color="white";
kolone[g].removeEventListener("click", pogadjanje);
poentiranje1();

   } 

  }

}

}

}

resenjeC.addEventListener("keydown", treceResenje);

function treceResenje(event) {

for(let m=0; m < listaC.length; m++)  {

for(let r=0; r < listaBrojeva.length; r++)  {

if(event.keyCode===13 && pretrazivanje.textContent==listaBrojeva[r] && this.value==listaC[m])  {

this.removeEventListener("keydown",treceResenje);

for(let g=0; g < 4; g++)  {

objekti3[g].style.opacity=1;
objekti3[g].parentElement.style.background="cornflowerblue";
this.classList.add("resenaKolona");
this.classList.remove("cetvrtina");
this.readOnly=true;
this.style.background="cornflowerblue";
this.style.color="white";
kolone[g].removeEventListener("click", pogadjanje);
poentiranje1();

   } 

  }

}

}

}

resenjeD.addEventListener("keydown", cetvrtoResenje);

function cetvrtoResenje() {

for(let m=0; m < listaD.length; m++)  {

for(let r=0; r < listaBrojeva.length; r++)  {

if(event.keyCode===13 && pretrazivanje.textContent==listaBrojeva[r] && this.value==listaD[m])  {

this.removeEventListener("keydown",cetvrtoResenje);

for(let g=0; g < 4; g++)  {

objekti4[g].style.opacity=1;
objekti4[g].parentElement.style.background="cornflowerblue";
this.classList.add("resenaKolona");
this.classList.remove("cetvrtina");
this.readOnly=true;
this.style.background="cornflowerblue";
this.style.color="white";
kolone[g].removeEventListener("click", pogadjanje);
poentiranje1();

   } 

  }

}

}

}

let resenja1=["чаробњак","сова","школа","наочаре","хари потер"];
let resenja2=["црква","зид","месец","џеп","календар"];
let resenja3=["шатор","кловн","забава","животиње","циркус"];
let resenja4=["оружје","средњи","век","коњ","витез"];
let resenja5=["бокс","филм","глумац","сталоне","роки"];
let resenja6=["пет","спорт","мрежа","играч","кошарка"];
let resenja7=["песак","париз","карта","објекат","кула"];
let resenja8=["вести","радио","телевизија","видео","пренос"];
let resenja9=["кочија","бундева","бал","ципела","пепељуга"];
let resenja10=["њујорк","вилијам тел","велика","син","јабука"];

konacnoResenje.addEventListener("keydown", tacnoResenjeAsocijacije);

function tacnoResenjeAsocijacije(event) {

if(event.keyCode===13 && pretrazivanje.textContent==1 && this.value=="хари потер" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja1[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

if(event.keyCode===13 && pretrazivanje.textContent==2 && this.value=="календар" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja2[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

if(event.keyCode===13 && pretrazivanje.textContent==3 && this.value=="циркус" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja3[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

if(event.keyCode===13 && pretrazivanje.textContent==4 && this.value=="витез" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja4[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

if(event.keyCode===13 && pretrazivanje.textContent==5 && this.value=="роки" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja5[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

if(event.keyCode===13 && pretrazivanje.textContent==6 && this.value=="кошарка" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja6[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

if(event.keyCode===13 && pretrazivanje.textContent==7 && this.value=="кула" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja7[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

if(event.keyCode===13 && pretrazivanje.textContent==8 && this.value=="пренос" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja8[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }


if(event.keyCode===13 && pretrazivanje.textContent==9 && this.value=="пепељуга" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja9[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }


if(event.keyCode===13 && pretrazivanje.textContent==10 && this.value=="јабука" && $(".covekPolje").length > 0)  {

$(".pokusaj").css("background","cornflowerblue");
$(".pokusaj").css("color","white");
poentiranje1();
this.removeEventListener("keydown",tacnoResenjeAsocijacije);
this.classList.remove("cetvrtina");
$(".pogadjanje1").css("opacity",1);
$(".konacnoResenje").css("background","cornflowerblue");
$(".konacnoResenje").css("border","1px solid cornflowerblue");
clearInterval(istek1);
clearInterval(istek2);

for(let f=0; f < unosOdgovora.length; f++)  {

unosOdgovora[f].readOnly=true;
unosOdgovora[f].value=resenja10[f];
unosOdgovora[f].style.color="white";
unosOdgovora[f].style.borderColor="white";

     }

for(let r=0; r < kolone.length; r++)  {

kolone[r].removeEventListener("click", pogadjanje);

     }

   }

}


function kompjuterPogadja1() {

let ordering=svi[Math.floor(Math.random()*svi.length)];

for(let i=0; i < svi.length; i++)  {

if(pogadjanje1[svi[i]].style.opacity==0) {

pogadjanje1[ordering].style.opacity=1;
kolone[ordering].style.background="white";
kolone[ordering].classList.add("kompPolje");

   }

 }

}

function vremenskiTok1() {
  
let unazad1=parseInt(protokVremena.textContent);
protokVremena.textContent=unazad1-1;


if(zamenaTakmicara.textContent=="Човек погађа") {

protokVremena.style.background="deepskyblue";
protokVremena.style.color="white";

}

if(protokVremena.textContent==0) {

clearInterval(istek1);
istek2=setInterval(vremenskiTok2, 1000);
protokVremena.textContent=15;
zamenaTakmicara.textContent="Компјутер погађа";
zamenaTakmicara.style.marginLeft="120px";
protokVremena.style.background="indianred";

for(let f=0; f < svi.length; f++)  {

kolone[svi[f]].removeEventListener("click", pogadjanje);

   }

$(".polovinaPolovine").attr("readonly", true);

  }

}

istek1=setInterval(vremenskiTok1, 1000);

let prvaTri=[0,1,2];

function vremenskiTok2() {

let unazad2=parseInt(protokVremena.textContent);
protokVremena.textContent=unazad2-1;

if(protokVremena.textContent==0) {

clearInterval(istek2);
istek1=setInterval(vremenskiTok1, 1000);
protokVremena.textContent=15;
zamenaTakmicara.textContent="Човек погађа";
zamenaTakmicara.style.marginLeft="150px";
protokVremena.style.background="deepskyblue";

for(let f=0; f < svi.length; f++)  {

kolone[svi[f]].addEventListener("click", pogadjanje);

  }

$(".cetvrtina").attr("readonly", false);

}

if(protokVremena.textContent==14)  {

kompjuterPogadja1();

}

// konacna Resenja

if(resenjeA.value=="чаробњак" && resenjeB.value=="школа" && resenjeC.value=="сова" && resenjeD.value=="наочаре"
 && pretrazivanje.textContent==1 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="хари потер";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="црква" && resenjeB.value=="месец" && resenjeC.value=="зид" && resenjeD.value=="џеп"
 && pretrazivanje.textContent==2 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="календар";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="шатор" && resenjeB.value=="забава" && resenjeC.value=="кловн" && resenjeD.value=="животиње"
 && pretrazivanje.textContent==3 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="циркус";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="оружје" && resenjeB.value=="век" && resenjeC.value=="средњи" && resenjeD.value=="коњ"
 && pretrazivanje.textContent==4 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="витез";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="бокс" && resenjeB.value=="глумац" && resenjeC.value=="филм" && resenjeD.value=="сталоне"
 && pretrazivanje.textContent==5 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="роки";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="пет" && resenjeB.value=="мрежа" && resenjeC.value=="спорт" && resenjeD.value=="играч"
 && pretrazivanje.textContent==6 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="кошарка";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="песак" && resenjeB.value=="карта" && resenjeC.value=="париз" && resenjeD.value=="објекат"
 && pretrazivanje.textContent==7 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="кула";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="вести" && resenjeB.value=="телевизија" && resenjeC.value=="радио" && resenjeD.value=="видео"
 && pretrazivanje.textContent==8 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="пренос";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="кочија" && resenjeB.value=="бал" && resenjeC.value=="бундева" && resenjeD.value=="ципела"
 && pretrazivanje.textContent==9 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="пепељуга";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

if(resenjeA.value=="њујорк" && resenjeB.value=="велика" && resenjeC.value=="вилијам тел" && resenjeD.value=="син"
 && pretrazivanje.textContent==10 && konacnoResenje.value=="") {

poentiranje2();
konacnoResenje.value="јабука";
konacnoResenje.style.background="indianred";
clearInterval(istek1);
clearInterval(istek2);
konacnoResenje.classList.add("kompjuterResio");
konacnoResenje.classList.remove("cetvrtina");

}

// resenje kolone a

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==1 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="чаробњак";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";

$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==2 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="црква";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==3 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="шатор";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==4 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="оружје";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==5 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="бокс";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==6 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="пет";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==7 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="песак";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==8 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="вести";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==9 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="кочија";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

if(objekti1[2].style.opacity==1 && objekti1[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==10 && resenjeA.value=="") {

poentiranje2();
resenjeA.value="њујорк";
resenjeA.readOnly=true;
resenjeA.style.background="indianred";
$(".objekti1").css("opacity","1");
$(".kolonaA").css("background","indianred");
$(".resenjaA").addClass("kompjuterResio");
resenjeA.classList.remove("cetvrtina");

  }

// resenje kolone b

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==1 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="школа";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");   
resenjeB.classList.remove("cetvrtina");

  }
  
if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==2 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="месец";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");        
resenjeB.classList.remove("cetvrtina");

  }
  
if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==3 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="забава";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");         
resenjeB.classList.remove("cetvrtina");

  }

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==4 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="век";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");         
resenjeB.classList.remove("cetvrtina");

  }

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==5 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="глумац";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");          
resenjeB.classList.remove("cetvrtina");

  }

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==6 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="мрежа";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");         
resenjeB.classList.remove("cetvrtina");

  }

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==7 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="карта";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");       
resenjeB.classList.remove("cetvrtina");

  }

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==8 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="телевизија";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");          
resenjeB.classList.remove("cetvrtina");

  }

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==9 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="бал";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");  
resenjeB.classList.remove("cetvrtina");

  }

if(objekti2[2].style.opacity==1 && objekti2[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==10 && resenjeB.value=="") {

poentiranje2();
resenjeB.value="велика";
resenjeB.readOnly=true;
resenjeB.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaB").css("background","indianred");
$(".resenjaB").addClass("kompjuterResio");         
resenjeB.classList.remove("cetvrtina");

  }

// resenje kolone c

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 &&
   protokVremena.textContent==9 && pretrazivanje.textContent==1 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="сова";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");    
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 &&
   protokVremena.textContent==9 && pretrazivanje.textContent==2 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="зид";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");    
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==3 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="кловн";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");        
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==4 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="средњи";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");        
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==5 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="филм";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");   
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==6 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="спорт";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");  
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==7 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="париз";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");   
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==8 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="радио";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");      
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==9 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="бундева";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");   
resenjeC.classList.remove("cetvrtina");

  }

if(objekti3[2].style.opacity==1 && objekti3[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==10 && resenjeC.value=="") {

poentiranje2();
resenjeC.value="вилијам тел";
resenjeC.readOnly=true;
resenjeC.style.background="indianred";
$(".objekti3").css("opacity","1");
$(".kolonaC").css("background","indianred");
$(".resenjaC").addClass("kompjuterResio");     
resenjeC.classList.remove("cetvrtina");

  }


// resenje kolone d

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 &&
   protokVremena.textContent==9 && pretrazivanje.textContent==1 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="наочаре";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");   
resenjeD.classList.remove("cetvrtina");

}

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 &&
   protokVremena.textContent==9 && pretrazivanje.textContent==2 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="џеп";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

}

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==3 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="животиње";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti2").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");      
resenjeD.classList.remove("cetvrtina");

  }

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==4 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="коњ";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

  }

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==5 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="сталоне";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

  }

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==6 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="играч";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

  }

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==7 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="објекат";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

  }

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==8 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="видео";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

  }

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==9 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="ципела";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

  }

if(objekti4[2].style.opacity==1 && objekti4[3].style.opacity==1 && 
   protokVremena.textContent==9 && pretrazivanje.textContent==10 && resenjeD.value=="") {

poentiranje2();
resenjeD.value="син";
resenjeD.readOnly=true;
resenjeD.style.background="indianred";
$(".objekti4").css("opacity","1");
$(".kolonaD").css("background","indianred");
$(".resenjaD").addClass("kompjuterResio");  
resenjeD.classList.remove("cetvrtina");

  }

}

function menjanjeSmera() {
  
let smer1=["-110px","-80px","-50px","-20px",];
let smer2=["","-110px","-80px","-50px","-20px",];
let smer3=["108px","78px","48px","18px",];
let smer4=["","108px","78px","48px","18px",];

for(let i=0; i < 4; i++)  {

kolonaA[i].style.marginLeft=smer1.shift();

  }

for(let i=1; i < 5; i++)  {

kolonaC[i].style.marginLeft=smer2.pop();

  }

for(let i=0; i < 4; i++)  {

kolonaB[i].style.marginLeft=smer3.shift();

  }

for(let i=1; i < 5; i++)  {

kolonaD[i].style.marginLeft=smer4.pop();

  }

}

menjanjeSmera();


}


let kraj;
let petaIgra5=document.querySelector(".petaIgra");
let sestaIgra5=document.querySelector(".sestaIgra");
let sekundant=document.querySelector(".alarm");

function igraMozeDaPocne6() {
  
if(sekundant.style.background=="turquoise")  {

igraPocinje6();
petaIgra5.style.visibility="hidden";
sestaIgra5.style.visibility="visible";
clearInterval(kraj);

}

}

kraj=setInterval(igraMozeDaPocne6, 5000);