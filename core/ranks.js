let RANKS = {};

function loadRanks(){
  return fetch("data/ranks.json").then(r=>r.json()).then(data=>{
    RANKS = data;
  });
}

function checkRank(){
  const lvl = PLAYER.level;
  let currentRank = PLAYER.rank;

  Object.keys(RANKS).forEach(r=>{
    if(lvl >= RANKS[r].minLevel){
      currentRank = r;
    }
  });

  if(currentRank !== PLAYER.rank){
    PLAYER.rank = currentRank;
    onRankUp(currentRank);
  }
}

function onRankUp(rank){
  console.log("RANK UP:", rank);
  // здесь позже: аура, эффекты, AI реакции, новые зоны, навыки
}
