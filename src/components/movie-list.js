import _ from "lodash";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MovieCard from "./movie-card";

const MovieList = ({ list }) => {
  return (
    <>
      {_.map(_.chunk(list, 2), (group, index) => (
        <View key={`movie-list-${index}`} style={styles.container}>
          <MovieCard movie={group[0]} />
          <MovieCard movie={group[1]} />
        </View>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    width: "100%",
    marginVertical: 10,
  },
});

export default MovieList;
