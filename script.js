// Modern JavaScript for Hogwarts Website
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initNavigation();
    initScrollAnimations();
    initFeatureCards();
    initHouseCards();
    initParallaxEffects();
    initParticleEffects();
});

// Navigation functionality
function initNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navbar = document.querySelector('.navbar');

    // Mobile menu toggle
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                navToggle.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            navbar.style.boxShadow = 'none';
        }
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
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .house-card, .section-header');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Feature cards functionality
function initFeatureCards() {
    const featureCards = document.querySelectorAll('.feature-card');
    
    featureCards.forEach(card => {
        card.addEventListener('click', function() {
            const href = this.getAttribute('data-href');
            if (href) {
                // Add click animation
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    window.location.href = href;
                }, 150);
            }
        });

        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// House cards functionality
function initHouseCards() {
    const houseCards = document.querySelectorAll('.house-card');
    
    houseCards.forEach(card => {
        card.addEventListener('click', function() {
            const house = this.getAttribute('data-house');
            showHouseModal(house);
        });

        // Hover effects
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.05)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// House modal functionality
function showHouseModal(house) {
    const houseNames = {
        gryffindor: 'Gryffindor',
        slytherin: 'Slytherin',
        ravenclaw: 'Ravenclaw',
        hufflepuff: 'Hufflepuff'
    };

    const houseInfo = {
        gryffindor: {
            founder: 'Godric Gryffindor',
            animal: 'Lion',
            colors: 'Scarlet & Gold',
            traits: ['Bravery', 'Courage', 'Chivalry', 'Nerve'],
            description: 'Gryffindor values bravery, courage, and determination. Students are known for their daring and nerve.'
        },
        slytherin: {
            founder: 'Salazar Slytherin',
            animal: 'Serpent',
            colors: 'Emerald & Silver',
            traits: ['Ambition', 'Cunning', 'Leadership', 'Resourcefulness'],
            description: 'Slytherin values ambition, cunning, and resourcefulness. Students are known for their determination and cleverness.'
        },
        ravenclaw: {
            founder: 'Rowena Ravenclaw',
            animal: 'Eagle',
            colors: 'Blue & Bronze',
            traits: ['Intelligence', 'Creativity', 'Learning', 'Wit'],
            description: 'Ravenclaw values intelligence, creativity, and learning. Students are known for their wisdom and wit.'
        },
        hufflepuff: {
            founder: 'Helga Hufflepuff',
            animal: 'Badger',
            colors: 'Yellow & Black',
            traits: ['Hard Work', 'Dedication', 'Patience', 'Loyalty'],
            description: 'Hufflepuff values hard work, dedication, and loyalty. Students are known for their patience and fairness.'
        }
    };

    const info = houseInfo[house];
    const name = houseNames[house];

    const modal = document.createElement('div');
    modal.className = 'house-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <button class="modal-close" onclick="this.closest('.house-modal').remove()">×</button>
                <div class="modal-header">
                    <h2>${name} House</h2>
                    <div class="house-emblem">${getHouseEmblem(house)}</div>
                </div>
                <div class="modal-body">
                    <p class="house-description">${info.description}</p>
                    <div class="house-details">
                        <div class="detail-item">
                            <strong>Founder:</strong> ${info.founder}
                        </div>
                        <div class="detail-item">
                            <strong>Animal:</strong> ${info.animal}
                        </div>
                        <div class="detail-item">
                            <strong>Colors:</strong> ${info.colors}
                        </div>
                    </div>
                    <div class="house-traits-modal">
                        <h3>House Traits</h3>
                        <div class="traits-grid">
                            ${info.traits.map(trait => `<span class="trait-tag">${trait}</span>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-primary" onclick="window.location.href='/houses.html'">
                        Learn More About Houses
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles
    const modalStyles = document.createElement('style');
    modalStyles.textContent = `
        .house-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 2000;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            backdrop-filter: blur(10px);
        }
        
        .modal-content {
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.95) 100%);
            border: 1px solid rgba(255, 215, 0, 0.3);
            border-radius: 20px;
            padding: 2rem;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            position: relative;
            animation: modalSlideIn 0.3s ease;
        }
        
        .modal-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            color: #94a3b8;
            font-size: 1.5rem;
            cursor: pointer;
            transition: color 0.3s ease;
        }
        
        .modal-close:hover {
            color: #ffd700;
        }
        
        .modal-header {
            text-align: center;
            margin-bottom: 1.5rem;
        }
        
        .modal-header h2 {
            color: #ffd700;
            margin-bottom: 0.5rem;
        }
        
        .house-emblem {
            font-size: 3rem;
        }
        
        .house-description {
            color: #94a3b8;
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }
        
        .house-details {
            margin-bottom: 1.5rem;
        }
        
        .detail-item {
            margin-bottom: 0.5rem;
            color: #f8fafc;
        }
        
        .house-traits-modal h3 {
            color: #ffd700;
            margin-bottom: 1rem;
        }
        
        .traits-grid {
            display: flex;
            gap: 0.5rem;
            flex-wrap: wrap;
        }
        
        .trait-tag {
            background: rgba(255, 215, 0, 0.2);
            color: #ffd700;
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.875rem;
        }
        
        .modal-footer {
            text-align: center;
            margin-top: 1.5rem;
        }
        
        @keyframes modalSlideIn {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(modalStyles);

    // Close modal when clicking overlay
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.remove();
        }
    });
}

