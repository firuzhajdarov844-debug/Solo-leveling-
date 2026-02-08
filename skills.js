if(skill.cost?.mana){
  if(!useMana(skill.cost.mana)){
    alert("Недостаточно маны");
    return false;
  }
}
