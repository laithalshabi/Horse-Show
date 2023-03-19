import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import { useLayoutEffect, useState } from "react";
import { ImageBackground } from "react-native";
import ButtonV2 from "../ui/ButtonV2";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Card from "../ui/Card";
import {Ionicons} from "@expo/vector-icons"
function MyAuctions({route, navigation}) {
  let i18n = route.params.i18n

  function pressHandler(a,b){
    navigation.navigate('HorseShow',{horseIndex:a,horseSet:b});
}
let myAuctions = route.params.auctions.filter(
  (x) => x.userid === route.params.loggedin.id
);
  return (
    <View style={styles.root}>
        <FlatList
          data={myAuctions}
          renderItem={(itemData) => {
          let Horse = route.params.horses[itemData.item.horseid] 

            return (
              <Pressable
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 12,
              }}
              onPress={()=>navigation.navigate('DiscoverShow',{itemData:itemData,itemHorse:Horse})}
            >
              <View
                style={{ width: "70%", backgroundColor: "black", elevation: 4 }}
              >
                <Image
                  style={{ width: "100%", height: 160, opacity: 0.8 }}
                  resizeMode="cover"
                  source={Horse.horsePicture}
                />
                <View
                  style={{
                    backgroundColor: "#FFD288",
                    height: 120,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      width: "70%",
                      borderBottomWidth: 1,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {route.params.i18n.t("ORGANIZED BY")}
                  </Text>
                  <Text
                    style={{ width: "70%", textAlign: "center", marginTop: 2 }}
                  >
                    {itemData.item.name}
                  </Text>
                  <Text
                    style={{ width: "70%", textAlign: "center", marginTop: 5 }}
                  >
                    {route.params.i18n.t("Starts on")}{itemData.item.startdate}
                  </Text>
                  <Text
                    style={{ width: "70%", textAlign: "center", marginTop: 2 }}
                  >
                    {route.params.i18n.t("Ends on")}{itemData.item.enddate}
                  </Text>
                </View>
              </View>
            </Pressable>
            );
          }}
          keyExtractor={(item) => item.name + Math.random()}
          ListHeaderComponent={() => (
            <View style={styles.container}>
              <View style={styles.nav}>
                <Pressable style={[styles.center, { flex: 1 }]}  onPress={()=>{navigation.toggleDrawer()}}>
                  <Image
                    source={require("../../assets/images/category.png")}
                    style={[styles.circles, { tintColor: "white" }]}
                  />
                </Pressable>
                <View style={[styles.center, { flex: 4 }]}>
                  <Text
                    style={{
                      textAlign: "center",
                      fontSize: 23,
                      fontWeight: "bold",
                    }}
                  >
                    {i18n.t("appName")}
                  </Text>
                </View>
                <View style={[styles.center, { flex: 1 }]}>
                  <Image
                    source={{ uri:route.params.loggedin.pfp }}
                    style={styles.circles}
                  />
                </View>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: "#2B120E",
                  width: "80%",
                  marginTop: 30,
                  alignItems:'center'
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "90%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={[styles.titleText, {}]}>
                    {i18n.t('MyAuctions')}
                  </Text>
                  <ButtonV2
                    title={<Ionicons size={20} name="add-outline" />}
                    color="#2B120E"
                    textcolor="white"
                    bordercolor="black"
                    onPress={()=>navigation.navigate('AddAuctions',{loggedin:route.params.loggedin,})}
                    radius={20}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
  );
}

export default MyAuctions;

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
  },
  container: {
    backgroundColor: "#FFE9C5",
    alignItems: "center",
    justifyContent: "center",
  },
  nav: {
    flexDirection: "row",
    marginHorizontal:20,
    marginTop: 15,
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

  titleText: {
    color: "#2B120E",
    fontWeight: "bold",
    fontSize: 20,
    width: "90%",
  },
  imageContainer: {
    height: 220,
    backgroundColor: "black",
    borderRadius: 20,
    overflow: "hidden",
    marginVertical: 10,
  },

  card: {
    marginHorizontal:40,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    overflow: "hidden",
    marginTop: 20,
  },
  cardHeader: {
    flex: 1,
    width: "90%",
    height: 240,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  idk: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom:10,
    marginRight:20,
    
  },
  cardText: {
    fontWeight:'bold',
    color:'white',
    textAlign: "center",
    marginHorizontal: 30,
  },
});
