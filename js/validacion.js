const nameField = document.querySelector("[name=name]");
const priceField = document.querySelector("[name=price]");
const imageField = document.querySelector("[name=image]");

const validateEmptyField = (message, e) => {
    const field = e.target;
    const fieldValue = e.target.value;
    if (fieldValue.trim().length === 0) {
        field.classList.add("error");
        field.nextElementSibling.classList.add("Error");
        field.nextElementSibling.innerText = message;
    } else {
        field.classList.remove("error");
        field.nextElementSibling.classList.remove("Error");
        field.nextElementSibling.innerText = "";
    }   
}

nameField.addEventListener("blur", (e) => validateEmptyField("Ingrese el nombre del producto", e));
priceField.addEventListener("blur", (e) => validateEmptyField("Ingrese el precio del producto", e));
imageField.addEventListener("blur", (e) => validateEmptyField("Cargue una url de la imagen del producto", e));