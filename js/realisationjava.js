function tiltImage(event, card) {
    var image = card.querySelector('.imag');
    var rect = card.getBoundingClientRect();
    var angleX = (event.clientY - rect.top - rect.height / 2) * 0.1;
    var angleY = -(event.clientX - rect.left - rect.width / 2) * 0.1;
    image.style.transform = 'perspective(1000px) rotateX(' + angleX + 'deg) rotateY(' + angleY + 'deg)';
}

function resetImage(card) {
    var image = card.querySelector('.imag');
    image.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
}
