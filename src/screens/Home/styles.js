import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    backgroundColor: "#FFA726",
  },
  searchInputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    margin: 20,
    borderRadius: 50,
    paddingHorizontal: 20,
  },
  inputText: {
    flex: 1,
    fontSize: 18,
    marginHorizontal: 10,
  },
  iconWrapper: {
    width: 20,
    height: 20,
  },
  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 4,
    paddingVertical: 15,
    backgroundColor: "#FFF",
    borderRadius: 10,
  },
  itemImageWrapper: {
    flex: 1,
    width: 70,
    height: 70,
  },
  itemDetailsWrapper: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  itemText: {
    flex: 1,
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  itemPriceWrapper: {
    flex: 1,
    alignItems: "center",
  },
  itemPriceText: {
    fontSize: 20,
    color: "#4527A0",
  },
  quantityWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#000",
    borderWidth: 1,
    borderColor: "#ececec",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export default styles;
