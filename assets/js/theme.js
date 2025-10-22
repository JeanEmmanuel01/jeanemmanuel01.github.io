(function(){
  var key = "theme-preference";
  function apply(theme){
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(key, theme); } catch(e){}
  }
  var saved = null;
  try { saved = localStorage.getItem(key); } catch(e){ saved = null; }
  var prefersDark = false;
  try {
    prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch(e){}
  apply(saved || (prefersDark ? "dark" : "light"));
  var btn = document.getElementById("themeToggle");
  function label(){
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    btn.textContent = dark ? "☀️" : "🌙";
  }
  label();
  btn.addEventListener("click", function(){
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    apply(dark ? "light" : "dark");
    label();
  });
})();