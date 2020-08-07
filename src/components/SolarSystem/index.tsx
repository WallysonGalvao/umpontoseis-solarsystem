import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Constants from "expo-constants";

import BGSolarSystem from "../../assets/backgrounds/background-solar-system.svg";

const SolarSystem = () => {
  return <BGSolarSystem style={styles.image} />;
};

export default SolarSystem;

const styles = StyleSheet.create({
  image: {
    right: 460,
    backgroundColor: "#000",
    bottom: 100,
    zIndex: 0,
  },
});
