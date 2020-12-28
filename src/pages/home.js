import { Ionicons } from "@expo/vector-icons";
import _ from "lodash";
import LottieView from "lottie-react-native";
import React, { useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import Actions from "../actions";
import MovieList from "../components/movie-list";

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

const Home = (props) => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) {
            props.nextPage();
          }
        }}
        scrollEventThrottle={400}
      >
        <View style={styles.searchContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Movie</Text>
            <Text style={styles.title}>Search</Text>
            <Text style={styles.subtitle}>
              Just enter a search term and get a list of movies related to the
              term.
            </Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Search"
              style={styles.searchBox}
              onChangeText={props.updateTerm}
            />
            <TouchableOpacity
              style={styles.searchButton}
              onPress={props.search}
            >
              <Ionicons name="search" size={32} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.resultsContainer}>
          <Text style={styles.heading}>Results</Text>
          {!!props.error && (
            <Text style={{ ...styles.subheading, color: "red" }}>
              Error: {props.error}
            </Text>
          )}
          {_.size(props.results) == 0 && !props.error && (
            <Text style={styles.subheading}>No Results</Text>
          )}
          {props.loading && (
            <View style={styles.center}>
              <LottieView
                style={{ width: 200, height: 200 }}
                source={require("../assets/loading-animation.json")}
                autoPlay={true}
                loop={true}
              />
              <Text style={styles.loadingText}>Loading movies...</Text>
            </View>
          )}
          <MovieList list={props.results} />
          {props.loadingNextPage && (
            <View style={styles.center}>
              <LottieView
                style={{ width: 200, height: 200 }}
                source={require("../assets/loading-animation.json")}
                autoPlay={true}
                loop={true}
              />
              <Text style={styles.loadingText}>Loading more movies...</Text>
            </View>
          )}
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
  searchContainer: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 60,
    paddingTop: 100,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#4BC3E0",
  },
  title: {
    fontSize: 44,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: { fontSize: 18, textAlign: "center" },
  titleContainer: {},
  heading: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subheading: {
    marginTop: 20,
  },
  inputContainer: {
    marginTop: 40,
    width: "100%",
    flexDirection: "row",
  },
  searchBox: {
    flex: 6,
    fontSize: 24,
    height: 54,
    borderColor: "black",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingLeft: 10,
    borderWidth: 2,
  },
  searchButton: {
    flex: 1,
    marginLeft: -2,
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#EF6553",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  resultsContainer: {
    flex: 1,
    padding: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "white",
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
  const { search } = state;
  return {
    results: search.results,
    loading: search.loading,
    loadingNextPage: search.loadingNextPage,
    error: search.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTerm: (term) => dispatch(Actions.Search.updateTerm(term)),
    search: () => dispatch(Actions.Search.search()),
    nextPage: () => dispatch(Actions.Search.nextPage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
