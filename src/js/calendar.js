const calendar = document.querySelector("#app-calendar");

const getDayName = date => {
    return new Intl.DateTimeFormat("en-US", {weekday: "short"}).format(date);
}

const createUTCDate = (year, month, day) => {
    return new Date(Date.UTC(2018, 0, day));
}

const isWeekend = dayNumber => {
    return dayNumber % 7 === 6 || dayNumber % 7 === 0;
}

for (let day = 1; day <= 31; day++){
    let name = "";
    if (day <= 7){
        const date = createUTCDate(2018, 0, day);
        name = `<div class="name">${getDayName(date)}</div>`;
    }
    const weekend = isWeekend(day) ? "weekend" : "";

    calendar.insertAdjacentHTML("beforeend", `<div data-day="${day}" class="day ${weekend}">${name}<div class="number">${day}</div></div>`);
}