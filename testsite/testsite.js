//選擇核定後顯示核定態樣
const generalConfig = document.getElementById("generalConfig");
const chooseBetweenApproveAndAppropriate = document.getElementById("chooseBetweenApproveAndAppropriate");
const approve = document.getElementById("approve");
const approveContainer = document.getElementById("approveContainer");
const selectApproveTypes = document.getElementById("selectApproveTypes");
const appropriate = document.getElementById("appropriate");
const appropriateContainer = document.getElementById("appropriateContainer")
const selectAppropriateTypes = document.getElementById("selectAppropriateTypes");
const preparedFund = document.getElementById("preparedFund");
const preparedFundContainer = document.getElementById("preparedFundContainer")
const selectPreparedFundTypes = document.getElementById("selectPreparedFundTypes")



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
const approveType1BothPAndLKeyInputs = document.getElementById("approveType1BothPAndLKeyInputs");
const approveType1BothPAndLPConditions = document.getElementById("approveType1BothPAndLPConditions");
const approveType1BothPAndLPAdditionalInfoYearEnd = document.getElementById("approveType1BothPAndLPAdditionalInfoYearEnd");
const approveType1BothPAndLPAdditionalInfoYearEndAmount = document.getElementById("approveType1BothPAndLPAdditionalInfoYearEndAmount");
const approveType1BothPAndLPAdditionalInfoSourceAdjust = document.getElementById("approveType1BothPAndLPAdditionalInfoSourceAdjust");
const approveType1BothPAndLPAdditionalInfoSuggestedAmount = document.getElementById("approveType1BothPAndLPAdditionalInfoSuggestedAmount");
const approveType1BothPAndLPYesSourceAdjust = document.getElementById("approveType1BothPAndLPYesSourceAdjust");
const approveType1BothPAndLPNoSourceAdjust = document.getElementById("approveType1BothPAndLPNoSourceAdjust");
const approveType1BothPAndLPYesSuggestedAmount = document.getElementById("approveType1BothPAndLPYesSuggestedAmount");
const approveType1BothPAndLPNoSuggestedAmount = document.getElementById("approveType1BothPAndLPNoSuggestedAmount");
const approveType1BothPAndLLContent = document.getElementById("approveType1BothPAndLLContent");
const approveType1BothPAndLLConditions = document.getElementById("approveType1BothPAndLLConditions");
const approveType1BothPAndLLYesReviewFinished = document.getElementById("approveType1BothPAndLLYesReviewFinished");
const approveType1BothPAndLLNoReviewFinished = document.getElementById("approveType1BothPAndLLNoReviewFinished");
const approveType1BothPAndLLBudgetReview = document.getElementById("approveType1BothPAndLLBudgetReview");
const approveType1BothPAndLLYesManagementFee = document.getElementById("approveType1BothPAndLLYesManagementFee");
const approveType1BothPAndLLNoManagementFee = document.getElementById("approveType1BothPAndLLNoManagementFee");
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
//核定態樣二*簽稿*
const approveType2Controls = document.getElementById("approveType2Controls");
const approveType2BothPAndL = document.getElementById("approveType2BothPAndL");
const approveType2BothPAndLPContent = document.getElementById("approveType2BothPAndLPContent");
const approveType2BothPAndLPKeyInputs = document.getElementById("approveType2BothPAndLPKeyInputs");
const approveType2BothPAndLPConditions = document.getElementById("approveType2BothPAndLPConditions");
const approveType2BothPAndLPAdditionalInfoSourceAdjust = document.getElementById("approveType2BothPAndLPAdditionalInfoSourceAdjust");
const approveType2BothPAndLPAdditionalInfoSuggestedAmount = document.getElementById("approveType2BothPAndLPAdditionalInfoSuggestedAmount");
const approveType2BothPAndLLContent = document.getElementById("approveType2BothPAndLLContent");
const approveType2BothPAndLLKeyInputs = document.getElementById("approveType2BothPAndLLKeyInputs");
const approveType2BothPAndLLConditions = document.getElementById("approveType2BothPAndLLConditions");
const approveType2BothPAndLLBudgetReview = document.getElementById("approveType2BothPAndLLBudgetReview");
const approveType2BothPAndLLManagementFeeYear = document.getElementById("approveType2BothPAndLLManagementFeeYear");
const approveType2BothPAndLLAdditionalInfoSuggestedAmount = document.getElementById("approveType2BothPAndLLAdditionalInfoSuggestedAmount");
//核定態樣二*簽*
const approveType2Petition = document.getElementById("approveType2Petition");
const approveType2PetitionContent = document.getElementById("approveType2PetitionContent");
const approveType2PetitionKeyInputs = document.getElementById("approveType2PetitionKeyInputs");
const approveType2PetitionConditions = document.getElementById("approveType2PetitionConditions");
const approveType2PetitionadditionalInfoSourceAdjust = document.getElementById("approveType2PetitionadditionalInfoSourceAdjust");
const approveType2PetitionadditionalInfoSuggestedAmount = document.getElementById("approveType2PetitionadditionalInfoSuggestedAmount");
//核定態樣二*稿*
const approveType2Letter = document.getElementById("approveType2Letter");
const approveType2LetterContent = document.getElementById("approveType2LetterContent");
const approveType2LetterKeyInputs = document.getElementById("approveType2LetterKeyInputs");
const approveType2LetterConditions = document.getElementById("approveType2LetterConditions");
const approveType2LetterAdditionalInfoSourceAdjust = document.getElementById("approveType2LetterAdditionalInfoSourceAdjust");
const approveType2LetterAdditionalInfoSuggestedAmount = document.getElementById("approveType2LetterAdditionalInfoSuggestedAmount");
//核定態樣三*簽稿*
const approveType3Controls = document.getElementById("approveType3Controls");
const approveType3BothPAndL = document.getElementById("approveType3BothPAndL");
const approveType3BothPAndLPContent = document.getElementById("approveType3BothPAndLPContent");
const approveType3BothPAndLPKeyInputs = document.getElementById("approveType3BothPAndLPKeyInputs");
const approveType3BothPAndLPConditions = document.getElementById("approveType3BothPAndLPConditions");
const approveType3BothPAndLPAdditionalInfoSourceAdjust = document.getElementById("approveType3BothPAndLPAdditionalInfoSourceAdjust");
const approveType3BothPAndLPAdditionalInfoSuggestedAmount = document.getElementById("approveType3BothPAndLPAdditionalInfoSuggestedAmount");
const approveType3BothPAndLLContent = document.getElementById("approveType3BothPAndLLContent");
const approveType3BothPAndLLKeyInputs = document.getElementById("approveType3BothPAndLLKeyInputs");
const approveType3BothPAndLLConditions = document.getElementById("approveType3BothPAndLLConditions");
const approveType3BothPAndLLBudgetReview = document.getElementById("approveType3BothPAndLLBudgetReview");
const approveType3BothPAndLLManagementFeeYear = document.getElementById("approveType3BothPAndLLManagementFeeYear");
const approveType3BothPAndLLAdditionalInfoSuggestedAmount = document.getElementById("approveType3BothPAndLLAdditionalInfoSuggestedAmount");
//核定態三*簽*
const approveType3Petition = document.getElementById("approveType3Petition");
const approveType3PetitionContent = document.getElementById("approveType3PetitionContent");
const approveType3PetitionKeyInputs = document.getElementById("approveType3PetitionKeyInputs");
const approveType3PetitionConditions = document.getElementById("approveType3PetitionConditions");
const approveType3PetitionadditionalInfoSourceAdjust = document.getElementById("approveType3PetitionadditionalInfoSourceAdjust");
const approveType3PetitionadditionalInfoSuggestedAmount = document.getElementById("approveType3PetitionadditionalInfoSuggestedAmount");
//核定態樣三*稿*
const approveType3Letter = document.getElementById("approveType3Letter");
const approveType3LetterContent = document.getElementById("approveType3LetterContent");
const approveType3LetterKeyInputs = document.getElementById("approveType3LetterKeyInputs");
const approveType3LetterConditions = document.getElementById("approveType3LetterConditions");
const approveType3LetterAdditionalInfoSourceAdjust = document.getElementById("approveType3LetterAdditionalInfoSourceAdjust");
const approveType3LetterAdditionalInfoSuggestedAmount = document.getElementById("approveType3LetterAdditionalInfoSuggestedAmount");



