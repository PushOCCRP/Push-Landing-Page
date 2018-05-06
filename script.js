window.addEventListener('resize', function(){
    if(window.innerWidth < 1250){
        window.onscroll = function() {sticky_nav()}
    }
});

nav = document.querySelector('#navigation');
navTop = nav.offsetTop;
sidenav = document.querySelector('.nav');
text = document.querySelector('#text');
homepageimg = document.querySelector('.homepageimg');

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

function myFunction(x) {
    if (x.matches) {
        text.style.marginLeft = "200px";
        homepageimg.style.marginLeft = "200px";
        sidenav.classList.add("sidenav");
        sidenav.classList.remove("nav");
    }
    else {
        text.style.marginLeft = "0";
        homepageimg.style.marginLeft = "0";
        sidenav.classList.remove("sidenav");
        sidenav.classList.add("nav");

    }
}

var x = window.matchMedia("(min-width: 800px)");
myFunction(x);
x.addListener(myFunction);
