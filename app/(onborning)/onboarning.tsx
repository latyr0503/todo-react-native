import { COLORS, FONT_SIZES } from "@/constants/themes";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    id: "1",
    title: "Votre Porte d'Accès à l'Apprentissage",
    description:
      "Découvrez un monde de savoir à portée de main. Que vous souhaitiez acquérir de nouvelles compétences ou perfectionner vos connaissances, XARALA est là pour vous accompagner à chaque étape. ",
    image: require("@/assets/images/1.png"),
  },
  {
    id: "2",
    title: "Trouvez le Parcours Qui Vous Correspond",
    description:
      "Plongez dans notre vaste catalogue de cours couvrant des domaines variés, du développement personnel aux technologies les plus avancées. Utilisez nos filtres intelligents pour trouver facilement les cours qui correspondent à vos intérêts et à votre niveau.",
    image: require("@/assets/images/2.png"),
  },
  {
    id: "3",
    title: "Atteignez Vos Objectifs",
    description:
      "Suivez votre progression en temps réel grâce à notre tableau de bord intuitif. Chaque étape franchie vous rapproche de votre certification, reconnue par des experts du secteur. Engagez-vous pleinement dans votre apprentissage et célébrez chaque réussite avec XARALA.",
    image: require("@/assets/images/3.png"),
  },
];

export default function Onboarning() {
  const [currentSlide, setCurrentSlide] = useState(false);

  const buttonLabel = (label: string) => (
    <View style={styles.buttonContainer}>
      <Text
        style={{
          color: "white",
          textAlign: "center",
          fontSize: FONT_SIZES.h4,
          padding: 12,
        }}
      >
        {label}
      </Text>
    </View>
  );

  if (!currentSlide) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.divImage}>
                <View style={styles.pointOrange}></View>
                <Image source={item.image} style={styles.image} />
                <View style={styles.pointvert}></View>
              </View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          );
        }}
        activeDotStyle={{
          backgroundColor: "#FF7F2A",
          width: 40,
          height: 10,
          borderRadius: 5,
          marginLeft: 3,
          marginTop: 3,
        }}
        bottomButton={true}
        renderNextButton={() => buttonLabel("Suivant")}
        renderDoneButton={() => buttonLabel("DONE")}
        onDone={() => {
          setCurrentSlide(true);
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: "black", fontSize: FONT_SIZES.h1 }}>
        Welcome to our app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#0A58A5 ",
    flex: 1,
    alignItems: "center",
    marginTop: 130,
    padding: 20,
  },
  image: {
    width: FONT_SIZES.width - 80,
    height: 400,
    resizeMode: "contain",
  },
  title: {
    color: COLORS.title,
    fontSize: FONT_SIZES.h1,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    textAlign: "center",
  },
  pointOrange: {
    backgroundColor: "#FF7F2A",
    width: 100,
    height: 100,
    borderRadius: 100,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    position: "absolute",
  },
  pointvert: {
    backgroundColor: "#00A150",
    width: 75,
    height: 75,
    borderRadius: 100,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 20,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
  divImage: {
    position: "relative",
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: "#FF7F2A",
    borderRadius: 30,
  },
});
