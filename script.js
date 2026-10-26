const button = document.getElementById("openCard");
const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");
const replay = document.getElementById("replay");

button.addEventListener("click", () => {
  const isOpen = envelope.classList.toggle("open");
  button.setAttribute("aria-expanded", String(isOpen));
  hint.textContent = isOpen ? "Ну всё, теперь назад дороги нет" : "Нажми на печать, чтобы открыть";
  replay.hidden = !isOpen;
  if (isOpen) {
    window.setTimeout(() => {
      const letter = document.querySelector(".letter-inner");
      letter.scrollTop = 0;
    }, 300);
  }
});

replay.addEventListener("click", () => {
  envelope.classList.remove("open");
  button.setAttribute("aria-expanded", "false");
  hint.textContent = "Нажми на печать, чтобы открыть";
  replay.hidden = true;
});
