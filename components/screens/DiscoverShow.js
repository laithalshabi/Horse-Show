import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import { ImageBackground } from "react-native";
import ButtonV2 from "../ui/ButtonV2";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Card from "../ui/Card";
function DiscoverShow({ route, navigation }) {
  return (
    <View style={[styles.root, { width: "100%", height: "100%" }]}>
      <ImageBackground
        source={route.params.itemHorse.horsePicture}
        style={[styles.root, { width: "100%", height: "100%" }]}
        resizeMode="cover"
      >
        <View style={{ marginTop: 20 }}></View>
        <View
          style={[
            styles.nav,
            { justifyContent: "center", marginHorizontal: 20 },
          ]}
        >
          <View style={{ alignSelf: "flex-start" }}>
            <ButtonV2
              title={route.params.i18n.t("arrow")}
              color="#ffffff5b"
              borderColor='black'
              textcolor="black"
              radius={200}
              onPress={() => navigation.goBack()}
              size={15}
            />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1 }} />
      </ImageBackground>

      <View style={styles.infoWindow1}>
        <Text
          style={{
            width: "70%",
            borderBottomWidth: 1,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 22,
            marginTop: 20,
            paddingBottom:20,
          }}
        >
          ORGANIZED BY
        </Text>
        <Text style={{ width: "70%", textAlign: "center", marginTop: 10 }}>
          {route.params.itemData.item.name}
        </Text>
        <Text style={{ width: "70%", textAlign: "center", marginTop: 20,fontWeight: "bold" }}>
          Starts on:    {route.params.itemData.item.startdate}
        </Text>
        <Text style={{ width: "70%", textAlign: "center", marginTop: 10,fontWeight: "bold" }}>
          Ends on:    {route.params.itemData.item.enddate}
        </Text>
        <Text style={{ width: "70%", marginTop: 20 }}>
          {route.params.itemData.item.about}
        </Text>
        <View style={{ justifyContent:'flex-end', flex:1,marginBottom:20}}>
        <ButtonV2
          title={route.params.i18n.t("SubscribeNow")}
          color="#2B120E"
          textcolor="#FFE9C5"
          borderColor="transparent"
          size={10}
          radius={10}
          highlight="transparent"
        />
        </View>
      </View>
    </View>
  );
}

export default DiscoverShow;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFD288",
    flex: 1,
  },
  container: {
    backgroundColor: "#fff",
  },
  nav: {
    flexDirection: "row",
    marginTop: 23,
  },
  infoWindow1: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#FFD288",
  },
  infoWindow: {
    backgroundColor: "rgba(0, 0, 0, 0.664)",
    width: "90%",
    borderRadius: 20,
    height: 300,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    color: "white",
    marginTop: 20,
  },

  price: {
    color: "white",
    fontSize: 15,
    marginTop: 20,
  },
});
