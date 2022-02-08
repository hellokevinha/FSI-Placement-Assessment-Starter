// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kevin Ha" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

const credit = document.querySelector('#credit')
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
credit.textContent = `Created by ${yourName}`

gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')
})
gbMinusBtn.addEventListener('click', function() {
    console.log('Gingerbread - button was clicked!')
})

function updateSummary(displayQuantity) {
    let quantity = document.querySelector('.qty-total')
    quantity.textContent = displayQuantity
}

gbPlusBtn.addEventListener('click', function(){
    updateQuantity(`Quantity: ${quantity}`)


})


const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')

ccPlusBtn.addEventListener('click', function() {
    console.log('CC + button was clicked!')
    quantity++
    updateSummary(`Summary: ${summary}`)
    })
    
ccMinusBtn.addEventListener('click', function() {
        console.log('CC - button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    })

const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')

sugarPlusBtn.addEventListener('click', function() {
    console.log('Sugar + button was clicked!')
    })
    
sugarMinusBtn.addEventListener('click', function() {
        console.log('Sugar - button was clicked!')
    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
    })