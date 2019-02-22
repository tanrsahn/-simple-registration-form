function regKontrol(pattern, value){			
	r = new RegExp(pattern, "g"); 
	return r.test(value); 
}

function validateForm() {
	var myReturnValue=true;
	var patternEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var patternSayisal = "^"+"([0-9]+)"+"$";
	var patternHarf = "^"+"([a-zA-Z]+)"+"$";
	var patternUcKelime = "^"+"([a-zA-Z]+)"+" "+"([a-zA-Z]+)"+" "+"([a-zA-Z]+)"+"$";
			
	if (myForm.name.value == "") {
		document.getElementById("myoutput0").innerHTML="Bu alan boş bırakılmamalıdır.";
		myReturnValue=false;
	}else document.getElementById("myoutput0").innerHTML="";
		   
	if (!regKontrol(patternEmail,myForm.email.value)){ 
		document.getElementById("myoutput1").innerHTML="E-Mail adresi kurallara uygun olarak girilmelidir.";
		myReturnValue=false;
	}else document.getElementById("myoutput1").innerHTML="";
			
	if (!regKontrol(patternSayisal,myForm.sayisal.value)){
		document.getElementById("myoutput2").innerHTML="Buraya sadece sayısal bir değer girilebilir.";
		myReturnValue=false;
	}else document.getElementById("myoutput2").innerHTML="";
		
	if (!regKontrol(patternSayisal,myForm.basamakli.value) || myForm.basamakli.value.length != 12){ 
		document.getElementById("myoutput3").innerHTML="Buraya sadece 12 basamaklı bir sayı gelebilir.";
		myReturnValue=false;
	}else document.getElementById("myoutput3").innerHTML="";
			
	if (!regKontrol(patternHarf,myForm.alfa.value)){ 
		document.getElementById("myoutput4").innerHTML="Buraya sadece harf gelebilir.(İngilizce'deki harfler.)";
		myReturnValue=false;
	}else document.getElementById("myoutput4").innerHTML="";
			
	if (!regKontrol(patternHarf,myForm.max30.value) || myForm.max30.value.length > 30){ 
		document.getElementById("myoutput5").innerHTML="Buraya sadece harf gelebilir ve uzunluğu max 30 karakter olabilir.(İngilizce'deki harfler.)";
		myReturnValue=false;
	}else document.getElementById("myoutput5").innerHTML="";
			
	if (!regKontrol(patternUcKelime,myForm.uckelime.value)){ 
		document.getElementById("myoutput6").innerHTML="Buraya sadece 3 kelimeden oluşan string gelebilir.(Kullanılan harfler İngilizce'deki harflerden olmalıdır.)";
		myReturnValue=false;
	}else document.getElementById("myoutput6").innerHTML="";
						
	var lowerCaseLetters = /[a-z]/g;
	var upperCaseLetters = /[A-Z]/g;
	var numbers = /[0-9]/g;
	var myPunctuation = /[.,!?:;-]/g;
	if(!(myForm.password.value.match(lowerCaseLetters) && myForm.password.value.match(upperCaseLetters) && myForm.password.value.match(numbers) && myForm.password.value.match(myPunctuation) &&  (myForm.password.value.length >= 8))) { 
		document.getElementById("myoutput7").innerHTML="Buraya sadece kurallara uygun şifre girilebilir.(Harf için sadece İngilizce'deki harfler.)";
		myReturnValue=false;
	}else document.getElementById("myoutput7").innerHTML="";	
			
	return myReturnValue;
}
