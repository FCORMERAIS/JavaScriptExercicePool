const firstDayWeek = (week,year) => {
    let month = ""
    let day = ""
    if (week == 1) {
        return "01-01-"+year
    }
    const tempo =new Date("January 1, "+year)
    console.log(year,tempo.getDay())
    week--
    let res = new Date(Date.UTC(parseInt(year, 10), 0,week*7 +1))
    while (res.getDay() != 1) {
        res.setDate(res.getDate()-1)
    }
    if (res.getDate() <= 9 ) {
        day = "0"+String(res.getDate())
    }else {day = String(res.getDate())}

    if (res.getMonth() <= 9 ) {
        month = "0"+String(res.getMonth()+1)
    }else {month=String(res.getMonth()+1)}
    return day+'-'+month+'-'+year
}
