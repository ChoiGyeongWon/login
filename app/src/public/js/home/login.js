"use strict";

document.addEventListener("DOMContentLoaded", loginInit);

function loginInit() {
    const formLogin = document.querySelector("#formLogin");
    const loginId = document.querySelector("#loginId");
    const loginPassword = document.querySelector("#loginPassword");

    formLogin.addEventListener("submit", formLoginSubmitHandler);

    function formLoginSubmitHandler(e) {
        e.preventDefault();

        const req = {
            id: loginId.value,
            password: loginPassword.value,
        }

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(req),
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/";
            }else {
                alert(res.msg);
            }
        })
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
    }
}