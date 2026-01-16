/* ===== ASSCLOWN ELEVATORS - SHARED JAVASCRIPT ===== */
/* Est. 1969 | Union Local 404 Approved */

// ===== OSHA VIOLATION GENERATOR =====
const violationPrefixes = ['13', '42', '69', '404', '666', '88', '∞', '??', 'X', 'Ω'];
const violationSuffixes = ['BOZO', 'RICK', 'HONK', 'TAPE', 'TRASH', 'GREASE', 'GHOST', 'PANIC', 'DOOM', 'CHAOS'];
const violationTypes = [
  'Clown grease exceeds maximum viscosity threshold',
  'Unauthorized raccoon colony detected in overhead panel',
  'Ghost operating safety equipment without proper certification',
  'Elevator exhibiting sideways motion on vertical shaft',
  'Duct tape used as primary structural component',
  'Emergency bell replaced with entity yelling "DING"',
  'Floor buttons emit honking sounds upon contact',
  'Elevator music playing in reverse at 3 AM',
  'Mysterious fog emanating from control panel',
  'Passengers report seeing deceased inspector in reflection',
  'Elevator arrives before being called',
  'Floor 13 accessible only during full moon',
  'Cable tension maintained by "good vibes" only',
  'Safety inspection performed by Magic 8-Ball',
  'Warning labels written in ancient emoji code',
  'Elevator doors open into wrong dimension',
  'Counterweight replaced with clown car',
  'Lubricant identified as "pure existential dread"',
  'Emergency stop button triggers accordion music',
  'Maintenance log written in crayon by raccoon',
  'Elevator shaft contains active circus tent',
  'Passengers exit older than when they entered',
  'Floor indicator displays threatening messages',
  'Elevator refuses to stop at floor 4 (superstition)',
  'Cab lighting consists entirely of glow sticks',
  'Intercom plays only screaming goat sounds',
  'Door sensors replaced with "honor system"',
  'Elevator pit contains portal to Sub-basement 13A',
  'Roof hatch leads to different building',
  'Weight capacity sign shows "LOL"'
];

function generateViolation() {
  const code = `${violationPrefixes[Math.floor(Math.random() * violationPrefixes.length)]}-${violationSuffixes[Math.floor(Math.random() * violationSuffixes.length)]}`;
  const type = violationTypes[Math.floor(Math.random() * violationTypes.length)];
  const severity = ['CRITICAL', 'SEVERE', 'MODERATE', 'HILARIOUS', 'PARANORMAL'][Math.floor(Math.random() * 5)];
  const fine = Math.floor(Math.random() * 9999) + 100;
  const date = new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000);

  return {
    code,
    type,
    severity,
    fine: `$${fine.toLocaleString()}`,
    date: date.toLocaleDateString(),
    inspector: Math.random() > 0.5 ? 'Inspector Rick (Deceased)' : 'Raccoon Inspector #' + Math.floor(Math.random() * 99),
    status: ['PENDING', 'IGNORED', 'HAUNTED', 'APPEALED TO GHOST COURT'][Math.floor(Math.random() * 4)]
  };
}

// ===== RICK QUOTES =====
const rickQuotes = [
  "It's fine! Just keep moving!",
  "DING!",
  "I've been dead for 47 years, and this is still better than my living job.",
  "The duct tape will hold. Probably.",
  "Safety is just a suggestion in my dimension.",
  "I approve everything now. What are they gonna do, fire me?",
  "That's not a code violation, that's a feature.",
  "The raccoons know what they're doing. Trust them.",
  "Floor 13? Never heard of it. *winks ghostly*",
  "In my professional opinion: honk honk.",
  "*disappointed ghost sigh*",
  "Have you tried turning the elevator off and on again? From the spirit realm?",
  "I see dead elevators. They don't know they're dead.",
  "The clown grease is essential. Don't question the grease.",
  "That sideways motion? That's just the elevator dancing."
];

function getRandomRickQuote() {
  return rickQuotes[Math.floor(Math.random() * rickQuotes.length)];
}

// ===== RACCOON NAMES =====
const raccoonNames = [
  'Bandit McTrashpanda', 'Sir Ringtail III', 'Professor Garbage', 'Duke Dumpster',
  'Lady Nightmask', 'Captain Trash', 'Baron von Snackthief', 'Duchess Midnight',
  'Lord Whiskers', 'The Honorable Scavenger', 'Count Nocturnal', 'General Fuzzbutt',
  'Admiral Pawsworth', 'Chancellor Nibbles', 'Emperor Fluffytail', 'Viscount Trashmaster'
];

function getRandomRaccoonName() {
  return raccoonNames[Math.floor(Math.random() * raccoonNames.length)];
}

// ===== LIVE VIOLATION COUNTER =====
let globalViolationCount = 13847;

function startViolationCounter(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return;

  setInterval(() => {
    globalViolationCount += Math.floor(Math.random() * 3);
    element.textContent = globalViolationCount.toLocaleString();
  }, 1000);
}

// ===== ANIMATED COUNTERS =====
function animateCounter(element, target, duration = 2000) {
  const start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(start + (target - start) * easeOut).toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    observer.observe(el);
  });
}

