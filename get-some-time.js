const firstDayWeek = (week,year) => {
    const res = new Date(Date.UTC(parseInt(year, 10), 0,week*7))
    console.log(res.getDay(),)
    let month = ""
    let day = ""
    while (res.getDay() != 1) {
        res.setDate(res.getDate()-1)}

    if (res.getDate() <= 9 ) {
        day = "0"+String(res.getDate())
    }else {day = String(res.getDate())}

    if (res.getMonth() <= 9 ) {
        month = "0"+String(res.getMonth()+1)
    }else {month=String(res.getMonth())}
    return day+'-'+month+'-'+year
}
