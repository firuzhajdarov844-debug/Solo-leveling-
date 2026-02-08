const textEl = document.getElementById("text");
const timerEl = document.getElementById("timer");
const buttonsEl = document.getElementById("buttons");

const typeSound = document.getElementById("typeSound");
const alertSound = document.getElementById("alertSound");

const messages = [
  "ИНИЦИАЛИЗАЦИЯ СИСТЕМЫ...",
  "ПОЗДРАВЛЯЕМ.",
  "ВЫ СТАЛИ ИГРОКОМ.",
  "",
  "ЕСЛИ ВЫ ОТКАЖЕТЕСЬ —",
  "ЧЕРЕЗ 0.002 СЕКУНДЫ ВЫ УМРЁТЕ.",
  "",
  "ВЫ ПРИНИМАЕТЕ КВЕСТ?"
];

let msgIndex = 0;
let charIndex = 0;

function typeText(){
  if(msgIndex < messages.length){
    let msg = messages[msgIndex];
    if(charIndex < msg.length){
      textEl.innerHTML += msg.charAt(charIndex);
      typeSound.currentTime = 0;
      typeSound.play();
      charIndex++;
      setTimeout(typeText, 40);
    } else {
      textEl.innerHTML += "<br>";
      msgIndex++;
      charIndex = 0;
      setTimeout(typeText, 400);
    }
  } else {
    startTimer();
  }
}

function startTimer(){
  timerEl.classList.remove("hidden");
  buttonsEl.classList.remove("hidden");
  alertSound.play();

  let time = 2.000;

  let interval = setInterval(()=>{
    time -= 0.002;
    timerEl.innerText = "СМЕРТЬ ЧЕРЕЗ: " + time.toFixed(3);

    if(time <= 0){
      clearInterval(interval);
      death();
    }
  }, 2);
}

function acceptQuest(){
  document.body.style.background = "black";
  textEl.innerHTML = "КВЕСТ ПРИНЯТ.\nСИСТЕМА АКТИВИРОВАНА.";
  timerEl.classList.add("hidden");
  buttonsEl.classList.add("hidden");

  setTimeout(()=>{
    window.location.href = "app.html";
  }, 2000);
}

function declineQuest(){
  death();
}

function death(){
  document.body.style.background = "darkred";
  textEl.innerHTML = "СИСТЕМА: ОТКАЗ.\nСТАТУС: УНИЧТОЖЕНИЕ.";
  timerEl.classList.add("hidden");
  buttonsEl.classList.add("hidden");
}

typeText();
