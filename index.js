document.addEventListener("DOMContentLoaded", () => {

    const nameSearchButton = document.getElementById('search-btn')
    const userInputDrinkName = document.getElementById('user-input-name')
    const randomDrinkIngredients = document.getElementById('random-drink-ingredients')
    

    nameSearchButton.addEventListener("click", (e) => {
        e.preventDefault()
        let userChoice = userInputDrinkName.value
        // userChoice[0] = userChoice.toUpperCase()
        if(userChoice !== ""){
        fetch(`https://cocktail-recipes-tully4school.herokuapp.com/${userChoice}`)
            .then(res => res.json())
            .then(data => {
                let drinkName = data[0].drinkName
                let drinkPic = data[0].drinkThumb
                let category = data[0].drinkCategory
                let mainIngredient = data[0].drinkIngredients[0]
                let allIngredients = data[0].drinkIngredients
                randomDrinkCardTitle.innerText = drinkName
                randomDrinkImg.src = drinkPic
                randomDrinkParagraph.innerText = `${category} \n Made with ${mainIngredient}`

                randomDrinkDivHolder.style.visibility = 'visible'
                randomDrinkDivHolder.style.paddingBottom = '500px'

                randomDrinkInstructions.innerText = ''
                
                if (randomDrinkInstructionsBtn.style.visibility === 'hidden') {
                    randomDrinkInstructionsBtn.style.visibility ='visible'
                }

                randomDrinkInstructionsBtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    allIngredients.forEach(ingredient => {
                        let list = document.createElement('li')
                        list.innerText = ingredient
                        randomDrinkIngredients.append(list)
                    });
                    randomDrinkInstructions.innerText = data[0].drinkInstructions
                    randomDrinkInstructionsBtn.style.visibility = 'hidden'
                })

            })
        }
    })


    // -------------- Random Cocktail Button --------------
    const randomButton = document.getElementById('random-drink')
    const randomDrinkCardTitle = document.getElementById('random-drink-name')
    const randomDrinkImg = document.getElementById('random-drink-card-img')
    const randomDrinkParagraph = document.getElementById('random-drink-paragraph')
    const randomDrinkInstructionsBtn = document.getElementById('instructions-btn-random')
    const randomDrinkInstructions = document.getElementById('random-drink-instructions')
    const randomDrinkDivHolder = document.getElementById('random-drink-card')


    randomButton.addEventListener('click', (e) => {
        e.preventDefault()
        fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/`)
            .then(res => res.json())
            .then(data => {
                let item = data[Math.floor(Math.random() * data.length)]
                let category = item.drinkCategory
                let mainIngredient = item.drinkIngredients[0]
                randomDrinkCardTitle.innerText = item.drinkName
                randomDrinkParagraph.innerText = `${category} \n Made with ${mainIngredient}`
                randomDrinkImg.src = item.drinkThumb

                randomDrinkDivHolder.style.visibility = 'visible'
                randomDrinkDivHolder.style.paddingBottom = '500px'

                // randomDrinkInstructionsBtn.style.visibility = 'visible'

                randomDrinkInstructions.innerText = ''
                
                if (randomDrinkInstructionsBtn.style.visibility === 'hidden') {
                    randomDrinkInstructionsBtn.style.visibility ='visible'
                }

                randomDrinkInstructionsBtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    randomDrinkInstructions.innerText = item.drinkInstructions
                    randomDrinkInstructionsBtn.style.visibility = 'hidden'
                })
            })
    })
    // -------------- Random Cocktail Button --------------

    const userInputIngredients = document.getElementById('user-input-ingredients')
    const ingredientSearchButton = document.getElementById('ingredient-search-btn')
    // const categoryCardTitle = document.getElementById('category-card1')
    // const categoryCardImg = document.getElementById('category-card1-img')
    // const categoryCardParagraph = document.getElementById('category-card1-paragraph')
    // const categoryCardInstructions = document.getElementById('category-card1-instructions')
    // const categoryInstructionsButton = document.getElementById('category-instructions-btn1')
    // const categoryDivHolder = document.getElementById('category-drink-cards1')


    ingredientSearchButton.addEventListener('click', (e) => {
        e.preventDefault()
        let userChoice = userInputIngredients.value
        if(userChoice !== ""){
        fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/category/${userChoice}`)
            .then(res => res.json())
            .then(data => {
                let item = data[Math.floor(Math.random() * data.length)]
                let category = item.drinkCategory
                let mainIngredient = item.drinkIngredients[0]
                randomDrinkCardTitle.innerText = item.drinkName
                randomDrinkParagraph.innerText = `${category} \n Made with ${mainIngredient}`
                randomDrinkImg.src = item.drinkThumb

                randomDrinkDivHolder.style.visibility = 'visible'
                randomDrinkDivHolder.style.paddingBottom = '500px'

                randomDrinkInstructions.innerText = ''
                
                if (randomDrinkInstructionsBtn.style.visibility === 'hidden') {
                    randomDrinkInstructionsBtn.style.visibility ='visible'
                }

                randomDrinkInstructionsBtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    randomDrinkInstructions.innerText = item.drinkInstructions
                    randomDrinkInstructionsBtn.style.visibility = 'hidden'
                })
            })
        }
    })

    // -------  First Card -------
    const firstCard = document.getElementById('first-card')
    const firstCardImage = document.getElementById('first-card-img')
    const firstCardParagraph = document.getElementById('first-card-paragraph')
    const instructionsButton = document.getElementById('instructions-btn')
    const instructionsParagraph = document.getElementById('first-card-instructions')
    // -------  First Card -------

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


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/`)
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

    const thirdCard = document.getElementById('third-card')
    const thirdCardImage = document.getElementById('third-card-img')
    const thirdCardParagraph = document.getElementById('third-card-paragraph')
    const thirdInstructionsButton = document.getElementById('third-instructions-btn')
    const thirdInstructionsParagraph = document.getElementById('third-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            thirdCard.innerText = drinkName
            thirdCardImage.src = drinkPic
            thirdCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            thirdInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                thirdInstructionsParagraph.innerText = item.drinkInstructions
                thirdInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const fourthCard = document.getElementById('fourth-card')
    const fourthCardImage = document.getElementById('fourth-card-img')
    const fourthCardParagraph = document.getElementById('fourth-card-paragraph')
    const fourthInstructionsButton = document.getElementById('fourth-instructions-btn')
    const fourthInstructionsParagraph = document.getElementById('fourth-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            fourthCard.innerText = drinkName
            fourthCardImage.src = drinkPic
            fourthCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            fourthInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                fourthInstructionsParagraph.innerText = item.drinkInstructions
                fourthInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const fifthCard = document.getElementById('fifth-card')
    const fifthCardImage = document.getElementById('fifth-card-img')
    const fifthCardParagraph = document.getElementById('fifth-card-paragraph')
    const fifthInstructionsButton = document.getElementById('fifth-instructions-btn')
    const fifthInstructionsParagraph = document.getElementById('fifth-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            fifthCard.innerText = drinkName
            fifthCardImage.src = drinkPic
            fifthCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            fifthInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                fifthInstructionsParagraph.innerText = item.drinkInstructions
                fifthInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const sixthCard = document.getElementById('sixth-card')
    const sixthCardImage = document.getElementById('sixth-card-img')
    const sixthCardParagraph = document.getElementById('sixth-card-paragraph')
    const sixthInstructionsButton = document.getElementById('sixth-instructions-btn')
    const sixthInstructionsParagraph = document.getElementById('sixth-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            sixthCard.innerText = drinkName
            sixthCardImage.src = drinkPic
            sixthCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            sixthInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                sixthInstructionsParagraph.innerText = item.drinkInstructions
                sixthInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const seventhCard = document.getElementById('seventh-card')
    const seventhCardImage = document.getElementById('seventh-card-img')
    const seventhCardParagraph = document.getElementById('seventh-card-paragraph')
    const seventhInstructionsButton = document.getElementById('seventh-instructions-btn')
    const seventhInstructionsParagraph = document.getElementById('seventh-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            seventhCard.innerText = drinkName
            seventhCardImage.src = drinkPic
            seventhCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            seventhInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                seventhInstructionsParagraph.innerText = item.drinkInstructions
                seventhInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const eighthCard = document.getElementById('eighth-card')
    const eighthCardImage = document.getElementById('eighth-card-img')
    const eighthCardParagraph = document.getElementById('eighth-card-paragraph')
    const eighthInstructionsButton = document.getElementById('eighth-instructions-btn')
    const eighthInstructionsParagraph = document.getElementById('eighth-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            eighthCard.innerText = drinkName
            eighthCardImage.src = drinkPic
            eighthCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            eighthInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                eighthInstructionsParagraph.innerText = item.drinkInstructions
                eighthInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const ninthCard = document.getElementById('ninth-card')
    const ninthCardImage = document.getElementById('ninth-card-img')
    const ninthCardParagraph = document.getElementById('ninth-card-paragraph')
    const ninthInstructionsButton = document.getElementById('ninth-instructions-btn')
    const ninthInstructionsParagraph = document.getElementById('ninth-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            ninthCard.innerText = drinkName
            ninthCardImage.src = drinkPic
            ninthCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            ninthInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                ninthInstructionsParagraph.innerText = item.drinkInstructions
                ninthInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const tenthCard = document.getElementById('tenth-card')
    const tenthCardImage = document.getElementById('tenth-card-img')
    const tenthCardParagraph = document.getElementById('tenth-card-paragraph')
    const tenthInstructionsButton = document.getElementById('tenth-instructions-btn')
    const tenthInstructionsParagraph = document.getElementById('tenth-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            tenthCard.innerText = drinkName
            tenthCardImage.src = drinkPic
            tenthCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            tenthInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                tenthInstructionsParagraph.innerText = item.drinkInstructions
                tenthInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const elevenCard = document.getElementById('eleven-card')
    const elevenCardImage = document.getElementById('eleven-card-img')
    const elevenCardParagraph = document.getElementById('eleven-card-paragraph')
    const elevenInstructionsButton = document.getElementById('eleven-instructions-btn')
    const elevenInstructionsParagraph = document.getElementById('eleven-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            elevenCard.innerText = drinkName
            elevenCardImage.src = drinkPic
            elevenCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            elevenInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                elevenInstructionsParagraph.innerText = item.drinkInstructions
                elevenInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })

    const twelveCard = document.getElementById('twelve-card')
    const twelveCardImage = document.getElementById('twelve-card-img')
    const twelveCardParagraph = document.getElementById('twelve-card-paragraph')
    const twelveInstructionsButton = document.getElementById('twelve-instructions-btn')
    const twelveInstructionsParagraph = document.getElementById('twelve-card-instructions')


    fetch(`https://cocktail-recipes-tully4school.herokuapp.com/drinks/has-alcohol/false`)
        .then(res => res.json())
        .then(data => {
            let item = data[Math.floor(Math.random() * data.length)]
            let drinkName = item.drinkName
            let drinkPic = item.drinkThumb
            let category = item.drinkCategory
            let mainIngredient = item.drinkIngredients[0]
            twelveCard.innerText = drinkName
            twelveCardImage.src = drinkPic
            twelveCardParagraph.innerText = `${category} \n Made with ${mainIngredient}`
            // console.log(item.drinkInstructions)

            // ----------- Instructions Button -----------
            twelveInstructionsButton.addEventListener('click', (e) => {
                e.preventDefault()
                twelveInstructionsParagraph.innerText = item.drinkInstructions
                twelveInstructionsButton.style.display = 'none'
            })
            // ----------- Instructions Button -----------
        })
})