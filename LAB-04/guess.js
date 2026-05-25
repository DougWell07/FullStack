let numeroSecreto = Math.floor(Math.random() * 99) + 1;
let tentativas = 0;
let jogoEncerrado = false;
 
function verificar() {
  if (jogoEncerrado) return;
 
  const input = document.getElementById("user-input");
  const feedbackBox = document.getElementById("feedback-box");
  const triesEl = document.getElementById("tries");
 
  const valorUsuario = Number(input.value);
 

  if (input.value === "" || valorUsuario < 1 || valorUsuario > 99) {
    feedbackBox.classList.remove("hidden");
    feedbackBox.textContent = " Digite um número válido entre 1 e 99.";
    document.getElementById("feedback-box").style.setProperty("background-color", "#7d4f00");
    return;
  }
 
  tentativas++;
  triesEl.textContent = tentativas;
  feedbackBox.classList.remove("hidden");
 

  if (valorUsuario < numeroSecreto) {
    feedbackBox.textContent = " Muito baixo! Tente um número maior.";
    document.getElementById("feedback-box").style.setProperty("background-color", "red");
 
  } else if (valorUsuario > numeroSecreto) {
    feedbackBox.textContent = " Muito alto! Tente um número menor.";
    document.getElementById("feedback-box").style.setProperty("background-color", "red");
 
  } else {
    feedbackBox.textContent = ` Parabéns! Você acertou em ${tentativas} tentativa(s)!`;
    document.getElementById("feedback-box").style.setProperty("background-color", "#1a6b3c");
    jogoEncerrado = true;
  }
 
  input.value = "";
  input.focus();
}
 
function reiniciar() {
  numeroSecreto = Math.floor(Math.random() * 99) + 1;
  tentativas = 0;
  jogoEncerrado = false;
 
  document.getElementById("tries").textContent = "0";
  document.getElementById("user-input").value = "";
 
  const feedbackBox = document.getElementById("feedback-box");
  feedbackBox.classList.add("hidden");
  feedbackBox.textContent = "";
  feedbackBox.style.removeProperty("background-color");
}
 
document.getElementById("user-input").addEventListener("keydown", function(e) {
  if (e.key === "Enter") verificar();
});
 