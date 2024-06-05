const bothPAndL = document.getElementById("bothPAndL");
const Petition = document.getElementById("Petition");
const Letter = document.getElementById("Letter");

const submit = document.getElementById("submit");
const result = document.getElementById("result");

const schoolName = document.getElementById("schoolName")
const projectName = document.getElementById("projectName")
const approveAmount = document.getElementById("approveAmount")

const sourceAdjust = document.getElementById("sourceAdjust")
const yesSourceAdjust = document.getElementById("yesSourceAdjust")
const noSourceAdjust = document.getElementById("noSourceAdjust")
const additionalInfoSourceAdjust = document.getElementById("additionalInfoSourceAdjust")
function SourceAdjust() {
    if (yesSourceAdjust.checked) {
        additionalInfoSourceAdjust.style.display = "block";
    } else {
        additionalInfoSourceAdjust.style.display = "none";
    }
}
yesSourceAdjust.addEventListener('change', SourceAdjust);
noSourceAdjust.addEventListener('change', SourceAdjust);

const suggestedAmount = document.getElementById("suggestedAmount")
const yesSuggestedAmount = document.getElementById("yesSuggestedAmount")
const noSuggestedAmount = document.getElementById("noSuggestedAmount")
const additionalInfoSuggestedAmount = document.getElementById("additionalInfoSuggestedAmount")
function SuggestedAmount() {
    if (yesSuggestedAmount.checked) {
        additionalInfoSuggestedAmount.style.display = "block";
    } else {
        additionalInfoSuggestedAmount.style.display = "none";
    }
}
yesSuggestedAmount.addEventListener('change', SuggestedAmount);
noSuggestedAmount.addEventListener('change', SuggestedAmount);

submit.onclick = function(){
    if(bothPAndL.checked){
        result.textContent = `*還沒做好，請耐心*已選擇簽`;
    }
    else if(Petition.checked){
        result.textContent = `*還沒做好，請耐心*已選擇函`;
    }
    else if(Letter.checked){
        result.textContent = `*還沒做好，請耐心*已選擇簽及函`;
    }
    else{
        result.textContent = `請選擇公文類型！`;
    }
}

