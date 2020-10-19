import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA726",
  },
  welcomeText: {
    fontWeight: "bold",
    textAlign: "center",
    marginHorizontal: 70,
    fontSize: 30,
  },
  imageWrapper: {
    width: 250,
    height: 250,
  },
  buttonWrapper: {
    backgroundColor: "#FFF",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 50,
  },
  buttonText: {
    color: "#4527A0",
    fontWeight: "bold",
    fontSize: 24,
  },
  messageText: {
    fontSize: 14,
    color: "#FFF",
    marginTop: 30,
  },
  signUpText: {
    fontSize: 24,
    color: "#FFF",
    textDecorationLine: "underline",
  },
});

export default styles;
