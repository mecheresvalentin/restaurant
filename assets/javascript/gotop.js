var gotop = document.getElementById('gotopbtn');

window.addEventListener('scroll', function(event) {
    event.preventDefault();

    if (window.scrollY <= 0) { 
        gotop.classList.remove('fa');
        gotop.classList.remove('fa-arrow-up');
        gotop.classList.remove('gotopbtn');
    } else {
        gotop.classList.add('fa');
        gotop.classList.add('fa-arrow-up');
        gotop.classList.add('gotopbtn');
    }
});