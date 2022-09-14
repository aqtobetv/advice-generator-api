const neonCircleButton = document.querySelector('.neonCircle')
const advice = document.querySelector('.advice')
const adviceNumber = document.querySelector('.advice-number')

let visited = 1

neonCircleButton.addEventListener('click', () => {       
    fetchData()   
})

async function fetchData(){  
    const data = await fetch('https://api.adviceslip.com/advice')
    const json = await data.json() 
    advice.textContent = json.slip.advice
    adviceNumber.textContent = `ADVICE #${json.slip.id}`
    adviceNumber.dataset.id = json.slip.id    
}