// Select all menu and deal images
const images = document.querySelectorAll('.mimage, .dealimg');

// Lightbox setup
images.forEach(img => {
  img.style.cursor = 'pointer'; // pointer on hover

  img.addEventListener('click', () => {
    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'imageOverlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100vw';
    overlay.style.height = '100vh';
    overlay.style.background = 'rgba(0,0,0,0.85)';
    overlay.style.display = 'flex';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.zIndex = '9999';
    overlay.style.cursor = 'pointer';
    overlay.style.transition = 'opacity 0.3s ease';

    // Fullscreen image
    const fullImg = document.createElement('img');
    fullImg.src = img.src;
    fullImg.style.maxWidth = '90%';
    fullImg.style.maxHeight = '90%';
    fullImg.style.borderRadius = '12px';
    fullImg.style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)';
    fullImg.style.transition = 'transform 0.3s ease';
    
    overlay.appendChild(fullImg);

    // Click overlay to close
    overlay.addEventListener('click', () => {
      document.body.removeChild(overlay);
    });

    document.body.appendChild(overlay);
  });

  // Hover effect
  img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.05)';
    img.style.transition = 'transform 0.3s ease';
  });
  img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
  });
});

// ======= Mobile Navigation (Hamburger Menu) ======= //

// Cache DOM elements
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navmenu");

// Function to toggle menu
function toggleMenu() {
  const isOpen = navMenu.classList.toggle("active");
  hamburger.classList.toggle("open");

  // Accessibility update
  hamburger.setAttribute("aria-expanded", isOpen);
}

// Function to close menu
function closeMenu() {
  navMenu.classList.remove("active");
  hamburger.classList.remove("open");
  hamburger.setAttribute("aria-expanded", "false");
}

// === Event Listeners === //

// Toggle menu on hamburger click
hamburger.addEventListener("click", toggleMenu);

// Keyboard support (Enter & Space)
hamburger.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    toggleMenu();
  }
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    closeMenu();
  }
});

// Close menu when pressing ESC key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// ======= End Mobile Navigation ======= //
