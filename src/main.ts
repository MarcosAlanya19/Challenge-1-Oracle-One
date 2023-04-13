import 'boxicons';
import iziToast from 'izitoast';
import './assets/normalice.css';
import './assets/style.css';

function byId<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id) as T;
  if (!element) {
    throw new Error(`Element with id ${id} not found`);
  }
  return element;
}

const $bcryptTextArea = byId<HTMLTextAreaElement>('encrypt-textarea');
const $btnEncrypted = byId<HTMLButtonElement>('btn-encrypt');
const $btnDecrypted = byId<HTMLButtonElement>('btn-decrypted');
const $encryptMsg = byId<HTMLDivElement>('encrypt-msg');

// Prohibe ñas mayusculas y tildes
$bcryptTextArea.addEventListener('input', function () {
  const inputText = $bcryptTextArea.value;
  const outputText = inputText.replace(/[^a-z\s]/g, '');

  if (outputText !== inputText) {
    $bcryptTextArea.value = outputText;
  }
});

// Creacion de HTMLElement
const myContainer = document.createElement('div');
const myDiv = document.createElement('div');
const myBtn = document.createElement('button');
myDiv.classList.add('section-decrypted-text');
myContainer.appendChild(myDiv);
myContainer.appendChild(myBtn);
myBtn.textContent = 'Copiar';
myBtn.classList.add('section-decrypted-btn-copy');

// Alerta de copia realizada
const btnCopyAlert = () => {
  myBtn.onclick = () => {
    const textCopy = myDiv.innerText;

    navigator.clipboard.writeText(textCopy).then(() =>
      iziToast.info({
        title: 'Copia realizada',
        message: 'El texto ha sido copiado exitosamente',
        timeout: 3000,
        position: 'topCenter',
        icon: 'fa fa-check',
      })
    );
  };
};

// Alerta de campo vacio
const emptyFieldAlert = () => {
  if ($bcryptTextArea.value === '') {
    iziToast.error({
      title: 'Campo vacío',
      message: 'Ingrese un texto para encriptar o desencriptar',
      timeout: false,
      position: 'topCenter',
      icon: 'fa fa-times',
    });
    return true;
  }
  return false;
};

// Encriptado del texto
const contentEncrypted = () => {
  if (emptyFieldAlert()) {
    return;
  }

  myDiv.textContent = $bcryptTextArea.value.replace(/[eioua]/g, (letter) => {
    switch (letter) {
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'a':
        return 'ai';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return letter;
    }
  });

  if ($encryptMsg.children.length > 0) {
    $encryptMsg.replaceChild(myContainer, $encryptMsg.children[0]);
  } else {
    $encryptMsg.appendChild(myContainer);
  }
};

// Desencriptado del texto
const contentDecrypted = () => {
  if (emptyFieldAlert()) {
    return;
  }

  myDiv.textContent = $bcryptTextArea.value.replace(
    /enter|imes|ai|ober|ufat/g,
    (letter) => {
      switch (letter) {
        case 'enter':
          return 'e';
        case 'imes':
          return 'i';
        case 'ai':
          return 'a';
        case 'ober':
          return 'o';
        case 'ufat':
          return 'u';
        default:
          return letter;
      }
    }
  );

  if ($encryptMsg.children.length > 0) {
    $encryptMsg.replaceChild(myContainer, $encryptMsg.children[0]);
  } else {
    $encryptMsg.appendChild(myContainer);
  }
};

// Boton de encriptado
$btnEncrypted.onclick = () => {
  btnCopyAlert();
  contentEncrypted();
};

// Boton de desencriptado
$btnDecrypted.onclick = () => {
  btnCopyAlert();
  contentDecrypted();
};
