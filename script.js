// Initialize all functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initStars();
    initSpellRotation();
    initMobileMenu();
    initFeatureCards();
    initScrollAnimations();
    initNavigation();
    initLoadingAnimations();
});

// Create animated stars background
function initStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;

    const numberOfStars = 50;
    
    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${(i * 7) % 100}%`;
        star.style.top = `${(i * 11) % 100}%`;
        star.style.animationDelay = `${i * 0.1}s`;
        star.style.animationDuration = `${3 + (i % 3)}s`;
        starsContainer.appendChild(star);
    }
}

// Rotate through spells
function initSpellRotation() {
    const spellElement = document.getElementById('current-spell');
    if (!spellElement) return;

    const spells = [
        "Lumos Maxima",
        "Expecto Patronum", 
        "Wingardium Leviosa",
        "Alohomora",
        "Expelliarmus"
    ];

    let currentSpellIndex = 0;

    function rotateSpell() {
        spellElement.style.opacity = '0';
        spellElement.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            currentSpellIndex = (currentSpellIndex + 1) % spells.length;
            spellElement.textContent = spells[currentSpellIndex];
            spellElement.style.opacity = '1';
            spellElement.style.transform = 'translateY(0)';
        }, 300);
    }

    // Rotate spells every 3 seconds
    setInterval(rotateSpell, 3000);
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');

    if (!mobileMenuBtn || !mobileNav) return;

    mobileMenuBtn.addEventListener('click', function() {
        const isOpen = mobileNav.classList.contains('hidden');
        
        if (isOpen) {
            // Open menu
            mobileNav.classList.remove('hidden');
            mobileNav.style.height = 'auto';
            mobileNav.style.opacity = '1';
            
            // Change icon to X
            const menuIcon = mobileMenuBtn.querySelector('.icon-menu');
            if (menuIcon) {
                menuIcon.innerHTML = '';
                menuIcon.style.position = 'relative';
                menuIcon.innerHTML = `
                    <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 2px; background: currentColor; transform: translateY(-50%) rotate(45deg);"></div>
                    <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 2px; background: currentColor; transform: translateY(-50%) rotate(-45deg);"></div>
                `;
            }
        } else {
            // Close menu
            mobileNav.style.height = '0';
            mobileNav.style.opacity = '0';
            
            setTimeout(() => {
                mobileNav.classList.add('hidden');
            }, 300);
            
            // Change icon back to menu
            const menuIcon = mobileMenuBtn.querySelector('.icon-menu');
            if (menuIcon) {
                menuIcon.innerHTML = '';
                menuIcon.style.position = 'relative';
                menuIcon.innerHTML = `
                    <div style="position: absolute; top: 4px; left: 0; width: 100%; height: 2px; background: currentColor; border-radius: 1px;"></div>
                    <div style="position: absolute; top: 50%; left: 0; width: 100%; height: 2px; background: currentColor; border-radius: 1px; transform: translateY(-50%);"></div>
                    <div style="position: absolute; bottom: 4px; left: 0; width: 100%; height: 2px; background: currentColor; border-radius: 1px;"></div>
                `;
            }
        }
    });
}

// Feature cards click functionality
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const href = this.getAttribute('data-href');
            if (href) {
                window.location.href = href;
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '-50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);

    // Observe elements with loading class
    document.querySelectorAll('.loading').forEach(el => {
        observer.observe(el);
    });
}

// Navigation active state
function initNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath || (currentPath === '/' && href === '/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Loading animations
function initLoadingAnimations() {
    // Add loading class to elements that should animate in
    const elementsToAnimate = document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-up');
    
    elementsToAnimate.forEach((el, index) => {
        el.classList.add('loading');
        el.style.animationDelay = `${index * 0.1}s`;
        
        // Trigger animation after a short delay
        setTimeout(() => {
            el.classList.add('loaded');
        }, 100 + (index * 50));
    });
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Parallax effect for background elements
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.parallax');
    
    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-speed') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Typing effect for spell names
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Magical particle effects
function createParticles(x, y) {
    const particleCount = 10;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #fbbf24;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
        `;
        
        document.body.appendChild(particle);
        
        const angle = (i / particleCount) * Math.PI * 2;
        const velocity = 2 + Math.random() * 2;
        const vx = Math.cos(angle) * velocity;
        const vy = Math.sin(angle) * velocity;
        
        let opacity = 1;
        let scale = 1;
        
        function animateParticle() {
            if (opacity <= 0) {
                particle.remove();
                return;
            }
            
            opacity -= 0.02;
            scale -= 0.01;
            
            particle.style.opacity = opacity;
            particle.style.transform = `scale(${scale})`;
            particle.style.left = parseFloat(particle.style.left) + vx + 'px';
            particle.style.top = parseFloat(particle.style.top) + vy + 'px';
            
            requestAnimationFrame(animateParticle);
        }
        
        animateParticle();
    }
}

