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

function showShortName() {
  var doctorNameElement = document.getElementById('doctorsName');
  var fullName = doctorNameElement.textContent;
  var lastName = fullName.substring(fullName.lastIndexOf(" ") + 1); // Získá pouze poslední slovo jako příjmení
  doctorNameElement.textContent = 'MUDr. ' + lastName;
}

function adjustNameDisplay() {
  var windowWidth = window.innerWidth;
  var doctorNameElement = document.getElementById('doctorsName');

  if (windowWidth <= 780) {
    showShortName();
  } else {
    doctorNameElement.textContent = 'MUDr. Jana Matějková';
  }
}

window.addEventListener('resize', function() {
  adjustNameDisplay();
});


window.addEventListener('load', function() {
  adjustNameDisplay();
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
