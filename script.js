// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeNavigation();
    initializeScrollEffects();
    initializeInteractiveElements();
    initializeSpellCasting();
    initializeQuizzes();
    initializeParallax();
    initializeBrewing();
    initializeBackgroundMusic();
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

    // Touch event for mobile
    navToggle.addEventListener('touchstart', (e) => {
        e.preventDefault();
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
        
        // Touch event for mobile links
        link.addEventListener('touchstart', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Initialize dropdown functionality
    initializeDropdownNavigation();

    // Navbar auto-hide/show and background on scroll
    let lastScrollTop = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Change background opacity based on scroll
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        }
        
        // Auto-hide/show navbar
        if (currentScroll > lastScrollTop && currentScroll > 200) {
            // Scrolling down - hide navbar
            navbar.classList.add('hidden');
        } else {
            // Scrolling up - show navbar
            navbar.classList.remove('hidden');
        }
        
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });
}

// Initialize dropdown navigation
function initializeDropdownNavigation() {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        const dropdownMenu = toggle.nextElementSibling;
        
        // Toggle dropdown on click
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other dropdowns
            document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
                if (menu !== dropdownMenu) {
                    menu.classList.remove('show');
                    menu.previousElementSibling.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            toggle.classList.toggle('active');
            dropdownMenu.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!toggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
                toggle.classList.remove('active');
                dropdownMenu.classList.remove('show');
            }
        });
        
        // Close dropdown on escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                toggle.classList.remove('active');
                dropdownMenu.classList.remove('show');
            }
        });
    });
}

// Initialize scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero section (reduced intensity to prevent overlapping)
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            // Reduced parallax effect to prevent overlapping
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
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
            // Add casting effect to the button
            const spellButton = document.querySelector(`[onclick="castSpell('${spellName}')"]`);
            if (spellButton) {
                spellButton.classList.add('casting');
                setTimeout(() => {
                    spellButton.classList.remove('casting');
                }, 1000);
            }
            
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
        // Add hit effect to target
        practiceArea.classList.add('hit');
        
        // Create spell effect
        const effectElement = document.createElement('div');
        effectElement.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3rem;
            color: ${effect.color};
            animation: practiceSpell 2s ease-out forwards;
            z-index: 10;
        `;
        effectElement.textContent = effect.icon;
        practiceArea.appendChild(effectElement);
        
        // Add casting effect to the button
        const spellButton = document.querySelector(`[onclick="practiceSpell('${effect.icon === '💡' ? 'lumos' : effect.icon === '🪶' ? 'wingardium-leviosa' : effect.icon === '🔓' ? 'alohomora' : 'protego'}')"]`);
        if (spellButton) {
            spellButton.classList.add('casting');
            setTimeout(() => {
                spellButton.classList.remove('casting');
            }, 1000);
        }
        
        // Remove effects after animation
        setTimeout(() => {
            effectElement.remove();
            practiceArea.classList.remove('hit');
        }, 2000);
    }
}

// Initialize quizzes
function initializeQuizzes() {
    // Sorting quiz
    initializeSortingQuiz();
    
    // Creature quiz
    const creatureOptions = document.querySelectorAll('[data-answer]');
    creatureOptions.forEach(option => {
        option.addEventListener('click', () => {
            const answer = option.dataset.answer;
            showCreatureResult(answer);
        });
    });
    
    // Magical trivia quiz functionality
    initializeTriviaQuiz();
    
    // House quiz functionality
    initializeHouseQuiz();
}

// Sorting Quiz Variables
let currentQuestion = 1;
let totalQuestions = 4;
let houseScores = {
    gryffindor: 0,
    slytherin: 0,
    ravenclaw: 0,
    hufflepuff: 0
};

// Initialize sorting quiz
function initializeSortingQuiz() {
    const quizOptions = document.querySelectorAll('.quiz-option');
    const retakeBtn = document.querySelector('.retake-quiz-btn');
    
    quizOptions.forEach(option => {
        option.addEventListener('click', () => {
            const house = option.dataset.house;
            const points = parseInt(option.dataset.points) || 1;
            
            // Add points to house score
            houseScores[house] += points;
            
            // Move to next question or show result
            if (currentQuestion < totalQuestions) {
                nextQuestion();
            } else {
                showSortingResult();
            }
        });
    });
    
    // Retake quiz button
    if (retakeBtn) {
        retakeBtn.addEventListener('click', resetQuiz);
    }
}

// Move to next question
function nextQuestion() {
    const currentQuestionEl = document.querySelector(`#question${currentQuestion}`);
    const nextQuestionEl = document.querySelector(`#question${currentQuestion + 1}`);
    
    if (currentQuestionEl && nextQuestionEl) {
        // Hide current question with fade out
        currentQuestionEl.style.opacity = '0';
        currentQuestionEl.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            currentQuestionEl.style.display = 'none';
            currentQuestion++;
            
            // Show next question with fade in
            nextQuestionEl.style.display = 'block';
            nextQuestionEl.style.opacity = '0';
            nextQuestionEl.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                nextQuestionEl.style.opacity = '1';
                nextQuestionEl.style.transform = 'translateY(0)';
            }, 100);
            
            // Update progress
            updateProgress();
        }, 300);
    }
}

