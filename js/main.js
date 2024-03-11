// Hamburger menu navbar
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle('open');
    icon.classList.toggle('open');

}

// logoClickToMainPage

document.addEventListener("DOMContentLoaded", function() {
  
  var logoElement = document.querySelector('.logo');
  
  
  logoElement.addEventListener('click', function() {
    
    window.location.href = 'index.html';
  });
});

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

// insuranceLogo Slider

document.addEventListener("DOMContentLoaded", function() {
  const sliderContainers = document.querySelectorAll(".sliderContainer");
  let isDragging = false;
  let startX, scrollLeft;

  const end = () => {
      isDragging = false;
      sliderContainers.forEach(container => container.classList.remove('active'));
  }

  const start = (e) => {
      isDragging = true;
      const targetContainer = e.target.closest('.sliderContainer');
      if (!targetContainer) return;
      targetContainer.classList.add('active');
      startX = e.clientX || e.touches[0].clientX - targetContainer.getBoundingClientRect().left;
      scrollLeft = targetContainer.scrollLeft;
  }

  const move = (e) => {
      if(!isDragging) return;

      e.preventDefault();
      const x = e.clientX || e.touches[0].clientX;
      const dist = (x - startX);
      const activeContainer = document.querySelector('.sliderContainer.active');
      if (activeContainer) {
          activeContainer.scrollLeft = scrollLeft - dist;
      }
  }

  document.addEventListener('mousedown', start);
  document.addEventListener('touchstart', start);

  document.addEventListener('mousemove', move);
  document.addEventListener('touchmove', move);

  document.addEventListener('mouseleave', end);
  document.addEventListener('mouseup', end);
  document.addEventListener('touchend', end);
});




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



// backToTopButton

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("backToTopBtn").style.display = "block";
  } else {
    document.getElementById("backToTopBtn").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; /* Pro starší prohlížeče */
  document.documentElement.scrollTop = 0; /* Pro moderní prohlížeče */
}