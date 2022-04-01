const isFriday = (n) => {
    if (n.getDay() == 5 ) {return true} else {return false}
}

const isWeekend = (n) => {
    if (n.getDay() == 6 || n.getDay() == 0 ) {return true} else {return false}
}

const isLeapYear = (n) => {
    if (n.getFullYear() % 4 == 0) {return true}else {return false}
}

const isLastDayOfMonth = (n) => {
    let n1 = n.getMonth()
    n.setDate(n.getDate()+1)
    let n2 = n.getMonth()
    if (n1 != n2) {return true} else {return false}
}