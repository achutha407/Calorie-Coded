const form = document.getElementById('calorieForm');
const resultSection = document.getElementById('resultSection');
const calorieOutput = document.getElementById('calorieOutput');
const mealRedirect = document.getElementById('mealRedirect');

let bmr = 0;

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const age = parseInt(document.getElementById('age').value);
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const gender = document.getElementById('gender').value;
  const activity = parseFloat(document.getElementById('activity').value);

  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  bmr *= activity;

  resultSection.classList.remove('hidden');
  mealRedirect.classList.add('hidden');
  calorieOutput.innerText = '';
});

document.querySelectorAll('.goal-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const multiplier = parseFloat(btn.getAttribute('data-multiplier'));
    const calories = Math.round(bmr * multiplier);
    calorieOutput.innerText = `${btn.innerText} Goal: ${calories} kcal/day`;
    mealRedirect.classList.remove('hidden');
  });
});

document.body.style.overflow = "auto"; // unlock scroll
function convertHeight() {
  const feet = parseInt(document.getElementById('feet').value) || 0;
  const inches = parseInt(document.getElementById('inches').value) || 0;
  const totalInches = (feet * 12) + inches;
  const cm = Math.round(totalInches * 2.54);

  document.getElementById('height').value = cm;
}
