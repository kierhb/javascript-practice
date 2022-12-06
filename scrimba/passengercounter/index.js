let countEl = document.getElementById('count-el')
let count = 0
let saveEl = document.getElementById('save-el')

function increment() {
    count += 1
    countEl.innerText = count
}

function save() {
    previousEntry =  + count + " - "
    saveEl.textContent += previousEntry
    count = 0
    countEl.innerText = 0
}