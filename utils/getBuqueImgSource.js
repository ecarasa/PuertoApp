export const BUQUES_IMG_SOURCES = [
  require("../assets/img/barco1.png"),
  require("../assets/img/barco2.png"),
  require("../assets/img/barco3.png"),
  require("../assets/img/barco4.png"),
  require("../assets/img/barco5.png"),
  require("../assets/img/barco6.png"),
  require("../assets/img/barco7.png"),
  require("../assets/img/barco8.png"),
];

export const getBuqueImgSource = (type) => {
  if (0 <= type && type < 35) {
    const index = Math.floor(type / 5);
    return BUQUES_IMG_SOURCES[index];
  } else {
    return BUQUES_IMG_SOURCES[7];
  }
};
