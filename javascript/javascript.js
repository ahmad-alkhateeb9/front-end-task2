const darkModeToggle = document.querySelector('.dark-mode .slider');

//
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
}

const disAbleDarkMode = () => {
    document.body.classList.remove('darkmode');
}

darkModeToggle.addEventListener('click', () => {
    if (document.body.classList.contains('darkmode')) {
        disAbleDarkMode();
    }
    else {
        enableDarkMode();
    }
});