const d = document;

export default function changeTheme(btn, dataDark) {
  const $btnTheme = document.querySelector(btn),
    $elementsDark = document.querySelectorAll(`${dataDark}`);

  let moon = "🌛",
    sun = "🌞";

  const mode = localStorage.getItem("mode") ?? "sun";

  const lightMode = () => {
    $elementsDark.forEach((el) => el.classList.remove("dark-mode"));
    $btnTheme.textContent = moon;
    localStorage.setItem("mode", "sun");
  };

  const darkMode = () => {
    $elementsDark.forEach((el) => el.classList.add("dark-mode"));
    $btnTheme.textContent = sun;
    localStorage.setItem("mode", "moon");
  };

  if (mode === "sun") lightMode();
  else darkMode();

  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($btnTheme.textContent.trim() === moon) darkMode();
      else lightMode();
    }
  });
}
