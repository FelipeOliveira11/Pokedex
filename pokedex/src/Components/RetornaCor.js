const RetornaCor = (type) => {
  switch (type) {
    case "Grass":
      return "rgba(34,139,34, 0.7)";
    case "Fire":
      return "rgba(255,165,0, 0.7)";
    case "Water":
      return "rgba(135,206,235, 0.7)";
    case "Bug":
      return "rgba(173,255,47,0.7)";
    case "Normal":
      return "rgba(250,235,215,0.7)";
    case "Poison":
      return "rgba(148,0,211,0.7)";
    case "Electric":
      return "rgba(255,255,0,0.7)";
    case "Ground":
      return "rgba(184,134,11,0.7)";
    case "Fighting":
      return "rgba(178,34,34,0.7)";
    case "Psychic":
      return "rgba(	255,0,255,0.7)";
    case "Rock":
      return "rgba(128,128,128,0.7)";
    case "Ghost":
      return "rgba(72,61,139,0.7)";
    case "Ice":
      return "rgba(0,255,255,0.7)";
    case "Dragon":
      return "rgba(65,105,225,0.7)";
  }
};

export default RetornaCor;
