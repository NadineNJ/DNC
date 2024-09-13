//LES TÉMOIGNAGES
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});

//video
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("myVideo");
  const playButton = document.getElementById("playButton");

  // Automatically play the video and hide the play button
  video
    .play()
    .then(() => {
      playButton.style.display = "none"; // Hide the play button if the video starts playing
    })
    .catch((error) => {
      // Handle any errors that occur
      console.error("Error playing the video:", error);
    });

  // Hide the play button when the video starts playing
  video.addEventListener("play", function () {
    playButton.style.display = "none";
  });

  // Hide the play button on play button click (if needed)
  playButton.addEventListener("click", function () {
    playButton.style.display = "none";
    video.play();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuBar = document.querySelector(".menu-bar");

  hamburger.addEventListener("click", () => {
    menuBar.classList.toggle("active");
  });
});






// Function to animate the number from 0 to a specified target value
function animateNumber(element, targetNumber, duration) {
  let currentNumber = 0;
  const step = Math.ceil(targetNumber / (duration / 16)); // Assuming 60fps

  const timer = setInterval(() => {
    currentNumber += step;
    if (currentNumber >= targetNumber) {
      currentNumber = targetNumber;
      clearInterval(timer);
    }
    element.textContent = currentNumber.toLocaleString(); // Format number with commas if needed
  }, 16); // Update every frame (60fps)
}

// Select all number elements and animate them
const numberElements = document.querySelectorAll('.number .number_counter');

// Define target numbers and durations for each element
const targets = [1000, 500, 750, 250]; // Example target numbers for each element
const durations = [2000, 1500, 1800, 1200]; // Example durations for each element

// Loop through each number element and animate
numberElements.forEach((element, index) => {
  animateNumber(element, targets[index], durations[index]);
});



document.addEventListener('DOMContentLoaded', function () {
  const selectedLangElement = document.querySelector('.selected-lang');
  const langMenu = document.querySelector('.lang-menu ul');
  const langLinks = document.querySelectorAll('.lang-menu ul li a');
  const flagElement = selectedLangElement.querySelector('.flag');

  // Show/Hide menu on click
  selectedLangElement.addEventListener('click', function () {
    langMenu.classList.toggle('show');
  });

  langLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      // Remove default link behavior
      event.preventDefault();

      const selectedLang = this.dataset.lang;
      const selectedText = this.textContent;
      const href = this.getAttribute('href'); // Get the href attribute value

      // Update flag and text based on selected language
      if (selectedLang === 'fr') {
        flagElement.style.backgroundImage = 'url("https://flagsapi.com/FR/flat/64.png")';
      } else if (selectedLang === 'ar') {
        flagElement.style.backgroundImage = 'url("https://flagsapi.com/TN/flat/64.png")';
      }

      selectedLangElement.innerHTML = `<span class="flag"></span> ${selectedText}`;
      selectedLangElement.querySelector('.flag').style.backgroundImage = flagElement.style.backgroundImage;

      // Redirect to the selected language page
      window.location.href = href; // Navigate to the page specified in href

      // Hide the menu after selection
      langMenu.classList.remove('show');
    });
  });

  // Hide the menu if clicked outside
  document.addEventListener('click', function (event) {
    if (!event.target.closest('.lang-menu')) {
      langMenu.classList.remove('show');
    }
  });

  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navbar = document.querySelectorAll('.navbar');

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      navbar.forEach(function (nav) {
        nav.classList.toggle('active');
      });
    });
  }
});









