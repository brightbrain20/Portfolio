import Data from './module/data.js';

const mobileNavBtn = document.querySelector('.dropdown-img');
const removeBtn = document.querySelector('.remove-btn');
const mobileNav = document.querySelector('#mobile-navigation');
const mobileNavLinks = document.querySelectorAll('.mobile-item');
const popupContainer = document.querySelector('.popup');

const navToggle = () => {
  mobileNav.classList.toggle('active');
  removeBtn.classList.toggle('hidden');
};

mobileNavBtn.addEventListener('click', navToggle);
removeBtn.addEventListener('click', navToggle);

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', navToggle);
});

const displayPopup = (id) => {
  Data.forEach((data) => {
    const dataId = data.id;
    if (dataId === id) {
      popupContainer.innerHTML = `
        <div class="popup2">
        <div class="multi-container">
          
            <h2>${data.title}</h2>
          
          <div class="exit">x</div>
        </div>
        <ul class="language">
          <li >html</li>
          <li>bootstrap</li>
          <li>Ruby on rails</li>
        </ul>
        <div class="content-container">
          <div class="img">
            <img src="${data.featured_image.image}" alt="img">
          </div>
          <div class="popup-body">
            <p> ${data.description}</p>
            <ul>
              <li class="link-img">
                <a href="">
                  <img src="./Images/Enable 1.svg"  alt="img">
                </a>
              </li>
              <li class="link-img ">
                <a href="">
                  <img src="./Images/Enable.svg" class="btn2" alt="img">
                </a>
              </li>
            </ul>
          </div>
        </div>
       
      </div>
        `;
    }
  });
};

const cardBtn = document.querySelectorAll('.cards');
cardBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    const btnId = btn.getAttribute('id');
    displayPopup(btnId);
    const closePopupBtn = document.querySelector('.exit');
    closePopupBtn.addEventListener('click', () => {
      popupContainer.innerHTML = '';
    });
  });
});

// FORM VALIDATION-------------------
const form = document.getElementById('getintouch');
const error = document.getElementById('error');
const { email } = form.elements;

function checkUppercase(str) {
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === str.charAt(i).toUpperCase() && str.charAt(i).match(/[a-z]/i)) {
      return true;
    }
  }
  return false;
}

email.addEventListener('click', () => {
  error.classList.remove('active');
  email.classList.remove('active');
});

form.addEventListener('submit', (event) => {
  const emailValue = email.value;
  if (checkUppercase(emailValue)) {
    event.preventDefault();
    error.innerHTML = 'please provide a valid email in format: email@email.com';
    error.classList.add('active');
    email.classList.add('active');
  } else {
    form.submit();
  }
});