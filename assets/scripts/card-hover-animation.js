function handleMouseEnter() {
    this.classList.add('card--hoovered');
    document.body.id = `${this.id}-hoovered`;
}

function handleMouseLeave() {
    this.classList.remove('card--hoovered');
    document.body.id = '';
}

function addEventListenersToCards() {
    const cardElements = document.getElementsByClassName('card');

    for (let index = 0; index < cardElements.length; index++) {
        const card = cardElements[index];
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
    }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);