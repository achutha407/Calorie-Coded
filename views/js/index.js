let db;

const request = indexedDB.open("HyperKcalDB", 1);

request.onerror = (event) => {
  console.error("Database error:", event.target.errorCode);
};

request.onsuccess = (event) => {
  db = event.target.result;
  const loggedInUser = localStorage.getItem("loggedInUser");
  const justLoggedIn = localStorage.getItem("justLoggedIn");

  if (loggedInUser) {
    updateUIAfterLogin(loggedInUser);
    if (justLoggedIn === "true") {
      showCustomAlert("Login successful!"); // Only shows once
      localStorage.removeItem("justLoggedIn"); // Reset flag
    }
  }
};
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

request.onupgradeneeded = (event) => {
  db = event.target.result;
  const userStore = db.createObjectStore("users", { keyPath: "username" });
  userStore.createIndex("email", "email", { unique: true });
};

function redirect(page) {
  window.location.href = page;
}

function openModal(id) {
  document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";

  function signupUser() {
    const username = document.getElementById("signupUsername").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value;
    const confirmPassword = document.getElementById("signupConfirmPassword").value;
  
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    const tx = db.transaction(["users"], "readwrite");
    const store = tx.objectStore("users");
    const request = store.add({ username, email, password });
  
    request.onsuccess = () => {
      alert("Signup successful!");
      closeModal('signup'); // Close modal after signup
    };
  
    request.onerror = () => {
      alert("Username or email already exists.");
    };
  }
  
  function loginUser() {
    const username = document.getElementById("loginUsername").value.trim();
    const password = document.getElementById("loginPassword").value;
  
    const tx = db.transaction(["users"], "readonly");
    const store = tx.objectStore("users");
    const request = store.get(username);
  
    request.onsuccess = () => {
      const user = request.result;
      if (!user) {
        alert("Login failed: User not found.");
        return;
      }
      if (user.password === password) {
        localStorage.setItem("loggedInUser", user.username);
        localStorage.setItem("justLoggedIn", "true");
        updateUIAfterLogin(user.username);
        closeModal('login'); // Close modal after successful login
        showCustomAlert("Login successful!");
        redirect('home.html'); // Redirect to home page or dashboard
      } else {
        alert("Login failed: Incorrect password.");
      }
    };
  
    request.onerror = () => {
      alert("Login failed.");
    };
  }
  

function logoutUser() {
  localStorage.removeItem("loggedInUser");
  const navRight = document.getElementById("navAuth");

  navRight.innerHTML = `
    <div class="icon" onclick="openModal('login')">
      <img src="views/pics/login.png" alt="Login" />
      <span>Login</span>
    </div>
    <div class="icon" onclick="openModal('signup')">
      <img src="views/pics/signup.png" alt="Signup" />
      <span>Signup</span>
    </div>
    <div class="icon" onclick="openModal('helpModal')">
      <img src="views/pics/help.png" alt="Help" />
      <span>Help</span>
    </div>
  `;

  showCustomAlert("Logged out successfully!");
}


const texts = ["Track. Train. Transform.", "Fuel Your Goals", "Your Macro Buddy", "Let’s Get Shredded"];
let i = 0, j = 0, isDeleting = false;
const typeEl = document.getElementById("typewriter");

function typeEffect() {
  const current = texts[i];
  typeEl.textContent = current.substring(0, j);

  if (isDeleting) {
    j--;
    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }
  } else {
    j++;
    if (j === current.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
      return;
    }
  }
  setTimeout(typeEffect, isDeleting ? 50 : 100);
}
typeEffect();
function updateUIAfterLogin(username) {
  const navRight = document.getElementById("navAuth");

  navRight.innerHTML = `
    <div class="icon user">
      <img src="views/pics/user.png" alt="User" />
      <span>@${username}</span>
    </div>
    <div class="icon" onclick="logoutUser()">
      <img src="views/pics/logout.png" alt="Logout" />
      <span>Logout</span>
    </div>
    <div class="icon" onclick="openFAQ()">
      <img src="views/pics/help.png" alt="Help" />
      <span>Help</span>
    </div>
  `;
}
function logoutUser() {
  localStorage.removeItem("loggedInUser");
  const navRight = document.getElementById("navAuth");

  navRight.innerHTML = `
    <div class="icon" onclick="openModal('login')">
      <img src="views/pics/login.png" alt="Login" />
      <span>Login</span>
    </div>
    <div class="icon" onclick="openModal('signup')">
      <img src="views/pics/signup.png" alt="Signup" />
      <span>Signup</span>
    </div>
    <div class="icon" onclick="openModal('helpModal')">
      <img src="views/pics/help.png" alt="Help" />
      <span>Help</span>
    </div>
  `;

  showCustomAlert("Logged out successfully!");
}

// Open modal function
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.showModal();  // Open the modal
}

// Close modal when the close button is clicked
const closeHelp = document.getElementById("closeHelp");
closeHelp.addEventListener("click", () => {
  const helpModal = document.getElementById("helpModal");
  helpModal.close();  // Close the modal
});

// Accordion functionality
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
});

function showCustomAlert(message) {
  const alertBox = document.getElementById("customAlert");
  alertBox.textContent = message;
  alertBox.style.display = "block";
  alertBox.classList.add("show");

  setTimeout(() => {
    alertBox.classList.remove("show");
    alertBox.style.display = "none";
  }, 3000);
}}

document.addEventListener("DOMContentLoaded", () => {
  const ccHelpBtn = document.getElementById("cc-helpBtn");
  const ccHelpModal = document.getElementById("cc-helpModal");
  const ccHelpClose = document.getElementById("cc-helpCloseBtn");

  if (ccHelpBtn && ccHelpModal && ccHelpClose) {
    ccHelpBtn.addEventListener("click", () => {
      ccHelpModal.style.display = "flex";
    });

    ccHelpClose.addEventListener("click", () => {
      ccHelpModal.style.display = "none";
    });
  }

  const ccHelpItems = document.querySelectorAll(".cc-help-item");
  ccHelpItems.forEach((item) => {
    const question = item.querySelector(".cc-help-question");
    question.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
  const cards = document.querySelectorAll(".card");

  // Loop through all cards and make them visible
  cards.forEach((card) => {
    card.classList.add("visible"); // Add the 'visible' class to make cards appear
  });
});
// Closing the FAQ modal when the "X" button is clicked
const faqCloseButton = document.getElementById("faqClose");
faqCloseButton.addEventListener("click", () => {
  const helpModal = document.getElementById("cc-helpModal");
  helpModal.style.display = "none"; // Close the modal
});

// Function to open the modal
function openFAQ() {
  const helpModal = document.getElementById("cc-helpModal");
  helpModal.style.display = "flex"; // Open the modal
}
