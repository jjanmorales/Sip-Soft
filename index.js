const nameSearchButton = document.getElementById('search-btn')
const userInputDrinkName = document.getElementById('user-input-name').value

nameSearchButton.addEventListener("click", (e) => {
    e.preventDefault()
    let userChoice = userInputDrinkName
        fetch(`https://cocktail-recipes-tully4school.herokuapp.com/${userChoice}`)
        .then(res => res.json())
        .then(data => {
            console.log(data[0].drinkName)
        })
})

const randomButton = document.getElementById('random-drink')

randomButton.addEventListener('click', (e) => {
    e.preventDefault()
    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random()*data.length)]
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
            let item = data[Math.floor(Math.random()*data.length)]
            console.log(item.drinkName)
        })
})


const firstCard = document.getElementById('first-card')
const firstCardImage = document.getElementById('first-card-img')
const firstCardParagraph = document.getElementById('first-card-paragraph')
const instructionsButton = document.getElementById('instructions-btn')

fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
    .then(res => res.json())
    .then(data => {
        let item = data[Math.floor(Math.random()*data.length)]
        let drinkName = item.drinkName
        let drinkPic = item.drinkThumb
        let category = item.drinkCategory
        let mainIngredient = item.drinkIngredients[0]
        firstCard.innerText = drinkName
        firstCardImage.src = drinkPic
        firstCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
        console.log(item)
    })

instructionsButton.addEventListener('click', (e) => {
    e.preventDefault()
    
})

// http://www.thecocktaildb.com/api/json/v1/1/random.php