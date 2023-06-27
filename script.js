const login = document.querySelector('#submit');
const checkbox = document.getElementById('agreement');
const submit = document.getElementById('submit-btn');
const textarea = document.querySelector('#textarea');
const counter = document.querySelector('#counter');
const form = document.getElementById('evaluation-form');
const formData = document.getElementById('form-data');
const submittedForm = document.getElementById('submitted-form');
const maxLength = 500;

const replaceForm = () => {
  const name = document.getElementById('input-name').value;
  const lastName = document.getElementById('input-lastname').value;
  const email = document.getElementById('input-email').value;
  const house = document.getElementById('house').value;
  const family = document.querySelector('input[name="family"]:checked').value;
  const subjects = Array.from(document.querySelectorAll('.subject:checked'))
    .map((subject) => subject.value).join(', ');
  const rate = document.querySelector('input[name="rate"]:checked').value;
  const comment = document.getElementById('textarea').value;
  formData.innerHTML = `<p>Nome: ${name} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Casa: ${house}</p>
  <p>Família: ${family}</p>
  <p>Matérias: ${subjects}</p>
  <p>Avaliação: ${rate}</p>
  <p>Observações: ${comment}</p>`;
  form.style.display = 'none';
  submittedForm.style.display = 'block';
};

// const submitForm = document.getElementById('submit-btn');
// submitForm.addEventListener('click', replaceForm);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  replaceForm();
});

login.addEventListener('click', () => {
  const email = document.querySelector('.email');
  const senha = document.querySelector('.password');

  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const habilitSubmit = () => {
  submit.disabled = !checkbox.checked;
};

checkbox.addEventListener('change', habilitSubmit);

textarea.addEventListener('keyup', () => {
  counter.textContent = `${maxLength - textarea.value.length} caracteres restantes`;
});
