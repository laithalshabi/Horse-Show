import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Platform,
} from "react-native";
import HorsesA from "../../assets/Data/HorsesA";
import ButtonV2 from "../ui/ButtonV2";
import { Dropdown } from "react-native-element-dropdown";
import Auctions from "../../assets/Data/Auctions";
import AntDesign from "@expo/vector-icons/AntDesign";
import DateTimePicker from "@react-native-community/datetimepicker";

function AddAuction({ route, navigation }) {
  function Data(label, value) {
    this.label = label;
    this.value = value;
  }
  let data = [];
  let Horses = route.params.horses.filter(
    (x) => x.userId === route.params.loggedin.id
  );
  Horses.forEach((element) => {
    data.push(new Data(element.horseName, element.id));
  });
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [getName, setName] = useState("");
  const [getAbout, setAbout] = useState("");
  const [getPrice, setPrice] = useState("");
  const [startdate, setStartdate] = useState(new Date());
  const [enddate, setEnddate] = useState(new Date());
  const [endTimestamp, setEndTimestamp] = useState();

  const [text, setText] = useState("date");
  const [etext, seteText] = useState("date");
  const [show, setShow] = useState(false);
  const [eshow, seteShow] = useState(false);
  const [mode, setMode] = useState("Empty");
  const [emode, seteMode] = useState("Empty");
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setStartdate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    setText(fDate + " " + fTime);
    let timeStamp = currentDate.getTime() / 1000;
    console.log(fDate + " (" + fTime + ")");
    console.log(currentDate);
    console.log(timeStamp);
  };
  const eonChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    seteShow(Platform.OS === "ios");
    setEnddate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();
    let fTime =
      "Hours: " + tempDate.getHours() + " | Minutes: " + tempDate.getMinutes();
    seteText(fDate + " " + fTime);
    let timeStamp = currentDate.getTime() / 1000;
    console.log(fDate + " (" + fTime + ")");
    console.log(currentDate);
    console.log(timeStamp);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const eshowMode = (currentMode) => {
    seteShow(true);
    seteMode(currentMode);
  };
  function AddNewAuction() {
    route.params.auctions.push(
      new Auctions(
        route.params.auctions.length,
        getName,
        getAbout,
        getPrice,
        startdate,
        enddate,
        endTimestamp,
        route.params.loggedin.id,
        value
      )
    );
    navigation.navigate("My Auctions");
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
              title={route.params.i18n.t("arrowB")}
              color="#ffffff5b"
              borderColor="black"
              textcolor="black"
              bordercolor="black"
              onPress={() => {
                navigation.goBack();
              }}
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
              {route.params.i18n.t("AddNewAuction")}
            </Text>
            <Dropdown
              style={styles.textInput}
              data={data}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={route.params.i18n.t("Select Horse")}
              value={value}
              onChange={(item) => {
                setValue(item.value);
              }}
            />

            <TextInput
              style={[styles.textInput]}
              placeholder={route.params.i18n.t("Name")}
              placeholderTextColor={"gray"}
              onChangeText={(enteredText) => setName(enteredText)}
            />
            <TextInput
              style={[styles.textInput, { paddingVertical: 40 }]}
              multiline={true}
              placeholder={route.params.i18n.t("About")}
              placeholderTextColor={"gray"}
              onChangeText={(enteredText) => setAbout(enteredText)}
            />
            <TextInput
              style={[styles.textInput]}
              placeholder={route.params.i18n.t("PriceN")}
              placeholderTextColor={"gray"}
              onChangeText={(enteredText) => setPrice(enteredText)}
            />
            <Text>Start Date : {text}</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonV2 title="Date Picker" onPress={() => showMode("date")} />
              <ButtonV2 title="Time Picker" onPress={() => showMode("time")} />
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={startdate}
                  mode={mode}
                  is24Hour={false}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <Text>End Date : {etext}</Text>
            <View style={{ flexDirection: "row" }}>
              <ButtonV2 title="Date Picker" onPress={() => eshowMode("date")} />
              <ButtonV2 title="Time Picker" onPress={() => eshowMode("time")} />
              {eshow && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={enddate}
                  mode={emode}
                  is24Hour={false}
                  display="default"
                  onChange={eonChange}
                />
              )}
            </View>
            <View style={{ marginTop: 50, marginBottom: 30 }}>
              <ButtonV2
                title={route.params.i18n.t("Save")}
                color="#2B120E"
                textcolor="white"
                bordercolor="black"
                onPress={AddNewAuction}
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

export default AddAuction;

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
