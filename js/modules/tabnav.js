export function initTabNav() {
    const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
    const tabContent = document.querySelectorAll('[data-tab="content"] section');
    
    // Verifica se tabMenu e tabContent é true(se existe),se sim rode o código
    if(tabMenu.length && tabContent.length) {
        //Add class active ao primeiro item do 'array'
        tabContent[0].classList.add('active'); 
    
        function activeTab(index) {
            // remove a class active de todas as sections
            tabContent.forEach(section => {
                section.classList.remove('active');
            })
        
            // adiciona a class active a section que corresponder ao index
            // adiciona o value de data-anime como class da section 
            const direction = tabContent[index].dataset.anime;
            tabContent[index].classList.add('active', direction);
        }
        
        // passa o index do item que foi clicaco(imagens) como parametro da function activeTab
        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        })
    }
}
