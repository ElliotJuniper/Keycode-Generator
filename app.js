
// EVENT LISTENERS 'LISTEN' FOR AN ACTION TO OCCUR AND IN THIS CASE IT IS PRESSING A KEY ON THE KEYBOARD. EACH ELEMENT CORRESPONDS TO A CERTAIN ELEMENT/ID FOUND ON THE HTML FILE.
document.addEventListener("keydown", (event) => {
    let numDisplay = document.getElementById("num");
    let numWhich = document.getElementById("which1");
    let numKey = document.getElementById("key1");
    let numCode = document.getElementById("code1");

    // .NOTATION THAT CALLS THE FUNCTION
    let keyCode = event.code;
    let keyWord = event.which;
    let keyDown = event.key;


// INNERHTML IS USED WHEN YOU WANT TO RETURN THE HTML ITEMS PLACED WITHIN AN ELEMENT. TEMPLATE LITERALS USED FOR VARIABLES WITHIN A STRING. BY INITIALISING THESE COMMANDS, ONCE A KEY IS PRESSED ON THE KEYBOARD, IT WILL TRANSFER THE INPUT INTO THE CORRESPONDING TEXT WITHIN THE WEBPAGE. 
numWhich.innerHTML = `<p class="button1"> ${keyDown} was used</p>`
numDisplay.innerHTML = `<p class="button1"> ${keyDown} was used</p>`
numCode.innerHTML = `<p class="button1"> ${keyWord} was used</p>`
numKey.innerHTML = `<p class="button1"> ${keyCode} was used</p>`
})

