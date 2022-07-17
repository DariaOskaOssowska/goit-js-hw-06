const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments']

const list = document.querySelector('#ingredients')
const liArray = []

ingredients.forEach(ingredient => {
	const item = document.createElement('li')
	item.className = 'item'
	item.textContent = ingredient
	liArray.push(item)
})

list.append(...liArray)

