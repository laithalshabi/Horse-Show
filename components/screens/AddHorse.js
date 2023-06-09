import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import HorsesA from "../../assets/Data/HorsesA";
import ButtonV2 from "../ui/ButtonV2";

function AddHorse({route,navigation}) {
  const [getName, setName] = useState("");
  const [getAbout, setAbout] = useState("");
  const [getPrice, setPrice] = useState("");
  const [getBirth, setBirth] = useState("");
  function HorseName(enteredText) {
    setName(enteredText);
  }
  function HorseAbout(enteredText) {
    setAbout(enteredText);
  }
  function HorsePrice(enteredText) {
    setPrice(enteredText);
  }
  function HorseBirth(enteredText) {
    setBirth(enteredText);
  }
  function AddHorse() {
    if (route.params.isEdit) {
      route.params.horseUpdate[route.params.horseIndex].horseName= getName;
      route.params.horseUpdate[route.params.horseIndex].horseBirthDate= getBirth;
      route.params.horseUpdate[route.params.horseIndex].horseInfo= getAbout;
      route.params.horseUpdate[route.params.horseIndex].horsePrice= getPrice;
    } else {

      route.params.horseUpdate.push(
          new HorsesA(route.params.horseUpdate.length, getName, getPrice, "asd", getAbout, getBirth,route.params.loggedin.id)
      );
    }
    navigation.navigate("My Horses")

  }
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <View style={styles.nav}>
          <View style={[styles.center, { flex: 1 }]}>
            <Image
              source={require("../../assets/images/category.png")}
              style={[styles.circles, { tintColor: "white" }]}
            />
          </View>
          <View style={[styles.center, { flex: 4 }]}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              Horse Show
            </Text>
          </View>
          <View style={[styles.center, { flex: 1 }]}>
            <ButtonV2
              title={route.params.i18n.t('arrowB')}
              color="#ffffff5b"
              borderColor='black'
              textcolor="black"
              bordercolor="black"
              onPress={()=>{navigation.goBack()}}
              size={18}
              radius={200}
            />
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#2B120E",
            width: "80%",
            marginTop: 30,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 20,
              backgroundColor: "#DCAA75",
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
                marginVertical: 30,
              }}
            >
              {route.params.i18n.t('AddNewHorse')}
            </Text>
            <TextInput
              style={[styles.textInput]}
              placeholder={route.params.i18n.t('Name')}
              placeholderTextColor={"gray"}
              onChangeText={HorseName}
            />
            <TextInput
              style={[styles.textInput, { paddingVertical: 40 }]}
              multiline={true}
              placeholder={route.params.i18n.t('About')}
              placeholderTextColor={"gray"}
              onChangeText={HorseAbout}
            />
            <TextInput
              style={[styles.textInput]}
              placeholder={route.params.i18n.t('PriceN')}
              placeholderTextColor={"gray"}
              onChangeText={HorsePrice}
            />
            <TextInput
              style={[styles.textInput]}
              placeholder={route.params.i18n.t('BirthDate')}
              placeholderTextColor={"gray"}
              onChangeText={HorseBirth}
            />
            <View style={{ marginTop: 50, marginBottom: 30 }}>
              <ButtonV2
                title={route.params.i18n.t('Save')}
                color="#2B120E"
                textcolor="white"
                bordercolor="black"
                onPress={AddHorse}
                size={10}
                radius={8}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AddHorse;

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    flexDirection: "row",
    marginTop: 15,
    marginHorizontal: 20,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  circles: {
    borderRadius: 200,
    width: 60,
    height: 60,
    backgroundColor: "#2B120E",
    flexDirection: "row",
  },
  textInput: {
    backgroundColor: "white",
    width: "70%",
    marginTop: 15,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 8,
  },
});
