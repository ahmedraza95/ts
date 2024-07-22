"use strict";
const div = document.querySelector(".value");
const form = document.querySelector("form");
form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form?.children[0].value;
    if (div) {
        div.innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            const value = `${input} x ${i} = ${i * Number(input)}`;
            div.innerHTML += `${value}</br>`;
        }
    }
});
