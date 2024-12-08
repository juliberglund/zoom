import "./style.css";

// Get the popup and close button elements
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("closePopupBtn");

// Add the 'show' class on page load to trigger the animation
window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.remove("hidden", "opacity-0");
    popup.classList.add(
      "opacity-100",
      "transition-all",
      "duration-500",
      "transform",
      "translate-y-0"
    );
  }, 6000); // Small delay for animation to start after page loads
});

// Close the popup when the close button is clicked
closePopupBtn.addEventListener("click", () => {
  popup.classList.remove("opacity-100");
  popup.classList.add(
    "opacity-0",
    "translate-y-[-100%]",
    "transition-all",
    "duration-300"
  );
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 800); // Timeout for smooth transition
});
