import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./styles";

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText} allowFontScaling={false}>
        Online Furniture Store
      </Text>

          <TouchableOpacity onPress={()=>{}}>
        <View>
          <Text>Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;
