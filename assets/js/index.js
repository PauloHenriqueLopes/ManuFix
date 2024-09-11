
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const listItems = document.querySelectorAll('.navbar .links li');
const ListDownMenu = document.querySelectorAll('.dropdown_menu .li')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
}

listItems.forEach(item => {
    item.addEventListener('click', function() {
        listItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

ListDownMenu.forEach(item => {
    item.addEventListener('click', function() {
        ListDownMenu.forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});
