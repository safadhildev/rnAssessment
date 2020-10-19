import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./styles";

const Welcome = ({ navigation }) => {
  const onStartApp = (type) => {
    navigation.navigate("Login", { type });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText} allowFontScaling={false}>
        Online Furniture Store
      </Text>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../../assets/sofa.png")}
          resizeMode="contain"
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          onStartApp(0);
        }}
      >
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText} allowFontScaling={false}>
            GET STARTED
          </Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.messageText}>Don't have an account?</Text>
      <TouchableOpacity
        onPress={() => {
          onStartApp(1);
        }}
      >
        <Text style={styles.signUpText}>Sign up here</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
