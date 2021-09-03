const form = document.getElementsByTagName('form')[1];
const email = document.querySelector('.input-email');
const errorMsg = document.createElement('span');

function emailChecker(event) {
  for (let i = 0; i < email.value.length; i += 1) {
    if (email.value !== email.value.toLowerCase()) {
      event.preventDefault();
      document.querySelector('.input-container').insertBefore(errorMsg, document.querySelector('.input-container').firstChild);
      errorMsg.innerText = `You have entered an email that contains UPCASED letters. ( Hint use this instead : ${email.value.toLowerCase()} )`;
      errorMsg.classList.add('error-msg');
      break;
    }
  }
}

form.addEventListener('submit', (event) => emailChecker(event));