// Update progress bar
function updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const currentQuestionSpan = document.querySelector('.current-question');
    
    if (progressFill) {
        const progress = (currentQuestion / totalQuestions) * 100;
        progressFill.style.width = `${progress}%`;
    }
    
    if (currentQuestionSpan) {
        currentQuestionSpan.textContent = currentQuestion;
    }
}

// Show sorting result
function showSortingResult() {
    const houseNames = {
        gryffindor: { 
            name: 'Gryffindor', 
            icon: '🦁', 
            description: 'Welcome to the house of the brave!',
            traits: ['💪 Bravery', '⚡ Courage', '🔥 Determination', '🦁 Chivalry']
        },
        slytherin: { 
            name: 'Slytherin', 
            icon: '🐍', 
            description: 'Welcome to the house of the ambitious!',
            traits: ['🎯 Ambition', '🧠 Cunning', '💎 Resourcefulness', '🐍 Leadership']
        },
        ravenclaw: { 
            name: 'Ravenclaw', 
            icon: '🦅', 
            description: 'Welcome to the house of the wise!',
            traits: ['🧠 Intelligence', '💡 Creativity', '📚 Learning', '🦅 Wisdom']
        },
        hufflepuff: { 
            name: 'Hufflepuff', 
            icon: '🦡', 
            description: 'Welcome to the house of the loyal!',
            traits: ['🤝 Loyalty', '⏰ Patience', '💛 Hard Work', '🦡 Kindness']
        }
    };
    
    // Find the house with highest score
    const sortedHouses = Object.entries(houseScores).sort(([,a], [,b]) => b - a);
    const winningHouse = sortedHouses[0][0];
    const result = houseNames[winningHouse];
    
    if (result) {
        const quizQuestions = document.querySelectorAll('.quiz-question');
        const quizResult = document.querySelector('.quiz-result');
        
        if (quizResult) {
            // Hide all questions
            quizQuestions.forEach(q => {
                q.style.opacity = '0';
                q.style.transform = 'translateY(-20px)';
                setTimeout(() => q.style.display = 'none', 300);
            });
            
            // Show result with animation
            setTimeout(() => {
                quizResult.style.display = 'block';
                quizResult.style.opacity = '0';
                quizResult.style.transform = 'translateY(20px)';
                
                setTimeout(() => {
                    quizResult.style.opacity = '1';
                    quizResult.style.transform = 'translateY(0)';
                }, 100);
                
                // Update result content
                const resultIcon = quizResult.querySelector('.result-icon');
                const houseName = quizResult.querySelector('.house-name');
                const resultDescription = quizResult.querySelector('.result-description');
                const traitsList = quizResult.querySelector('.traits-list');
                
                if (resultIcon) resultIcon.textContent = result.icon;
                if (houseName) houseName.textContent = result.name;
                if (resultDescription) resultDescription.textContent = result.description;
                
                if (traitsList) {
                    traitsList.innerHTML = '';
                    result.traits.forEach(trait => {
                        const traitSpan = document.createElement('span');
                        traitSpan.className = 'trait';
                        traitSpan.textContent = trait;
                        traitsList.appendChild(traitSpan);
                    });
                }
                
                // Update progress to 100%
                updateProgress();
            }, 400);
        }
    }
}

