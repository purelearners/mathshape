const select = document.getElementById('shape-select');
const formulaBox = document.getElementById('formula-box');

select.addEventListener('change', updateShape);
function updateShape() {
  const shape = select.value;
  const data = shapesData[shape];
  formulaBox.innerHTML = `<b>${data.name}:</b> ${data.formula}`;
  // Call code to update 3D view, e.g., drawShape(shape)
}
// Initial load
document.addEventListener('DOMContentLoaded', updateShape);
