export function modal() {
    const modalBtnOpen = document.querySelector('[data-modal="open"]');
    const modalBtnClose = document.querySelector('[data-modal="close"');
    const modalContainer = document.querySelector('[data-modal="container"');
    
    if(modalBtnOpen && modalBtnOpen && modalContainer) {
        
        function openModal(e) {
            e.preventDefault();
            modalContainer.classList.add('ativo');
        };
        
        function closeModal() {
            modalContainer.classList.remove('ativo');
        };
        
        // Quando clicar fora do modal feche o mesmo
        function handleClickOutModal(e) {
            // e.target === modalContainer --> se eu clicar no modalContainer feche o mesmo
            // Se não, ou seja se eu clicar somente no modal não faça nada
            if(e.target === modalContainer) {
                closeModal();
            }
        };
        
        modalBtnOpen.addEventListener('click', openModal);
        modalBtnClose.addEventListener('click', closeModal);
        modalContainer.addEventListener('click', handleClickOutModal);
    }  
}