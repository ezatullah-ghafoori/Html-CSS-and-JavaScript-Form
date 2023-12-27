const [greetEl, formEl] = document.querySelectorAll(".inner_container");
const chanage_transformation = document.querySelectorAll(".change_transformation")

chanage_transformation.forEach(e => {
    e.addEventListener('click', ev=> {
        greetEl.classList.toggle('greeting_container_to_right');
        formEl.classList.toggle('form_container_to_left')
    })
})