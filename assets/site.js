const toggle = document.querySelector(".secondary-toggle");
const secondary = document.querySelector(".secondary");

toggle.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!expanded));
  toggle.classList.toggle("toggled-on", !expanded);
  secondary.classList.toggle("toggled-on", !expanded);
});
