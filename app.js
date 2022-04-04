document.addEventListener("keydown", (event) => {
    let numDisplay = document.getElementById("numDisplay");
    let numCode = document.getElementById("codeDisplay");
    let numKey = document.getElementById("keyDisplay");
    let numWhich = document.getElementById("whichDisplay");

    let keyDown = event.key;
    let keyCode = event.code;
    let keyWord = event.which;

numDisplay.innerHTML = `<p class="pressedBtn"> ${keyDown} was pressed</p>`
numKey.innerHTML = `<p class="pressedBtn"> ${keyCode} was pressed</p>`
numCode.innerHTML = `<p class="pressedBtn"> ${keyWord} was pressed</p>`
numWhich.innerHTML = `<p class="pressedBtn"> ${keyDown} was pressed</p>`
})

// const bigNumber = document.getElementById("mainNumber");
// const which = document.getElementById("which");
// const eventKey = document.getElementById("key");
// const eventCode = document.getElementById("code");

// document.addEventListener("keydown", (event) => {
//     console.log(event);
//     mainNumber.innerHTML = event.which;
//     which.innerHTML = event.which;
//     eventKey.innerHTML = event.key;
//     eventCode.innerHTML = event.code;
// });