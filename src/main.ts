const openModalBtn = document.getElementById('openModalSearch');
const modal = document.getElementById('modal');
const closeModalBtn = document.getElementById('closeModalBtn');

if (openModalBtn && modal) {
    openModalBtn.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
}

if (closeModalBtn && modal) {
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}

if (modal) {
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

if (modal) {
    window.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });
}

