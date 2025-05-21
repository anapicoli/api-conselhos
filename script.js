let button = document.getElementById("conselho")
button.addEventListener("click", function(event){
    event.preventDefault()

    let conselho = document.getElementById("conselho-gerado")

    fetch(`https://api.adviceslip.com/advice`)
    .then((res) => res.json())
    .then((data) => {
        conselho.innerText = data.slip.advice
    })
    .catch((err) => console.log(err))
    
})