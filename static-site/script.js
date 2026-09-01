// Mobile menu open/close. No animation — instant show/hide per the brief.
(function () {
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("mobileMenu");
  var close = document.getElementById("mobileMenuClose");

  function openMenu() {
    menu.hidden = false;
    toggle.setAttribute("aria-expanded", "true");
  }
  function closeMenu() {
    menu.hidden = true;
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle.addEventListener("click", openMenu);
  close.addEventListener("click", closeMenu);
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !menu.hidden) closeMenu();
  });
})();
