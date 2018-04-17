window.onscroll = function() {sticky_nav()}

nav = document.querySelector('#navigation');
navTop = nav.offsetTop;

function sticky_nav() {
  if (window.pageYOffset >= navTop) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    nav.classList.add("sticky");
  }
  else {
    document.body.style.paddingTop = 0;
    nav.classList.remove("sticky");
  }
}
