export function scrollSuave() {
    // links internos dentro de menu
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    
    function scrollToSection(e) {
        e.preventDefault();

        // Retorna o href de cada link, nesse caso é o mesmo que os ID das sections
        const href = e.currentTarget.getAttribute('href');

        // Seleciona as sections com base no href de cada link
        const section = document.querySelector(href);

        // Leva o elemento(a section selecionada pelo link)
        // Até seu campo de visão 'vw', e aplica um scroll suave
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    // evento de click em cada link
    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });
}