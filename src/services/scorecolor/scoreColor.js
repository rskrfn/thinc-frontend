export const scoreColor = (score) => {
  if (Number(score) > 90) {
    return "#2BE6AE";
  } else if (Number(score) > 70) {
    return "#51E72B";
  } else if (Number(score) > 50) {
    return "#CCE72B";
  } else if (Number(score) > 30) {
    return "#E7852B";
  } else {
    return "#E6422B";
  }
};

