var throttle = require('lodash.throttle');

const LOCAL_STORAGE = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    textareaEmail: document.querySelector('input'),
    message: document.querySelector('textarea')
};

refs.form.addEventListener('submit', function (evt) {
    evt.preventDefault();
    console.log({ email: refs.textareaEmail.value, message: refs.message.value });
    evt.currentTarget.reset();
    localStorage.clear();
})

refs.form.addEventListener('input', throttle(onForm, 500));

function onForm(evt) {
    const formData = {
        email: refs.form.elements.email.value,
        message: refs.form.elements.message.value
    };

    localStorage.setItem(LOCAL_STORAGE, JSON.stringify(formData));
}

function getValueOnForm() {
    const localStorageItem = localStorage.getItem(LOCAL_STORAGE);

    if (localStorageItem) {
        const currentItem = JSON.parse(localStorageItem);
        refs.textareaEmail.value = currentItem.email;
        refs.message.value = currentItem.message;
    }
};

getValueOnForm();