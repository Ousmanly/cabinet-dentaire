const togglebtn = document.querySelector('.togle_btn');
const togglebtnIcon = document.querySelector('.togle_btn i');
const dropDownMeun = document.querySelector('.dropwdown_menu')
togglebtn.onclick = function () {
    dropDownMeun.classList.toggle('open');
    const isOpen = dropDownMeun.classList.contains('open');
    togglebtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}