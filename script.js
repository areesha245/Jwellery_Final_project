// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Create timeline for smoother sequence animations
  const tl = gsap.timeline({
      defaults: {
          ease: 'power3.out'
      }
  });

  // Initial setting for elements
  gsap.set(['.hero-title', '.hero-subtitle', '.btn-shop'], {
      opacity: 0,
      y: 30
  });

  // Navbar animation
  tl.from('.navbar', {
      duration: 1,
      y: -100,
      opacity: 0
  });

  // Hero content animations
  tl.to('.hero-title', {
      duration: 1.2,
      opacity: 1,
      y: 0,
      delay: 0.3
  })
  .to('.hero-subtitle', {
      duration: 1.2,
      opacity: 1,
      y: 0
  }, '-=0.8')
  .to('.btn-shop', {
      duration: 1,
      opacity: 1,
      y: 0
  }, '-=0.8');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.style.background = 'rgba(0, 0, 0, 0.9)';
          navbar.style.padding = '15px 0';
      } else {
          navbar.style.background = 'transparent';
          navbar.style.padding = '25px 0';
      }
  });

  // Optional: Add hover animation for nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
          gsap.to(link, {
              duration: 0.3,
              y: -2,
              ease: 'power2.out'
          });
      });
      
      link.addEventListener('mouseleave', () => {
          gsap.to(link, {
              duration: 0.3,
              y: 0,
              ease: 'power2.out'
          });
      });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  // Typing animation for the heading
  const heading = document.querySelector('.collections h2');
  const text = heading.textContent;
  heading.textContent = '';
  
  // Create cursor element
  const cursor = document.createElement('span');
  cursor.classList.add('typing-cursor');
  heading.after(cursor);

  // Function to type text
  const typeText = async () => {
      for (let i = 0; i < text.length; i++) {
          heading.textContent += text[i];
          await new Promise(resolve => setTimeout(resolve, 100));
      }
      heading.classList.add('visible');
      animateParagraph();
  };

  // Intersection Observer for scroll-based animation
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              typeText();
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  // Observe the collections section
  observer.observe(document.querySelector('.collections'));

  // Animate paragraph using GSAP
  const animateParagraph = () => {
      gsap.to('.collections p', {
          duration: 1,
          opacity: 1,
          y: 0,
          ease: 'power3.out',
          delay: 0.3
      });
  };
});
// Add hover effect on item
function hoverEffect(item) {
  item.style.transform = "scale(1.1)";
  item.style.boxShadow = "0 10px 30px rgba(0, 0, 0, 0.3)";
}

// Remove hover effect on item
function removeEffect(item) {
  item.style.transform = "scale(1)";
  item.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
}

// Text animation for titles
document.querySelectorAll(".title").forEach((title, index) => {
  const text = title.textContent;
  title.innerHTML = "";
  [...text].forEach((char, i) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = "0";
      span.style.display = "inline-block";
      span.style.transform = "translateY(20px)";
      span.style.transition = `opacity 0.3s ease ${i * 0.1}s, transform 0.3s ease ${i * 0.1}s`;
      title.appendChild(span);
  });
  setTimeout(() => {
      title.querySelectorAll("span").forEach(span => {
          span.style.opacity = "1";
          span.style.transform = "translateY(0)";
      });
  }, 100 * index); // Delay for each title
});
