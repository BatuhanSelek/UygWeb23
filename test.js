//name="Can"


//Ecmascript 9 dan önce kullanılan bir değişken

//--*var name="Can"    //Değişken Tanımlama.type safe değil (güvenli değil)-ÇOK KULLANILMAZ

//Ecmascript 9 dan sonra kullanılmaya başlandı:

//--*const name="Can"   // Sabit Tanımlama
//--*let name="Can"     //Değişken Tanımlama


/*console.log(name) // terminalde gözükür
function topla(){

}*/







//1-var function scope let block scope("let" ile "var" farkı)
/*ÖRN (bir fonksiyon tasarlayıp terminalde yazdırdık)
    function test(){
    if(true){
         var degisken="Merhaba Dünya"
    }
    if(true){
        console.log(degisken)
    }
}
test()*/

//2-var keyword değişkenler tekrar tanımlanabilir.("let" ile "var" farkı)
/*ÖRN
var degisken="Merhaba Dünya"
var degisken="Hello World"
console.log(degisken)*/


//3-Hoisting: Bir değişkeni önce tanımlama sonra kullanmak.(aslında var etiketinin bir açığıdır)("let" ile "var" farkı)
/*ÖRN
degisken="Merhaba Dünya"
console.log(degisken)
var degisken*/


//let ile const arasındaki farkları inceleyeceğiz:

//1-let mutable const immutable
/*ÖRN
let name="Can"
const adi="Can"
name="Ahmet"
adi="Ahmet"*/

/*ÖRN
var agirlik=50
if(agirlik>49){
    var miktar=1.4
    console.log(`${miktar} su içmelisin`)
}
console.log(miktar)*/


//FONKSİYONLAR
//-geleneksel Yöntem
/*ÖRN
function topla(a,b){
    return a+b;

}*/

//-arrow function Yöntem (dahha kolay ve daha kısa)
/*ÖRN
const topla=(a,b)=>a+b*/


/*ÖRN (GELENEKSEL YÖNTEM)
function test(){
    console.log("merhaba"+" "+this.name)
}
const person={
    name:"Can",
    soyle:test,
}
person.soyle()*/


/*ÖRN (ARROW FUNCTION)
const test = () => {
    console.log("merhaba dünya" + " " + this.name(BU KONULMAZ))
}
const person = {
    name: "Can",
    soyle: test,
}
person.soyle()*/

/*ÖRN(VERİ TEKRARI VAR TERCİH EDİLMEZ)
function addToCart(urun_adi,adet,fiyat){
    console.log(urun_adi)
    console.log(fiyat)
    console.log(adet)

}
addToCart("elma",5,10)
addToCart("armut",2,20)
addToCart("limon",3,15)*/


/*ÖRN (TERCİH EDİLMESİ GEREKEN)
let urunler=[{urun_adi:"elma",fiyat:5,adet:20},{urun_adi:"armut",fiyat:2,adet:11},{urun_adi:"limon",fiyat:3,adet:15}]
function addToCart(urun){
    console.log(urun_adi)
    console.log(urun.fiyat)
    console.log(urun.adet)

}
addToCart(urunler)*/

/*ÖRN
let urunler = [{ urun_adi: "elma", fiyat: 5, adet: 20 }, 
               { urun_adi: "armut", fiyat: 2, adet: 11 }, 
               { urun_adi: "limon", fiyat: 3, adet: 15 }]
console.log(urunler[0]["urun_adi"])*/


//REST OPARETÖRÜ
/*ÖRN
function topla(...sayilar){
    let toplam=0
    for(let i=0;i<sayilar.length;i++){
        toplam=toplam+sayilar[i]
    }
    console.log(toplam)
}
topla(10,20,30,40,50,60,70)*/


//Listeleri dictionary'e döndürdük
/*ÖRN
let [icanadolu, marmara, karadeniz] = ["iç anadolu", "marmara", "karadeniz"]
console.log(icanadolu)*/


//DİSTRACKİNG OPARETÖRÜ
/*ÖRN
let [icanadolu, marmara, karadeniz] = [{adi:"iç anadolu",nufus:"20m"},
                                       {adi:"marmara",nufus:"10m"},
                                       {adi:"karadeniz",nufus:"30m"}]
console.log(icanadolu)*/    



//SPREAD OPERATÖRÜ
/*ÖRN
let sayilar=[30,100,300,350]
console.log(...sayilar)*/

//AŞAĞIDAKİLERİN HEPSİ AYNI
/*ÖRN
function test(){
    a+100

}


const test=()=>{
    a+100
}


(test)=>{a+100}


test=>{a+100}*/


//CONDITIONAL TERNARY OPERATOR
/*
if(a=100){
    console.log("100e eşit")

}
else{
    console.log("100e eşit değil")
}

ya da

const sonuc=a==100?"100e eşit":"100e eşit değil"*/


/*ÖRN
function example(){
    if(condition1){
        return value1
    }
    else if (condition2){
        return value2
    }
    else if (condition3){
        return value3
    }
    else {
        return value4
    }
}

ya da

function example(){
    return condition1?value1:
    condition2?value2:
    condition3?value3:
    value4
}*/


//DİZİLER İLE ÇALIŞMAK
/*ÖRN
const sayilar=[1,2,3,4,5,6,7,8,9,10]
const ciftsayilar=sayilar.filter(function(sayilar){
    return sayilar%2===0
})
console.log(ciftsayilar)

ya da

const sayilar=[1,2,3,4,5,6,7,8,9,10]
const ciftsayilar=sayilar.filter(sayilar=>sayilar%2===0)
console.log(ciftsayilar)*/

/*const sayilar=[1,2,3,4,5,6,7,8,9,10]
const sayi=sayilar.find(function(sayilar){
    return sayilar%2===0
})
console.log(sayilar)*/