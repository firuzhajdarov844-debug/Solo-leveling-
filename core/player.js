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
