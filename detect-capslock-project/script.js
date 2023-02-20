

const input = document.querySelector('input')
const p = document.querySelector('p')


input.addEventListener('keyup' , (event) => {

    if(event.getModifierState('CapsLock')){
      p.style.display = 'block'
     }else{
    p.style.display = 'none'
      }

})