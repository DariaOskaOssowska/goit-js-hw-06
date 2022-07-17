const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

inputChange.addEventListener('change', e => {
    abracadabra.style.fontSize = `${e.target.value }px`
})
