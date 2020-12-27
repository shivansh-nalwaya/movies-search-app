import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import Actions from "../actions";
import { ScrollView } from "react-native-gesture-handler";

const MovieList = ({ list }) => {
  return (
    <>
      {list.map((movie) => (
        <View key={movie.imdbID}>
          <Image
            source={{ uri: movie.Poster }}
            style={{ height: 100, width: 100 }}
          />
          <Text>Title: {movie.Title}</Text>
        </View>
      ))}
    </>
  );
};

const Home = (props) => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <ScrollView>
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
          {props.results.length == 0 && (
            <Text style={styles.subheading}>No Results</Text>
          )}
          <MovieList list={props.results} />
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
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "coral",
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
    backgroundColor: "yellow",
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
    backgroundColor: "lightpink",
  },
});

const mapStateToProps = (state) => {
  const { search } = state;
  return { results: search.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateTerm: (term) => dispatch(Actions.Search.updateTerm(term)),
    search: () => dispatch(Actions.Search.search()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
