const dayOfWeekend = document.querySelectorAll('.name'); 
const app = document.getElementById("app-calendar")
const isWeekend = dayNumber => {
    return dayNumber % 7 === 6 || dayNumber % 7 === 0;
}
for (let counter = 1; counter <= 31; counter++) {
    const weekend = isWeekend(counter) ? "weekend" : "";
   const date = new Date(Date.UTC(2018, 9, counter));
   const options = { weekday: "short" };
   const day = new Intl.DateTimeFormat("en-US", options).format(date);
   app.insertAdjacentHTML('beforeend', `<div class="day ${weekend}"> ${counter}<br><p class=name> ${day}</p><div>`)};
   
const days = document.querySelectorAll('.day'); 
days.forEach(element => {
    element.addEventListener("click", event => { 
         event.currentTarget.classList.toggle(`selected`);
});
 });