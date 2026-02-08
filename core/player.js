let PLAYER = {
  class: null,
  stats: {
    str: 1,
    end: 1,
    int: 1
  },
  rank: "F",
  level: 1,
  xp: 0,
  mana: 10,
  stamina: 10
};

function setClass(cls){
  PLAYER.class = cls;
  localStorage.setItem("V4_CLASS", cls);
  window.location.href = "system.html";
}

function applyClassStats(data){
  PLAYER.stats.str += data.stats.str;
  PLAYER.stats.end += data.stats.end;
  PLAYER.stats.int += data.stats.int;
}
function gainXP(amount = 10){
  PLAYER.xp += amount;

  if(PLAYER.xp >= 100){
    PLAYER.xp = 0;
    PLAYER.level++;
    checkRank(); // ← ВАЖНО
  }
}
let PLAYER = {
  class: null,
  stats: {
    str: 1,
    end: 1,
    int: 1,
    agi: 1
  },
  rank: "F",
  level: 1,
  xp: 0,

  mana: 50,
  manaMax: 50,

  stamina: 50,
  staminaMax: 50,

  fatigue: 0,
  fatigueMax: 100
};
