const isValid =(n) => {
    try {
        if (typeof n === "number"&& isNaN(n) === false) {
            return true
        }
        if (typeof n.getTime() === "number"&& isNaN(n.getTime()) === false) {
            return true
        }
        return false
    }
    catch{
        return false
    }
} 

const isAfter=(date1,date2) => {
    if (isValid(date1) == true && isValid(date2) == true) {
        if (date1.getTime() > date2.getTime()) { return true}else {return false}
    }else{return false}
}

const isBefore=(date1,date2) =>{
    if (isValid(date1) == true && isValid(date2) == true) {
        !isAfter(date1,date2)
    }else{return false}
}

const isFuture=(date)=> {
    if (isValid(date) == true && date.getTime()> new Date().getTime()) {return true} else {return false}
}
const isPast=(date)=> {
    if (isValid(date) == true && date.getTime()< new Date().getTime()) {return true}else {return false}
}