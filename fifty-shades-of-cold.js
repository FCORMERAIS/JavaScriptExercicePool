import {colors} from './fifty-shades-of-cold.data.js'

export function generateClasses () {
    let style = document.createElement("style") 
    style.innerHTML = ''
    colors.forEach(element => {
        style.innerHTML += "."+element+"{ background:" + element+";}"
    });
    document.getElementsByTagName("head")[0].appendChild(style)
}

export function generateColdShades () {
    const color = ["aqua", "blue", "turquoise", "green", "cyan", "navy" ,"purple"]
    forEach(colors, (element1) => {
        forEach(color, (element2) => {
            let Regex = new RegExp(element2)
            let bol = element1.match(Regex)
            if (bol != null) {
                let div = document.createElement("div")
                div.className = element1
                div.textContent = element1
                document.body.append(div)
            }
        })
    })
}

export function choseShade(d){
    let elem = document.querySelectorAll('div')
    for(let i = 0;i<colors.length;i++){
        let style = elem[i].className
        elem[i].classList.remove(style)
        elem[i].classList.add(d)
    }
}

const forEach = (arr, func) => {
    let res = []
    arr.map((cv,i,a) => res.push(func(cv,i,a)))
    return res
}