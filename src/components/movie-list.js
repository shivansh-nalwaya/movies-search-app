import _ from "lodash";
import React from "react";
import { StyleSheet, View } from "react-native";
import MovieCard from "./movie-card";

const MovieList = ({ list }) => {
  return (
    <>
      {_.map(_.chunk(list, 2), (group) => (
        <View key={`movie-list-${_.random(100000)}`} style={styles.container}>
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
