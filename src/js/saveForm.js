const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const btnEl = document.querySelector(".btn")

const formData = {
    name: "",
    email: ""
};

export function saveForm (){
    formData.name = nameInput.value;
    formData.email = emailInput.value;

    console.log(formData);
    alert("відправлення форми пройшло успішно");
}


