const matchCron = (cron,date) => {
    let tempo = [date.getMinutes(),date.getHours(),date.getDate(),date.getMonth()+1,date.getDay()]
    cron = cron.split(" ")
    for (let index = 0; index < cron.length; index++) {
        if (cron[index] != '*' &&tempo[index] != cron[index]) {
            return false
        }
    }
    return true
}