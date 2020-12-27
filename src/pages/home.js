import React from "react";
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  KeyboardAvoidingView,
  Button,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
  return (
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <KeyboardAvoidingView style={styles.searchContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Movie</Text>
          <Text style={styles.title}>Search</Text>
          <Text style={styles.subtitle}>
            Just enter a search term and get a list of movies related to the
            term.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.searchBox} />
          <TouchableOpacity style={styles.searchButton}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      <View style={styles.recentContainer}>
        <Text style={styles.heading}>Recent Searches</Text>
        <Text style={styles.subheading}>No Recent Searches</Text>
      </View>
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
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
  },
  searchBox: {
    flex: 1,
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
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  recentContainer: {
    flex: 1,
    padding: 30,
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "lightpink",
  },
});

export default Home;
