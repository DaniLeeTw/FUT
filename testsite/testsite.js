//selecting approve and showing approve types
const approve = document.getElementById("approve");
const appropriate = document.getElementById("appropriate");
const preparedFund = document.getElementById("preparedFund");
const selectApproveTypes = document.getElementById("selectApproveTypes");
const selectAppropriateTypes = document.getElementById("selectAppropriateTypes");
const approveType1 = document.getElementById("approveType1");
const selectApproveType1Kinds = document.getElementById("selectApproveType1Kinds");
function selectApprove(){
    if(approve.checked){
        selectApproveTypes.style.display = "block";
    }
    if(appropriate.checked){
        selectApproveTypes.style.display = "none";
    }
    if(preparedFund.checked){
        selectApproveTypes.style.display = "none";
    }
}
approve.addEventListener('change', selectApprove);
appropriate.addEventListener('change', selectApprove);
preparedFund.addEventListener('change', selectApprove);

//selecting approve types and then showing the contents

function selectAppropriate(){
    if(appropriate.checked){
        selectAppropriateTypes.style.display = "block";
    }
    if(approve.checked){
        selectApproveTypes.style.display = "none";
    }
    if(preparedFund.checked){
        selectApproveTypes.style.display = "none";
    }
}
approve.addEventListener('change', selectApprove);
appropriate.addEventListener('change', selectApprove);
preparedFund.addEventListener('change', selectApprove);
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

