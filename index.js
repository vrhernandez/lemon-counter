let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let eatBtn = document.getElementById("eat-btn")
let count = 0

function eat() {
    count += 1
    countEl.textContent = count
    eatBtn.textContent = "EAT MORE LEMON"
}

function save() {
    let countStr = count + ", "
    eatBtn.textContent = "EAT A LEMON"
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}
