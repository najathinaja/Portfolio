// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      
      // Close mobile menu if open
      const navLinks = document.getElementById("navLinks");
      const hamburger = document.getElementById("hamburger");
      if (navLinks && navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        hamburger.classList.remove("open");
      }
    }
  });
});

// Form submission handler
const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
  });
}



// Animate skill bars when About section comes into view
const aboutSection = document.getElementById('about');
const skillBars = document.querySelectorAll('.skill-bar');

const animateSkillBars = () => {
  skillBars.forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    const progressBar = bar.querySelector('.skill-progress-bar');
    progressBar.style.width = percent;
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkillBars();
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

if (aboutSection) {
  observer.observe(aboutSection);
}

// Add staggered animation for detail items
const detailItems = document.querySelectorAll('.detail-item');
detailItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.2}s`;
});

// Add staggered animation for skill bars
const skillBarItems = document.querySelectorAll('.skill-bar');
skillBarItems.forEach((item, index) => {
  item.style.animationDelay = `${index * 0.3 + 0.5}s`;
});

// Modify your smooth scroll code to look like this:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    if (this.getAttribute("href").startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        
        // Close mobile menu if open
        const navLinks = document.getElementById("navLinks");
        const hamburger = document.getElementById("hamburger");
        if (navLinks && navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          hamburger.classList.remove("open");
        }
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Make project cards clickable for live demo
    const projectards = document.querySelectorAll('.project-card');
    
    
        // Add hover effect class on mouseenter/mouseleave
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });

        // Handle card click (for live demo)
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on links inside the card
            if (!e.target.closest('a')) {
                const demoLink = this.querySelector('.live-demo');
                if (demoLink && demoLink.href !== '#') {
                    window.open(demoLink.href, '_blank');
                }
            }
        });
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animation on scroll for project cards
    const animateOnScroll = function() {
        const cards = document.querySelectorAll('.project-card');
        const windowHeight = window.innerHeight;
        const windowTop = window.scrollY;
        const windowBottom = windowTop + windowHeight;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top + windowTop;
            const cardBottom = cardTop + card.offsetHeight;

            // Check if card is in viewport
            if (cardBottom >= windowTop && cardTop <= windowBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animation
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    });

    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);

    // GitHub link analytics (optional)
    document.querySelectorAll('.project-link[href*="github"]').forEach(link => {
        link.addEventListener('click', function() {
            // Here you could add analytics tracking
            console.log('GitHub link clicked:', this.href);
        });
    });

    // Live demo tracking (optional)
    document.querySelectorAll('.live-demo').forEach(link => {
        if (link.href !== '#') {
            link.addEventListener('click', function(e) {
                e.stopPropagation(); // Prevent card click from also triggering
                // Here you could add analytics tracking
                console.log('Live demo opened:', this.href);
            });
        }
    });
;


// Skills Section Enhancement
document.addEventListener('DOMContentLoaded', function() {
    // 1. Animate skill bars when they enter viewport
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const animateSkillBars = () => {
        skillBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8) && (rect.bottom >= 0);
            
            if (isVisible && !bar.dataset.animated) {
                const targetWidth = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = targetWidth;
                    bar.dataset.animated = 'true';
                }, 100);
            }
        });
    };

    // 2. Add tooltips to skill bars
    const addTooltips = () => {
        skillBars.forEach(bar => {
            const percentage = bar.parentElement.previousElementSibling?.lastElementChild?.textContent || '';
            if (percentage) {
                bar.setAttribute('title', `${percentage} proficiency`);
            }
        });
    };

    // 3. Create skill filters
    const createFilters = () => {
        const filtersContainer = document.createElement('div');
        filtersContainer.className = 'skill-filters';
        
        const filterTypes = [
            { label: 'All Skills', filter: 'all' },
            { label: 'UI/UX', filter: 'design-tools' },
            { label: 'Frontend', filter: 'frontend' },
            { label: 'Backend', filter: 'backend' }
        ];
        
        filterTypes.forEach((type, index) => {
            const button = document.createElement('button');
            button.className = `filter-btn ${index === 0 ? 'active' : ''}`;
            button.textContent = type.label;
            button.dataset.filter = type.filter;
            
            button.addEventListener('click', function() {
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                
                document.querySelectorAll('.skill-category').forEach(category => {
                    category.style.display = type.filter === 'all' || category.classList.contains(type.filter) 
                        ? 'block' 
                        : 'none';
                });
            });
            
            filtersContainer.appendChild(button);
        });
        
        const skillsSection = document.querySelector('.skills-section');
        if (skillsSection) {
            skillsSection.parentNode.insertBefore(filtersContainer, skillsSection);
        }
    };

    // 4. Mobile accordion functionality
    const setupMobileAccordion = () => {
        if (window.innerWidth > 768) return;
        
        document.querySelectorAll('.skill-category').forEach(category => {
            const heading = category.querySelector('h2');
            if (!heading) return;
            
            heading.style.cursor = 'pointer';
            heading.addEventListener('click', () => {
                category.classList.toggle('expanded');
            });
        });
    };

    // Initialize all features
    animateSkillBars();
    
    addTooltips();
    createFilters();
    setupMobileAccordion();
    
  
});

// Hamburger menu functionality
    document.addEventListener('DOMContentLoaded', function() {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');
      
      if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
          navLinks.classList.toggle('active');
          hamburger.textContent = navLinks.classList.contains('active') ? '✕' : '☰';
        });
        
        // Close menu when a link is clicked (for mobile)
        document.querySelectorAll('#navLinks a').forEach(link => {
          link.addEventListener('click', function() {
            navLinks.classList.remove('active');
            hamburger.textContent = '☰';
          });
        });
      }
      
      // Smooth scrolling for navigation links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 70,
              behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navLinks && navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              hamburger.textContent = '☰';
            }
          }
        });
      });
    });