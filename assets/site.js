(function () {
  var root = document.documentElement;

  // Phosphor swap, remembered per browser.
  function setPhosphor(p) {
    if (p === "amber") root.setAttribute("data-phosphor", "amber");
    else root.removeAttribute("data-phosphor");
    try { localStorage.setItem("phosphor", p); } catch (e) {}
  }
  function swap() {
    setPhosphor(root.getAttribute("data-phosphor") === "amber" ? "green" : "amber");
  }
  try { if (localStorage.getItem("phosphor") === "amber") setPhosphor("amber"); } catch (e) {}
  var btn = document.getElementById("swap");
  if (btn) btn.addEventListener("click", swap);
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === "t" || e.key === "T") swap();
  });

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
