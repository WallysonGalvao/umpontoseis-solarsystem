import React, { useState, useEffect, useMemo, useCallback } from "react";
import Constants from "expo-constants";
import { Feather } from "@expo/vector-icons";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";

import PlanetCardMedium from "../../components/PlanetCardMedium";
import Constellation from "../../components/Constellation";

interface Planet {
  name: string;
  description: string;
  icon: string;
  isFavorite: boolean;
}

interface IParams {
  searchPlanet: string;
}

const Search = () => {
  const navigation = useNavigation();
  const searchParms = useRoute();
  const { searchPlanet } = searchParms.params as IParams;
  const [value, onChangeText] = useState(searchPlanet);

  const [planets, setPlanets] = useState<Planet[]>([]);

  async function loadStorageData(): Promise<void> {
    const data = await AsyncStorage.getItem("@solarsystem:planets");

    if (data) {
      const dataParsed: Planet[] = JSON.parse(data);
      setPlanets(dataParsed);
    }
  }

  useEffect(() => {
    loadStorageData();
  }, [value]);

  const planet = useMemo(() => {
    const toSearch = searchPlanet.toLocaleLowerCase();
    return planets.find((p) => p.name.toLocaleLowerCase() === toSearch);
  }, [planets]);

  const otherPlanets = useMemo(() => {
    const toSearch = searchPlanet.toLocaleLowerCase();
    return planets.filter((p) => p.name.toLocaleLowerCase() !== toSearch);
  }, [planets]);

  const handleFavorite = async (planet: Planet) => {
    const index = planets.findIndex(
      (p) => p.name.toLocaleLowerCase() === planet.name.toLocaleLowerCase()
    );
    const selectedPlanet = planets[index];
    selectedPlanet.isFavorite = !selectedPlanet.isFavorite;

    await AsyncStorage.setItem("@solarsystem:planets", JSON.stringify(planets));
    loadStorageData();
  };

  return (
    <View style={styles.wrapper}>
      <Constellation />
      <View style={styles.content}>
        <View style={styles.head}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#FFFFFF" />
          </TouchableOpacity>

          <Feather name="settings" size={24} color="#FFFFFF" />
        </View>

        <Text style={styles.subText}>Resultado da busca</Text>

        <View style={styles.inputContainer}>
          <Feather
            name="search"
            size={17}
            color="#FFFFFF"
            style={{ paddingRight: 10 }}
          />
          <TextInput
            placeholder="Procure planetas, asteroides, estrelas..."
            style={{ color: "#fff" }}
            value={value}
            onChangeText={(text) => onChangeText(text)}
            onSubmitEditing={() => loadStorageData()}
          />
        </View>

        <ScrollView>
          {planet && (
            <PlanetCardMedium
              name={planet.name}
              description={planet.description}
              icon={planet.icon}
              isFavorite={planet.isFavorite}
              onPress={() => handleFavorite(planet)}
            />
          )}

          <Text style={styles.sectionTitle}>Você também pode gostar</Text>

          {otherPlanets.map((planet) => (
            <PlanetCardMedium
              key={planet.name}
              name={planet.name}
              description={planet.description}
              icon={planet.icon}
              isFavorite={planet.isFavorite}
              onPress={() => handleFavorite(planet)}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    marginTop: 40,
    marginBottom: 40,
    backgroundColor: "#151515",
  },
  content: {
    paddingHorizontal: 15,
    paddingTop: 20 + Constants.statusBarHeight,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  username: {
    fontFamily: "Roboto_400Regular",
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subText: {
    fontFamily: "Roboto_400Regular",
    fontSize: 32,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 10,
  },
  sectionTitle: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#FFFFFF",
    /* marginTop: 30, */
    marginBottom: 20,
  },
  sections: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
