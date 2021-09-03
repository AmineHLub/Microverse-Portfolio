form.addEventListener('input', () => {
  const email = document.querySelector('.input-email').value;
  const name = document.querySelector('.input-name').value;
  const message = document.querySelector('.input-message').value;

  const user = { name, email, message };
  localStorage.setItem('userData', JSON.stringify(user));
});

const userData = JSON.parse(localStorage.getItem('userData'));
document.querySelector('.input-name').value = userData.name;
document.querySelector('.input-email').value = userData.email;
document.querySelector('.input-message').value = userData.message;
