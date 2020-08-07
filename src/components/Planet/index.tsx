import React from "react";

import EarthFull from "../../assets/planets/earth.svg";
import JupiterFull from "../../assets/planets/jupiter.svg";
import MarsFull from "../../assets/planets/mars.svg";
import MercuryFull from "../../assets/planets/mercury.svg";
import NeptuneFull from "../../assets/planets/neptune.svg";
import PlutoFull from "../../assets/planets/pluto.svg";
import SaturnFull from "../../assets/planets/saturn.svg";
import SunFull from "../../assets/planets/sun.svg";
import UranusFull from "../../assets/planets/uranus.svg";
import VenusFull from "../../assets/planets/venus.svg";

import Earth from "../../assets/planets/half/earth.svg";
import Jupiter from "../../assets/planets/half/jupiter.svg";
import Mars from "../../assets/planets/half/mars.svg";
import Mercury from "../../assets/planets/half/mercury.svg";
import Neptune from "../../assets/planets/half/neptune.svg";
import Pluto from "../../assets/planets/half/pluto.svg";
import Saturn from "../../assets/planets/half/saturn.svg";
import Sun from "../../assets/planets/half/sun.svg";
import Uranus from "../../assets/planets/half/uranus.svg";
import Venus from "../../assets/planets/half/venus.svg";

interface Props {
  type: "full" | "half";
  name: string;
  dimension: number;
}

const Planet: React.FC<Props> = ({ name, dimension, type }) => {
  const dimensions = { width: dimension, height: dimension };
  const getFullPlanets = (icon: string) => {
    switch (icon) {
      case "earth":
        return <EarthFull {...dimensions} />;
      case "jupiter":
        return <JupiterFull {...dimensions} />;
      case "mars":
        return <MarsFull {...dimensions} />;
      case "mercury":
        return <MercuryFull {...dimensions} />;
      case "neptune":
        return <NeptuneFull {...dimensions} />;
      case "pluto":
        return <PlutoFull {...dimensions} />;
      case "saturn":
        return <SaturnFull {...dimensions} />;
      case "uranus":
        return <UranusFull {...dimensions} />;
      case "venus":
        return <VenusFull {...dimensions} />;

      default:
        return <SunFull {...dimensions} />;
    }
  };

  const getHalfPlanets = (icon: string) => {
    switch (icon) {
      case "earth":
        return <Earth {...dimensions} />;
      case "jupiter":
        return <Jupiter {...dimensions} />;
      case "mars":
        return <Mars {...dimensions} />;
      case "mercury":
        return <Mercury {...dimensions} />;
      case "neptune":
        return <Neptune {...dimensions} />;
      case "pluto":
        return <Pluto {...dimensions} />;
      case "saturn":
        return <Saturn {...dimensions} />;
      case "uranus":
        return <Uranus {...dimensions} />;
      case "venus":
        return <Venus {...dimensions} />;

      default:
        return <Sun {...dimensions} />;
    }
  };

  return <>{type === "full" ? getFullPlanets(name) : getHalfPlanets(name)}</>;
};

export default Planet;
