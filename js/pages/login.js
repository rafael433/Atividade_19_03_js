const container = document.querySelector(".container");
const registerBtn = document.querySelector(".register__btn");
const loginBtn = document.querySelector(".login__btn");
const nome = document.getElementById("nome");
const form = document.getElementById("formulario");
const email = document.getElementById("e-mail");
const idade = document.getElementById("idade");
const cpf = document.getElementById("CPF");
const password = document.getElementById("senha");
const confirmPassword = document.getElementById("confirmPassword");
const msgError = document.getElementById("erro-msg");
const login = document.getElementById(`erro-msg`);

console.log(nome)

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

nome.addEventListener("input", (event) => {
  const regex = /^[a-zA-ZÀ-ÿ\s]+$/;

  regex.test(event.target.value);

  if (nome.value.length < 3) {
    console.log("O nome tem que ter mais que 3 caracteres");
  }

  if (!regex.test(event.target.value)) {
    console.log("Nome invalido");
  }
});

const checkNome = () => {
  const regexNome = /^[a-zA-ZÀ-ÿ\s]+$/;

  console.log(regexNome.test(nome.value))
  console.log(nome.value.length > 3)

  return regexNome.test(nome.value) && nome.value.length > 3;
};

email.addEventListener("input", (event) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log(regexEmail.test(event.target.value));

  if (!regexEmail.test(event.target.value)) {
    console.log("Email invalido!");
  }
});
const checkEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email.value);
};
idade.addEventListener("input", (event) => {
  let idade = event.target.value.replace(/\D/g, "");
  console.log(idade >= 18);
});
const checkIdade = () => {
  if (idade.value >= 18) {
    return true;
  } else {
    return false;
  }
};

cpf.addEventListener("input", (event) => {
  let valorCpf = event.target.value;

  valorCpf = valorCpf.replace(/\D/g, "");
  valorCpf = valorCpf.substring(0, 11);
  valorCpf = valorCpf.replace(/(\d{3})(\d)/, "$1.$2");
  valorCpf = valorCpf.replace(/(\d{3})(\d)/, "$1.$2");
  valorCpf = valorCpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  event.target.value = valorCpf;
});

const checkCpf = () => {
   const cpfRegex =/^\d{3}\.\d{3}\.\d{3}-\d{2}$/
  return cpfRegex.test(cpf.value);
};
password.addEventListener("input", (event) => {
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/.test(event.target.value,)
  // let senhaCorreta = event.target.value;
});
const checkPassword = () => {
  const senhaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{10,}$/;
  return senhaRegex.test(senha.value);
};

confirmPassword.addEventListener("input", (event) => {
  let confirmar = event.target.value;

  if (confirmar === senha.value) {
    console.log("Senha esta iguais");
  } else {
    console.log("Senha incorretas, precisa ser iguais");
  }
});

const checkConfirmPassword = () => {
  if (confirmPassword.value === password.value) {
    return true;
  } else {
    return false;
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!checkNome()) {
    // console.log("O nome digitado está errado");
    createDisplayMsgError("Nome Inválido!");
    return;
  }

  console.log("&& - " + checkEmail())

  if (!checkEmail()) {
    createDisplayMsgError("O email digitado está errado");
    return;
  }

  if (!checkIdade()) {
    createDisplayMsgError("A idade digitada está errado");
    return;
  }

  if (!checkCpf()) {
    createDisplayMsgError("O cpf digitado está errado");
    return;
  }

  if (!checkPassword()) {
    createDisplayMsgError("A senha digitada está errado");
    return;
  }

  if (!checkConfirmPassword()) {
    createDisplayMsgError("A senha é ivalida, reveja");
    return;
  }
});

const createDisplayMsgError = (mensagem) => {
  msgError.textContent = mensagem;

  setTimeout(() => {
    msgError.textContent = "";
  }, 5000);
};
