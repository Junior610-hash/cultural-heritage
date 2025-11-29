const dropBtn = document.querySelector('.drop-btn');
const dropdown = document.querySelector('.dropdown');

dropBtn.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});