// Reset quiz
function resetQuiz() {
    currentQuestion = 1;
    houseScores = {
        gryffindor: 0,
        slytherin: 0,
        ravenclaw: 0,
        hufflepuff: 0
    };
    
    const quizQuestions = document.querySelectorAll('.quiz-question');
    const quizResult = document.querySelector('.quiz-result');
    
    // Hide result
    if (quizResult) {
        quizResult.style.opacity = '0';
        quizResult.style.transform = 'translateY(-20px)';
        setTimeout(() => quizResult.style.display = 'none', 300);
    }
    
    // Show first question
    setTimeout(() => {
        quizQuestions.forEach((q, index) => {
            if (index === 0) {
                q.style.display = 'block';
                q.style.opacity = '0';
                q.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    q.style.opacity = '1';
                    q.style.transform = 'translateY(0)';
                }, 100);
            } else {
                q.style.display = 'none';
                q.style.opacity = '1';
                q.style.transform = 'translateY(0)';
            }
        });
        
        // Reset progress
        updateProgress();
    }, 400);
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

// Initialize brewing functionality
function initializeBrewing() {
    const ingredients = document.querySelectorAll('.ingredient');
    const cauldron = document.querySelector('.cauldron');
    
    if (ingredients.length > 0 && cauldron) {
        ingredients.forEach(ingredient => {
            ingredient.addEventListener('click', function() {
                // Add click effect
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
                
                // Create ingredient effect
                createIngredientEffect(this.textContent, cauldron);
            });
            
            // Add hover sound effect (visual feedback)
            ingredient.addEventListener('mouseenter', function() {
                this.style.animation = 'ingredientHover 0.3s ease';
            });
            
            ingredient.addEventListener('mouseleave', function() {
                this.style.animation = '';
            });
        });
        
        // Add cauldron interaction
        cauldron.addEventListener('click', function() {
            createCauldronEffect(this);
        });
    }
}

// Create ingredient effect when clicked
function createIngredientEffect(ingredientName, cauldron) {
    const effect = document.createElement('div');
    effect.className = 'ingredient-effect';
    effect.textContent = ingredientName.split(' ')[0]; // Get emoji
    effect.style.cssText = `
        position: absolute;
        font-size: 2rem;
        pointer-events: none;
        z-index: 1000;
        animation: ingredientToCauldron 1s ease-out forwards;
    `;
    
    // Position effect near the ingredient
    const rect = event.target.getBoundingClientRect();
    effect.style.left = rect.left + rect.width / 2 + 'px';
    effect.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(effect);
    
    // Remove effect after animation
    setTimeout(() => {
        effect.remove();
    }, 1000);
    
    // Add cauldron reaction
    setTimeout(() => {
        createCauldronBubble(cauldron);
    }, 500);
}

// Create cauldron bubble effect
function createCauldronBubble(cauldron) {
    const bubble = document.createElement('div');
    bubble.className = 'cauldron-bubble';
    bubble.textContent = '💨';
    bubble.style.cssText = `
        position: absolute;
        font-size: 1.5rem;
        pointer-events: none;
        z-index: 1001;
        animation: bubbleRise 2s ease-out forwards;
    `;
    
    const rect = cauldron.getBoundingClientRect();
    bubble.style.left = rect.left + rect.width / 2 + 'px';
    bubble.style.top = rect.top + rect.height / 2 + 'px';
    
    document.body.appendChild(bubble);
    
    setTimeout(() => {
        bubble.remove();
    }, 2000);
}

// Create cauldron click effect
function createCauldronEffect(cauldron) {
    cauldron.style.transform = 'scale(0.95)';
    setTimeout(() => {
        cauldron.style.transform = '';
    }, 200);
    
    // Create multiple bubbles
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createCauldronBubble(cauldron);
        }, i * 200);
    }
}

