/* 📜 Peggy Baby Shop - JavaScript Logic       */

// ✅ Global variable: tracks promo visibility state
let promoShown = false;

/**
 * 🔁 toggleVisibility
 * Reusable function that toggles `.show` class on an element
 * @param {string} elementId - The ID of the element to toggle
 * @returns {boolean} - true if element is now visible, false if hidden
 */
function toggleVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (!element) return false;

  element.classList.toggle('show');
  return element.classList.contains('show');
}

// 🔔 Event listener to show/hide the promo card
document.getElementById("promoBtn").addEventListener("click", () => {
  promoShown = toggleVisibility("promoCard");
  console.log("Promo card visible?", promoShown);
});

/**
 * 🃏 flipCard
 * Flips the card using a CSS transform (triggered by JS)
 */
function flipCard() {
  const card = document.getElementById("flipCard");
  card.classList.toggle("flip");
}
