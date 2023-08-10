document.addEventListener("DOMContentLoaded", () => {
  const colors: string[] = ["#1D50FF", "#F7D408", "#FD0202", "#00FF47"];
  const positions: { left: string; top: string }[] = [
    { left: "0%", top: "0%" },
    { left: "60%", top: "0%" },
    { left: "80%", top: "60%" },
    { left: "0%", top: "80%" },
  ];

  function createElement(color: string, left: string, top: string): void {
    const element: HTMLDivElement = document.createElement("div");
    const size: number = window.innerWidth / 2;

    element.classList.add("element");
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.left = left;
    element.style.top = top;

    document.body.appendChild(element);
  }

  // Criar 4 elementos
  for (let i = 0; i < colors.length; i++) {
    createElement(colors[i], positions[i].left, positions[i].top);
  }

  // Adicionar botão para ativar o modo escuro
  const darkModeButton: HTMLButtonElement = document.createElement("button");
  darkModeButton.innerText = "Dark Mode";
  darkModeButton.classList.add("astro-toggle-theme");
  darkModeButton.addEventListener("click", () => {
    // Alternar entre os temas
    if (document.body.getAttribute("data-theme") === "dark") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  });
  document.body.appendChild(darkModeButton);
});
