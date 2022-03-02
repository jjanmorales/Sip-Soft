const nameSearchButton = document.getElementById('search-btn')
const userInputDrinkName = document.getElementById('user-input-name').value
const secondDrinkCard = document.getElementById('second-drink-cards')

nameSearchButton.addEventListener("click", (e) => {
    e.preventDefault()
    let userChoice = userInputDrinkName
    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/${userChoice}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].drinkName)
            console.log(data[0])
            let drinkName = data[0].drinkName
            let drinkPic = data[0].drinkThumb
            let category = data[0].drinkCategory
            let mainIngredient = data[0].drinkIngredients[0]
            firstCard.innerText = drinkName
            firstCardImage.src = drinkPic
            firstCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            

            secondDrinkCard.style.display = 'none'
            instructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                instructionsParagraph.innerText = data[0].drinkInstructions
                instructionsButton.style.display = 'none'
            })
        })
})

const randomButton = document.getElementById('random-drink')

randomButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            console.log(item.drinkName)
        })
})

const userInputIngredients = document.getElementById('user-input-ingredients').value
const ingredientSearchButton = document.getElementById('ingredient-search-btn')

ingredientSearchButton.addEventListener('click', (e) => {
    e.preventDefault()
    let userChoice = userInputIngredients
    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/category/${userChoice}`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            console.log(item.drinkName)
        })
})

// -----------  First Card -----------
const firstCard = document.getElementById('first-card')
const firstCardImage = document.getElementById('first-card-img')
const firstCardParagraph = document.getElementById('first-card-paragraph')
const instructionsButton = document.getElementById('instructions-btn')
const instructionsParagraph = document.getElementById('first-card-instructions')
// -----------  First Card -----------

fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
    .then(res => res.json())
    .then(data => {
        let item = data[Math.floor(Math.random() * data.length)]
        let drinkName = item.drinkName
        let drinkPic = item.drinkThumb
        let category = item.drinkCategory
        let mainIngredient = item.drinkIngredients[0]
        firstCard.innerText = drinkName
        firstCardImage.src = drinkPic
        firstCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
        // console.log(item.drinkInstructions)

        // ----------- Instructions Button -----------
        instructionsButton.addEventListener('click', (e) => {
            e.preventDefault()
            instructionsParagraph.innerText = item.drinkInstructions
            instructionsButton.style.display = 'none'
        })
        // ----------- Instructions Button -----------
    })

const secondCard = document.getElementById('second-card')
const secondCardImage = document.getElementById('second-card-img')
const secondCardParagraph = document.getElementById('second-card-paragraph')
const secondInstructionsButton = document.getElementById('second-instructions-btn')
const secondInstructionsParagraph = document.getElementById('second-card-instructions')


fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
    .then(res => res.json())
    .then(data => {
        let item = data[Math.floor(Math.random() * data.length)]
        let drinkName = item.drinkName
        let drinkPic = item.drinkThumb
        let category = item.drinkCategory
        let mainIngredient = item.drinkIngredients[0]
        secondCard.innerText = drinkName
        secondCardImage.src = drinkPic
        secondCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
        // console.log(item.drinkInstructions)

        // ----------- Instructions Button -----------
        secondInstructionsButton.addEventListener('click', (e) => {
            e.preventDefault()
            secondInstructionsParagraph.innerText = item.drinkInstructions
            secondInstructionsButton.style.display = 'none'
        })
        // ----------- Instructions Button -----------
    })

// http://www.thecocktaildb.com/api/json/v1/1/random.php