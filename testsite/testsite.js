//selecting approve and showing approve types
const approve = document.getElementById("approve");
const appropriate = document.getElementById("appropriate");
const preparedFund = document.getElementById("preparedFund");
const selectApproveTypes = document.getElementById("selectApproveTypes");
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
const approveType1 = document.getElementById("approveType1");
const approveType2 = document.getElementById("approveType2")
const approveType3 = document.getElementById("approveType3")
const selectApproveType1Kinds = document.getElementById("selectApproveType1Kinds");
const selectApproveType2Kinds = document.getElementById("selectApproveType2Kinds");
const selectApproveType3Kinds = document.getElementById("selectApproveType3Kinds");
const approveType1Controls = document.getElementById("approveType1Controls");
const approveType1BothPAndL = document.getElementById("approveType1BothPAndL");
const approveType1Petition = document.getElementById("approveType1Petition");
const approveType1Letter = document.getElementById("approveType1Letter");

function selectApproveKinds(){
    if(approveType1.checked){
        selectApproveType1Kinds.style.display = "block";
        approveType1Controls.style.display = "inline-block";
        approveType1BothPAndL.style.display = "inline-block";
        approveType1Petition.style.display = "inline-block";
        approveType1Letter.style.display = "inline-block";
    }
    if(approveType2.checked){
        selectApproveType2Kinds.style.display = "block";
    }
    if(approveType3.checked){
        selectApproveType3Kinds.style.display = "block";
    }
}
approveType1.addEventListener('change', selectApproveKinds);
approveType2.addEventListener('change', selectApproveKinds);
approveType3.addEventListener('change', selectApproveKinds);

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

