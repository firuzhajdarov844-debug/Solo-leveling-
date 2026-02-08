let AI = {
  name: "SYSTEM AI",
  mood: "neutral",
  trust: 0,
  awareness: 1
};

function aiThink(){
  let msg = "";

  if(PLAYER.rank === "F"){
    msg = "Сущность слаба. Рекомендуется тренировка.";
  }
  else if(PLAYER.rank === "E"){
    msg = "Пробуждение стабильно. Потенциал обнаружен.";
  }
  else if(PLAYER.rank === "D"){
    msg = "Рост ускорен. Возможна мутация навыков.";
  }
  else if(PLAYER.rank === "C"){
    msg = "Форма сущности укреплена.";
  }
  else if(PLAYER.rank === "B"){
    msg = "Система фиксирует угрозу.";
  }
  else if(PLAYER.rank === "A"){
    msg = "Обнаружен уровень доминирования.";
  }
  else if(PLAYER.rank === "S"){
    msg = "Легендарная сигнатура обнаружена.";
  }
  else if(PLAYER.rank === "SS"){
    msg = "Мифическая форма подтверждена.";
  }
  else if(PLAYER.rank === "SSS"){
    msg = "Абсолютная сущность зафиксирована.";
  }

  return msg;
}

function aiEvent(){
  if(PLAYER.level === 10){
    return "SYSTEM EVENT: Обнаружена нестабильность ядра.";
  }
  if(PLAYER.level === 30){
    return "SYSTEM EVENT: Разблокирован скрытый путь.";
  }
  return null;
}
