window.addEventListener('DOMContentLoaded', () => {

const btn = document.getElementById('push-button')

btn.addEventListener("click", (e) => {
    e.preventDefault()
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`,{
        method: "GET"
    })
    .then(res => res.json())
    .then(data => console.log(data)) 
})

})
