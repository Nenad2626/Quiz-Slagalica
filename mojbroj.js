//igra Moj Broj

function igraPocinje2() {


let triBroja=document.querySelector(".triBroja");
let mojBroj=document.querySelector(".trocifren");
let br=document.querySelectorAll(".br");
let sviBrojevi=document.querySelectorAll(".red100");
let dvocifren=document.querySelector(".dvaBroja");
let cetiriA=document.querySelector(".cetiriA");

let zaustavljanjeBrojeva=document.querySelector(".obrtanjeBrojeva");

let br2=document.querySelectorAll(".br2");

for(let i=0; i < br2.length; i++)  {

br2[i].addEventListener("click", kucanjeResenja);

}


let okretanje=[

"20","24","28","32","36","40",
"44","48","52","56","60","64",
"68","72","76","80","84","88",
"92","96","100","104","108","112",
"116","120","124","128"

];

let okreni;
let zaustavi;
let spinovanje;

let resenjeBroja=[

106,371,451,227,
689,729,500,903,
736,330,140,484,
612,165,780,295,
925,888,505,344,
432,999,113,661,
439,94,74,436

];

let dodavanjeJednocifrenog1=[9,1,5,4];
let dodavanjeJednocifrenog2=[2,3,6,7];
let dodavanjeJednocifrenog3=[9,9,8,1];
let dodavanjeJednocifrenog4=[3,3,3,4];
let dodavanjeJednocifrenog5=[7,2,7,2];
let dodavanjeJednocifrenog6=[3,8,6,9];
let dodavanjeJednocifrenog7=[1,2,5,4];
let dodavanjeJednocifrenog8=[8,2,7,6];
let dodavanjeJednocifrenog9=[5,4,5,5];
let dodavanjeJednocifrenog10=[8,2,9,2];
let dodavanjeJednocifrenog11=[1,8,8,3];
let dodavanjeJednocifrenog12=[4,9,7,1];
let dodavanjeJednocifrenog13=[2,3,5,2];
let dodavanjeJednocifrenog14=[1,8,1,1];
let dodavanjeJednocifrenog15=[5,4,9,9];
let dodavanjeJednocifrenog16=[3,7,6,3];
let dodavanjeJednocifrenog17=[8,5,9,1];
let dodavanjeJednocifrenog18=[4,2,2,4];
let dodavanjeJednocifrenog19=[6,4,3,7];
let dodavanjeJednocifrenog20=[4,9,1,9];
let dodavanjeJednocifrenog21=[5,8,2,8];
let dodavanjeJednocifrenog22=[9,3,6,6];
let dodavanjeJednocifrenog23=[2,1,5,4];
let dodavanjeJednocifrenog24=[7,8,4,3];
let dodavanjeJednocifrenog25=[9,5,6,2];
let dodavanjeJednocifrenog26=[1,3,4,1];
let dodavanjeJednocifrenog27=[6,6,9,6];
let dodavanjeJednocifrenog28=[2,7,8,4];

let dodavanjeDvocifrenog=[

15,10,20,15,20,10,15,
20,10,20,15,10,15,10,
20,20,15,10,15,10,20,
15,10,20,15,10,15,10

];

let dodavanjeTrocifrenog=[

25,100,75,50,25,50,75,
100,25,75,50,100,50,25,
75,50,25,100,75,25,100,
50,75,25,100,50,25,100

];



function sat() {

zaustavljanjeBrojeva.textContent=okretanje[Math.floor(Math.random()*okretanje.length)];

// resenja brojeva

for(let i=0; i < sviBrojevi.length; ++i)  {

if(zaustavljanjeBrojeva.textContent===okretanje[0])  {

sviBrojevi[i].textContent=resenjeBroja[0];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[1])  {

sviBrojevi[i].textContent=resenjeBroja[1];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[2])  {

sviBrojevi[i].textContent=resenjeBroja[2];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[3])  {

sviBrojevi[i].textContent=resenjeBroja[3];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[4])  {

sviBrojevi[i].textContent=resenjeBroja[4];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[5])  {

sviBrojevi[i].textContent=resenjeBroja[5];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[6])  {

sviBrojevi[i].textContent=resenjeBroja[6];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[7])  {

sviBrojevi[i].textContent=resenjeBroja[7];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[8])  {

sviBrojevi[i].textContent=resenjeBroja[8];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje[9])  {

sviBrojevi[i].textContent=resenjeBroja[9];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[10])  {

sviBrojevi[i].textContent=resenjeBroja[10];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[11])  {

sviBrojevi[i].textContent=resenjeBroja[11];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[12])  {

sviBrojevi[i].textContent=resenjeBroja[12];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[13])  {

sviBrojevi[i].textContent=resenjeBroja[13];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[14])  {

sviBrojevi[i].textContent=resenjeBroja[14];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[15])  {

sviBrojevi[i].textContent=resenjeBroja[15];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[16])  {

sviBrojevi[i].textContent=resenjeBroja[16];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[17])  {

sviBrojevi[i].textContent=resenjeBroja[17];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[18])  {

sviBrojevi[i].textContent=resenjeBroja[18];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[19])  {

sviBrojevi[i].textContent=resenjeBroja[19];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[20])  {

sviBrojevi[i].textContent=resenjeBroja[20];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[21])  {

sviBrojevi[i].textContent=resenjeBroja[21];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[22])  {

sviBrojevi[i].textContent=resenjeBroja[22];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[23])  {

sviBrojevi[i].textContent=resenjeBroja[23];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[24])  {

sviBrojevi[i].textContent=resenjeBroja[24];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[25])  {

sviBrojevi[i].textContent=resenjeBroja[25];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[26])  {

sviBrojevi[i].textContent=resenjeBroja[26];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[27])  {

sviBrojevi[i].textContent=resenjeBroja[27];

    }

  }

// jednocifreni brojevi  

for(let jb=0; jb < br.length; ++jb)  {

if(zaustavljanjeBrojeva.textContent===okretanje[0])  {

br[jb].textContent=dodavanjeJednocifrenog1[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[1])  {

br[jb].textContent=dodavanjeJednocifrenog2[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[2])  {

br[jb].textContent=dodavanjeJednocifrenog3[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[3])  {

br[jb].textContent=dodavanjeJednocifrenog4[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[4])  {

br[jb].textContent=dodavanjeJednocifrenog5[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[5])  {

br[jb].textContent=dodavanjeJednocifrenog6[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[6])  {

br[jb].textContent=dodavanjeJednocifrenog7[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[7])  {

br[jb].textContent=dodavanjeJednocifrenog8[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[8])  {

br[jb].textContent=dodavanjeJednocifrenog9[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje[9])  {

br[jb].textContent=dodavanjeJednocifrenog10[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[10])  {

br[jb].textContent=dodavanjeJednocifrenog11[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[11])  {

br[jb].textContent=dodavanjeJednocifrenog12[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[12])  {

br[jb].textContent=dodavanjeJednocifrenog13[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[13])  {

br[jb].textContent=dodavanjeJednocifrenog14[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[14])  {

br[jb].textContent=dodavanjeJednocifrenog15[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[15])  {

br[jb].textContent=dodavanjeJednocifrenog16[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[16])  {

br[jb].textContent=dodavanjeJednocifrenog17[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[17])  {

br[jb].textContent=dodavanjeJednocifrenog18[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[18])  {

br[jb].textContent=dodavanjeJednocifrenog19[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[19])  {

br[jb].textContent=dodavanjeJednocifrenog20[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[20])  {

br[jb].textContent=dodavanjeJednocifrenog21[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[21])  {

br[jb].textContent=dodavanjeJednocifrenog22[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[22])  {

br[jb].textContent=dodavanjeJednocifrenog23[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[23])  {

br[jb].textContent=dodavanjeJednocifrenog24[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[24])  {

br[jb].textContent=dodavanjeJednocifrenog25[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[25])  {

br[jb].textContent=dodavanjeJednocifrenog26[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[26])  {

br[jb].textContent=dodavanjeJednocifrenog27[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[27])  {

br[jb].textContent=dodavanjeJednocifrenog28[jb];

    }

 }

//dvocifreni brojevi

if(zaustavljanjeBrojeva.textContent===okretanje[0])  {

dvocifren.textContent=dodavanjeDvocifrenog[0];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[1])  {

dvocifren.textContent=dodavanjeDvocifrenog[1];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[2])  {

dvocifren.textContent=dodavanjeDvocifrenog[2];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[3])  {

dvocifren.textContent=dodavanjeDvocifrenog[3];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[4])  {

dvocifren.textContent=dodavanjeDvocifrenog[4];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[5])  {

dvocifren.textContent=dodavanjeDvocifrenog[5];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[6])  {

dvocifren.textContent=dodavanjeDvocifrenog[6];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[7])  {

dvocifren.textContent=dodavanjeDvocifrenog[7];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[8])  {

dvocifren.textContent=dodavanjeDvocifrenog[8];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje[9])  {

dvocifren.textContent=dodavanjeDvocifrenog[9];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[10])  {

dvocifren.textContent=dodavanjeDvocifrenog[10];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[11])  {

dvocifren.textContent=dodavanjeDvocifrenog[11];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[12])  {

dvocifren.textContent=dodavanjeDvocifrenog[12];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[13])  {

dvocifren.textContent=dodavanjeDvocifrenog[13];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[14])  {

dvocifren.textContent=dodavanjeDvocifrenog[14];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[15])  {

dvocifren.textContent=dodavanjeDvocifrenog[15];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[16])  {

dvocifren.textContent=dodavanjeDvocifrenog[16];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[17])  {

dvocifren.textContent=dodavanjeDvocifrenog[17];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[18])  {

dvocifren.textContent=dodavanjeDvocifrenog[18];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[19])  {

dvocifren.textContent=dodavanjeDvocifrenog[19];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[20])  {

dvocifren.textContent=dodavanjeDvocifrenog[20];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[21])  {

dvocifren.textContent=dodavanjeDvocifrenog[21];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[22])  {

dvocifren.textContent=dodavanjeDvocifrenog[22];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[23])  {

dvocifren.textContent=dodavanjeDvocifrenog[23];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[24])  {

dvocifren.textContent=dodavanjeDvocifrenog[24];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[25])  {

dvocifren.textContent=dodavanjeDvocifrenog[25];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[26])  {

dvocifren.textContent=dodavanjeDvocifrenog[26];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[27])  {

dvocifren.textContent=dodavanjeDvocifrenog[27];

    }

// trocifreni brojevi

if(zaustavljanjeBrojeva.textContent===okretanje[0])  {

cetiriA.textContent=dodavanjeTrocifrenog[0];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[1])  {

cetiriA.textContent=dodavanjeTrocifrenog[1];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[2])  {

cetiriA.textContent=dodavanjeTrocifrenog[2];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[3])  {

cetiriA.textContent=dodavanjeTrocifrenog[3];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[4])  {

cetiriA.textContent=dodavanjeTrocifrenog[4];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[5])  {

cetiriA.textContent=dodavanjeTrocifrenog[5];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[6])  {

cetiriA.textContent=dodavanjeTrocifrenog[6];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[7])  {

cetiriA.textContent=dodavanjeTrocifrenog[7];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[8])  {

cetiriA.textContent=dodavanjeTrocifrenog[8];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje[9])  {

cetiriA.textContent=dodavanjeTrocifrenog[9];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[10])  {

cetiriA.textContent=dodavanjeTrocifrenog[10];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[11])  {

cetiriA.textContent=dodavanjeTrocifrenog[11];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[12])  {

cetiriA.textContent=dodavanjeTrocifrenog[12];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[13])  {

cetiriA.textContent=dodavanjeTrocifrenog[13];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[14])  {

cetiriA.textContent=dodavanjeTrocifrenog[14];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[15])  {

cetiriA.textContent=dodavanjeTrocifrenog[15];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[16])  {

cetiriA.textContent=dodavanjeTrocifrenog[16];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[17])  {

cetiriA.textContent=dodavanjeTrocifrenog[17];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[18])  {

cetiriA.textContent=dodavanjeTrocifrenog[18];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[19])  {

cetiriA.textContent=dodavanjeTrocifrenog[19];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[20])  {

cetiriA.textContent=dodavanjeTrocifrenog[20];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[21])  {

cetiriA.textContent=dodavanjeTrocifrenog[21];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[22])  {

cetiriA.textContent=dodavanjeTrocifrenog[22];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[23])  {

cetiriA.textContent=dodavanjeTrocifrenog[23];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[24])  {

cetiriA.textContent=dodavanjeTrocifrenog[24];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[25])  {

cetiriA.textContent=dodavanjeTrocifrenog[25];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[26])  {

cetiriA.textContent=dodavanjeTrocifrenog[26];

    }

if(zaustavljanjeBrojeva.textContent===okretanje[27])  {

cetiriA.textContent=dodavanjeTrocifrenog[27];

    }

}

okreni=setInterval(sat, 20);

function zaustaviSat() {
	
clearInterval(okreni);

}

zaustavi=setInterval(zaustaviSat, 600);


let covekIgrac=document.querySelector(".covek");
let prvi=document.querySelector(".prvi");
let drugi=document.querySelector(".drugi");
let treci=document.querySelector(".treci");
let cetvrti=document.querySelector(".cetvrti");

let rezultat=document.querySelector(".konacanBroj");

function racunanje()  {

rezultat.textContent=eval(covekIgrac.value);

}

let kompjuterovoRacunanje=document.querySelector(".kompjuter");
let konacanBroj2=document.querySelector(".konacanBroj2");


function izracunato()  {

if(zaustavljanjeBrojeva.textContent===okretanje[0])  {

kompjuterovoRacunanje.value="(25*4)+5+1";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[1])  {

kompjuterovoRacunanje.value="(100+6)*7/2";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[2])  {

kompjuterovoRacunanje.value="(75*8)-(20*(8-1))-9";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[3])  {

kompjuterovoRacunanje.value="(50+3)*4+15";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[4])  {

kompjuterovoRacunanje.value="25*(20+7)+(7*2)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[5])  {

kompjuterovoRacunanje.value="(6+9)*50-10-8-3";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[6])  {

kompjuterovoRacunanje.value="(15+5)*75/(2+1)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[7])  {

kompjuterovoRacunanje.value="(20*8*6)-(100/2+7)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[8])  {

kompjuterovoRacunanje.value="(5*5+5)*25-10-4";

    }    

if(zaustavljanjeBrojeva.textContent===okretanje[9])  {

kompjuterovoRacunanje.value="75*2+20*9";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[10])  {

kompjuterovoRacunanje.value="(8+1)*15+8-3";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[11])  {

kompjuterovoRacunanje.value="(4+1)*100-9-7";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[12])  {

kompjuterovoRacunanje.value="(50+2/2)*(15-3)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[13])  {

kompjuterovoRacunanje.value="(8-1)*25-10";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[14])  {

kompjuterovoRacunanje.value="(75*9)+(20*5)+(9-4)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[15])  {

kompjuterovoRacunanje.value="(50-3)*6+(20-7)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[16])  {

kompjuterovoRacunanje.value="(9*5-8)*25";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[17])  {

kompjuterovoRacunanje.value="(100+10)*4*2+(4*2)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[18])  {

kompjuterovoRacunanje.value="(75*7)-(15*4/3)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[19])  {

kompjuterovoRacunanje.value="(25+9)*10+4";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[20])  {

kompjuterovoRacunanje.value="(100-8)*5-20-8";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[21])  {

kompjuterovoRacunanje.value="(50*6*3)+(15*6)+9";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[22])  {

kompjuterovoRacunanje.value="(10*4-2)+75";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[23])  {

kompjuterovoRacunanje.value="(25+8)*20+4-3";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[24])  {

kompjuterovoRacunanje.value="(100*9/2)-6-5"

    }

if(zaustavljanjeBrojeva.textContent===okretanje[25])  {

kompjuterovoRacunanje.value="(10+1)*4+50";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[26])  {

kompjuterovoRacunanje.value="25*(9-6)-(6/6)";

    }

if(zaustavljanjeBrojeva.textContent===okretanje[27])  {

kompjuterovoRacunanje.value="(100+7+2)*4";

    }

konacanBroj2.textContent=eval(kompjuterovoRacunanje.value);


}

let vreme1=document.querySelector(".tajmer");
let zaustavi28;
let covek1=document.querySelector(".igrac3");
let kompjuter2=document.querySelector(".igrac4");
let racunanje1=document.querySelectorAll(".racunanje1");

for(let i=0; i < racunanje1.length; i++) {

racunanje1[i].addEventListener("click", kucanjeResenja2);

}

function kucanjeResenja() {
    
covekIgrac.value +=this.textContent;
this.removeEventListener("click", kucanjeResenja);

}

function kucanjeResenja2() {
    
covekIgrac.value +=this.textContent;

}



function stopericaStop() {
	
let periodi=parseInt(vreme1.textContent);
vreme1.textContent=periodi-1;

if(vreme1.textContent==0) {

clearInterval(zaustavi28);
zaustavi28=null;
setTimeout(racunanje, 3000);
setTimeout(izracunato, 3000);
setTimeout(rezultatiIgre, 4000);
setTimeout(resetovanjeIgre, 7000);
covekIgrac.readOnly=true;

  }

if(vreme1.textContent < 10) {

$(vreme1).prepend(0);

  }  


}

zaustavi28=setInterval(stopericaStop, 1000);

function rezultatiIgre() {
	
let igrac1=parseInt(covek1.textContent);
let kompjuter1=parseInt(kompjuter2.textContent);

for(let i=0; i < sviBrojevi.length; ++i)  {

if(rezultat.textContent==sviBrojevi[i].textContent) {

covek1.textContent=igrac1+10;

   } else  {


kompjuter2.textContent=kompjuter1+10;

    }

  }

}

let okretanje2=[

"10","11","12","14","16",
"21","23","27","33","37",
"41","45","47","51","55",
"59","61","65","67","69",
"73","75","77","79","81",
"85","87","89"

];

let resenjeBroja2=[

521,920,758,401,502,785,637,
249,898,966,300,188,824,343,
777,581,401,752,917,799,650,
984,708,998,322,440,260,800

];

let dodavanjeJednocifrenih1=[5,7,2,4];
let dodavanjeJednocifrenih2=[9,3,6,8];
let dodavanjeJednocifrenih3=[7,4,9,2];
let dodavanjeJednocifrenih4=[1,8,6,5];
let dodavanjeJednocifrenih5=[3,7,1,1];
let dodavanjeJednocifrenih6=[6,9,2,4];
let dodavanjeJednocifrenih7=[5,9,5,8];
let dodavanjeJednocifrenih8=[3,2,6,8];
let dodavanjeJednocifrenih9=[9,7,8,4];
let dodavanjeJednocifrenih10=[5,9,6,1];
let dodavanjeJednocifrenih11=[4,4,4,8];
let dodavanjeJednocifrenih12=[3,3,5,7];
let dodavanjeJednocifrenih13=[9,2,1,8];
let dodavanjeJednocifrenih14=[6,4,3,5];
let dodavanjeJednocifrenih15=[2,7,4,1];
let dodavanjeJednocifrenih16=[8,5,9,9];
let dodavanjeJednocifrenih17=[6,1,2,2];
let dodavanjeJednocifrenih18=[7,7,7,7];
let dodavanjeJednocifrenih19=[8,9,7,6];
let dodavanjeJednocifrenih20=[5,4,3,2];
let dodavanjeJednocifrenih21=[4,7,5,1];
let dodavanjeJednocifrenih22=[6,3,9,2];
let dodavanjeJednocifrenih23=[1,7,8,8];
let dodavanjeJednocifrenih24=[5,3,4,7];
let dodavanjeJednocifrenih25=[8,2,6,9];
let dodavanjeJednocifrenih26=[1,7,1,5];
let dodavanjeJednocifrenih27=[3,8,4,3];
let dodavanjeJednocifrenih28=[9,5,7,2];

let dodavanjeDvocifrenih=[

10,15,20,15,
20,10,10,15,
20,10,15,20,
15,10,15,20,
15,10,10,15,
10,20,15,10,
15,20,10,15

];

let dodavanjeTrocifrenih=[

50,75,100,25,
100,50,75,100,
25,75,100,25,
50,100,75,100,
25,50,25,50,
25,100,75,50,
100,25,75,50

];


function noviBrojevi() {
	
zaustavljanjeBrojeva.textContent=okretanje2[Math.floor(Math.random()*okretanje2.length)];

// resenja brojeva

for(let i=0; i < sviBrojevi.length; ++i)  {

if(zaustavljanjeBrojeva.textContent===okretanje2[0])  {

sviBrojevi[i].textContent=resenjeBroja2[0];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[1])  {

sviBrojevi[i].textContent=resenjeBroja2[1];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[2])  {

sviBrojevi[i].textContent=resenjeBroja2[2];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[3])  {

sviBrojevi[i].textContent=resenjeBroja2[3];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[4])  {

sviBrojevi[i].textContent=resenjeBroja2[4];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[5])  {

sviBrojevi[i].textContent=resenjeBroja2[5];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[6])  {

sviBrojevi[i].textContent=resenjeBroja2[6];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[7])  {

sviBrojevi[i].textContent=resenjeBroja2[7];

    }      

if(zaustavljanjeBrojeva.textContent===okretanje2[8])  {

sviBrojevi[i].textContent=resenjeBroja2[8];

    }   

if(zaustavljanjeBrojeva.textContent===okretanje2[9])  {

sviBrojevi[i].textContent=resenjeBroja2[9];

    }   

if(zaustavljanjeBrojeva.textContent===okretanje2[10])  {

sviBrojevi[i].textContent=resenjeBroja2[10];

    }   

if(zaustavljanjeBrojeva.textContent===okretanje2[11])  {

sviBrojevi[i].textContent=resenjeBroja2[11];

    }   

if(zaustavljanjeBrojeva.textContent===okretanje2[12])  {

sviBrojevi[i].textContent=resenjeBroja2[12];

    }   

if(zaustavljanjeBrojeva.textContent===okretanje2[13])  {

sviBrojevi[i].textContent=resenjeBroja2[13];

    }   

if(zaustavljanjeBrojeva.textContent===okretanje2[14])  {

sviBrojevi[i].textContent=resenjeBroja2[14];

    }       

if(zaustavljanjeBrojeva.textContent===okretanje2[15])  {

sviBrojevi[i].textContent=resenjeBroja2[15];

    }       

if(zaustavljanjeBrojeva.textContent===okretanje2[16])  {

sviBrojevi[i].textContent=resenjeBroja2[16];

    }   

if(zaustavljanjeBrojeva.textContent===okretanje2[17])  {

sviBrojevi[i].textContent=resenjeBroja2[17];

    }       

if(zaustavljanjeBrojeva.textContent===okretanje2[18])  {

sviBrojevi[i].textContent=resenjeBroja2[18];

    }       

if(zaustavljanjeBrojeva.textContent===okretanje2[19])  {

sviBrojevi[i].textContent=resenjeBroja2[19];

    }       

if(zaustavljanjeBrojeva.textContent===okretanje2[20])  {

sviBrojevi[i].textContent=resenjeBroja2[20];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[21])  {

sviBrojevi[i].textContent=resenjeBroja2[21];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[22])  {

sviBrojevi[i].textContent=resenjeBroja2[22];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[23])  {

sviBrojevi[i].textContent=resenjeBroja2[23];

    }      

if(zaustavljanjeBrojeva.textContent===okretanje2[24])  {

sviBrojevi[i].textContent=resenjeBroja2[24];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[25])  {

sviBrojevi[i].textContent=resenjeBroja2[25];

    }      

if(zaustavljanjeBrojeva.textContent===okretanje2[19])  {

sviBrojevi[i].textContent=resenjeBroja2[26];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[27])  {

sviBrojevi[i].textContent=resenjeBroja2[27];

    }  

  }

// jednocifreni brojevi  

for(let jb=0; jb < br.length; ++jb)  {

if(zaustavljanjeBrojeva.textContent===okretanje2[0])  {

br[jb].textContent=dodavanjeJednocifrenih1[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[1])  {

br[jb].textContent=dodavanjeJednocifrenih2[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[2])  {

br[jb].textContent=dodavanjeJednocifrenih3[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[3])  {

br[jb].textContent=dodavanjeJednocifrenih4[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[4])  {

br[jb].textContent=dodavanjeJednocifrenih5[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[5])  {

br[jb].textContent=dodavanjeJednocifrenih6[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[6])  {

br[jb].textContent=dodavanjeJednocifrenih7[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[7])  {

br[jb].textContent=dodavanjeJednocifrenih8[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[8])  {

br[jb].textContent=dodavanjeJednocifrenih9[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[9])  {

br[jb].textContent=dodavanjeJednocifrenih10[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[10])  {

br[jb].textContent=dodavanjeJednocifrenih11[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje2[11])  {

br[jb].textContent=dodavanjeJednocifrenih12[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[12])  {

br[jb].textContent=dodavanjeJednocifrenih13[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[13])  {

br[jb].textContent=dodavanjeJednocifrenih14[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje2[14])  {

br[jb].textContent=dodavanjeJednocifrenih15[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje2[15])  {

br[jb].textContent=dodavanjeJednocifrenih16[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[16])  {

br[jb].textContent=dodavanjeJednocifrenih17[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[17])  {

br[jb].textContent=dodavanjeJednocifrenih18[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje2[18])  {

br[jb].textContent=dodavanjeJednocifrenih19[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[19])  {

br[jb].textContent=dodavanjeJednocifrenih20[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[20])  {

br[jb].textContent=dodavanjeJednocifrenih21[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje2[21])  {

br[jb].textContent=dodavanjeJednocifrenih22[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[22])  {

br[jb].textContent=dodavanjeJednocifrenih23[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[23])  {

br[jb].textContent=dodavanjeJednocifrenih24[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[24])  {

br[jb].textContent=dodavanjeJednocifrenih25[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje2[25])  {

br[jb].textContent=dodavanjeJednocifrenih26[jb];

    }    

if(zaustavljanjeBrojeva.textContent===okretanje2[26])  {

br[jb].textContent=dodavanjeJednocifrenih27[jb];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[27])  {

br[jb].textContent=dodavanjeJednocifrenih28[jb];

    }

 }

//dvocifreni brojevi

if(zaustavljanjeBrojeva.textContent===okretanje2[0])  {

dvocifren.textContent=dodavanjeDvocifrenih[0];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[1])  {

dvocifren.textContent=dodavanjeDvocifrenih[1];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[2])  {

dvocifren.textContent=dodavanjeDvocifrenih[2];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[3])  {

dvocifren.textContent=dodavanjeDvocifrenih[3];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[4])  {

dvocifren.textContent=dodavanjeDvocifrenih[4];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[5])  {

dvocifren.textContent=dodavanjeDvocifrenih[5];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[6])  {

dvocifren.textContent=dodavanjeDvocifrenih[6];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[7])  {

dvocifren.textContent=dodavanjeDvocifrenih[7];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[8])  {

dvocifren.textContent=dodavanjeDvocifrenih[8];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[9])  {

dvocifren.textContent=dodavanjeDvocifrenih[9];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[10])  {

dvocifren.textContent=dodavanjeDvocifrenih[10];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[11])  {

dvocifren.textContent=dodavanjeDvocifrenih[11];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[12])  {

dvocifren.textContent=dodavanjeDvocifrenih[12];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[13])  {

dvocifren.textContent=dodavanjeDvocifrenih[13];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[14])  {

dvocifren.textContent=dodavanjeDvocifrenih[14];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[15])  {

dvocifren.textContent=dodavanjeDvocifrenih[15];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[16])  {

dvocifren.textContent=dodavanjeDvocifrenih[16];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[17])  {

dvocifren.textContent=dodavanjeDvocifrenih[17];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[18])  {

dvocifren.textContent=dodavanjeDvocifrenih[18];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[19])  {

dvocifren.textContent=dodavanjeDvocifrenih[19];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[20])  {

dvocifren.textContent=dodavanjeDvocifrenih[20];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[21])  {

dvocifren.textContent=dodavanjeDvocifrenih[21];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[22])  {

dvocifren.textContent=dodavanjeDvocifrenih[22];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[23])  {

dvocifren.textContent=dodavanjeDvocifrenih[23];

    }     

if(zaustavljanjeBrojeva.textContent===okretanje2[24])  {

dvocifren.textContent=dodavanjeDvocifrenih[24];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[25])  {

dvocifren.textContent=dodavanjeDvocifrenih[25];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[26])  {

dvocifren.textContent=dodavanjeDvocifrenih[26];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[27])  {

dvocifren.textContent=dodavanjeDvocifrenih[27];

    } 

// trocifreni brojevi

if(zaustavljanjeBrojeva.textContent===okretanje2[0])  {

cetiriA.textContent=dodavanjeTrocifrenih[0];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[1])  {

cetiriA.textContent=dodavanjeTrocifrenih[1];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[2])  {

cetiriA.textContent=dodavanjeTrocifrenih[2];

    }

if(zaustavljanjeBrojeva.textContent===okretanje2[3])  {

cetiriA.textContent=dodavanjeTrocifrenih[3];

    }        

if(zaustavljanjeBrojeva.textContent===okretanje2[4])  {

cetiriA.textContent=dodavanjeTrocifrenih[4];

    }  

if(zaustavljanjeBrojeva.textContent===okretanje2[5])  {

cetiriA.textContent=dodavanjeTrocifrenih[5];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[6])  {

cetiriA.textContent=dodavanjeTrocifrenih[6];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[7])  {

cetiriA.textContent=dodavanjeTrocifrenih[7];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[8])  {

cetiriA.textContent=dodavanjeTrocifrenih[8];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[9])  {

cetiriA.textContent=dodavanjeTrocifrenih[9];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[10])  {

cetiriA.textContent=dodavanjeTrocifrenih[10];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[11])  {

cetiriA.textContent=dodavanjeTrocifrenih[11];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[12])  {

cetiriA.textContent=dodavanjeTrocifrenih[12];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[13])  {

cetiriA.textContent=dodavanjeTrocifrenih[13];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[14])  {

cetiriA.textContent=dodavanjeTrocifrenih[14];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[15])  {

cetiriA.textContent=dodavanjeTrocifrenih[15];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[16])  {

cetiriA.textContent=dodavanjeTrocifrenih[16];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[17])  {

cetiriA.textContent=dodavanjeTrocifrenih[17];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[18])  {

cetiriA.textContent=dodavanjeTrocifrenih[18];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[19])  {

cetiriA.textContent=dodavanjeTrocifrenih[19];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[20])  {

cetiriA.textContent=dodavanjeTrocifrenih[20];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[21])  {

cetiriA.textContent=dodavanjeTrocifrenih[21];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[22])  {

cetiriA.textContent=dodavanjeTrocifrenih[22];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[23])  {

cetiriA.textContent=dodavanjeTrocifrenih[23];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[24])  {

cetiriA.textContent=dodavanjeTrocifrenih[24];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[25])  {

cetiriA.textContent=dodavanjeTrocifrenih[25];

    }     

if(zaustavljanjeBrojeva.textContent===okretanje2[26])  {

cetiriA.textContent=dodavanjeTrocifrenih[26];

    } 

if(zaustavljanjeBrojeva.textContent===okretanje2[27])  {

cetiriA.textContent=dodavanjeTrocifrenih[27];

    } 

}

function zapocniPonovo() {
	
clearInterval(spinovanje);

}


function resetovanjeIgre() {
	
vreme1.textContent=60;
covekIgrac.readOnly=false;
covekIgrac.value="";
kompjuterovoRacunanje.value="";
rezultat.textContent="";
konacanBroj2.textContent="";
spinovanje=setInterval(noviBrojevi, 20);
setInterval(zapocniPonovo, 600);
tikTok=setInterval(noviSat, 1000);

for(let i=0; i < br2.length; i++)  {

br2[i].addEventListener("click", kucanjeResenja);

}

for(let i=0; i < racunanje1.length; i++)  {

racunanje1[i].addEventListener("click", kucanjeResenja2);

}

}

let tikTok;

function bojaStoperice2() {
 
vreme1.style.background="turquoise";    

}

function noviSat() {
	
let novo=parseInt(vreme1.textContent);
vreme1.textContent=novo-1;

if(vreme1.textContent < 10) {

$(vreme1).prepend(0);

  }  

if(vreme1.textContent==0)  {

clearInterval(tikTok);
tikTok=null;
covekIgrac.readOnly=true;
setTimeout(novoRacunanje, 3000);
setTimeout(racunanje2, 3000);
setTimeout(rezultatiIgre2, 4000);
setTimeout(bojaStoperice2, 6000);

  }

}

function novoRacunanje() {
	
if(zaustavljanjeBrojeva.textContent===okretanje2[0])  {

kompjuterovoRacunanje.value="(50*10)+(7*4)-5-2";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[1]) {

kompjuterovoRacunanje.value="(9+3)*75+(15*8/6)";

}

if(zaustavljanjeBrojeva.textContent===okretanje2[2])  {

kompjuterovoRacunanje.value="(100*9)-(20*7+2)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[3])  {

kompjuterovoRacunanje.value="(25+5)*15-(8*6+1)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[4])  {

kompjuterovoRacunanje.value="(100*20)/(7-3)+1+1";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[5])  {

kompjuterovoRacunanje.value="(10+4+2)*50-9-6";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[6])  {

kompjuterovoRacunanje.value="(75-5)*9+10+5-8";

  }  

if(zaustavljanjeBrojeva.textContent===okretanje2[7])  {

kompjuterovoRacunanje.value="(100+6)*2+(15*3-8)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[8])  {

kompjuterovoRacunanje.value="(9*4+8)*20+25-7";

  }  

if(zaustavljanjeBrojeva.textContent===okretanje2[9])  {

kompjuterovoRacunanje.value="(75-6)*(9+5)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[10])  {

kompjuterovoRacunanje.value="(15-8-4)*100";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[11])  {

kompjuterovoRacunanje.value="(25*5)+(7*3*3)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[12])  {

kompjuterovoRacunanje.value="(50-1)*(15+2)-9";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[13])  {

kompjuterovoRacunanje.value="(10*6*4)+100+3";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[14])  {

kompjuterovoRacunanje.value="(75+2)*(15-4-1)+7";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[15])  {

kompjuterovoRacunanje.value="(100*5)+9*9";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[16])  {

kompjuterovoRacunanje.value="(25+2)*15-6+2";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[17])  {

kompjuterovoRacunanje.value="(10+7)*50-(7*(7+7))";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[18])  {

kompjuterovoRacunanje.value="(8*9+25-6)*10+7";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[19])  {

kompjuterovoRacunanje.value="(50+15)*4";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[20])  {

kompjuterovoRacunanje.value="(7*4*25)-(10*5)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[21])  {

kompjuterovoRacunanje.value="(100+6)*9+(20*3/2)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[22])  {

kompjuterovoRacunanje.value="(75*7)+(8*(15+8))-1";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[23])  {

kompjuterovoRacunanje.value="(50*10+3-4)*(7-5)";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[24])  {

kompjuterovoRacunanje.value="(9-6)*100+(15*2)-8";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[25])  {

kompjuterovoRacunanje.value="(25-5+1+1)*20";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[26])  {

kompjuterovoRacunanje.value="(75*3)+(10*4)+3-8";

  }

if(zaustavljanjeBrojeva.textContent===okretanje2[27])  {

kompjuterovoRacunanje.value="50*(9+5+2)";

  }


konacanBroj2.textContent=eval(kompjuterovoRacunanje.value);

}

function racunanje2()  {

rezultat.textContent=eval(covekIgrac.value);

}

function rezultatiIgre2() {
	
let igrac1=parseInt(covek1.textContent);
let kompjuter1=parseInt(kompjuter2.textContent);

for(let i=0; i < sviBrojevi.length; ++i)  {

if(konacanBroj2.textContent==sviBrojevi[i].textContent) {

kompjuter2.textContent=kompjuter1+10;

    }

  }

}

$("button").click(function() {

for(let i=0; i < br2.length; i++)  {

br2[i].addEventListener("click", kucanjeResenja);

}

for(let i=0; i < racunanje1.length; i++) {

racunanje1[i].addEventListener("click", kucanjeResenja2);

}

covekIgrac.value="";


});



}

let isteklo1=document.querySelector(".isteklo1");
let tajmerski;
let prvaIgra=document.querySelector(".prvaIgra");
let drugaIgra=document.querySelector(".drugaIgra");

function igraMozeDaPocne() {
   
if(isteklo1.style.background=="turquoise")  {

igraPocinje2();
clearInterval(tajmerski);
prvaIgra.style.visibility="hidden";
drugaIgra.style.visibility="visible";


  }

}

tajmerski=setInterval(igraMozeDaPocne, 5000);