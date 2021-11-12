export function accordion() {
    const accordionList = document.querySelectorAll('[data-faq] dt');

    // Já inicia com a class ativo selecionado do dt e no proximo elemento(dd)
    accordionList[0].classList.add('ativo');
    accordionList[0].nextElementSibling.classList.add('ativo');

    function activeAccordion(e) {
        e.currentTarget.classList.toggle('ativo');
        e.currentTarget.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach(itemDt => {
        itemDt.addEventListener('click', activeAccordion);
    })
}