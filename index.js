let countIncrement = document.getElementById("count-increment")
console.log(countIncrement)
let sum = 0 
function countBtn() {
    sum = sum + 1
countIncrement.textContent = "Count: " + sum
}

let savedBatches = document.getElementById("saved-batches")
console.log(savedBatches)
function save() {
    let pastBatch = "- " + sum
    savedBatches.textContent +=" "+" "+pastBatch
}

function reset(){
    countIncrement.textContent = "Count: " + 0
    sum = 0
}
function remove(){
    let startCount = "Saved Batches: " 
    countIncrement.textContent = "Count: " + 0
    sum = 0
    savedBatches.textContent =startCount }