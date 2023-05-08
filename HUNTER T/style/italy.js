const minusButton = document.getElementById("minus-btn");
const plusButton = document.getElementById("plus-btn");
const quantityInput = document.getElementById("quantity");

minusButton.addEventListener("click", () => {
  if (quantityInput.value > 0) {
    quantityInput.value--;
  }
});

plusButton.addEventListener("click", () => {
  quantityInput.value++;
});
