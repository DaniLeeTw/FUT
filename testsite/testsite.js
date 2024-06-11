//claiming every id there is
const myForm = document.getElementById("myForm");
const title = document.getElementById("title");
const generalConfig = document.getElementById("generalConfig");
const chooseBetweenApproveAndAppropriate = document.getElementById("chooseBetweenApproveAndAppropriate");
const approve = document.getElementById("approve");
const appropriate = document.getElementById("appropriate");
const preparedFund = document.getElementById("preparedFund");
const selectApproveTypes = document.getElementById("selectApproveTypes");
const approveType1 = document.getElementById("approveType1");
const selectApproveType1Kinds = document.getElementById("selectApproveType1Kinds");
const approveType1KindsControls = document.getElementById("approveType1KindsControls");
const approveType1BothPAndLControls = document.getElementById("approveType1BothPAndLControls");
const approveType1BothPAndL = document.getElementById("approveType1BothPAndL");
const approveType1BothPAndLPContent = document.getElementById("approveType1BothPAndL-PContent");
const approveType1BothPAndLPKeyInputs = document.getElementById("approveType1BothPAndLPKeyInputs");
const approveType1BothPAndLPSchoolName = document.getElementById("approveType1BothPAndLPSchoolName");
const approveType1BothPAndLPProjectName = document.getElementById("approveType1BothPAndLPProjectName");
const approveType1BothPAndLPApproveAmount = document.getElementById("approveType1BothPAndLPApproveAmount");
const approveType1BothPAndLPComingDate = document.getElementById("approveType1BothPAndLPComingDate");
const approveType1BothPAndLPComingWord = document.getElementById("approveType1BothPAndLPComingWord");
const approveType1BothPAndLPComingNumber = document.getElementById("approveType1BothPAndLPComingNumber");
const approveType1BothPAndLPAlertDate = document.getElementById("approveType1BothPAndLPAlertDate");
const approveType1BothPAndLPSituationArea = document.getElementById("approveType1BothPAndLPSituationArea");
const approveType1BothPAndLPSituation = document.getElementById("approveType1BothPAndLPSituation");
const approveType1BothPAndLPInvestigationDate = document.getElementById("approveType1BothPAndLPInvestigationDate");
const approveType1BothPAndLPInvestigationResult = document.getElementById("approveType1BothPAndLPInvestigationResult");
const approveType1BothPAndLPOriginalTotal = document.getElementById("approveType1BothPAndLPOriginalTotal");



//yesSuggestedAmount.addEventListener('change', SuggestedAmount);
//noSuggestedAmount.addEventListener('change', SuggestedAmount);

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

