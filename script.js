// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
    initializeInteractiveElements();
    initializeSpellCasting();
    initializeQuizzes();
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
    document.querySelectorAll('.quick-card, .featured-card, .house-card, .spell-card, .creature-card, .character-card, .potion-card, .position-card, .team-card, .equipment-item, .section-title, .section-subtitle').forEach(el => {
        observer.observe(el);
    });

    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
        .quick-card, .featured-card, .house-card, .spell-card, .creature-card, .character-card, .potion-card, .position-card, .team-card, .equipment-item, .section-title, .section-subtitle {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        .quick-card:nth-child(1) { transition-delay: 0.1s; }
        .quick-card:nth-child(2) { transition-delay: 0.2s; }
        .quick-card:nth-child(3) { transition-delay: 0.3s; }
        .quick-card:nth-child(4) { transition-delay: 0.4s; }
        .quick-card:nth-child(5) { transition-delay: 0.5s; }
        .quick-card:nth-child(6) { transition-delay: 0.6s; }
        
        .house-card:nth-child(1) { transition-delay: 0.1s; }
        .house-card:nth-child(2) { transition-delay: 0.2s; }
        .house-card:nth-child(3) { transition-delay: 0.3s; }
        .house-card:nth-child(4) { transition-delay: 0.4s; }
        
        .spell-card:nth-child(1) { transition-delay: 0.1s; }
        .spell-card:nth-child(2) { transition-delay: 0.2s; }
        .spell-card:nth-child(3) { transition-delay: 0.3s; }
        .spell-card:nth-child(4) { transition-delay: 0.4s; }
        .spell-card:nth-child(5) { transition-delay: 0.5s; }
        .spell-card:nth-child(6) { transition-delay: 0.6s; }
    `;
    document.head.appendChild(style);
}

// Initialize navigation
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
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
        
        if (hero && heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.quick-card, .featured-card, .house-card, .spell-card, .creature-card, .character-card, .potion-card, .position-card, .team-card, .equipment-item');
    
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

// Initialize interactive elements
function initializeInteractiveElements() {
    // House cards interactions
    const houseCards = document.querySelectorAll('.house-card');
    houseCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            addHouseEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removeHouseEffect(card);
        });
        
        card.addEventListener('click', () => {
            showHouseModal(card.dataset.house);
        });
    });

    // Spell cards interactions
    const spellCards = document.querySelectorAll('.spell-card');
    spellCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createSpellEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removeSpellEffect(card);
        });
    });

    // Creature cards interactions
    const creatureCards = document.querySelectorAll('.creature-card');
    creatureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createCreatureEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removeCreatureEffect(card);
        });
    });

    // Character cards interactions
    const characterCards = document.querySelectorAll('.character-card');
    characterCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createCharacterEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removeCharacterEffect(card);
        });
    });

    // Potion cards interactions
    const potionCards = document.querySelectorAll('.potion-card');
    potionCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            createPotionEffect(card);
        });
        
        card.addEventListener('mouseleave', () => {
            removePotionEffect(card);
        });
    });
}

// Add house-specific visual effects
function addHouseEffect(card) {
    const house = card.dataset.house;
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
        createFloatingParticles(card, houseColors.primary);
    }
}

// Remove house effects
function removeHouseEffect(card) {
    card.style.borderColor = '';
    card.style.boxShadow = '';
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

// Create spell casting effect
function createSpellEffect(card) {
    const spellName = card.querySelector('h3').textContent;
    const effects = {
        'Lumos': { color: '#FFD700', icon: '✨' },
        'Wingardium Leviosa': { color: '#87CEEB', icon: '🪶' },
        'Expecto Patronum': { color: '#98FB98', icon: '🦌' },
        'Alohomora': { color: '#FF6347', icon: '🔓' },
        'Protego': { color: '#98FB98', icon: '🛡️' },
        'Incendio': { color: '#FF6347', icon: '🔥' }
    };
    
    const effect = effects[spellName];
    if (effect) {
        card.style.borderColor = effect.color;
        card.style.boxShadow = `0 15px 30px ${effect.color}40`;
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

// Create creature effect
function createCreatureEffect(card) {
    card.style.borderColor = '#30D158';
    card.style.boxShadow = '0 15px 30px rgba(48, 209, 88, 0.2)';
}

// Remove creature effect
function removeCreatureEffect(card) {
    card.style.borderColor = '';
    card.style.boxShadow = '';
}

// Create character effect
function createCharacterEffect(card) {
    card.style.borderColor = '#FF2D92';
    card.style.boxShadow = '0 15px 30px rgba(255, 45, 146, 0.2)';
}

// Remove character effect
function removeCharacterEffect(card) {
    card.style.borderColor = '';
    card.style.boxShadow = '';
}

// Create potion effect
function createPotionEffect(card) {
    card.style.borderColor = '#64D2FF';
    card.style.boxShadow = '0 15px 30px rgba(100, 210, 255, 0.2)';
}

// Remove potion effect
function removePotionEffect(card) {
    card.style.borderColor = '';
    card.style.boxShadow = '';
}

// Initialize spell casting
function initializeSpellCasting() {
    // Cast spell animation
    window.castSpell = function(spellName) {
        const spellEffects = {
            'lumos': { icon: '💡', color: '#FFD700', text: 'Lumos!' },
            'wingardium-leviosa': { icon: '🪶', color: '#87CEEB', text: 'Wingardium Leviosa!' },
            'expecto-patronum': { icon: '🦌', color: '#98FB98', text: 'Expecto Patronum!' },
            'alohomora': { icon: '🔓', color: '#FF6347', text: 'Alohomora!' },
            'protego': { icon: '🛡️', color: '#98FB98', text: 'Protego!' },
            'incendio': { icon: '🔥', color: '#FF6347', text: 'Incendio!' }
        };
        
        const effect = spellEffects[spellName];
        if (effect) {
            createSpellCastEffect(effect);
        }
    };

    // Practice spell animation
    window.practiceSpell = function(spellName) {
        const practiceEffects = {
            'lumos': { icon: '💡', color: '#FFD700' },
            'wingardium-leviosa': { icon: '🪶', color: '#87CEEB' },
            'alohomora': { icon: '🔓', color: '#FF6347' },
            'protego': { icon: '🛡️', color: '#98FB98' }
        };
        
        const effect = practiceEffects[spellName];
        if (effect) {
            createPracticeEffect(effect);
        }
    };
}

// Create spell cast effect
function createSpellCastEffect(effect) {
    const castEffect = document.createElement('div');
    castEffect.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 4rem;
        color: ${effect.color};
        pointer-events: none;
        z-index: 10000;
        animation: spellCast 1s ease-out forwards;
    `;
    
    castEffect.textContent = effect.icon;
    document.body.appendChild(castEffect);
    
    const spellText = document.createElement('div');
    spellText.style.cssText = `
        position: fixed;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: ${effect.color};
        font-family: 'Space Grotesk', sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        pointer-events: none;
        z-index: 10000;
        animation: spellText 1s ease-out forwards;
    `;
    spellText.textContent = effect.text;
    document.body.appendChild(spellText);
    
    setTimeout(() => {
        castEffect.remove();
        spellText.remove();
    }, 1000);
}

