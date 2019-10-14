import "./calendar.js.js";
import dataStorage from "./data-storage.js.js"

const app = document.querySelector("#app");

document.querySelectorAll(".day").forEach(day => {
    day.addEventListener("click", event => {
        event.currentTarget.classList.toggle("selected");
        let myArray = e =>{
            e = Array.from(document.querySelectorAll(".selected"));
            e = e.map(user => user.dataset.day)
            return e;
            
        }
        dataStorage.setItem("selected-days", myArray())
        console.log()
    });
});

document.querySelector("#theme-switch").addEventListener("click", event => {
    app.classList.toggle("dark");
    const isDark = app.classList.contains("dark");
    dataStorage.setItem("is-dark", isDark);
});


const init = () => {
    // restore dark mode
    if(dataStorage.getString("is-dark") === "true"){
    app.classList.add("dark");
    }
    // restore selected days
  let e = dataStorage.getArray("selected-days")

   //console.log(e);
    for (let i=0; i < e.length; i++){
    const select = document.querySelector(`.day[data-day='${e[i]}']`)
    select.classList.add("selected")
    console.log(e[i])
    };
}

init();