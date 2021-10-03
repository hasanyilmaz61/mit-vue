
var kullanicilar=[

    {vorname:"max",nachname:"musterman",yas:"29"},
    {vorname:"max",nachname:"musterman",yas:"29"},
    {vorname:"max",nachname:"musterman",yas:"29"},
    {vorname:"max",nachname:"musterman",yas:"29"},
    {vorname:"max",nachname:"musterman",yas:"29"},
    {vorname:"max",nachname:"musterman",yas:"29"},
    {vorname:"max",nachname:"musterman",yas:"29"},
     {vorname:"max",nachname:"musterman",yas:"29"}



]

var truadmin="admin";
var trupass="123456";

var app = new Vue({
    el: '#app',
    data: {
        schritt:1,
      anmelden:"Anmelden",
      bunutzer:"",
      passwort:"",
      goster:true,
      sonuc:"",
      sonuc2:"",
      kullanicilar,

      

    
    },
    methods: {
      klick:function(){
        
if(this.bunutzer==""){
    this.sonuc="lutfen bos alanlari doldurunuz";
}
  
if(this.passwort==""){
    this.sonuc="lutfen bos alanlari doldurunuz";
}

if(this.bunutzer!=truadmin && this.passwort!=trupass ){
    this.sonuc2="error kullanici adi veya passwort yanlis";
}
  if(this.bunutzer==truadmin && this.passwort==trupass){

this.anmelden="Desboard";


this.schritt++;


  }
  
    },

geri:function () {
    this.anmelden="anmelden";
      this.schritt--;
this.bunutzer="";
      this.passwort="";
      
}


    }
  })

  