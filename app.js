const neonCircleButton = document.querySelector('.neonCircle')
const advice = document.querySelector('.advice')

neonCircleButton.addEventListener('click', () => {
    console.log("click")
    fetchData()
})

async function fetchData(){
    const data = await fetch('https://api.adviceslip.com/advice')
    const json = await data.json()
    console.log(json)
    advice.textContent = json.slip.advice

}