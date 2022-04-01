const bloodySunday = (n) =>{
    let newday = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ]
    let res =dayOfTheYear(n)
    console.log(newday[res%6])
    return newday[res%6]
}

const dayOfTheYear= (date) =>{
    let datesince = new Date();
    let days = 1;
    let year = date.getFullYear();
    datesince.setFullYear(year, 0, days);
    while (date > datesince) {
      days++;
      datesince.setDate(datesince.getDate() + 1);
    }
    return days;
  }