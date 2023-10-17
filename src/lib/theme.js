



export const toggleTheme = (_variable) => {
  if (typeof document == 'undefined') {
    return 
  }
  let element = document.querySelector('#project')
    if (document.body.classList.contains('light')) {
        document.body.classList.remove('light');
        element.style.background = "#383737"
        element.style.color = "white"
        console.log('now it should be dark')
      } else {
        document.body.classList.add('light');
        element.style.background = "#66CDAA"
        element.style.color = "#333"
        console.log('now it should be light')
      }
};

