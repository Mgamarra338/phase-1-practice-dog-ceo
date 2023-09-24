console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const imgDiv = document.getElementById('dog-image-container');
fetch(imgUrl)
    .then(resp => resp.json())
    .then((data) => {
        console.log(data)
        data.message.forEach(imageUrl => {
            const img = document.createElement("img");
            img.setAttribute("src", imageUrl);
            imgDiv.appendChild(img)
        });
    })
    .catch(error => {
        console.log(error);
    });

const breedUrl = "https://dog.ceo/api/breeds/list/all";
const breedUl = document.getElementById('dog-breeds')
let index = 0;
fetch(breedUrl)
    .then(resp => resp.json())
    .then((data) => {
        const keys = Object.keys(data.message);
        for (const key of keys) {
            if (data.message[key].length > 0) {
                data.message[key].forEach((breed) => {
                    const li = document.createElement('li');
                    li.setAttribute('value', key);
                    li.textContent = breed.toString() + ' ' + key.toString();
                    li.addEventListener('click', () => {
                        li.style.color = 'blue';
                    });
                    breedUl.appendChild(li);
                })
            }
            const li = document.createElement('li');
            li.setAttribute('value', key);
            li.setAttribute('data-category', key.charAt(0));
            li.textContent = key;
            li.addEventListener('click', () => {
                li.style.color = 'blue';
            });
            breedUl.appendChild(li);
        }
    })
    .catch(error => {
        console.log(error);
    });

const breedDropDown = document.getElementById('breed-dropdown');

breedDropDown.addEventListener('change', () => {
    const items = breedUl.querySelectorAll('li');
    const selectedValue = breedDropDown.value;
    items.forEach(item => {
        const val = item.getAttribute('data-category');
        if (val !== selectedValue) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    })
})

