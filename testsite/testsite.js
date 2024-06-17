//選擇核定後顯示核定態樣
const generalConfig = document.getElementById("generalConfig");
const chooseBetweenApproveAndAppropriate = document.getElementById("chooseBetweenApproveAndAppropriate");
const approve = document.getElementById("approve");
const approveContainer = document.getElementById("approveContainer");
//核定態樣
const approveType1 = document.getElementById("approveType1");
const approveType2 = document.getElementById("approveType2")
const approveType3 = document.getElementById("approveType3")
//核定態樣種類
const selectApproveType1Kinds = document.getElementById("selectApproveType1Kinds");
const selectApproveType2Kinds = document.getElementById("selectApproveType2Kinds");
const selectApproveType3Kinds = document.getElementById("selectApproveType3Kinds");
//核定態樣一*簽稿*
const approveType1Controls = document.getElementById("approveType1Controls");
const approveType1BothPAndL = document.getElementById("approveType1BothPAndL");
const approveType1BothPAndLPContent = document.getElementById("approveType1BothPAndLPContent");
const approveType1BothPAndLPKeyInputs = document.getElementById("approveType1BothPAndLPKeyInputs");
const approveType1BothPAndLPConditions = document.getElementById("approveType1BothPAndLPConditions");
const approveType1BothPAndLPAdditionalInfoSourceAdjust = document.getElementById("approveType1BothPAndLPAdditionalInfoSourceAdjust");
const approveType1BothPAndLPAdditionalInfoSuggestedAmount = document.getElementById("approveType1BothPAndLPAdditionalInfoSuggestedAmount");
const approveType1BothPAndLLContent = document.getElementById("approveType1BothPAndLLContent");
const approveType1BothPAndLLKeyInputs = document.getElementById("approveType1BothPAndLLKeyInputs");
const approveType1BothPAndLLConditions = document.getElementById("approveType1BothPAndLLConditions");
const approveType1BothPAndLLBudgetReview = document.getElementById("approveType1BothPAndLLBudgetReview");
const approveType1BothPAndLLManagementFeeYear = document.getElementById("approveType1BothPAndLLManagementFeeYear");
const approveType1BothPAndLLAdditionalInfoSuggestedAmount = document.getElementById("approveType1BothPAndLLAdditionalInfoSuggestedAmount");
//核定態樣一*簽*
const approveType1Petition = document.getElementById("approveType1Petition");
const approveType1PetitionContent = document.getElementById("approveType1PetitionContent");
const approveType1PetitionKeyInputs = document.getElementById("approveType1PetitionKeyInputs");
const approveType1PetitionConditions = document.getElementById("approveType1PetitionConditions");
const approveType1PetitionadditionalInfoSourceAdjust = document.getElementById("approveType1PetitionadditionalInfoSourceAdjust");
const approveType1PetitionadditionalInfoSuggestedAmount = document.getElementById("approveType1PetitionadditionalInfoSuggestedAmount");
//核定態樣一*稿*
const approveType1Letter = document.getElementById("approveType1Letter");
const approveType1LetterContent = document.getElementById("approveType1LetterContent");
const approveType1LetterKeyInputs = document.getElementById("approveType1LetterKeyInputs");
const approveType1LetterConditions = document.getElementById("approveType1LetterConditions");
const approveType1LetterAdditionalInfoSourceAdjust = document.getElementById("approveType1LetterAdditionalInfoSourceAdjust");
const approveType1LetterAdditionalInfoSuggestedAmount = document.getElementById("approveType1LetterAdditionalInfoSuggestedAmount");

const approveType2Controls = document.getElementById("approveType2Controls");
const approveType2BothPAndL = document.getElementById("approveType2BothPAndL");
const approveType2Petition = document.getElementById("approveType2Petition");
const approveType2Letter = document.getElementById("approveType2Letter");
const approveType3Controls = document.getElementById("approveType3Controls");
const approveType3BothPAndL = document.getElementById("approveType3BothPAndL");
const approveType3Petition = document.getElementById("approveType3Petition");
const approveType3Letter = document.getElementById("approveType3Letter");
const appropriate = document.getElementById("appropriate");
const preparedFund = document.getElementById("preparedFund");
const selectApproveTypes = document.getElementById("selectApproveTypes");

