const firstDayWeek = (week,Y) => {
    const res = new Date(Date.UTC(parseInt(Y, 10), 0,week*7))
    console.log(res)
    let year = ""
    let month = ""
    let day = ""
    while (res.getDay() != 0) {
        res.setDate(res.getDay()-1)
    } 
    if (res.getDate() <= 9 ) {
        day = "0"+String(res.getDay())
    }
    return day+'-'+month+'-'+year
}