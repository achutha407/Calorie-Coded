
const goalSlider = document.getElementById("goalSlider");
const dietSlider = document.getElementById("dietSlider");
const dietTypeWrapper = document.getElementById("dietTypeWrapper");
const mealCardsContainer = document.getElementById("mealCards");

// Dummy meal data for each diet (16 x 3)
const meals = {
  veg: [...Array(16)].map((_, i) => ({ name: `Veg Dish ${i + 1}`, kcal: [400, 800, 1000, 1500][i % 4], protein: 20 + i, fat: 10 + i, fibre: 5 + i, img: "views/pics/veg.png", tag: "Veg", req: "Ingredients list", steps: "Step-by-step recipe" })),
  nonveg: [...Array(16)].map((_, i) => ({ name: `Non-Veg Dish ${i + 1}`, kcal: [400, 800, 1000, 1500][i % 4], protein: 30 + i, fat: 15 + i, fibre: 3 + i, img: "views/pics/nonveg.png", tag: "Non-Veg", req: "Ingredients list", steps: "Step-by-step recipe" })),
  vegan: [...Array(16)].map((_, i) => ({ name: `Vegan Dish ${i + 1}`, kcal: [400, 800, 1000, 1500][i % 4], protein: 15 + i, fat: 8 + i, fibre: 6 + i, img: "views/pics/vegan.png", tag: "Vegan", req: "Ingredients list", steps: "Step-by-step recipe" })),
};

// Goal mapping
const goalCombos = {
  cut: [0, 2],
  bulk: [2, 3],
  recomp: [1, 2],
  fatloss: [0, 1],
  maintain: [1, 3]
};

let selectedGoal = "";
let selectedDiet = "";

goalSlider.querySelectorAll("span").forEach(btn => {
  btn.onclick = () => {
    goalSlider.querySelectorAll("span").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedGoal = btn.dataset.goal;
    dietTypeWrapper.classList.remove("hidden");
  };
});

dietSlider.querySelectorAll("span").forEach(btn => {
  btn.onclick = () => {
    dietSlider.querySelectorAll("span").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    selectedDiet = btn.dataset.diet;
    displayCards();
  };
});

function displayCards() {
  mealCardsContainer.innerHTML = "";
  const combo = goalCombos[selectedGoal];
  const pool = meals[selectedDiet].filter((meal, i) => {
    return meal.kcal === [400, 800, 1000, 1500][combo[0]] || meal.kcal === [400, 800, 1000, 1500][combo[1]];
  });

  const randomMeals = [...pool].sort(() => 0.5 - Math.random()).slice(0, 4);

  randomMeals.forEach(meal => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <div class="card-img"><img src="${meal.img}" alt="${meal.name}"/></div>
      <div class="card-info">
        <h3>${meal.name}</h3>
        <p><strong>Kcal:</strong> ${meal.kcal}</p>
        <p><strong>Protein:</strong> ${meal.protein}g</p>
        <p><strong>Fat:</strong> ${meal.fat}g</p>
        <p><strong>Fibre:</strong> ${meal.fibre}g</p>
      </div>
    `;
    card.onclick = () => showPopup(meal);
    mealCardsContainer.appendChild(card);
  });
}

function showPopup(meal) {
  document.getElementById("popupImage").src = meal.img;
  document.getElementById("popupTitle").textContent = meal.name;
  document.getElementById("popupKcal").textContent = meal.kcal;
  document.getElementById("popupProtein").textContent = meal.protein;
  document.getElementById("popupFats").textContent = meal.fat;
  document.getElementById("popupFibre").textContent = meal.fibre;
  document.getElementById("popupReq").textContent = meal.req;
  document.getElementById("popupSteps").textContent = meal.steps;
  document.getElementById("dietTag").textContent = meal.tag;
  document.getElementById("popup").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popup").classList.add("hidden");
}

egg: [...Array(16)].map((_, i) => ({
    name: `Eggetarian Dish ${i + 1}`,
    kcal: [400, 800, 1000, 1500][i % 4],
    protein: 18 + i,
    fat: 12 + i,
    fibre: 4 + i,
    img: "views/pics/egg.png",
    tag: "Egg",
    req: "Ingredients list",
    steps: "Step-by-step recipe"
  }))
  
