// Hamburger menu navbar
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

// scroll to a section in nav menu

function scrollToSection(selector) {
  var element = document.querySelector(selector);
  if (element) {
      var offset = element.offsetTop - document.querySelector('.headerBottom').offsetHeight; // Adjust for fixed header
      window.scrollTo({
          top: offset,
          behavior: 'smooth'
      });
  }
}



// Show/hide adviceAndTips function
document.addEventListener('DOMContentLoaded', function () {
    var toggleElements = document.querySelectorAll('.adviceToggle');
    toggleElements.forEach(function (toggleElement) {
      toggleElement.addEventListener('click', function () {
        toggleContent(toggleElement);
      });
    });
  });

  function toggleContent(clickedElement) {
    var contentElement = clickedElement.parentElement.nextElementSibling; // Předpokládá se, že obsah následuje hned po nadpisu

    if (contentElement.style.display === 'none' || getComputedStyle(contentElement).display === 'none') {
      contentElement.style.display = 'block';
    } else {
      contentElement.style.display = 'none';
    }
  }


  
//   image slider on mainpage

$(document).ready(function() {
    const slideWidth = $('.slider img').outerWidth(true);
    const visibleImages = 2.5;

    $('.slider').on('click', function() {
        const currentIndex = Math.floor(-parseFloat($('.slider').css('transform').split(',')[4]) / slideWidth);
        const maxIndex = $('.slider img').length - Math.floor(visibleImages);

        if (currentIndex < maxIndex) {
            const newPosition = -((currentIndex + 1) * slideWidth);
            $('.slider').animate({ 'left': newPosition }, 500);
        } else {
            // Move to the first set of images
            $('.slider').animate({ 'left': 0 }, 500);
        }
    });
});

// shorten name on the mainpage

function hideFirstName() {
  var doctorNameElement = document.getElementById('doctorsName');
  var windowWidth = window.innerWidth;

  if (windowWidth <= 780) {
    var fullName = doctorNameElement.textContent;
    var lastName = fullName.split(' ').pop(); // Získá poslední slovo jako příjmení
    doctorNameElement.textContent = 'MUDr. ' + lastName;
  } else {
    doctorNameElement.textContent = 'MUDr. Jana Matějková'; // Zobrazí celé jméno na PC
  }
}

window.addEventListener('resize', function() {
  hideFirstName();
});

// Zobrazení celého jména po načtení stránky
window.addEventListener('load', function() {
  var doctorNameElement = document.getElementById('doctorsName');
  doctorNameElement.textContent = 'MUDr. Jana Matějková'; // Zobrazí celé jméno po načtení stránky
  hideFirstName();
});
// displayNone div in a header

window.addEventListener('resize', function() {
  hideElement();
});

function hideElement() {
  var windowWidth = window.innerWidth;
  var spaceBetweenElement = document.querySelector('.spaceBetween');
  
  if (windowWidth <= 780) {
    spaceBetweenElement.style.display = 'none';
  } else {
    spaceBetweenElement.style.display = 'block';
  }
}

window.addEventListener('load', function() {
  hideElement();
});
