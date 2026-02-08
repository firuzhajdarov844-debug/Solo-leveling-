function useMana(amount){
  if(PLAYER.mana >= amount){
    PLAYER.mana -= amount;
    return true;
  }else{
    return false;
  }
}

function useStamina(amount){
  if(PLAYER.stamina >= amount){
    PLAYER.stamina -= amount;
    return true;
  }else{
    return false;
  }
}

function addFatigue(amount){
  PLAYER.fatigue += amount;
  if(PLAYER.fatigue > PLAYER.fatigueMax){
    PLAYER.fatigue = PLAYER.fatigueMax;
  }
}

function regenEnergy(){
  if(PLAYER.mana < PLAYER.manaMax){
    PLAYER.mana += 0.5;
  }
  if(PLAYER.stamina < PLAYER.staminaMax){
    PLAYER.stamina += 0.5;
  }
  if(PLAYER.fatigue > 0){
    PLAYER.fatigue -= 0.2;
  }
}
