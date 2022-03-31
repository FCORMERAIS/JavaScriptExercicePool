function isValid(date) {
    try {
      if (typeof date === "number" && !isNaN(date)) {
        return true;
      }
      if (typeof date.getTime() === "number" && !isNaN(date.getTime())) {
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
const isAfter=(date1,date2) => {
    console.log(date1.getTime)
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