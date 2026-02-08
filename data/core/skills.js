let SKILLS = {};
let PLAYER_SKILLS = [];

function loadSkills(){
  return fetch("data/skills.json")
    .then(r=>r.json())
    .then(data=>{
      SKILLS = data;
    });
}

function canLearnSkill(skill){
  const req = skill.req;

  if(PLAYER.level < req.level) return false;
  if(PLAYER.rank !== req.rank) return false;
  if(skill.class && !skill.class.includes(PLAYER.class)) return false;

  return true;
}

function learnSkill(id){
  const skill = SKILLS[id];
  if(!canLearnSkill(skill)) return false;

  PLAYER_SKILLS.push(id);

  // применяем бонусы
  if(skill.stats){
    Object.keys(skill.stats).forEach(stat=>{
      if(PLAYER.stats[stat] !== undefined){
        PLAYER.stats[stat] += skill.stats[stat];
      }
    });
  }

  savePlayer();
  return true;
}

function savePlayer(){
  localStorage.setItem("V4_PLAYER", JSON.stringify({
    PLAYER,
    PLAYER_SKILLS
  }));
}

function loadPlayer(){
  const data = JSON.parse(localStorage.getItem("V4_PLAYER"));
  if(data){
    PLAYER = data.PLAYER;
    PLAYER_SKILLS = data.PLAYER_SKILLS || [];
  }
}
