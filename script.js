// --- Mobile Menu Toggle Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      // Toggle between 'none' and 'flex' for visibility
      mobileMenu.style.display =
        mobileMenu.style.display === "flex" ? "none" : "flex";
    });
    
    // Optional: Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.style.display = 'none';
        });
    });
  }
  
  // --- Lightbox Logic (Only applies to pages with .gallery) ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryImages = document.querySelectorAll(".gallery img");

  if (lightbox && lightboxImg && galleryImages.length > 0) {
    galleryImages.forEach(image => {
      image.addEventListener("click", () => {
        lightboxImg.src = image.src;
        // Use alt text for accessibility in lightbox, fallback to a generic description
        lightboxImg.alt = image.alt || "Enlarged gallery image"; 
        lightbox.classList.add("active");
      });
    });

    // Close lightbox on click anywhere outside the image (i.e., on the lightbox div)
    lightbox.addEventListener("click", () => {
      lightbox.classList.remove("active");
      // Delay clearing the source to allow CSS transition/fade-out if present
      setTimeout(() => {
        lightboxImg.src = ""; 
        lightboxImg.alt = "";
      }, 300); 
    });
  }
});


// Intersection Observer for fade-in effect (applies only if .section exists)
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

sections.forEach(sec => observer.observe(sec));
