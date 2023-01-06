import { BtnLinkSection } from "./BtnLinkSection.js";
import { LinkSection } from "./LinkSection.js";

export function Navbar(props) {
  const d = document,
    $navbar = d.createElement("nav"),
    { links, buttons } = props;

  $navbar.classList.add(
    "navbar",
    "navbar-expand-md",
    "sticky-top",
    "py-3",
    "bg-page"
  );
  $navbar.id = "navbar-element";

  const $containerFluid = d.createElement("div"),
    $navbarCollapse = d.createElement("div"),
    $containerLinks = d.createElement("ul"),
    $containerButtons = d.createElement("div");

  $containerFluid.classList.add("container-fluid");
  $navbarCollapse.classList.add("collapse", "navbar-collapse");
  $navbarCollapse.id = "navbarsExample03";
  $containerLinks.classList.add("navbar-nav", "mb-2", "me-auto");
  $containerButtons.classList.add("container-buttons");

  $containerFluid.innerHTML = `
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarsExample03"
      aria-controls="navbarsExample03"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
    <span class="navbar-toggler-icon"></span>
  </button>
  `;

  links.forEach((el) => {
    const $link = d.createElement("li");
    $link.classList.add("nav-item");
    $link.appendChild(
      LinkSection({
        href: el.href,
        text: el.text,
      })
    );

    $containerLinks.appendChild($link);
  });

  buttons.forEach((el) => {
    $containerButtons.appendChild(
      BtnLinkSection({
        icon: el.icon,
        href: el.href,
        text: el.text,
      })
    );
  });

  $navbarCollapse.appendChild($containerLinks);
  $navbarCollapse.appendChild($containerButtons);

  $containerFluid.appendChild($navbarCollapse);

  $navbar.appendChild($containerFluid);

  return $navbar;
}
