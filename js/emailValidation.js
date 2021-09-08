let val
let alert = document.querySelector('#alert')
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/
  return re.test(email)
}
function Value() {
  console.log(val)
  val = document.querySelector('#email').value
  console.log(val)
  if (validateEmail(val) === true) {
    document.querySelector('#alert').innerHTML = ''
  } else {
    document.querySelector('#alert').innerHTML = 'Please enter a valid email'
  }
}
