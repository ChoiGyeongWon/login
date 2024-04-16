"use strict";

document.addEventListener("DOMContentLoaded", loginInit);

function loginInit() {
    const formRegister = document.querySelector("#formRegister");
    const registerName = document.querySelector("#registerName");
    const registerId = document.querySelector("#registerId");
    const registerPassword = document.querySelector("#registerPassword");
    const confirmRegisterPassword = document.querySelector("#confirmRegisterPassword");

    formRegister.addEventListener("submit", formRegisterSubmitHandler);

    function formRegisterSubmitHandler(e) {
        e.preventDefault();

        if(!registerId.value) return alert("아이디를 입력해주십시오.");
        if(registerPassword.value !== confirmRegisterPassword.value) return alert("비밀번호가 일치하지 않습니다.");

        const req = {
            id: registerId.value,
            name: registerName.value,
            password: registerPassword.value,
        }

        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req), // 정보를 body에 담아서 전달
        })
        .then((res) => res.json()) // 응답 -> promise객체
        .then((res) => { // promise객체에 접근
            if(res.success) {
                location.href = "/login";
            }else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
    }
}