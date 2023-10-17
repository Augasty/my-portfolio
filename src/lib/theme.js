
let light_theme = false


export const fixProjectTheme = () =>{
  let elements = document.querySelectorAll('#project')
  if(light_theme){
    elements.forEach(ele=>{
      // console.log('light-now')
      ele.style.background = "#66CDAA"
      ele.style.color =  "#333"
    })
  }else{
    elements.forEach(ele=>{
      ele.style.background = "#383737"
      ele.style.color = "white"
    }
    )
  }
}

export const toggleTheme = () => {
  if (typeof document == 'undefined') {
    return 
  }
  let elements = document.querySelectorAll('#project')
    if (light_theme) {
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
      light_theme = !light_theme
};

