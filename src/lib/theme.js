
let theme = false


export const toggleTheme = () => {
  if (typeof document == 'undefined') {
    return 
  }
  let elements = document.querySelectorAll('#project')
    if (theme) {
        document.body.style.background = "#0a0908"
        document.body.style.color = "white"

        if(elements){
          elements.forEach(ele=>{
            ele.style.background = "#383737"
            ele.style.color = "white"
          }
          )
        }
        console.log('now it should be dark')
      } else {
        document.body.style.background = "#87CEEB"
        document.body.style.color = "#333"
        if(elements){
          elements.forEach(ele=>{
            ele.style.background = "#66CDAA"
            ele.style.color =  "#333"
          })

        }
        console.log('now it should be light')
      }
      theme = !theme
};

