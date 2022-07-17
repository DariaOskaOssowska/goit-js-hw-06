const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const list = document.querySelector('.gallery')

const markup = images
	.map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
	.join('')

  list.insertAdjacentHTML('beforeend', markup)
    // const img = document.createElement('img')
  
const pictures = document.querySelectorAll('.picture')

list.style.display = 'flex';
list.style.flexWrap = 'column-reverse'
list.style.listStyle = 'none'
list.style.gap = '20px'
list.style.justifyContent = 'center'