// Get house emblem
function getHouseEmblem(house) {
    const emblems = {
        gryffindor: '🦁',
        slytherin: '🐍',
        ravenclaw: '🦅',
        hufflepuff: '🦡'
    };
    return emblems[house] || '🏰';
}

// Parallax effects
function initParallaxEffects() {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-icon');
        
        parallaxElements.forEach((element, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Particle effects for buttons
function initParticleEffects() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createParticles(e.clientX, e.clientY);
        });
    });
}

// Create particle effect
function createParticles(x, y) {
    const particleCount = 8;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: 4px;
            height: 4px;
            background: #ffd700;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            animation: particleAnimation 0.6s ease-out forwards;
        `;
        
        document.body.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
            particle.remove();
        }, 600);
    }

    // Add particle animation styles
    if (!document.querySelector('#particle-styles')) {
        const particleStyles = document.createElement('style');
        particleStyles.id = 'particle-styles';
        particleStyles.textContent = `
            @keyframes particleAnimation {
                0% {
                    opacity: 1;
                    transform: scale(1) translate(0, 0);
                }
                100% {
                    opacity: 0;
                    transform: scale(0) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px);
                }
            }
        `;
        document.head.appendChild(particleStyles);
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

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

    // Rotate spells every 4 seconds
    setInterval(rotateSpell, 4000);
}

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
    // Additional scroll-based effects can be added here
}, 16));

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    // Escape key closes modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.house-modal');
        modals.forEach(modal => modal.remove());
    }
    
    // Arrow keys for navigation
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const nextSection = getNextSection(currentSection);
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
    
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        const currentSection = getCurrentSection();
        const prevSection = getPrevSection(currentSection);
        if (prevSection) {
            prevSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Helper functions for keyboard navigation
function getCurrentSection() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    
    for (let section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            return section;
        }
    }
    return sections[0];
}

function getNextSection(currentSection) {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex + 1] || null;
}

function getPrevSection(currentSection) {
    const sections = Array.from(document.querySelectorAll('section'));
    const currentIndex = sections.indexOf(currentSection);
    return sections[currentIndex - 1] || null;
}

// Initialize spell rotation if element exists
if (document.getElementById('current-spell')) {
    initSpellRotation();
}

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger entrance animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('.hero-title, .hero-subtitle, .hero-cta');
        heroElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
        });
    }, 100);
}); 