// const firstDayWeek = (week,year) => {
//     let month = ""
//     let day = ""
//     if (week == 1) {
//         return "01-01-"+year
//     }
//     const tempo =new Date("January 1, "+year)
//     console.log(year,tempo.getDay())
//     week--
//     let res = new Date(Date.UTC(parseInt(year, 10), 0,week*7))
//     while (res.getDay() != 1) {
//         res.setDate(res.getDate()-1)
//     }
//     if (res.getDate() <= 9 ) {
//         day = "0"+String(res.getDate())
//     }else {day = String(res.getDate())}

//     if (res.getMonth() <= 9 ) {
//         month = "0"+String(res.getMonth()+1)
//     }else {month=String(res.getMonth()+1)}
//     return day+'-'+month+'-'+year
// }

function addWeeks(weeks, date) {
    weeks--;
    date.setDate(date.getDate() + weeks * 7);
    return date;
  }
  function firstDayWeek(week, datey) {
    let date = new Date(datey);
    date = addWeeks(week, date);
    if (+date === +new Date(datey)) {
      return formatDate(date);
    }
    let year = date;
    while (date.getDay() > 1) {
      date.setDate(date.getDate() - 1);
    }
    if (date.getYear() !== year.getYear()) {
      return formatDate(year);
    }
    return formatDate(date);
  }
  function formatDate(date) {
    let day, month, year;
    year = date.getFullYear();
    day = date.getDate();
    month = date.getMonth() + 1;
    if (date.getDate() < 10) {
      day = "0" + date.getDate();
    }
    if (date.getMonth() < 9) {
      month = "0" + (date.getMonth() + 1);
    }
    if (date.getFullYear() < 10) {
      year = "0" + year;
    }
    if (date.getFullYear() < 100) {
      year = "0" + year;
    }
    if (date.getFullYear() < 1000) {
      year = "0" + year;
    }
    return day + "-" + month + "-" + year;
  }