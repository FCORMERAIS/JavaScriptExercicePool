export function compose(){
    document.addEventListener("keydown", (event)=>{
    let keypressed = event.keyCode
    console.log(keypressed)
    let elem = document.querySelectorAll('div')
    elem.textContent = keypressed
    })
}