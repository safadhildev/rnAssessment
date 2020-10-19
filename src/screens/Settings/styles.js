import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA726",
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 50,
  },
  profileWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  image: {
    width: 130,
    height: 130,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 24,
    marginTop: 10,
    color: "#000",
  },
  locationIcon: {
    width: 20,
    height: 20,
  },
  locationText: {
    fontWeight: "700",
    fontSize: 20,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginVertical: 10,
  },
  listIcon: {
    width: 25,
    height: 25,
  },
  listText: {
    flex: 1,
    marginRight: 10,
    fontWeight: "500",
    fontSize: 20,
    color: "#000",
  },
  countWrapper: {
    backgroundColor: "#FFA726",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  countText: {
    color: "#fff",
  },
});

export default styles;
