import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ButtonV2 from "../ui/ButtonV2";
import { Shadow } from "react-native-shadow-2";
import { useState } from "react";
function Login({ route, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function Login() {
    let loginMaybe = route.params.UserList.filter(
      (x) => x.email === email && x.password === password
    );
    if (loginMaybe == !Array) {
      Alert.alert("Wrong Email or Password");
    } else {
      Alert.alert("Logged in");
      route.params.login(loginMaybe[0].id);
      navigation.navigate('Horses');
    }
  }
  return (
    <View style={{ flex: 1, alignItems: "center", elevation: 5 }}>
      <View
        style={{
          flexDirection: "row",
          marginTop: 50,
          marginLeft: 30,
          marginRight: 30,
          elevation: 5,
        }}
      >
        <ButtonV2
          title={route.params.i18n.t("Sign Up")}
          radius={10}
          size={10}
          color="#2B120E"
          onPress={() => navigation.navigate("Register")}
        />
        <View style={{ flex: 1 }} />
        <ButtonV2 title="--->" size={10} color="#2b120e8a" />
      </View>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          color: "#2B120E",
          marginTop: 70,
          marginBottom: 70,
        }}
      >
        {route.params.i18n.t("Sign in")}
      </Text>
      <View
        style={{
          width: "80%",
          backgroundColor: "#DCAA75",
          alignItems: "center",
          elevation: 5,
        }}
      >
        <TextInput
          style={{
            width: "70%",
            height: 40,
            backgroundColor: "white",
            padding: 10,
            marginTop: 35,
            elevation: 4,
          }}
          placeholder={route.params.i18n.t("Email")}
          placeholderTextColor={"lightgray"}
          onChangeText={(enteredtext) => setEmail(enteredtext)}
        />
        <TextInput
          secureTextEntry={true}
          style={{
            width: "70%",
            height: 40,
            backgroundColor: "white",
            padding: 10,
            marginTop: 20,
            elevation: 4,
          }}
          placeholder={route.params.i18n.t("Password")}
          placeholderTextColor={"lightgray"}
          onChangeText={(enteredtext) => setPassword(enteredtext)}
        />
        <Text
          style={{
            color: "gray",
            fontSize: 10,
            textAlign: "right",
            width: "70%",
            margin: 5,
            marginBottom: 15,
          }}
        >
          {route.params.i18n.t("Forgot your password")}
        </Text>
        <ButtonV2
          title={route.params.i18n.t("Sign in")}
          radius={10}
          size={10}
          color="#2B120E"
          onPress={() => Login()}
        />
        <View
          style={{
            width: "90%",
            borderBottomWidth: 1,
            marginTop: 40,
            borderBottomColor: "gray",
            marginBottom: 10,
          }}
        />
        <Text>{route.params.i18n.t("or")}</Text>
        <View style={{ flexDirection: "row", elevation: 5 }}>
          <Shadow distance={3} offset={[3, 6]} style={{ borderRadius: 200 }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 200,
                margin: 5,
                marginBottom: 20,
              }}
              source={require("../../assets/images/facebook.png")}
            />
          </Shadow>
          <Shadow distance={3} offset={[3, 6]} style={{ borderRadius: 200 }}>
            <Image
              style={{
                width: 50,
                height: 50,
                borderRadius: 200,
                margin: 5,
                marginBottom: 20,
              }}
              source={require("../../assets/images/google.png")}
            />
          </Shadow>
        </View>
      </View>
      <ButtonV2 title="ChangeLanguage" onPress={()=>route.params.toggleLanguage()}/>
    </View>
  );
}

export default Login;

