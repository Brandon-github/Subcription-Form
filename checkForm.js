const form = document.getElementById('form')

const email_input = document.querySelector('[name="email"]')
const error_email = document.getElementById('error_email')

form.addEventListener('submit', (e) => {
  



  const email_expresion = /^[a-zA-Z\.0-9]+\@[a-zA-Z]+\.[a-z]{3}$/
  const { value } = email_input
  
  if (email_expresion.test(value)) {
    email_input.classList.remove('border-tomato')
    email_input.classList.add('border-charcoal-grey')
    email_input.classList.remove('text-tomato')
    email_input.classList.remove('text-black')
    error_email.classList.add('hidden')
    
  } else {
    e.preventDefault()
    email_input.classList.remove('border-charcoal-grey')
    email_input.classList.add('border-tomato')
    email_input.classList.add('text-tomato')
    error_email.classList.remove('hidden')
    
  }

})