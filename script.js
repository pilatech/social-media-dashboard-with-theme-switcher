const toggler = document.querySelector('.dashboard__checker')

const darkMode = localStorage.getItem('darkMode')

if(darkMode === 'active'){
  addDarkMode()
  toggler.checked = true
} else {
 removeDarkMode()
}

toggler.addEventListener('input', e => {
 if(toggler.checked){
  addDarkMode()
  localStorage.setItem('darkMode', 'active')
 } else {
  removeDarkMode()
  localStorage.setItem('darkMode', 'inactive')
 }
})

function addDarkMode(){
 document.body.classList.add('dark')
}

function removeDarkMode(){
 document.body.classList.remove('dark')
}