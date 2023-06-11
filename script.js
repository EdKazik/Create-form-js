const userList = document.querySelector('.user__list')
document.querySelector('#button_buy').addEventListener('click', () => {
    userList.style.display = 'block';
    document.querySelector('#button_buy').style.display = 'none';
})

const userForm = document.querySelector('#user__list-form');
userForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formValues = new FormData(userForm);
    const formObject = {};

    for (const value of formValues) {
        formObject[value[0]] = value[1];
    }
        if (full_name.value.length === 0 || post.value.length === 0 || quantity.value.length === 0) {
            document.querySelector('.error__block').style.display = 'block';
        } else if (full_name.value.length > 0 || post.value.length > 0 || quantity.value.length > 0) {
            document.querySelector('.error__block').style.display = 'none';
            
            const newDiv = document.createElement('div');
            newDiv.classList.add('new__div');
            document.querySelector('.container').appendChild(newDiv);
        
            const newP = document.createElement('p');
            newDiv.appendChild(newP);
            newP.textContent = `Замовник: ${formObject.full_name}, Місто ${formObject.city} склад НП №${formObject.post}, ${formObject.quantity}шт`;
        }
});


        





