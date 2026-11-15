(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector(".theme-toggle");

  function updateThemeControl() {
    if (!themeToggle) return;
    const isDark = root.dataset.theme === "dark";
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", `Switch to ${isDark ? "light" : "dark"} theme`);
    const label = themeToggle.querySelector(".theme-toggle-label");
    if (label) label.textContent = isDark ? "Dark" : "Light";
  }

  updateThemeControl();
  themeToggle?.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    try {
      localStorage.setItem("samuel-portfolio-theme", nextTheme);
    } catch {
      // Keep the current choice for this visit when storage is unavailable.
    }
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      "content",
      nextTheme === "dark" ? "#16181c" : "#F8F7F3",
    );
    updateThemeControl();
  });

  const year = document.querySelector("[data-current-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
