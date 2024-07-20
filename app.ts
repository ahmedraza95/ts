const div = document.querySelector<HTMLDivElement>(".value");
const form = document.querySelector<HTMLFormElement>("form");

form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    console.log(e);
    const input = (form?.children[0] as HTMLInputElement).value;
    if (div) {
        div.innerHTML = "";
        for (let i = 1; i <= 10; i++) {
            const value = `${input} x ${i} = ${i * Number(input)}`;
            div.innerHTML += `${value}</br>`;
        }
    }
});





