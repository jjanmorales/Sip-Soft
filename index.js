const nameSearchButton = document.getElementById('search-btn')
const userInputDrinkName = document.getElementById('user-input-name').value

nameSearchButton.addEventListener("click", (e) => {
    e.preventDefault()
    let userChoice = userInputDrinkName
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userChoice}`)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drink => {
                console.log(drink.strDrink)
            });
        })
})

const randomButton = document.getElementById('random-drink')

randomButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drink => {
                console.log(drink.strDrink)
            });
        })
})

const userInputIngredients = document.getElementById('user-input-ingredients').value
const ingredientSearchButton = document.getElementById('ingredient-search-btn')

ingredientSearchButton.addEventListener('click', (e) => {
    e.preventDefault()
    let userChoice = userInputIngredients
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${userChoice}`)
        .then(res => res.json())
        .then(data => {
            data.drinks.forEach(drink => {
                console.log(drink.strDrink)
            })
        })
})


const firstCard = document.getElementById('first-card')
const firstCardImage = document.getElementById('first-card-img')
const firstCardParagraph = document.getElementById('first-card-paragraph')

fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then(res => res.json())
    .then(data => {
        firstCard.innerText = data.drinks[0].strDrink
        firstCardImage.src = data.drinks[0].strDrinkThumb
        console.log(data.drinks[0])
        // let category = data.drinks[0].strCategory
        // let mainIngredient = data.drinks
        // firstCardParagraph.innerText = 
    })



// http://www.thecocktaildb.com/api/json/v1/1/random.php
