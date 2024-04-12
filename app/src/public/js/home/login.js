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
        });
    }
}