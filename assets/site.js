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
    if (e.key === "p" || e.key === "P") swapView();
  });

  // Plain view: a normal-looking page for anyone who wants one. Also reachable with ?view=plain.
  var toggles = document.querySelectorAll(".view-toggle");
  function setView(v) {
    if (v === "plain") root.setAttribute("data-view", "plain");
    else root.removeAttribute("data-view");
    for (var i = 0; i < toggles.length; i++) {
      toggles[i].textContent = v === "plain" ? "nerd view" : "plain view";
    }
    try { localStorage.setItem("view", v); } catch (e) {}
  }
  function swapView() {
    setView(root.getAttribute("data-view") === "plain" ? "nerd" : "plain");
  }
  var asked = /[?&]view=(plain|nerd)\b/.exec(location.search);
  var saved = null;
  try { saved = localStorage.getItem("view"); } catch (e) {}
  if (asked) setView(asked[1]);
  else if (saved === "plain") setView("plain");
  for (var k = 0; k < toggles.length; k++) toggles[k].addEventListener("click", swapView);

  var yr = document.getElementById("yr");
  if (yr) yr.textContent = new Date().getFullYear();
})();
