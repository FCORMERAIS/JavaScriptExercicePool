const firstDayWeek = (week,year) => {
    const res = new Date("01-01-1000")
    console.log(res)
    while (res.getDay() != 0) {
        res.setDate(res.getDay()-1)
    }    
    return res
}