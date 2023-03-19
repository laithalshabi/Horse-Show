import { StyleSheet, Text, View, Image, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import ButtonV2 from "../ui/ButtonV2";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Shadow } from "react-native-shadow-2";
import Users from "../../assets/Data/Users";
function SignUp({ route, navigation }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onPressRegister() {
    let index= route.params.UserList.length
    route.params.UserList.push(new Users(index,name,email,username,password,'https://i.pinimg.com/originals/04/64/6b/04646bc6ef384e1c564b25df6ef17291.jpg'))
    route.params.login(index)
    navigation.navigate('Horses')
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
          title={route.params.i18n.t("Sign in")}
          radius={10}
          size={10}
          color="#2B120E"
          onPress={() => navigation.navigate("Login")}
        />
        <View style={{ flex: 1 }} />
        <ButtonV2 title="--->" size={10} color="#2b120e8a" />
      </View>
      <Text
        style={{
          fontSize: 35,
          fontWeight: "bold",
          color: "#2B120E",
          marginTop: 10,
          marginBottom: 40,
        }}
      >
        {route.params.i18n.t("Sign Up")}
      </Text>
      <View
        style={{
          width: "80%",
          backgroundColor: "#DCAA75",
          alignItems: "center",
          elevation: 5,
          paddingTop: 10,
        }}
      >
        <Shadow distance={3} offset={[0, 3]} style={{ borderRadius: 200 }}>
          <ButtonV2
            title={
              <Ionicons
                name="cloud-upload-outline"
                size={70}
                style={{ color: "black" }}
              />
            }
            radius={200}
            color="white"
          />
        </Shadow>
        <TextInput
          style={{
            width: "70%",
            height: 40,
            backgroundColor: "white",
            padding: 10,
            marginTop: 35,
            elevation: 4,
          }}
          placeholder={route.params.i18n.t("Name")}
          placeholderTextColor={"lightgray"}
          onChangeText={(enteredtext) => setName(enteredtext)}
        />
        <TextInput
          style={{
            width: "70%",
            height: 40,
            backgroundColor: "white",
            padding: 10,
            marginTop: 20,
            elevation: 4,
          }}
          placeholder={route.params.i18n.t("Username")}
          placeholderTextColor={"lightgray"}
          onChangeText={(enteredtext) => setUsername(enteredtext)}
        />
        <TextInput
          keyboardType="email-address"
          style={{
            width: "70%",
            height: 40,
            backgroundColor: "white",
            padding: 10,
            marginTop: 20,
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
          placeholder={route.params.i18n.t("Confirm Password")}
          placeholderTextColor={"lightgray"}
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
        />

        <ButtonV2
          title={route.params.i18n.t("Sign Up")}
          radius={10}
          size={10}
          color="#2B120E"
          onPress={() => onPressRegister()}
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
        <View style={{ flexDirection: "row"}}>
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
    </View>
  );
}

export default SignUp;

const styles = StyleSheet.create({});
