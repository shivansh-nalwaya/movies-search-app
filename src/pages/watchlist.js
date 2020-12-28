import _ from "lodash";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Actions from "../actions";
import MovieList from "../components/movie-list";

const Watchlist = (props) => {
  useEffect(() => {
    props.loadWatchlist();
  }, []);

  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView>
        <Text style={styles.heading}>Watchlist</Text>
        <View style={styles.resultsContainer}>
          {_.size(props.results) == 0 && (
            <Text style={styles.subheading}>No movies watchlisted</Text>
          )}
          {props.loading && (
            <View style={styles.center}>
              <LottieView
                style={{ width: 200, height: 200 }}
                source={require("../assets/loading-animation.json")}
                autoPlay={true}
                loop={true}
              />
              <Text style={styles.loadingText}>Loading your watchlist...</Text>
            </View>
          )}
          <MovieList
            onRemove={() => props.loadWatchlist()}
            list={_.map(props.results, (m) => ({ ...m, watchlisted: true }))}
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 44,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    width: "100%",
    textAlign: "center",
    paddingTop: 100,
    paddingBottom: 20,
    backgroundColor: "#4BC3E0",
  },
  subheading: {
    marginTop: 20,
  },
  resultsContainer: {
    flex: 1,
    padding: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  center: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    marginTop: -20,
  },
});

const mapStateToProps = (state) => {
  const { watchlist } = state;
  return {
    results: watchlist.list,
    loading: watchlist.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadWatchlist: () => dispatch(Actions.Watchlist.loadWatchlist()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);
