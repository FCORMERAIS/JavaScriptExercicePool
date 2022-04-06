import {colors} from './fifty-shades-of-cold.data.js'

export function generateClasses () {
    let style = document.createElement("style") 
    style.innerHTML = ''
    colors.forEach(element => {
        style.innerHTML += "."+element+"{ background-color:" + element+";}"
    });
    document.getElementsByTagName("head")[0].appendChild(style)
}

export function generateColdShades () {
    const color = ["aqua", "blue", "turquoise", "green", "cyan", "navy" ,"purple"]
    forEach(colors, (color) => {
        forEach(color, (allcolor) => {
            let Regex = new RegExp(allcolor)
            let bol = color.match(Regex)
            if (bol != null) {
                let div = document.createElement("div")
                div.className,div.textContent = allcolor
                document.body.append(div)
            }
        })
    })
}

export function choseShade(d){
    let elem = document.querySelectorAll('div')
    for(let i = 0;i<colors.length;i++){
        let style = elem[i].className
        let flag = elem[i].classList.contains(d)
        if(!flag){
            elem[i].classList.remove(style)
            elem[i].classList.add(d)
        } 
    }
    
}