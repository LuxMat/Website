// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('open');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('nav ul a').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('nav ul').classList.remove('open');
  });
});

// Scroll fade-in animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Typewriter effect
const words = ['Engineering Physicist', 'Quantitative Modeller', 'Python Developer'];
let wordIdx = 0;
let charIdx = 0;
let deleting = false;

const el = document.getElementById('typewriter');

function type() {
  const word = words[wordIdx];

  if (deleting) {
    el.textContent = word.slice(0, charIdx--);
    if (charIdx < 0) {
      deleting = false;
      wordIdx = (wordIdx + 1) % words.length;
      charIdx = 0;
      setTimeout(type, 420);
      return;
    }
    setTimeout(type, 55);
  } else {
    el.textContent = word.slice(0, ++charIdx);
    if (charIdx === word.length) {
      deleting = true;
      setTimeout(type, 2200);
      return;
    }
    setTimeout(type, 95);
  }
}

type();
