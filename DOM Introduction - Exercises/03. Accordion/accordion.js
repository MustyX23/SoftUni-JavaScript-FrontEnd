function toggle() {
    const buttonElement = document.querySelector('#accordion .head .button');

    const extraElement = document.getElementById('extra');

    const isHidden = extraElement.style.display === 'none';

    if (isHidden || !extraElement.style.display) {
        extraElement.style.display = 'block';
        buttonElement.textContent = 'Less';
    }
    else {
        extraElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}