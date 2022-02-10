let yourName = "Kevin Ha" 

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar

const credit = document.querySelector('#credit')

credit.textContent = `Created by ${yourName}`

let gbTotal = document.querySelector("#qty-gb")
let ccTotal = document.querySelector("#qty-cc")
let sugarTotal = document.querySelector("#qty-sugar")
let overallTotal = document.querySelector("#qty-total")

let gbPlusBtn = document.querySelector("#add-gb")
let gbMinusBtn = document.querySelector("#minus-gb")
let ccPlusBtn = document.querySelector("#add-cc")
let ccMinusBtn = document.querySelector("#minus-cc")
let sugarPlusBtn = document.querySelector("#add-sugar")
let sugarMinusBtn = document.querySelector("#minus-sugar")

function updateGb(displayGbTotal){
    let gbTotal = document.querySelector("#qty-gb")
    gbTotal.textContent = gb
}
function updateCc(displayCcTotal){
    let ccTotal = document.querySelector("#qty-cc")
    ccTotal.textContent = cc
}
function updateSugar(displaySugarTotal){
    let sugarTotal = document.querySelector("#qty-sugar")
    sugarTotal.textContent = sugar
}
function updateQuantity(displayQuantityTotal){
    let overallTotal = document.querySelector("#qty-total")
    overallTotal.textContent = total
}

gbPlusBtn.addEventListener('click', function(){
    ++gb
    ++total
    updateQuantity(total) 
    updateGb(gb) 
})
ccPlusBtn.addEventListener('click', function(){
    ++cc
    ++total
    updateQuantity(total) 
    updateCc(cc) 
})
sugarPlusBtn.addEventListener('click', function(){
    ++sugar
    ++total
    updateQuantity(total) 
    updateSugar(sugar) 
})

gbMinusBtn.addEventListener('click', function(){
    if(gb > 0){
    --gb
    --total}
    updateQuantity(total)
    updateGb(gb) 
})
ccMinusBtn.addEventListener('click', function(){
    if(cc > 0){
    --cc
    --total}
    updateQuantity(total)
    updateCc(cc) 
})
sugarMinusBtn.addEventListener('click', function(){
    if(sugar > 0){
    --sugar
    --total}
    updateQuantity(total)
    updateSugar(sugar) 
})
