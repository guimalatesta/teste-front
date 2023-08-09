document.addEventListener("DOMContentLoaded", () => {
  const colors: string[] = ["#1D50FF", "#F7D408", "#FD0202", "#00FF47"];

  function createCircle(
    color: string,
    left: number,
    top: number,
    direction: string
  ): void {
    const circle: HTMLDivElement = document.createElement("div");
    const size: number =
      window.innerWidth; /* Tamanho baseado na largura da janela */

    circle.classList.add("circle");
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${left}%`;
    circle.style.top = `${top}%`;
    circle.style.backgroundImage += `, radial-gradient(circle at center, ${color}, transparent)`;
    circle.style.animationDirection = direction;

    document.body.appendChild(circle);
  }

  // Criar 4 círculos, cada um em uma aresta da tela
  createCircle(colors[0], 0, 0, "normal");
  createCircle(colors[1], 100, 0, "reverse");
  createCircle(colors[2], 0, 100, "reverse");
  createCircle(colors[3], 100, 100, "normal");
});
