// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
    initializeHouseCards();
    initializeSpellCards();
    initializeParallax();
});

// Initialize all animations
function initializeAnimations() {
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all cards and sections
    document.querySelectorAll('.house-card, .spell-card, .creature-card, .section-title, .section-subtitle').forEach(el => {
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .house-card, .spell-card, .creature-card, .section-title, .section-subtitle {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .house-card:nth-child(1) { transition-delay: 0.1s; }
        .house-card:nth-child(2) { transition-delay: 0.2s; }
        .house-card:nth-child(3) { transition-delay: 0.3s; }
        .house-card:nth-child(4) { transition-delay: 0.4s; }
        
        .spell-card:nth-child(1) { transition-delay: 0.1s; }
        .spell-card:nth-child(2) { transition-delay: 0.2s; }
        .spell-card:nth-child(3) { transition-delay: 0.3s; }
        .spell-card:nth-child(4) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
}

// Initialize navigation
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.house-card, .spell-card, .creature-card');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
}

// Initialize house cards interactions
function initializeHouseCards() {
    const houseCards = document.querySelectorAll('.house-card');
    
    houseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Add house-specific effects
            const house = card.dataset.house;
            addHouseEffect(card, house);
        });
        
        card.addEventListener('mouseleave', () => {
            removeHouseEffect(card);
        });
        
        card.addEventListener('click', () => {
            showHouseModal(card.dataset.house);
        });
    });
}

// Add house-specific visual effects
function addHouseEffect(card, house) {
    const colors = {
        gryffindor: { primary: '#740001', secondary: '#D3A625' },
        slytherin: { primary: '#1a472a', secondary: '#5d5d5d' },
        ravenclaw: { primary: '#0e1a40', secondary: '#946b2d' },
        hufflepuff: { primary: '#ecb939', secondary: '#372e29' }
    };
    
    const houseColors = colors[house];
    if (houseColors) {
        card.style.borderColor = houseColors.primary;
        card.style.boxShadow = `0 20px 40px ${houseColors.primary}40`;
        
        // Add floating particles
        createFloatingParticles(card, houseColors.primary);
    }
}

// Remove house effects
function removeHouseEffect(card) {
    card.style.borderColor = '';
    card.style.boxShadow = '';
    
    // Remove particles
    const particles = card.querySelectorAll('.house-particle');
    particles.forEach(particle => particle.remove());
}

// Create floating particles for house cards
function createFloatingParticles(card, color) {
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'house-particle';
        particle.style.cssText = `
            position: absolute;
            width: 4px;
            height: 4px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            animation: houseParticleFloat 3s ease-in-out infinite;
            animation-delay: ${i * 0.2}s;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        card.appendChild(particle);
    }
}

// Initialize spell cards
function initializeSpellCards() {
    const spellCards = document.querySelectorAll('.spell-card');
    
    spellCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createSpellEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removeSpellEffect(card);
        });
        
        card.addEventListener('click', () => {
            castSpell(card);
        });
    });
}

// Create spell casting effect
function createSpellEffect(card) {
    const spellName = card.querySelector('h3').textContent;
    const effects = {
        'Lumos': { color: '#FFD700', icon: '✨' },
        'Wingardium Leviosa': { color: '#87CEEB', icon: '🪶' },
        'Protego': { color: '#98FB98', icon: '🛡️' },
        'Incendio': { color: '#FF6347', icon: '🔥' }
    };
    
    const effect = effects[spellName];
    if (effect) {
        card.style.borderColor = effect.color;
        card.style.boxShadow = `0 15px 30px ${effect.color}40`;
        
        // Add sparkle effect
        createSparkleEffect(card, effect.color);
    }
}

// Remove spell effect
function removeSpellEffect(card) {
    card.style.borderColor = '';
    card.style.boxShadow = '';
    
    const sparkles = card.querySelectorAll('.spell-sparkle');
    sparkles.forEach(sparkle => sparkle.remove());
}

// Create sparkle effect for spells
function createSparkleEffect(card, color) {
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'spell-sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 6px;
            height: 6px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            animation: spellSparkle 2s ease-in-out infinite;
            animation-delay: ${i * 0.1}s;
        `;
        
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        
        card.appendChild(sparkle);
    }
}

