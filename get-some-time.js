const firstDayWeek = (week,Y) => {
    const res = new Date(Date.UTC(parseInt(Y, 10), 0,week*7))
    console.log(res.getDay(),)
    let year = ""
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

    if (res.getFullYear() <= 9 ) {year = "000"+String(res.getFullYear())
    }else if (9<res.getFullYear()<=99) {year= "00"+String(res.getMonth())
    }else if (99<res.getFullYear() <=999){year= "0"+String(res.getFullYear)
    }else {year = String(res.getFullYear)}

    return day+'-'+month+'-'+year
}
