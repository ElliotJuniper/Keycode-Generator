document.addEventListener("keydown", (event) => {
    let numDisplay = document.getElementById("num");
    let numWhich = document.getElementById("which1");
    let numKey = document.getElementById("key1");
    let numCode = document.getElementById("code1");

    let keyCode = event.code;
    let keyWord = event.which;
    let keyDown = event.key;

numWhich.innerHTML = `<p class="button1"> ${keyDown} was used</p>`
numDisplay.innerHTML = `<p class="button1"> ${keyDown} was used</p>`
numCode.innerHTML = `<p class="button1"> ${keyWord} was used</p>`
numKey.innerHTML = `<p class="button1"> ${keyCode} was used</p>`
})

