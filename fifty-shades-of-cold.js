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

}

export function choseShade () {

}