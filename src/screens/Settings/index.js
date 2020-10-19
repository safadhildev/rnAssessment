import React, { useEffect, useState } from "react";
import { View, Text, Image, Alert, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./styles";
import { FlatList } from "react-native-gesture-handler";

const profileIcon = require("../../../assets/profile.png");
const locationIcon = require("../../../assets/location.png");

const settingsData = [
  {
    id: 0,
    name: "Messages",
    icon: require("../../../assets/message_grey.png"),
    count: 3,
  },
  {
    id: 1,
    name: "Notification",
    icon: require("../../../assets/notification_grey.png"),
    count: 5,
  },
  {
    id: 2,
    name: "Account Details",
    icon: require("../../../assets/user_solid_grey.png"),
  },
  {
    id: 3,
    name: "My purchases",
    icon: require("../../../assets/cart_grey.png"),
  },
  {
    id: 4,
    name: "Settings",
    icon: require("../../../assets/settings_grey.png"),
  },
];

const Settings = () => {
  const [username, setUsername] = useState("");

  const getUserInfo = async () => {
    try {
      const user = await AsyncStorage.getItem("user");

      if (user) {
        const { username } = JSON.parse(user);
        setUsername(username);
      }
    } catch (e) {
      console.log("Settings - getUserInfo - error => ", e);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <View style={styles.listContainer}>
          <Image
            source={item?.icon}
            resizeMode="contain"
            style={styles.listIcon}
          />
          <View style={{ flex: 1, marginLeft: 10 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.listText}>{item?.name}</Text>
              {item?.count && (
                <View style={styles.countWrapper}>
                  <Text style={styles.countText}>{item.count}</Text>
                </View>
              )}
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "#E0E0E0" }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentWrapper}>
        <View style={styles.profileWrapper}>
          <Image
            source={profileIcon}
            style={styles.image}
            resizeMode="contain"
          />
          <Text style={styles.nameText}>{username}</Text>
          <View
            style={{
              marginTop: 10,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={locationIcon}
              style={styles.locationIcon}
              resizeMode="contain"
            />
            <Text style={styles.locationText}>MY</Text>
          </View>
        </View>
        <FlatList
          data={settingsData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{ marginTop: 20 }}
        />
      </View>
    </View>
  );
};

export default Settings;
