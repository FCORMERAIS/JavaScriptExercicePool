const matchCron = (cron,date) => {
    let tempo = [date.getMinutes(),date.getHours(),date.getDate(),date.getMonth(),date.getDay()]
    console.log(tempo)
    cron = cron.split(" ")
    console.log(cron)
    for (let index = 0; index < cron.length; index++) {
        if (cron[index] == '*') {
            tab[index] = true
        }else {
            
        }
    }
    return true
}