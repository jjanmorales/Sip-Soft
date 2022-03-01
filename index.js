window.addEventListener('DOMContentLoaded', () => {

const btn = document.getElementById('push-button')

btn.addEventListener("click", (e) => {
    e.preventDefault()
    fetch('http://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(data => console.log(data))
})

})
