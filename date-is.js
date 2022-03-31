const isValid =(n) => {
    try {
        if (isNaN(n)===true) {
            return false
        }
        if (typeof n.getTime === "number"&& isNaN(n.getTime()) === false) {
            return true
        }
        return false
    }
    catch{
        return false
    }
} 

const isAfter=(date1,date2) => {
    if (date1.getTime() > date2.getTime()) { return true}else {return false}
}

const isBefore=(date1,date2) =>{
    !isAfter(date1,date2)
}

const isFuture=(date)=> {
    if (isValid(date) == true && date.getTime()> new Date().getTime()) {return true} else {return false}
}
const isPast=(date)=> {
    if (isValid(date) == true && date.getTime()< new Date().getTime()) {return true}else {return false}
}