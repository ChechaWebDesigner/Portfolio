export function BtnChangeTheme(props) {
  const $btn = document.createElement("button"),
    { dataDark, moon, sun } = props;

  $btn.classList.add(
    "btn-theme-change",
    "theme-page",
    "d-flex",
    "justify-content-center",
    "align-items-center",
    "p-0",
    "fs-3",
    "border",
    "border-primary",
    "rounded-circle"
  );

  $btn.textContent = sun;

  const $elementsDark = document.querySelectorAll(`${dataDark}`);

  const mode = localStorage.getItem("mode") ?? "moon";

  const lightMode = () => {
    $elementsDark.forEach((el) => el.classList.remove("dark-mode"));
    $btn.textContent = moon;
    localStorage.setItem("mode", "sun");
  };

  const darkMode = () => {
    $elementsDark.forEach((el) => el.classList.add("dark-mode"));
    $btn.textContent = sun;
    localStorage.setItem("mode", "moon");
  };

  if (mode === "sun") lightMode();
  else darkMode();

  document.addEventListener("click", (e) => {
    if (e.target === $btn) {
      if ($btn.textContent.trim() === moon) darkMode();
      else lightMode();
    }
  });

  return $btn;
}
