const path = '../../assets/planets/';

const images = {
  half: {
    earth: import(`${path}/half/earth.svg`),
    jupiter: import(`${path}/half/jupiter.svg`),
    mars: import(`${path}/half/mars.svg`),
    mercury: import(`${path}/half/mercury.svg`),
    neptune: import(`${path}/half/neptune.svg`),
    pluto: import(`${path}/half/pluto.svg`),
    saturn: import(`${path}/half/saturn.svg`),
    sun: import(`${path}/half/sun.svg`),
    uranus: import(`${path}/half/uranus.svg`),
    venus: import(`${path}/half/venus.svg`),
  },
};

export default images;
