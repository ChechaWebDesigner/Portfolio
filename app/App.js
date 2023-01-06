import { AboutMe } from "./components/AboutMe.js";
import { BtnChangeTheme } from "./components/BtnChangeTheme.js";
import { Navbar } from "./components/Navbar.js";
import { writeEffect } from "./helpers/writing.js";
import { TitleSection } from "./components/TitleSection.js";
import { Skills } from "./components/Skills.js";
import { SoftSkills } from "./components/SoftSkills.js";
import { Projects } from "./components/Projects.js";
import { ContactForm } from "./components/ContactForm.js";
import { contact } from "./helpers/contact.js";

export async function App() {
  const d = document,
    $root = d.getElementById("root");

  // Navbar Links

  const links = [
    {
      href: "#about-me",
      text: "About me",
    },
    {
      href: "#skills",
      text: "Skills",
    },
    {
      href: "#soft-skills",
      text: "Soft Skills",
    },
    {
      href: "#projects",
      text: "Projects",
    },
  ];
  const buttons = [
    {
      icon: `<i class="fa-solid fa-file"></i>`,
      href: "./app/assets/CV/César Joel González Oliva CV.pdf",
      target: "_blank",
      text: "CV",
    },
    {
      icon: `<i class="fa-solid fa-envelope"></i>`,
      href: "#contact",
      text: "Contact me",
    },
  ];

  // Ading Components

  await $root.appendChild(
    BtnChangeTheme({ dataDark: "[data-dark]", moon: "🌛", sun: "🌞" })
  );
  await $root.appendChild(
    Navbar({
      links,
      buttons,
    })
  );
  await $root.appendChild(
    AboutMe({
      description:
        "My full name is César Joel González Oliva, I am 18 years old and I am very excited to get my first job in a company. I am a responsible, honest, self-taught and organized young man. Finally I live in Guatemala City",
      imgSource: "./app/assets/images/my-picture.png",
    })
  );
  await $root.appendChild(
    TitleSection({
      id: "skills",
      text: "Skills",
    })
  );
  await $root.appendChild(Skills());
  await $root.appendChild(
    TitleSection({
      id: "soft-skills",
      text: "Soft Skills",
    })
  );
  await $root.appendChild(SoftSkills());
  await $root.appendChild(
    TitleSection({
      id: "projects",
      text: "Projects",
    })
  );
  await $root.appendChild(Projects());

  // ID Form
  const idForm = "frm-contact";

  await $root.appendChild(
    ContactForm({
      action: "https://formspree.io/f/mvoyqrlw",
      method: "post",
      id: idForm,
      name: "Portfolio-Contact",
    })
  );

  writeEffect(".my-name");
  contact(idForm);
}
