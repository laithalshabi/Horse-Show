import { StyleSheet, Text, View, Image, FlatList, Pressable } from "react-native";
import { useLayoutEffect, useState } from "react";
import { ImageBackground } from "react-native";
import ButtonV2 from "../ui/ButtonV2";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Card from "../ui/Card";
function Profile({route, navigation}) {
  let i18n = route.params.i18n
  function pressHandler(a,b){
    //navigation.navigate('HorseShow',{horseIndex:a,horseSet:b});
}

  return (
    <View style={styles.root}>
        <FlatList
          data={route.params.horses}
          renderItem={(itemData) => {
            return ( console.log('good')
            );
          }}
          keyExtractor={(item) => item.horseName + Math.random()}
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
                  width: "90%",
                  marginTop: 30,
                  alignItems:'center'
                }}
              >

                  <View style={{
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 40,
                  }}>
                  <Image style={{ width:180,height:180,borderRadius:200 }} source={{ uri:route.params.loggedin.pfp }} />
                  <Text style={[styles.titleText, {textAlign:"center",marginTop:30,fontSize:30,color:'black'}]}>
                    {route.params.loggedin.username}
                  </Text>
                  <Text style={[styles.titleText, {textAlign:"left",marginTop:80,fontSize:17,color:'black'}]}>
                    {route.params.i18n.t("Auctions_Subscribed")}
                  </Text>
                  </View>
              </View>
            </View>
          )}/>
      </View>
      
  );
}

export default Profile;

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