// Add click effects to buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('btn-primary') || e.target.classList.contains('btn-secondary')) {
        createParticles(e.clientX, e.clientY);
    }
});

// Hover effects for feature cards
document.addEventListener('DOMContentLoaded', function() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Dynamic background color change based on scroll
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrolled / maxScroll;
    
    // Change background gradient based on scroll position
    const hue = 240 + (scrollProgress * 60); // From blue to purple
    document.body.style.background = `linear-gradient(135deg, 
        hsl(${hue}, 70%, 10%) 0%, 
        hsl(${hue + 20}, 70%, 15%) 25%, 
        hsl(${hue + 40}, 70%, 20%) 50%, 
        hsl(${hue + 60}, 70%, 25%) 75%, 
        hsl(${hue + 80}, 70%, 30%) 100%)`;
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape') {
        const mobileNav = document.getElementById('mobile-nav');
        if (mobileNav && !mobileNav.classList.contains('hidden')) {
            document.getElementById('mobile-menu-btn').click();
        }
    }
    
    // Arrow keys for spell navigation
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        const spellElement = document.getElementById('current-spell');
        if (spellElement) {
            // Trigger spell rotation
            spellElement.click();
        }
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations
    const scrolled = window.pageYOffset;
    const elements = document.querySelectorAll('.scroll-animate');
    
    elements.forEach(element => {
        const elementTop = element.offsetTop;
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        
        if (scrolled > elementTop - windowHeight + elementHeight * 0.5) {
            element.classList.add('animate-in');
        }
    });
}, 16)); // ~60fps

// Add CSS for new animations
const style = document.createElement('style');
style.textContent = `
    .particle {
        transition: all 0.3s ease-out;
    }
    
    .scroll-animate {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s ease-out;
    }
    
    .scroll-animate.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    .feature-card {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-link, .mobile-nav-link {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .btn-primary, .btn-secondary {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    #current-spell {
        transition: all 0.3s ease-in-out;
    }
    
    .star {
        animation: twinkle 3s infinite;
    }
    
    @keyframes twinkle {
        0%, 100% {
            opacity: 0.3;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// Initialize everything when the page loads
window.addEventListener('load', function() {
    // Add loaded class to body for final animations
    document.body.classList.add('loaded');
    
    // Trigger any remaining animations
    setTimeout(() => {
        document.querySelectorAll('.loading').forEach(el => {
            el.classList.add('loaded');
        });
    }, 500);
});

// Add touch support for mobile devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger spell rotation
            const spellElement = document.getElementById('current-spell');
            if (spellElement) {
                spellElement.click();
            }
        } else {
            // Swipe down - could close mobile menu
            const mobileNav = document.getElementById('mobile-nav');
            if (mobileNav && !mobileNav.classList.contains('hidden')) {
                document.getElementById('mobile-menu-btn').click();
            }
        }
    }
} 