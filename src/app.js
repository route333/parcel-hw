import {deleteDefaults}  from "./js/deleteDefault";
import {saveForm} from "./js/saveForm";
const btnEl = document.querySelector(".btn")

btnEl.addEventListener("click", saveForm);
deleteDefaults()