// ===== MODAL SYSTEM =====
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modal on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(modal => {
      modal.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

// ===== TOAST NOTIFICATIONS =====
function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${type === 'success' ? '🤡' : type === 'error' ? '💀' : '🦝'}</span>
    <span class="toast-message">${message}</span>
  `;

  // Add styles if not already present
  if (!document.getElementById('toast-styles')) {
    const style = document.createElement('style');
    style.id = 'toast-styles';
    style.textContent = `
      .toast {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #1a1a1a;
        border: 2px solid var(--clown-purple);
        border-radius: 10px;
        padding: 15px 25px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10001;
        animation: toastIn 0.3s ease-out;
        font-family: 'VT323', monospace;
        font-size: 1.1em;
      }
      .toast-success { border-color: var(--clown-green); }
      .toast-error { border-color: var(--clown-red); }
      .toast-icon { font-size: 1.5em; }
      @keyframes toastIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
      @keyframes toastOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease-in forwards';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ===== KONAMI CODE =====
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.key);
  konamiCode = konamiCode.slice(-10);

  if (konamiCode.join('') === konamiSequence.join('')) {
    activateClownMode();
  }
});

function activateClownMode() {
  document.body.style.animation = 'konamiChaos 0.5s infinite';

  // Add chaos keyframes if not present
  if (!document.getElementById('konami-styles')) {
    const style = document.createElement('style');
    style.id = 'konami-styles';
    style.textContent = `
      @keyframes konamiChaos {
        0% { filter: hue-rotate(0deg); }
        25% { filter: hue-rotate(90deg); }
        50% { filter: hue-rotate(180deg); }
        75% { filter: hue-rotate(270deg); }
        100% { filter: hue-rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
  }

  setTimeout(() => {
    document.body.style.animation = '';
    showToast('🤡🦝👻 CLOWN MODE ACTIVATED! All elevators now move in RANDOM directions!', 'success', 5000);
  }, 2000);
}

// ===== TYPEWRITER EFFECT =====
function typewriter(element, text, speed = 50) {
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

// ===== RANDOM GLITCH EFFECT =====
function addRandomGlitches() {
  setInterval(() => {
    const elements = document.querySelectorAll('.glitchable');
    if (elements.length > 0) {
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      randomElement.classList.add('glitch');
      setTimeout(() => randomElement.classList.remove('glitch'), 200);
    }
  }, 5000);
}

// ===== FLOATING CLOWNS =====
function spawnFloatingClown() {
  const clown = document.createElement('div');
  clown.className = 'spawned-clown';
  clown.textContent = ['🤡', '🦝', '👻', '🎪', '🛗'][Math.floor(Math.random() * 5)];
  clown.style.cssText = `
    position: fixed;
    font-size: ${Math.random() * 2 + 1}em;
    left: ${Math.random() * 100}vw;
    top: -50px;
    pointer-events: none;
    z-index: 100;
    opacity: 0.6;
    animation: fallDown ${Math.random() * 5 + 5}s linear forwards;
  `;

  if (!document.getElementById('falling-styles')) {
    const style = document.createElement('style');
    style.id = 'falling-styles';
    style.textContent = `
      @keyframes fallDown {
        to { transform: translateY(110vh) rotate(720deg); }
      }
    `;
    document.head.appendChild(style);
  }

  document.body.appendChild(clown);
  setTimeout(() => clown.remove(), 10000);
}

// ===== CART SYSTEM =====
let cart = JSON.parse(localStorage.getItem('assclown_cart') || '[]');

function addToCart(item) {
  cart.push(item);
  localStorage.setItem('assclown_cart', JSON.stringify(cart));
  updateCartCount();
  showToast(`Added ${item.name} to cart!`, 'success');
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('assclown_cart', JSON.stringify(cart));
  updateCartCount();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

function updateCartCount() {
  const cartCounts = document.querySelectorAll('.cart-count');
  cartCounts.forEach(el => {
    el.textContent = cart.length;
  });
}

// ===== NEWSLETTER SIGNUP =====
function handleNewsletterSignup(email) {
  showToast(`🤡 Welcome to the Clown Newsletter, ${email}! First issue arrives at midnight.`, 'success', 5000);
  return true;
}

// ===== PAGE VISIT TRACKER =====
function trackPageVisit(pageName) {
  let visits = JSON.parse(localStorage.getItem('assclown_visits') || '{}');
  visits[pageName] = (visits[pageName] || 0) + 1;
  localStorage.setItem('assclown_visits', JSON.stringify(visits));

  // Easter egg for frequent visitors
  if (visits[pageName] === 10) {
    showToast(`You've visited ${pageName} 10 times! Inspector Rick is watching... 👻`, 'info', 5000);
  }
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  updateCartCount();
  addRandomGlitches();

  // Random clown spawn
  setInterval(() => {
    if (Math.random() > 0.95) {
      spawnFloatingClown();
    }
  }, 10000);
});

// Export for modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generateViolation,
    getRandomRickQuote,
    getRandomRaccoonName,
    showToast,
    addToCart,
    cart
  };
}