function selectApprove(){
    if(approve.checked){
        approveContainer.style.display = "block";
        selectApproveTypes.style.display = "block";
    }
    if(appropriate.checked){
        approveContainer.style.display = "none";
        selectApproveTypes.style.display = "none";
    }
    if(preparedFund.checked){
        approveContainer.style.display = "none";
        selectApproveTypes.style.display = "none";
    }
}
approve.addEventListener('change', selectApprove);
appropriate.addEventListener('change', selectApprove);
preparedFund.addEventListener('change', selectApprove);

//選擇核定態樣後顯示公文類型
function selectApproveKinds(){
    if(approveType1.checked){
        selectApproveType1Kinds.style.display = "block";
        approveType1Controls.style.display = "inline-block";
        approveType1BothPAndL.style.display = "inline-block";
        approveType1Petition.style.display = "inline-block";
        approveType1Letter.style.display = "inline-block";
        selectApproveType2Kinds.style.display = "none";
        approveType2Controls.style.display = "none";
        approveType2BothPAndL.style.display = "none";
        approveType2Petition.style.display = "none";
        approveType2Letter.style.display = "none";
        selectApproveType3Kinds.style.display = "none";
        approveType3Controls.style.display = "none";
        approveType3BothPAndL.style.display = "none";
        approveType3Petition.style.display = "none";
        approveType3Letter.style.display = "none";
    }
    if(approveType2.checked){
        selectApproveType1Kinds.style.display = "none";
        approveType1Controls.style.display = "none";
        approveType1BothPAndL.style.display = "none";
        approveType1Petition.style.display = "none";
        approveType1Letter.style.display = "none";
        selectApproveType2Kinds.style.display = "block";
        approveType2Controls.style.display = "inline-block";
        approveType2BothPAndL.style.display = "inline-block";
        approveType2Petition.style.display = "inline-block";
        approveType2Letter.style.display = "inline-block";
        selectApproveType3Kinds.style.display = "none";
        approveType3Controls.style.display = "none";
        approveType3BothPAndL.style.display = "none";
        approveType3Petition.style.display = "none";
        approveType3Letter.style.display = "none";
    }
    if(approveType3.checked){
        selectApproveType1Kinds.style.display = "none";
        approveType1Controls.style.display = "none";
        approveType1BothPAndL.style.display = "none";
        approveType1Petition.style.display = "none";
        approveType1Letter.style.display = "none";
        selectApproveType2Kinds.style.display = "none";
        approveType2Controls.style.display = "none";
        approveType2BothPAndL.style.display = "none";
        approveType2Petition.style.display = "none";
        approveType2Letter.style.display = "none";
        selectApproveType3Kinds.style.display = "block";
        approveType3Controls.style.display = "inline-block";
        approveType3BothPAndL.style.display = "inline-block";
        approveType3Petition.style.display = "inline-block";
        approveType3Letter.style.display = "inline-block";
    }
}
approveType1.addEventListener('change', selectApproveKinds);
approveType2.addEventListener('change', selectApproveKinds);
approveType3.addEventListener('change', selectApproveKinds);

//選擇公文類型後開放填入內容
function enterContents(){
    if(approveType1BothPAndL.checked){
        approveType1BothPAndLPContent.style.display = "block";
        approveType1BothPAndLLContent.style.display = "block";
        approveType1PetitionContent.style.display = "none";
        approveType1LetterContent.style.display = "none";
    }
    if(approveType1Petition.checked){
        approveType1BothPAndLPContent.style.display = "none";
        approveType1BothPAndLLContent.style.display = "none";
        approveType1PetitionContent.style.display = "block";
        approveType1LetterContent.style.display = "none";
    }
    if(approveType1Letter.checked){
        approveType1BothPAndLPContent.style.display = "none";
        approveType1BothPAndLLContent.style.display = "none";
        approveType1PetitionContent.style.display = "none";
        approveType1LetterContent.style.display = "block";
    }
}
approveType1BothPAndL.addEventListener('change', enterContents);
approveType1Petition.addEventListener('change', enterContents);
approveType1Letter.addEventListener('change', enterContents);




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

