import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 30,
  },
  switchWrapper: {
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: "#BDBDBD",
    padding: 5,
    marginTop: 50,
  },
  leftSwitchWrapper: {
    padding: 10,
    alignItems: "center",
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
  },
  rightSwitchWrapper: {
    padding: 10,
    alignItems: "center",
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
  },
  switchText: {
    textAlign: "center",
    color: "#4527A0",
    fontWeight: "bold",
    fontSize: 28,
  },
  input: {
    borderBottomColor: "#424242",
    borderBottomWidth: 1,
    fontSize: 18,
    marginTop: 50,
  },
  buttonWrapper: {
    alignItems: "center",
    backgroundColor: "#FFA726",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 50,
    marginTop: 50,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 24,
  },
});

export default styles;
