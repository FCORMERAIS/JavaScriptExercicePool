const firstDayWeek = (week,year) => {
    const res = new Date(Date.UTC(parseInt(year, 10), 0,week*7))
    console.log(res)
    while (res.getDay() != 0) {
        res.setDate(res.getDay()-1)
    }    
    return res
}