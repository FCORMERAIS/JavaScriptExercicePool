function addWeek(date) {
    const init = new Date("0001-01-01");
    let arr = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "secondMonday",
      "secondTuesday",
      "secondWednesday",
      "secondThursday",
      "secondFriday",
      "secondSaturday",
      "secondSunday",
    ];
    let tempo = 0
    while( (date1.getFullYear() !== date2.getFullYear())&& (date1.getMonth() !== date2.getMonth())&& (date1.getDate() !== date2.getDate()) ){
        init.setDate(init.getDate()+1)
        tempo++
    }
    return arr[tempo%14]
}

function timeTravel(data) {
    const init = new Date("0001-01-01");
    init.setHours(date["hours"])
    init.setMinutes(date["minute"])
    init.setSeconds(date["second"])
    console.log(init)
    return init
}