//核撥態樣
const appropriateType1 = document.getElementById("appropriateType1");
const appropriateType2 = document.getElementById("appropriateType2")
const appropriateType3 = document.getElementById("appropriateType3")
//核撥態樣種類
const selectAppropriateType1Kinds = document.getElementById("selectAppropriateType1Kinds");
const selectAppropriateType2Kinds = document.getElementById("selectAppropriateType2Kinds");
const selectAppropriateType3Kinds = document.getElementById("selectAppropriateType3Kinds");
//核撥態樣一*簽稿*
const appropriateType1Controls = document.getElementById("appropriateType1Controls");
const appropriateType1BothPAndL = document.getElementById("appropriateType1BothPAndL");
const appropriateType1BothPAndLPContent = document.getElementById("appropriateType1BothPAndLPContent");
const appropriateType1BothPAndLKeyInputs = document.getElementById("appropriateType1BothPAndLKeyInputs");
const appropriateType1BothPAndLPConditions = document.getElementById("appropriateType1BothPAndLPConditions");
const appropriateType1BothPAndLPAdditionalInfoSourceAdjust = document.getElementById("appropriateType1BothPAndLPAdditionalInfoSourceAdjust");
const appropriateType1BothPAndLPAdditionalInfoSuggestedAmount = document.getElementById("appropriateType1BothPAndLPAdditionalInfoSuggestedAmount");
const appropriateType1BothPAndLLContent = document.getElementById("appropriateType1BothPAndLLContent");
const appropriateType1BothPAndLLKeyInputs = document.getElementById("appropriateType1BothPAndLLKeyInputs");
const appropriateType1BothPAndLLConditions = document.getElementById("appropriateType1BothPAndLLConditions");
const appropriateType1BothPAndLLBudgetReview = document.getElementById("appropriateType1BothPAndLLBudgetReview");
const appropriateType1BothPAndLLManagementFeeYear = document.getElementById("appropriateType1BothPAndLLManagementFeeYear");
const appropriateType1BothPAndLLAdditionalInfoSuggestedAmount = document.getElementById("appropriateType1BothPAndLLAdditionalInfoSuggestedAmount");
const approveType1BothPAndLPYesYearEnd = document.getElementById("approveType1BothPAndLPYesYearEnd");
const approveType1BothPAndLPNoYearEnd = document.getElementById("approveType1BothPAndLPNoYearEnd");
//核撥態樣一*簽*
const appropriateType1Petition = document.getElementById("appropriateType1Petition");
const appropriateType1PetitionContent = document.getElementById("appropriateType1PetitionContent");
const appropriateType1PetitionKeyInputs = document.getElementById("appropriateType1PetitionKeyInputs");
const appropriateType1PetitionConditions = document.getElementById("appropriateType1PetitionConditions");
const appropriateType1PetitionadditionalInfoSourceAdjust = document.getElementById("appropriateType1PetitionadditionalInfoSourceAdjust");
const appropriateType1PetitionadditionalInfoSuggestedAmount = document.getElementById("appropriateType1PetitionadditionalInfoSuggestedAmount");
//核撥態樣一*稿*
const appropriateType1Letter = document.getElementById("appropriateType1Letter");
const appropriateType1LetterContent = document.getElementById("appropriateType1LetterContent");
const appropriateType1LetterKeyInputs = document.getElementById("appropriateType1LetterKeyInputs");
const appropriateType1LetterConditions = document.getElementById("appropriateType1LetterConditions");
const appropriateType1LetterAdditionalInfoSourceAdjust = document.getElementById("appropriateType1LetterAdditionalInfoSourceAdjust");
const appropriateType1LetterAdditionalInfoSuggestedAmount = document.getElementById("appropriateType1LetterAdditionalInfoSuggestedAmount");
//核撥態樣二*簽稿*
const appropriateType2Controls = document.getElementById("appropriateType2Controls");
const appropriateType2BothPAndL = document.getElementById("appropriateType2BothPAndL");
const appropriateType2BothPAndLPContent = document.getElementById("appropriateType2BothPAndLPContent");
const appropriateType2BothPAndLPKeyInputs = document.getElementById("appropriateType2BothPAndLPKeyInputs");
const appropriateType2BothPAndLPConditions = document.getElementById("appropriateType2BothPAndLPConditions");
const appropriateType2BothPAndLPAdditionalInfoSourceAdjust = document.getElementById("appropriateType2BothPAndLPAdditionalInfoSourceAdjust");
const appropriateType2BothPAndLPAdditionalInfoSuggestedAmount = document.getElementById("appropriateType2BothPAndLPAdditionalInfoSuggestedAmount");
const appropriateType2BothPAndLLContent = document.getElementById("appropriateType2BothPAndLLContent");
const appropriateType2BothPAndLLKeyInputs = document.getElementById("appropriateType2BothPAndLLKeyInputs");
const appropriateType2BothPAndLLConditions = document.getElementById("appropriateType2BothPAndLLConditions");
const appropriateType2BothPAndLLBudgetReview = document.getElementById("appropriateType2BothPAndLLBudgetReview");
const appropriateType2BothPAndLLManagementFeeYear = document.getElementById("appropriateType2BothPAndLLManagementFeeYear");
const appropriateType2BothPAndLLAdditionalInfoSuggestedAmount = document.getElementById("appropriateType2BothPAndLLAdditionalInfoSuggestedAmount");
//核撥態樣二*簽*
const appropriateType2Petition = document.getElementById("appropriateType2Petition");
const appropriateType2PetitionContent = document.getElementById("appropriateType2PetitionContent");
const appropriateType2PetitionKeyInputs = document.getElementById("appropriateType2PetitionKeyInputs");
const appropriateType2PetitionConditions = document.getElementById("appropriateType2PetitionConditions");
const appropriateType2PetitionadditionalInfoSourceAdjust = document.getElementById("appropriateType2PetitionadditionalInfoSourceAdjust");
const appropriateType2PetitionadditionalInfoSuggestedAmount = document.getElementById("appropriateType2PetitionadditionalInfoSuggestedAmount");
//核撥態樣二*稿*
const appropriateType2Letter = document.getElementById("appropriateType2Letter");
const appropriateType2LetterContent = document.getElementById("appropriateType2LetterContent");
const appropriateType2LetterKeyInputs = document.getElementById("appropriateType2LetterKeyInputs");
const appropriateType2LetterConditions = document.getElementById("appropriateType2LetterConditions");
const appropriateType2LetterAdditionalInfoSourceAdjust = document.getElementById("appropriateType2LetterAdditionalInfoSourceAdjust");
const appropriateType2LetterAdditionalInfoSuggestedAmount = document.getElementById("appropriateType2LetterAdditionalInfoSuggestedAmount");
//核撥態樣三*簽稿*
const appropriateType3Controls = document.getElementById("approveType3Controls");
const appropriateType3BothPAndL = document.getElementById("approveType3BothPAndL");
const appropriateType3BothPAndLPContent = document.getElementById("approveType3BothPAndLPContent");
const appropriateType3BothPAndLPKeyInputs = document.getElementById("approveType3BothPAndLPKeyInputs");
const appropriateType3BothPAndLPConditions = document.getElementById("approveType3BothPAndLPConditions");
const appropriateType3BothPAndLPAdditionalInfoSourceAdjust = document.getElementById("approveType3BothPAndLPAdditionalInfoSourceAdjust");
const appropriateType3BothPAndLPAdditionalInfoSuggestedAmount = document.getElementById("approveType3BothPAndLPAdditionalInfoSuggestedAmount");
const appropriateType3BothPAndLLContent = document.getElementById("approveType3BothPAndLLContent");
const appropriateType3BothPAndLLKeyInputs = document.getElementById("approveType3BothPAndLLKeyInputs");
const appropriateType3BothPAndLLConditions = document.getElementById("approveType3BothPAndLLConditions");
const appropriateType3BothPAndLLBudgetReview = document.getElementById("approveType3BothPAndLLBudgetReview");
const appropriateType3BothPAndLLManagementFeeYear = document.getElementById("approveType3BothPAndLLManagementFeeYear");
const appropriateType3BothPAndLLAdditionalInfoSuggestedAmount = document.getElementById("approveType3BothPAndLLAdditionalInfoSuggestedAmount");
//核撥態三*簽*
const appropriateType3Petition = document.getElementById("appropriateType3Petition");
const appropriateType3PetitionContent = document.getElementById("appropriateType3PetitionContent");
const appropriateType3PetitionKeyInputs = document.getElementById("appropriateType3PetitionKeyInputs");
const appropriateType3PetitionConditions = document.getElementById("appropriateType3PetitionConditions");
const appropriateType3PetitionadditionalInfoSourceAdjust = document.getElementById("appropriateType3PetitionadditionalInfoSourceAdjust");
const appropriateType3PetitionadditionalInfoSuggestedAmount = document.getElementById("appropriateType3PetitionadditionalInfoSuggestedAmount");
//核定態樣三*稿*
const appropriateType3Letter = document.getElementById("appropriateType3Letter");
const appropriateType3LetterContent = document.getElementById("appropriateType3LetterContent");
const appropriateType3LetterKeyInputs = document.getElementById("appropriateType3LetterKeyInputs");
const appropriateType3LetterConditions = document.getElementById("appropriateType3LetterConditions");
const appropriateType3LetterAdditionalInfoSourceAdjust = document.getElementById("appropriateType3LetterAdditionalInfoSourceAdjust");
const appropriateType3LetterAdditionalInfoSuggestedAmount = document.getElementById("appropriateType3LetterAdditionalInfoSuggestedAmount");