// Add brewing animations to CSS
const brewingAnimations = document.createElement('style');
brewingAnimations.textContent = `
    @keyframes ingredientToCauldron {
        0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
    }
    
    @keyframes bubbleRise {
        0% {
            transform: translate(-50%, -50%) scale(0.5);
            opacity: 0;
        }
        20% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
        80% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.8;
        }
        100% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0;
        }
    }
    
    @keyframes ingredientHover {
        0% { transform: scale(1); }
        50% { transform: scale(1.05); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(brewingAnimations);

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

// Background Music Management
function initializeBackgroundMusic() {
    const backgroundMusic = document.getElementById('background-music');
    
    if (backgroundMusic) {
        // Set volume to a comfortable level (30%)
        backgroundMusic.volume = 0.3;
        
        // Ensure music loops continuously
        backgroundMusic.loop = true;
        
        // Auto-play music when user interacts with the page
        // (This is required by modern browsers to prevent unwanted autoplay)
        const startMusic = () => {
            backgroundMusic.play().catch(error => {
                console.log('Background music autoplay prevented:', error);
            });
            // Remove event listeners after first interaction
            document.removeEventListener('click', startMusic);
            document.removeEventListener('keydown', startMusic);
            document.removeEventListener('touchstart', startMusic);
        };
        
        // Add event listeners for user interaction
        document.addEventListener('click', startMusic);
        document.addEventListener('keydown', startMusic);
        document.addEventListener('touchstart', startMusic);
        
        // Ensure music restarts if it stops for any reason
        backgroundMusic.addEventListener('ended', () => {
            backgroundMusic.currentTime = 0;
            backgroundMusic.play().catch(error => {
                console.log('Background music restart failed:', error);
            });
        });
        
        // Add music controls to the page
        const musicControls = document.createElement('div');
        musicControls.className = 'music-controls';
        musicControls.innerHTML = `
            <button id="music-toggle" class="music-btn" title="Toggle Background Music">
                🎵
            </button>
        `;
        musicControls.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            padding: 10px;
            backdrop-filter: blur(10px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            transition: all 0.3s ease;
        `;
        
        const musicBtn = musicControls.querySelector('#music-toggle');
        musicBtn.style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 5px;
            border-radius: 50%;
            transition: all 0.3s ease;
        `;
        
        // Toggle music play/pause
        musicBtn.addEventListener('click', () => {
            if (backgroundMusic.paused) {
                backgroundMusic.play();
                musicBtn.textContent = '🔇';
                musicBtn.title = 'Pause Background Music';
            } else {
                backgroundMusic.pause();
                musicBtn.textContent = '🎵';
                musicBtn.title = 'Play Background Music';
            }
        });
        
        // Update button state based on music status
        backgroundMusic.addEventListener('play', () => {
            musicBtn.textContent = '🔇';
            musicBtn.title = 'Pause Background Music';
        });
        
        backgroundMusic.addEventListener('pause', () => {
            musicBtn.textContent = '🎵';
            musicBtn.title = 'Play Background Music';
        });
        
        // Add hover effects
        musicControls.addEventListener('mouseenter', () => {
            musicControls.style.transform = 'scale(1.1)';
            musicControls.style.background = 'rgba(0, 0, 0, 0.8)';
        });
        
        musicControls.addEventListener('mouseleave', () => {
            musicControls.style.transform = 'scale(1)';
            musicControls.style.background = 'rgba(0, 0, 0, 0.7)';
        });
        
        document.body.appendChild(musicControls);
    }
}

// Initialize magical trivia quiz
function initializeTriviaQuiz() {
    const triviaQuiz = document.querySelector('.trivia-quiz');
    if (!triviaQuiz) return;
    
    const quizQuestions = [
        {
            question: "What is the name of Harry Potter's owl?",
            options: ["Hedwig", "Errol", "Pigwidgeon", "Fawkes"],
            correct: 0
        },
        {
            question: "Which house is known for bravery and courage?",
            options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
            correct: 0
        },
        {
            question: "What spell is used to levitate objects?",
            options: ["Wingardium Leviosa", "Lumos", "Alohomora", "Expecto Patronum"],
            correct: 0
        },
        {
            question: "What is the name of the Hogwarts school song?",
            options: ["Hoggy Warty Hogwarts", "School Song", "Hogwarts Anthem", "Wizard's Melody"],
            correct: 0
        },
        {
            question: "Which platform does the Hogwarts Express depart from?",
            options: ["Platform 9¾", "Platform 10", "Platform 8", "Platform 11"],
            correct: 0
        }
    ];
    
    let currentQuestion = 0;
    let score = 0;
    let quizActive = false;
    
    const quizQuestion = triviaQuiz.querySelector('.quiz-question');
    const quizResult = triviaQuiz.querySelector('.quiz-result');
    const progressFill = triviaQuiz.querySelector('.progress-fill');
    const progressText = triviaQuiz.querySelector('.progress-text');
    const scoreElement = triviaQuiz.querySelector('.score');
    const retakeButton = triviaQuiz.querySelector('.retake-quiz');
    
    function startTriviaQuiz() {
        currentQuestion = 0;
        score = 0;
        quizActive = true;
        showQuestion();
        quizQuestion.style.display = 'block';
        quizResult.style.display = 'none';
    }
    
    function showQuestion() {
        if (currentQuestion >= quizQuestions.length) {
            endQuiz();
            return;
        }
        
        const question = quizQuestions[currentQuestion];
        const questionTitle = quizQuestion.querySelector('h3');
        const optionsContainer = quizQuestion.querySelector('.quiz-options');
        
        questionTitle.textContent = question.question;
        progressText.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
        progressFill.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(index));
            optionsContainer.appendChild(button);
        });
    }
    
    function selectAnswer(selectedIndex) {
        if (!quizActive) return;
        
        const question = quizQuestions[currentQuestion];
        const options = quizQuestion.querySelectorAll('.quiz-option');
        
        options.forEach((option, index) => {
            option.disabled = true;
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === question.correct) {
            score++;
        }
        
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1500);
    }
    
    function endQuiz() {
        quizActive = false;
        quizQuestion.style.display = 'none';
        quizResult.style.display = 'block';
        scoreElement.textContent = score;
        progressFill.style.width = '100%';
    }
    
    function resetTriviaQuiz() {
        startTriviaQuiz();
    }
    
    if (retakeButton) {
        retakeButton.addEventListener('click', resetTriviaQuiz);
    }
    
    // Start the quiz automatically
    startTriviaQuiz();
}

// Initialize house quiz
function initializeHouseQuiz() {
    const houseQuiz = document.querySelector('.house-quiz');
    if (!houseQuiz) return;
    
    const quizQuestions = [
        {
            question: "Which house is known for valuing intelligence and wit above all else?",
            options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
            correct: 2
        },
        {
            question: "What is the motto of Gryffindor house?",
            options: ["Wit beyond measure", "Those cunning folk", "Where dwell the brave", "Hard work and loyalty"],
            correct: 2
        },
        {
            question: "Which house's common room is located in the dungeons?",
            options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
            correct: 1
        },
        {
            question: "What animal represents Hufflepuff house?",
            options: ["Lion", "Snake", "Eagle", "Badger"],
            correct: 3
        },
        {
            question: "Which house is associated with the color green?",
            options: ["Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff"],
            correct: 1
        }
    ];
    
    let currentQuestion = 0;
    let score = 0;
    let quizActive = false;
    
    const quizQuestion = houseQuiz.querySelector('.quiz-question');
    const quizResult = houseQuiz.querySelector('.quiz-result');
    const progressFill = houseQuiz.querySelector('.progress-fill');
    const progressText = houseQuiz.querySelector('.progress-text');
    const scoreElement = houseQuiz.querySelector('.score');
    const retakeButton = houseQuiz.querySelector('.retake-quiz');
    
    function startHouseQuiz() {
        currentQuestion = 0;
        score = 0;
        quizActive = true;
        showQuestion();
        quizQuestion.style.display = 'block';
        quizResult.style.display = 'none';
    }
    
    function showQuestion() {
        if (currentQuestion >= quizQuestions.length) {
            endQuiz();
            return;
        }
        
        const question = quizQuestions[currentQuestion];
        const questionTitle = quizQuestion.querySelector('h3');
        const optionsContainer = quizQuestion.querySelector('.quiz-options');
        
        questionTitle.textContent = question.question;
        progressText.textContent = `Question ${currentQuestion + 1} of ${quizQuestions.length}`;
        progressFill.style.width = `${((currentQuestion + 1) / quizQuestions.length) * 100}%`;
        
        optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'quiz-option';
            button.textContent = option;
            button.addEventListener('click', () => selectAnswer(index));
            optionsContainer.appendChild(button);
        });
    }
    
    function selectAnswer(selectedIndex) {
        if (!quizActive) return;
        
        const question = quizQuestions[currentQuestion];
        const options = quizQuestion.querySelectorAll('.quiz-option');
        
        options.forEach((option, index) => {
            option.disabled = true;
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedIndex && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === question.correct) {
            score++;
        }
        
        setTimeout(() => {
            currentQuestion++;
            showQuestion();
        }, 1500);
    }
    
    function endQuiz() {
        quizActive = false;
        quizQuestion.style.display = 'none';
        quizResult.style.display = 'block';
        scoreElement.textContent = score;
        progressFill.style.width = '100%';
    }
    
    function resetHouseQuiz() {
        startHouseQuiz();
    }
    
    if (retakeButton) {
        retakeButton.addEventListener('click', resetHouseQuiz);
    }
    
    // Start the quiz automatically
    startHouseQuiz();
}

 