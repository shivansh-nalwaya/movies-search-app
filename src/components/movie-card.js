import _ from "lodash";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const MovieCard = ({ movie }) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <View style={styles.detailContainer}>
        <Text style={styles.movieTitle}>{movie.Title}</Text>
        <Text style={styles.movieYear}>Year - {movie.Year}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: "45%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
  },
  poster: {
    height: 200,
    width: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  detailContainer: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    marginTop: -15,
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    justifyContent: "center",
    borderColor: "#dbdbdb",
  },
  movieTitle: { fontSize: 16, fontWeight: "bold", textAlign: "center" },
  movieYear: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
});

export default MovieCard;
