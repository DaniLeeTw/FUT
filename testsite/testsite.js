const Petition = document.getElementById("Petition");
const Letter = document.getElementById("Letter");
const bothPAndL = document.getElementById("bothPAndL");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
//const paymentResult = document.getElementById("paymentResult");

submit.onclick = function(){
    if(Petition.checked){
        result.textContent = `*還沒做好，請耐心*已選擇簽`;
    }
    else if(Letter.checked){
        result.textContent = `*還沒做好，請耐心*已選擇函`;
    }
    else if(bothPAndL.checked){
        result.textContent = `*還沒做好，請耐心*已選擇簽及函`;
    }
    else{
        result.textContent = `請選擇公文類型！`;
    }
}