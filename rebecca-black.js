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

}