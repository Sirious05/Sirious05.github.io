const imagesModal = () => {
    const workSection = document.querySelector('.works'),
        imgPopup = document.createElement('div'),
        bigImg = document.createElement('img');
    workSection.appendChild(imgPopup);
    imgPopup.appendChild(bigImg);
    imgPopup.classList.add('popup_engineer');
    imgPopup.style.justifyContent = 'center';
    imgPopup.style.alignItems = 'center';
    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;
        if (target && target.classList.contains('preview')) {
            const path = target.getAttribute('src');
            imgPopup.style.display = 'flex';
            bigImg.setAttribute('src', path);
        }
        if (target && target.matches('.popup_engineer')) {
            imgPopup.style.display = 'none';
        }
    });
};
export default imagesModal;