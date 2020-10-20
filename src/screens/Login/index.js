import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import styles from "./styles";

const Login = ({ navigation, route }) => {
  const { type } = route?.params;
  const [switchType, setSwitchType] = useState(type);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [shouldUpdate, setShouldUpdate] = useState(false);

  const onChangeSwitch = (type) => {
    setSwitchType(type);
    setUsername("");
    setPassword("");
    setName("");
  };

  useEffect(() => {
    if (shouldUpdate) setSwitchType(0);
  }, [shouldUpdate]);

  const onLogin = async () => {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const { username: uName, password: pWord } = JSON.parse(user);
        if (username === uName && password === pWord) {
          navigation.navigate("Home");
        } else {
          Alert.alert("Alert", "Username or Password is incorrect");
        }
      } else {
        Alert.alert("Error", "Couldn't find any data. Please register.");
      }
    } catch (e) {
      console.log("Login - onLogin - error => ", e);
    }
  };

  const onSignUp = async () => {
    try {
      const jsonValue = JSON.stringify({ name, username, password });

      console.log({ jsonValue });
      await AsyncStorage.setItem("user", jsonValue);
    } catch (e) {
      console.log("Login - onSignUo - error => ", e);
    }
    Alert.alert("Success", `You can now log in with the username ${username}`);
    setUsername("");
    setPassword("");
    setShouldUpdate(!shouldUpdate);
  };

  const validateForm = () => {
    if (switchType === 1 && name === "")
      Alert.alert("Error", "Name can't be empty");
    else if (username === "") Alert.alert("Error", "Username can't be empty");
    else if (password === "") Alert.alert("Error", "Password can't be empty");
    else if (switchType === 0) onLogin();
    else if (switchType === 1) onSignUp();
  };

  const renderSwitch = () => {
    return (
      <View style={styles.switchWrapper}>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            onChangeSwitch(0);
          }}
        >
          <View
            style={[
              styles.leftSwitchWrapper,
              switchType === 0 && { backgroundColor: "#FFF" },
            ]}
          >
            <Text style={styles.switchText} allowFontScaling={false}>
              Log in
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => {
            onChangeSwitch(1);
          }}
        >
          <View
            style={[
              styles.rightSwitchWrapper,
              switchType === 1 && { backgroundColor: "#FFF" },
            ]}
          >
            <Text style={styles.switchText} allowFontScaling={false}>
              Sign up
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderForm = () => {
    return (
      <View>
        {switchType === 1 && (
          <TextInput
            placeholder="Name"
            value={name}
            style={styles.input}
            onChangeText={(text) => {
              setName(text);
            }}
          />
        )}
        <TextInput
          placeholder="Username"
          value={username}
          style={styles.input}
          onChangeText={(text) => {
            setUsername(text);
          }}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          textContentType="password"
          value={password}
          style={styles.input}
          onChangeText={(text) => {
            setPassword(text);
          }}
        />
      </View>
    );
  };

  const renderButton = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            validateForm();
          }}
        >
          <View style={styles.buttonWrapper}>
            <Text style={styles.buttonText} allowFontScaling={false}>
              {switchType === 0 ? "Log in" : "Sign up"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#FFA726"} />
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          marginTop: 50,
          paddingHorizontal: 30,
        }}
      >
        {renderSwitch()}
        {renderForm()}
        {renderButton()}
      </View>
    </View>
  );
};

export default Login;
