import LottieView from "lottie-react-native";
import React, { useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import Actions from "../actions";

const MovieCard = (props) => {
  const { movie } = props;

  const animationRef = useRef();

  const add = () => {
    if (movie.watchlisted) {
      animationRef.current.reset();
      props.removeFromWatchlist(movie.imdbID);
    } else {
      animationRef.current.play();
      props.addToWatchlist(movie.imdbID);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.likeButton} onPress={add}>
        <LottieView
          style={{ width: 25, height: 25 }}
          source={require("../assets/animation.json")}
          ref={animationRef}
          loop={false}
          speed={movie.watchlisted ? -1 : 1}
          progress={movie.watchlisted ? 60 : 0}
        />
      </TouchableOpacity>
      <Image
        source={{
          uri:
            movie.Poster != "N/A"
              ? movie.Poster
              : "https://catalog.osaarchivum.org/assets/thumbnail_placeholder_movie-480596e192e7043677f77cf78b13bdd1.jpg",
        }}
        style={styles.poster}
      />
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
  likeButton: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
    top: 5,
    right: 5,
    borderRadius: 50,
    elevation: 3,
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

const mapStateToProps = (state) => {
  const { search } = state;
  return { results: search.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToWatchlist: (id) => dispatch(Actions.Watchlist.addToWatchlist(id)),
    removeFromWatchlist: () =>
      dispatch(Actions.Watchlist.removeFromWatchlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
