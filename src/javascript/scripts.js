document.addEventListener("DOMContentLoaded", function() {
    const mobileButton = document.getElementById("mobile-botao");
    const mobileNavbar = document.getElementById("mobile-navbar");
    const mobileButtonIcon = mobileButton.querySelector("i");
  
    mobileButton.addEventListener("click", function() {
        mobileNavbar.classList.toggle("active");
        mobileButtonIcon.classList.toggle("fa-x");
    });
  
    const sections = document.querySelectorAll("section");
    const navItems = document.querySelectorAll(".nav-item");
  
    window.addEventListener("scroll", function() {
        const header = document.querySelector("header");
        const scrollPosition = window.scrollY - header.offsetHeight;
  
        let activeSectionIndex = 0;
  
        if (scrollPosition <= 0) {
            header.style.boxShadow = "none";
        } else {
            header.style.boxShadow = "5px 1px 5px rgba(0, 0, 0, 0.1)";
        }
  
        sections.forEach(function(section, i) {
            const sectionTop = section.offsetTop - 96;
            const sectionBottom = sectionTop + section.offsetHeight;
    
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return;
            }
        });
  
        navItems.forEach(function(navItem) {
            navItem.classList.remove("active");
        });

        navItems[activeSectionIndex].classList.add("active");
    });

    ScrollReveal().reveal('#problema', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.obj', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.tec', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#imagem-publico', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.cliente', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.ben', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%'
    });

});