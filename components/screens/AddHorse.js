import { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";
import HorsesA from "../../assets/Data/HorsesA";
import ButtonV2 from "../ui/ButtonV2";

function AddHorse(props) {
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
    if (props.isEdit) {
      props.horseUpdate[props.horseIndex].horseName= getName;
      props.horseUpdate[props.horseIndex].horseBirthDate= getBirth;
      props.horseUpdate[props.horseIndex].horseInfo= getAbout;
      props.horseUpdate[props.horseIndex].horsePrice= getPrice;
    } else {
      props.horseUpdate.push(
        new HorsesA(getName, getPrice, "asd", getAbout, getBirth)
      );
    }
    props.open(0);
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
              title={props.i18n.t('arrowB')}
              color="#4b4b4b"
              textcolor="white"
              bordercolor="black"
              onPress={props.open.bind(this, 0)}
              size={18}
              radius={200}
            />
          </View>
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#580200",
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
              backgroundColor: "rgba(3, 3, 3, 0.637).63)",
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
              {props.i18n.t('AddNewHorse')}
            </Text>
            <TextInput
              style={[styles.textInput]}
              placeholder={props.i18n.t('Name')}
              placeholderTextColor={"gray"}
              onChangeText={HorseName}
            />
            <TextInput
              style={[styles.textInput, { paddingVertical: 40 }]}
              multiline={true}
              placeholder={props.i18n.t('About')}
              placeholderTextColor={"gray"}
              onChangeText={HorseAbout}
            />
            <TextInput
              style={[styles.textInput]}
              placeholder={props.i18n.t('PriceN')}
              placeholderTextColor={"gray"}
              onChangeText={HorsePrice}
            />
            <TextInput
              style={[styles.textInput]}
              placeholder={props.i18n.t('BirthDate')}
              placeholderTextColor={"gray"}
              onChangeText={HorseBirth}
            />
            <View style={{ marginTop: 50, marginBottom: 30 }}>
              <ButtonV2
                title={props.i18n.t('Save')}
                color="#580200"
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
    backgroundColor: "#fff",
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
    backgroundColor: "#580200",
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
