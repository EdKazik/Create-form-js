const userList = document.querySelector('.user__list')
document.querySelector('#button_buy').addEventListener('click', () => {
    userList.style.display = 'block';
    document.querySelector('#button_buy').style.display = 'none';
})

const userForm = document.querySelector('#user__list-form');
const orderBtn = document.querySelector('#button_order');
const inputName = document.querySelector('#full_name');

userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const formValues = new FormData(userForm);
    const formObject = {};

    for (const value of formValues) {
        formObject[value[0]] = value[1];
        
        if (value[1].length < 1 ) {
            document.querySelector('.error__block').style.display = 'block';
            alert('IF')
        } else {
            alert('ELSE')
            document.querySelector('.error__block').style.display = 'none';
            const newDiv = document.createElement('div');
            newDiv.classList.add('new__div');
            document.querySelector('.container').appendChild(newDiv);
        
            const newSpan = document.createElement('span');
            newDiv.appendChild(newSpan)
            newSpan.innerHTML = `${value[1]}`
        }
    }
});


        





