function igraPocinje5() {

let pitanje=document.querySelector(".Pitanja");
let odgovori=document.querySelectorAll(".zajednica");
let covekIgra=document.querySelector(".igrac9");
let kompjuterskiIgra=document.querySelector(".igrac10");

let zamenaZavrsena=0;
let menjanje1=0;
let menjanje2=0;
let menjanje3=0;
let menjanje4=0;
let resenjeKZZ=0;

let pitanja=[

"Из колико закона се састоји Хамурабијев законик ?","Који је главни град Анголе ?","Која држава је победник Евровизије 1999 године ?",
"У ком НБА клубу је играо Марко Јарић ?","Како гласи синоним од речи-јак ?","Пронађите хемијску формулу фосфорне киселине ?",
"Ког датума САД славе Дан независности ?","Шта је матична плоча ?",'Ко је написао "Књигу о џунгли" ?','Која глумица игра главну улогу у филму "Одбегла млада" ?'

];

let dodatiOdgovori1=["282","Хараре","Италија","Денвер Нагетс","опасан","HNO3","4 јул","део компјутера","Чарл Дикенс","Сандра Булок"];
let dodatiOdgovori2=["283","Луанда","Немачка","Мајами Хит","обазрив","H2SO4","1 јун","део кола","Данијел Дефо","Џулија Робертс"];
let dodatiOdgovori3=["284","Јаунде","Шведска","Сакраменто Кингс","снажан","H2CO3","3 април","део телефона","Марк Твен","Селма Хајек"];
let dodatiOdgovori4=["285","Нџамена","Шпанија","ЛА Клиперс","вешт","H3PO4","2 мај","део куће","Радјард Киплинг","Камерон Дијаз"];

let tacanOdgovor1=[

"282","Луанда","Шведска","ЛА Клиперс","снажан",
"H3PO4","4 јул","део компјутера","Радјард Киплинг","Џулија Робертс"

];

let pitanja2=[

"Које године је рођена позната певачица Ријана ?","Где живи шакал ?","Ког француског краља су звали-Краљ Сунце",
"Колико траје председнички мандат у Јерменији ?","Са колико метара се изводи пенал у фудбалу ?",
"Како се на енглеском каже столица ?","У ком филму лик Тома Круза се зове Чарли ?","Ко је био први српски архиепископ ?",
"На којој телевизији је емитован први Велики брат ?","Шта је изгубила Пепељуга ?"

];

let dodatiOdgovori5=[

"1988","У шуми","Луј XII","4 године","9",
"fair","Кишни човек","Свети Лука","Пинк","мачку"

];

let dodatiOdgovori6=[

"1989","У пустињи","Луј XIII","5 година","10",
"chair","Коктел","Свети Сава","БК","ципелу"

];

let dodatiOdgovori7=[

"1990","У реци","Луј XIV","6 година","11",
"bear","Топ ган","Свети Никола","РТС","паре"

];

let dodatiOdgovori8=[

"1991","На планини","Луј XV","7 година","12",
"hair","Рат светова","Свети Јован","Б92","новчаник"

];

let tacanOdgovor2=[

"1988","У пустињи","Луј XIV","7 година","11",
"chair","Кишни човек","Свети Сава","Б92","ципелу"

];

let pitanja3=[

"Колико траје трећина у хокејашкој утакмици ?","Које године је избио Трећи српски устанак ?","Ком континенту припадају Кајманска острва ?",
"Од које житарице се прави брашно ?","Ко је написао бајку-Црвенкапа ?",
"У ком манастиру је учио Доситеј Обрадовић ?","Како се зове први албум Жељка Јоксимовића ?",'Ако кликнемо "refresh" на компјутеру страница ће се ?',
"Који празник се слави 9 маја ?","Да бисмо се излечили морамо ићи код ?"

];

let dodatiOdgovori9=[

"10 минута","1820","Европа","пшеница","Браћа Грим",
"Хопово","Драгуљ","исећи","Дан слободе","шумара"

];

let dodatiOdgovori10=[

"15 минута","1830","Африка","јечам","Шарл Перо",
"Сопоћани","Амајлија","копирати","Дан државности","певача"

];

let dodatiOdgovori11=[

"20 минута","1840","Јужна Америка","овас","Луис Керол",
"Студеница","Бисер","освежити","Дан победе","кувара"

];

let dodatiOdgovori12=[

"30 минута","Није га било","Северна Америка","кукуруз","Оскар Вајлд",
"Милешева","Мач","налепити","Дан рада","лекара"

];

let tacanOdgovor3=[

"20 минута","Није га било","Северна Америка","пшеница","Шарл Перо",
"Хопово","Амајлија","освежити","Дан победе","лекара"

];

let pitanja4=[

"Са којом глумицом Том Круз је први пут био у браку ?","У ком програмском језику је направљен оперативни систем Windows ?","Колико дана има 4 године ?","Која репрезентација је освојила светско првенство у кошарци 2002 године ?",
"Која животиња спава висећи са дрвета ?","Позивни број за Црну Гору је ?","Како се зове отац Анђелине Џоли ?",
"По ком нашем научнику један ауто је добио име ?","Из које државе долази светски произвођач Самсунг ?","Како се на латинском каже око ?"

];

let dodatiOdgovori13=[

"Никол Кидман","C++","1450","Аргентина","веверица",
"+382","Џони Вајсмилер","Михајло Пупин","Северна Кореја","oculus"

];

let dodatiOdgovori14=[

"Кејти Холмс","PHP","1460","САД","лењивац",
"+383","Џон Војт","Јован Цвијић","Јужна Кореја","caput"

];

let dodatiOdgovori15=[

"Мими Роџерс","Java","1470","Југославија","мајмун",
"+384","Џон Вејн","Јован Цвијић","Филипини","nasus"

];

let dodatiOdgovori16=[

"Пенелопе Круз","Haskell","1480","Литванија","ракун",
"+385","Џон Кјузак","Никола Тесла","Индонезија","collum"

];

let tacanOdgovor4=[

"Мими Роџерс","C++","1460","Југославија","лењивац",
"+382","Џон Војт","Никола Тесла","Јужна Кореја","oculus"

];

let minutaza=document.querySelector(".alarm");
let igra223;

let obrt=[1,2,3,4];
let okretanje=document.querySelector(".krug");

function biranjeIgre() {
	
okretanje.textContent=obrt[Math.floor(Math.random()*obrt.length)];
menjanjePitanja();

for(let g=0; g < 4; ++g)  {

odgovori[g].addEventListener("click", odgovaranje);

  }

}

setTimeout(biranjeIgre, 500);

function bojaStoperice5() {
  
minutaza.style.background="turquoise";

}

function sat() {
		
let unazad=parseInt(minutaza.textContent);
minutaza.textContent=unazad-1;

if(minutaza.textContent==0) {

minutaza.textContent=5;
drugoPitanje();
menjanjePitanja();

  }

if(minutaza.textContent==1) {

kompjuterovOdgovor();

 }

if(zamenaZavrsena==10) {

setTimeout(bojaStoperice5, 4000);
clearInterval(igra223);

for(let g=0; g < 4; ++g)  {

odgovori[g].removeEventListener("click", odgovaranje);

    }

  }

}

igra223=setInterval(sat, 1000);

function drugoPitanje() {
	
++menjanje1;
++menjanje2;
++menjanje3;
++menjanje4;
++resenjeKZZ;
++zamenaZavrsena;

for(let g=0; g < 4; ++g)  {

odgovori[g].addEventListener("click", odgovaranje);
odgovori[g].style.background="white";

 }

}


function menjanjePitanja() {

if(okretanje.textContent==obrt[0])  {

pitanje.textContent=pitanja[zamenaZavrsena];	
odgovori[0].children[0].textContent=dodatiOdgovori1[menjanje1];
odgovori[1].children[0].textContent=dodatiOdgovori2[menjanje2];
odgovori[2].children[0].textContent=dodatiOdgovori3[menjanje3];
odgovori[3].children[0].textContent=dodatiOdgovori4[menjanje4];

}

if(okretanje.textContent==obrt[1])  {

pitanje.textContent=pitanja2[zamenaZavrsena];	
odgovori[0].children[0].textContent=dodatiOdgovori5[menjanje1];
odgovori[1].children[0].textContent=dodatiOdgovori6[menjanje2];
odgovori[2].children[0].textContent=dodatiOdgovori7[menjanje3];
odgovori[3].children[0].textContent=dodatiOdgovori8[menjanje4];

 }

if(okretanje.textContent==obrt[2])  {

pitanje.textContent=pitanja3[zamenaZavrsena];	
odgovori[0].children[0].textContent=dodatiOdgovori9[menjanje1];
odgovori[1].children[0].textContent=dodatiOdgovori10[menjanje2];
odgovori[2].children[0].textContent=dodatiOdgovori11[menjanje3];
odgovori[3].children[0].textContent=dodatiOdgovori12[menjanje4];

 }

if(okretanje.textContent==obrt[3])  {

pitanje.textContent=pitanja4[zamenaZavrsena];	
odgovori[0].children[0].textContent=dodatiOdgovori13[menjanje1];
odgovori[1].children[0].textContent=dodatiOdgovori14[menjanje2];
odgovori[2].children[0].textContent=dodatiOdgovori15[menjanje3];
odgovori[3].children[0].textContent=dodatiOdgovori16[menjanje4];

 }

}



function odgovaranje() {

let poenTakmicaru=parseInt(covekIgra.textContent);
	
if(this.children[0].textContent==tacanOdgovor1[resenjeKZZ] && okretanje.textContent==obrt[0])  {

this.style.background="olivedrab";
covekIgra.textContent=poenTakmicaru+10;

  }  

else if(this.children[0].textContent==tacanOdgovor2[resenjeKZZ] && okretanje.textContent==obrt[1])  {

this.style.background="olivedrab";
covekIgra.textContent=poenTakmicaru+10;

  }

else if(this.children[0].textContent==tacanOdgovor3[resenjeKZZ] && okretanje.textContent==obrt[2])  {

this.style.background="olivedrab";
covekIgra.textContent=poenTakmicaru+10;

  } 


 else if(this.children[0].textContent==tacanOdgovor4[resenjeKZZ] && okretanje.textContent==obrt[3])  {

this.style.background="olivedrab";
covekIgra.textContent=poenTakmicaru+10;

  }  else {

this.style.background="tomato";
covekIgra.textContent=poenTakmicaru-5;

  }  

for(let g=0; g < 4; ++g)  {

odgovori[g].removeEventListener("click", odgovaranje);

  }

}


function kompjuterovOdgovor() {

let poenTakmicaru2=parseInt(kompjuterskiIgra.textContent);
	
for(let g=0; g < 4; ++g)  {

if(odgovori[g].children[0].textContent==tacanOdgovor1[resenjeKZZ] && okretanje.textContent==obrt[0]) {

odgovori[g].style.background="#4285F4";
kompjuterskiIgra.textContent=poenTakmicaru2+10;

    }

if(odgovori[g].children[0].textContent==tacanOdgovor2[resenjeKZZ] && okretanje.textContent==obrt[1]) {

odgovori[g].style.background="#4285F4";
kompjuterskiIgra.textContent=poenTakmicaru2+10;

    }

if(odgovori[g].children[0].textContent==tacanOdgovor3[resenjeKZZ] && okretanje.textContent==obrt[2]) {

odgovori[g].style.background="#4285F4";
kompjuterskiIgra.textContent=poenTakmicaru2+10;

    }

if(odgovori[g].children[0].textContent==tacanOdgovor4[resenjeKZZ] && okretanje.textContent==obrt[3]) {

odgovori[g].style.background="#4285F4";
kompjuterskiIgra.textContent=poenTakmicaru2+10;

    }

  }

}


}

let polecemo=document.querySelector(".brojka200");
let petaIgra=document.querySelector(".petaIgra");
let cetvrtaIgra5=document.querySelector(".cetvrtaIgra");
let igraBroj5;

function igraMozeDaPocne5() {
  
if(polecemo.style.background=="turquoise") {

igraPocinje5();
petaIgra.style.visibility="visible";
cetvrtaIgra5.style.visibility="hidden";
clearInterval(igraBroj5);

}

}

igraBroj5=setInterval(igraMozeDaPocne5, 5000);
