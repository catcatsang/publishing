function toggleCheckbox(element) {
            element.classList.toggle('checked');
        }


    const companyCert = document.getElementById("req_certification")

    companyCert.addEventListener("click", ()=>{
        // 인증 알고리즘
        // 만약 사업자등록증명원 선택 창에서 나중에 인증할게요를 선택한 경우.
        alert("인증되었습니다!")
    })

    const managerEdit = document.querySelector(".manageredit")

    managerEdit.addEventListener('click',() =>{
        // 인증 알고리즘.
        // 문자메시지 인증증
        alert("변경이 완료되었습니다.")
    })

    const passwordChange = document.getElementById("btnEditPassword")

    passwordChange.addEventListener('click',()=>{
        // 비밀번호 변경 창.
        alert("비밀번호가 변경되었습니다!")
    })