//準備金態樣一
const preparedFundType1Content = document.getElementById("preparedFundType1Content");
const preparedFundType1KeyInputs = document.getElementById("preparedFundType1KeyInputs");
//準備金態樣二
const preparedFundType2Content = document.getElementById("preparedFundType2Content");
const preparedFundType2KeyInputs = document.getElementById("preparedFundType2KeyInputs");



function selectApprove(){
    if(approve.checked){
        approveContainer.style.display = "block";
        selectApproveTypes.style.display = "block";
        appropriateContainer.style.display = "none";
        selectAppropriateTypes.style.display = "none";
        preparedFundContainer.style.display = "none";
        selectPreparedFundTypes.style.display = "none";
    }
    if(appropriate.checked){
        approveContainer.style.display = "none";
        selectApproveTypes.style.display = "none";
        appropriateContainer.style.display = "block";
        selectAppropriateTypes.style.display = "block";
        preparedFundContainer.style.display = "none";
        selectPreparedFundTypes.style.display = "none";
    }
    if(preparedFund.checked){
        approveContainer.style.display = "none";
        selectApproveTypes.style.display = "none";
        appropriateContainer.style.display = "none";
        selectAppropriateTypes.style.display = "none";
        preparedFundContainer.style.display = "block";
        selectPreparedFundTypes.style.display = "block";
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
        approveType1BothPAndLKeyInputs.style.display = "block";
        approveType1BothPAndLPConditions.style.display = "block"
        approveType1BothPAndLLContent.style.display = "block";
        approveType1BothPAndLLConditions.style.display = "block";
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

//核定態樣一簽稿特殊情形
function enterApproveType1BothPAndLPConditions(){
    if(approveType1BothPAndLPYesYearEnd.checked){
        approveType1BothPAndLPAdditionalInfoYearEnd.style.display = "block";
    } else if(approveType1BothPAndLPNoYearEnd.checked){
        approveType1BothPAndLPAdditionalInfoYearEnd.style.display = "none";
    }
    if(approveType1BothPAndLPYesSourceAdjust.checked){
        approveType1BothPAndLPAdditionalInfoSourceAdjust.style.display = "block";
    } else if(approveType1BothPAndLPNoSourceAdjust.checked){
        approveType1BothPAndLPAdditionalInfoSourceAdjust.style.display = "none";
    }
    if(approveType1BothPAndLPYesSuggestedAmount.checked){
        approveType1BothPAndLPAdditionalInfoSuggestedAmount.style.display = "block";
    } else if(approveType1BothPAndLPNoSuggestedAmount.checked){
        approveType1BothPAndLPAdditionalInfoSuggestedAmount.style.display = "none";
    }
    if(approveType1BothPAndLLYesReviewFinished.checked){
        approveType1BothPAndLLBudgetReview.style.display = "block";
    } else if(approveType1BothPAndLLNoReviewFinished.checked){
        approveType1BothPAndLLBudgetReview.style.display = "none";
    }
    if(approveType1BothPAndLLYesManagementFee.checked){
        approveType1BothPAndLLManagementFeeYear.style.display = "block";
    } else if(approveType1BothPAndLLNoManagementFee.checked){
        approveType1BothPAndLLManagementFeeYear.style.display = "none";
    }
}
approveType1BothPAndLPYesYearEnd.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLPNoYearEnd.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLPYesSourceAdjust.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLPNoSourceAdjust.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLPYesSuggestedAmount.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLPNoSuggestedAmount.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLLYesReviewFinished.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLLNoReviewFinished.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLLYesManagementFee.addEventListener('change', enterApproveType1BothPAndLPConditions);
approveType1BothPAndLLNoManagementFee.addEventListener('change', enterApproveType1BothPAndLPConditions);

//to be continued
//function approveType1BothPAndLSummary(){}

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

