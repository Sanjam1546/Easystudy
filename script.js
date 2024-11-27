// Optional: Add smooth scroll for "View More" links (important questions)
document.querySelectorAll('.important-questions a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  