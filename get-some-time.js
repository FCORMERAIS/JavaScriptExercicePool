const firstDayWeek = (week,year) => {
    const res = new Date('')
    res.setFullYear(parseInt(year, 10))
    res.setDate(week*7+res.getDate())
    while (res.getDay() != 0) {
        res.setDate(res.getDay()+1)
    }    
    return res
}