
// ========== TYPEWRITER EFFECT ==========
const texts = ["Track. Train. Transform.", "Fuel Your Goals", "Your Macro Buddy", "Let’s Get Shredded"];
let i = 0, j = 0, isDeleting = false;
const typeEl = document.querySelector(".changing-text");

function typeEffect() {
  let currentText = texts[i];
  if (isDeleting) {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  } else {
    j++;
    if (j === currentText.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  typeEl.textContent = currentText.substring(0, j);
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// Smooth Scrolling Navigation
document.querySelectorAll('.icon').forEach(item => {
  item.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.querySelector('span').textContent.toLowerCase().replace(' ', '');
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Open Login/Signup Modal
function openModal(type) {
  let modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn" onclick="closeModal()">&times;</span>
      <h2>${type === 'login' ? 'Login' : 'Sign Up'}</h2>
      <form id="${type}-form">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">${type === 'login' ? 'Login' : 'Create Account'}</button>
      </form>
    </div>
  `;
  document.body.appendChild(modal);
}

// Close Modal
function closeModal() {
  document.querySelector('.modal')?.remove();
}

// Handle Login and Sign Up Forms (using local storage for simplicity)
document.body.addEventListener('submit', function (event) {
  if (event.target.id === 'login-form' || event.target.id === 'signup-form') {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;
    
    if (event.target.id === 'login-form') {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      let user = users.find(u => u.email === email && u.password === password);

      if (user) {
        alert('Login successful!');
        closeModal();
      } else {
        alert('Invalid credentials');
      }
    } else if (event.target.id === 'signup-form') {
      let users = JSON.parse(localStorage.getItem('users')) || [];
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      alert('Account created successfully!');
      closeModal();
    }
  }
});
// IntersectionObserver to detect when cards come into view
const cards = document.querySelectorAll('.card');

const checkVisibility = () => {
  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility(); // Check on initial load


// Options for the observer (threshold means when 50% of the card is visible)
const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, options);

// Observe each card
cards.forEach(card => {
  observer.observe(card);
});
const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
  cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
});

// Redirect function for navigation
function redirect(page) {
  window.location.href = page;
}

// Initialize Typewriter effect on page load
window.onload = function() {
  typeWriter();
};
