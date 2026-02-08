let SYSTEM = {
  difficulty: null,
  world: {},
  player: {},
  ai: {}
};

function setDifficulty(mode){
  SYSTEM.difficulty = mode;
  localStorage.setItem("V4_DIFFICULTY", mode);
  window.location.href = "class.html";
}

function loadDifficulty(){
  return fetch("data/difficulties.json").then(r=>r.json());
}

function initSystem(){
  SYSTEM.difficulty = localStorage.getItem("V4_DIFFICULTY");
  SYSTEM.class = localStorage.getItem("V4_CLASS");
}
setInterval(()=>{
  regenEnergy();
  savePlayer();
}, 1000);