// Create practice effect
function createPracticeEffect(effect) {
    const practiceArea = document.querySelector('.practice-target');
    if (practiceArea) {
        const effectElement = document.createElement('div');
        effectElement.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: ${effect.color};
            animation: practiceSpell 2s ease-out forwards;
        `;
        effectElement.textContent = effect.icon;
        practiceArea.appendChild(effectElement);
        
        setTimeout(() => {
            effectElement.remove();
        }, 2000);
    }
}

// Initialize quizzes
function initializeQuizzes() {
    // Sorting quiz
    const quizOptions = document.querySelectorAll('.quiz-option');
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            const house = option.dataset.house;
            showSortingResult(house);
        });
    });

    // Creature quiz
    const creatureOptions = document.querySelectorAll('[data-answer]');
    creatureOptions.forEach(option => {
        option.addEventListener('click', () => {
            const answer = option.dataset.answer;
            showCreatureResult(answer);
        });
    });
}

// Show sorting result
function showSortingResult(house) {
    const houseNames = {
        gryffindor: { name: 'Gryffindor', icon: '🦁', description: 'Welcome to the house of the brave!' },
        slytherin: { name: 'Slytherin', icon: '🐍', description: 'Welcome to the house of the ambitious!' },
        ravenclaw: { name: 'Ravenclaw', icon: '🦅', description: 'Welcome to the house of the wise!' },
        hufflepuff: { name: 'Hufflepuff', icon: '🦡', description: 'Welcome to the house of the loyal!' }
    };
    
    const result = houseNames[house];
    if (result) {
        const quizQuestion = document.querySelector('.quiz-question');
        const quizResult = document.querySelector('.quiz-result');
        
        if (quizQuestion && quizResult) {
            quizQuestion.style.display = 'none';
            quizResult.style.display = 'block';
            
            const resultIcon = quizResult.querySelector('.result-icon');
            const houseName = quizResult.querySelector('.house-name');
            const resultDescription = quizResult.querySelector('.result-description');
            
            if (resultIcon) resultIcon.textContent = result.icon;
            if (houseName) houseName.textContent = result.name;
            if (resultDescription) resultDescription.textContent = result.description;
        }
    }
}

// Show creature result
function showCreatureResult(answer) {
    const correctAnswer = 'thestral';
    const options = document.querySelectorAll('[data-answer]');
    
    options.forEach(option => {
        if (option.dataset.answer === correctAnswer) {
            option.style.background = '#30D158';
            option.style.color = 'white';
        } else if (option.dataset.answer === answer && answer !== correctAnswer) {
            option.style.background = '#FF3B30';
            option.style.color = 'white';
        }
    });
    
    setTimeout(() => {
        options.forEach(option => {
            option.style.background = '';
            option.style.color = '';
        });
    }, 3000);
}

// Initialize parallax effects
function initializeParallax() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        // Parallax for floating elements
        const floatingElements = document.querySelectorAll('.floating-icon');
        floatingElements.forEach((el, index) => {
            const speed = 0.2 + (index * 0.05);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
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
    
    @keyframes practiceSpell {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0); 
        }
        50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.2); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(1.5); 
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
    
    .nav-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .nav-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .nav-toggle.active span:nth-child(3) {
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