// Cast spell animation
function castSpell(card) {
    const spellName = card.querySelector('h3').textContent;
    
    // Create spell cast effect
    const castEffect = document.createElement('div');
    castEffect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 3rem;
        color: #FFD700;
        pointer-events: none;
        z-index: 10000;
        animation: spellCast 1s ease-out forwards;
    `;
    
    const effects = {
        'Lumos': '✨',
        'Wingardium Leviosa': '🪶',
        'Protego': '🛡️',
        'Incendio': '🔥'
    };
    
    castEffect.textContent = effects[spellName] || '✨';
    document.body.appendChild(castEffect);
    
    // Show spell name
    const spellText = document.createElement('div');
    spellText.style.cssText = `
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #FFD700;
        font-family: 'Cinzel', serif;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 10000;
        animation: spellText 1s ease-out forwards;
    `;
    spellText.textContent = spellName;
    document.body.appendChild(spellText);
    
    // Remove effects after animation
    setTimeout(() => {
        castEffect.remove();
        spellText.remove();
    }, 1000);
}

// Initialize parallax effects
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for floating elements
        const floatingElements = document.querySelectorAll('.floating-book, .floating-wand, .floating-potion');
        floatingElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
        
        // Parallax for particles
        const particles = document.querySelectorAll('.particle');
        particles.forEach((particle, index) => {
            const speed = 0.2 + (index * 0.05);
            particle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.querySelector(`#${sectionId}`);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Show house modal (placeholder for future enhancement)
function showHouseModal(house) {
    const houseNames = {
        gryffindor: 'Gryffindor',
        slytherin: 'Slytherin',
        ravenclaw: 'Ravenclaw',
        hufflepuff: 'Hufflepuff'
    };
    
    console.log(`Welcome to ${houseNames[house]}!`);
    // Future: Implement modal with house details
}

// Add CSS animations
const additionalStyles = `
    @keyframes houseParticleFloat {
        0%, 100% { 
            opacity: 0; 
            transform: translateY(0px) scale(0); 
        }
        50% { 
            opacity: 1; 
            transform: translateY(-20px) scale(1); 
        }
    }
    
    @keyframes spellSparkle {
        0%, 100% { 
            opacity: 0; 
            transform: scale(0) rotate(0deg); 
        }
        50% { 
            opacity: 1; 
            transform: scale(1) rotate(180deg); 
        }
    }
    
    @keyframes spellCast {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0); 
        }
        50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.5); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(2); 
        }
    }
    
    @keyframes spellText {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.5); 
        }
        50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.1); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(1); 
        }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        background: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(20px);
        border-top: 1px solid var(--border-color);
        padding: 1rem 0;
    }
    
    .hamburger.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .hamburger.active span:nth-child(2) {
        opacity: 0;
    }
    
    .hamburger.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add CSS for loading animation
    const loadingStyle = document.createElement('style');
    loadingStyle.textContent = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
        
        body.loaded {
            opacity: 1;
        }
    `;
    document.head.appendChild(loadingStyle);
});

// Add cursor trail effect
let mouseX = 0;
let mouseY = 0;
let trail = [];

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    // Create trail effect
    if (Math.random() > 0.9) {
        createTrailParticle(mouseX, mouseY);
    }
});

function createTrailParticle(x, y) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 2px;
        height: 2px;
        background: var(--accent-blue);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        animation: trailFade 1s ease-out forwards;
    `;
    
    document.body.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 1000);
}

// Add trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% { 
            opacity: 1; 
            transform: scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: scale(0); 
        }
    }
`;
document.head.appendChild(trailStyle);

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
window.addEventListener('scroll', throttle(() => {
    // Scroll effects are handled in initializeScrollEffects
}, 16)); // ~60fps 