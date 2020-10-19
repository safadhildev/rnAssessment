import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import sampleData from "../../data.json";
import styles from "./styles";

const searchIcon = require("../../../assets/search.png");
const sofaImg = require("../../../assets/sofa_orange.png");
const armchairImg = require("../../../assets/armchair_orange.png");
const bedImg = require("../../../assets/bed_orange.png");
const chairImg = require("../../../assets/chair_orange.png");

const addIcon = require("../../../assets/add.png");
const minusIcon = require("../../../assets/minus.png");
const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [inputFocused, setInputFocused] = useState(false);
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [itemQuantities, setItemQuantities] = useState([]);

  const getItems = () => {
    const { response, data } = sampleData;
    if (response === 200) {
      setItems(data);
      const itemQ = data.map((item) => {
        return {
          id: item?.id,
          quantity: 1,
        };
      });
      setItemQuantities(itemQ);
    } else {
      console.log("Home - getItems - Error");
    }
  };

  useEffect(() => {
    getItems();
  }, []);

  const onSearch = () => {
    if (searchInput.length === 0) {
      setFilteredItems(items);
    } else {
      const filtered = items?.filter((item) =>
        item?.name?.toUpperCase().includes(searchInput.toUpperCase())
      );
      if (filtered) {
        setFilteredItems(filtered);
      }
    }
  };

  const renderIcon = () => {
    return (
      <TouchableOpacity
        disabled={!inputFocused}
        onPress={() => {
          onSearch();
        }}
      >
        <View style={styles.iconWrapper}>
          <Image
            source={searchIcon}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    );
  };
  const renderSearch = () => {
    return (
      <TextInput
        onFocus={() => {
          setInputFocused(true);
        }}
        onBlur={() => {
          setInputFocused(false);
        }}
        value={searchInput}
        onChangeText={(text) => {
          setSearchInput(text);
        }}
        style={styles.inputText}
        placeholder="Search..."
        placeholderTextColor={"#4527A0"}
      />
    );
  };

  const renderImage = (img) => {
    switch (img) {
      case "sofa":
        return sofaImg;
      case "armchair":
        return armchairImg;
      case "bed":
        return bedImg;
      case "chair":
        return chairImg;
      default:
        return sofaImg;
    }
  };

  const onMinusQuantity = (id) => {
    const found = itemQuantities.find((item) => item.id === id);
    const filter = itemQuantities.filter((item) => item.id !== id);
    filter.push({ id, quantity: found?.quantity > 0 && found?.quantity - 1 });
    setItemQuantities(filter);
  };

  const onAddQuantity = (id) => {
    const found = itemQuantities.find((item) => item.id === id);
    const filter = itemQuantities.filter((item) => item.id !== id);
    filter.push({ id, quantity: found?.quantity + 1 });
    setItemQuantities(filter);
  };

  const getItemQuantity = (id) => {
    const found = itemQuantities.find((item) => item.id === id);
    if (found) return found.quantity;
    return 1;
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemWrapper}>
        <View style={styles.itemImageWrapper}>
          <Image
            source={renderImage(item?.image)}
            style={{ width: "100%", height: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.itemDetailsWrapper}>
          <Text style={styles.itemText}>{item?.name}</Text>
          <View style={styles.quantityWrapper}>
            <TouchableOpacity
              disabled={getItemQuantity(item?.id) < 1}
              onPress={() => {
                onMinusQuantity(item?.id);
              }}
            >
              <Image
                source={minusIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={styles.quantityText}>{getItemQuantity(item?.id)}</Text>
            <TouchableOpacity
              onPress={() => {
                onAddQuantity(item?.id);
              }}
            >
              <Image
                source={addIcon}
                style={{ width: 20, height: 20 }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.itemPriceWrapper}>
          <Text style={styles.itemPriceText}>RM{item?.price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputWrapper}>
          {inputFocused ? renderSearch() : renderIcon()}
          {inputFocused ? renderIcon() : renderSearch()}
        </View>
      </View>
      {items?.length > 0 && (
        <FlatList
          data={filteredItems?.length > 0 ? filteredItems : items}
          renderItem={renderItem}
          keyExtractor={(item) => item?.id?.toString()}
          contentContainerStyle={{ paddingVertical: 20 }}
        />
      )}
    </View>
  );
};

export default Home;
