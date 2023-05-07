const onForm = document.querySelector('form')


let form = {
    email: onForm.email.value,
    message: onForm.message.value,
}
console.log(form);

onForm.addEventListener('form', () => {
})
// console.log(onForm.email);
// let saveOnForm = localStorage.setItem("feedback-form-state", JSON.stringify(form));
// console.log(onForm.message);