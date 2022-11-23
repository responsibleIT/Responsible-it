const mobileWidth = window.matchMedia('(max-width:  72.999rem)')
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() }

function scrollFunction () {
  if (document.documentElement.dataset.reducemotion === 'false') {
    if (!mobileWidth.matches) {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementsByClassName('main-header')[0].style.padding = '0px 3.75rem 2px 3.75rem'
        document.getElementsByClassName('header-logo')[0].style.display = 'none'
        document.getElementsByClassName('header-container')[0].style.gridTemplateRows = '0 1fr'
      } else {
        document.getElementsByClassName('main-header')[0].style.padding = '24px 3.75rem 14px 3.75rem'
        document.getElementsByClassName('header-logo')[0].style.display = 'block'
        document.getElementsByClassName('header-container')[0].style.gridTemplateRows = 'auto'
      }
    }
  }
}
