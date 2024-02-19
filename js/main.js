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

window.addEventListener('resize', function() {
  shortenName();
});

function shortenName() {
  var nameElement = document.getElementById('doctorsName');
  var windowWidth = window.innerWidth;
  var fullName = nameElement.textContent;

  if (windowWidth < 780) {
    var shortenedName = fullName.replace(/MUDr\.\s(\w+)\s(\w+)/, 'MUDr. $2');
    nameElement.textContent = shortenedName;
  } else {
    nameElement.textContent = 'MUDr. Jana Matějková';
  }
}

// Zkrácení textu po načtení stránky
window.addEventListener('load', function() {
  shortenName();
});