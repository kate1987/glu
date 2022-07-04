window.bootstrap = require('bootstrap');

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl, {
    'customClass': 'custom-tooltip'
  })
})

let accordionBtns = document.querySelectorAll('.transaction-builder-list__item-wrap');

if (accordionBtns) {
  accordionBtns.forEach(function(accordionBtn) {
    accordionBtn.addEventListener('click', function (event) {
      event.preventDefault();
      let parentItem = event.target.closest('.transaction-builder-list__item');
      parentItem.classList.toggle('collapsed');
      let childrenItem = parentItem.querySelector('ul.collapse');
      let collapsableCard = new bootstrap.Collapse(childrenItem, { toggle: false });
      collapsableCard.toggle();
    });
  });
}
