import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from "react-native";
import styles from "./styles";

const Login = () => {
  const [switchType, setSwitchType] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeSwitch = (type) => {
    setSwitchType(type);
  };

  const onLogin = () => {};

  const onSignUp = () => {};

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
            if (switchType === 0) onLogin();
            else onSignUp();
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
      <View style={{ backgorundColor: "#FFA726", width: "100%", height: 30 }} />
      {renderSwitch()}
      {renderForm()}
      {renderButton()}
    </View>
  );
};

export default Login;
