let val
let alert = document.querySelector('#alert')
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}
function Value() {
  val = document.querySelector('#email').value

  if (validateEmail(val) === true) {
    document.querySelector('#alert').innerHTML = ''
  } else {
    document.querySelector('#alert').innerHTML = 'Please enter a valid email'
  }
}
