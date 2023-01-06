export function LinkSection(props) {
  const $link = document.createElement("a"),
    { href, text } = props;

  $link.classList.add("nav-link", "fw-bold", "dark-color-white");

  $link.href = href;
  $link.textContent = text;

  return $link;
}
