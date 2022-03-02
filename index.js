window.addEventListener('DOMContentLoaded', () => {

    const btn = document.getElementById('push-button')
    const userInput = document.getElementById('user-input').value 

    btn.addEventListener("click", (e) => {
        e.preventDefault()
        let userChoice = userInput
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userChoice}`)
            .then(res => res.json())
            .then(data => {
                data.drinks.forEach(drink => {
                    console.log(drink.strDrink)
                });
            })
    })

})

// http://www.thecocktaildb.com/api/json/v1/1/random.php
