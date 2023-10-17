
let theme = false


export const toggleTheme = () => {
  if (typeof document == 'undefined') {
    return 
  }
  let element = document.querySelector('#project')
    if (theme) {
        document.body.style.background = "#0a0908"
        document.body.style.color = "white"

        if(element){
          element.style.background = "#383737"
          element.style.color = "white"
        }
        console.log('now it should be dark')
      } else {
        document.body.style.background = "#87CEEB"
        document.body.style.color = "#333"
        if(element){
          element.style.background = "#66CDAA"
          element.style.color = "#333"
        }
        console.log('now it should be light')
      }
      theme = !theme
};

