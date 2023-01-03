const mobileNavBtn = document.querySelector('.dropdown-img');
const removeBtn = document.querySelector('.remove-btn');
const mobileNav = document.querySelector('#mobile-navigation');
const mobileNavLinks = document.querySelectorAll('.mobile-item');

const navToggle = () => {
  mobileNav.classList.toggle('active');
  removeBtn.classList.toggle('hidden');
};

mobileNavBtn.addEventListener('click', navToggle);
removeBtn.addEventListener('click', navToggle);

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', navToggle);
});
