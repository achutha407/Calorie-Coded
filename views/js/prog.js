document.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("save-btn");
  const logList = document.getElementById("log-list");

  saveBtn.addEventListener("click", () => {
    const weight = document.getElementById("weight").value;
    const waist = document.getElementById("waist").value;
    const biceps = document.getElementById("biceps").value;
    const chest = document.getElementById("chest").value;
    const thighs = document.getElementById("thighs").value;

    if (!weight || !waist || !biceps || !chest || !thighs) {
      alert("Please fill out all fields!");
      return;
    }

    const date = new Date().toLocaleString();
    const logItem = document.createElement("li");
    logItem.innerHTML = `
      <strong>Date:</strong> ${date}<br>
      <strong>Weight:</strong> ${weight} kg, 
      <strong>Waist:</strong> ${waist} cm, 
      <strong>Biceps:</strong> ${biceps} cm, 
      <strong>Chest:</strong> ${chest} cm, 
      <strong>Thighs:</strong> ${thighs} cm
    `;

    logList.prepend(logItem);
    document.querySelectorAll("input").forEach(input => input.value = "");
  });
});
