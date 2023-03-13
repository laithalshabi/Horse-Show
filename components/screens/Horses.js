import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import { useState } from "react";
import { ImageBackground } from "react-native";
import ButtonV2 from "../ui/ButtonV2";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Card from "../ui/Card";
function Horses(props) {

  function asd(a,b){
    
    props.horseIndex(a)
    props.horsesSet(b)
  }
  return (
    <View style={styles.root}>
        <FlatList
          data={props.horses}
          renderItem={(itemData) => {
            return (
              <View style={styles.card}>
                <ImageBackground
                  source={itemData.item.horsePicture}
                  style={[styles.cardHeader, { width: "100%" }]}
                  resizeMode="cover"
                >
                  <View style={{ backgroundColor:'rgba(0,0,0,0.3)', flex:1,justifyContent:'flex-end' }}>
                  <View
                    style={[
                      styles.idk,
                      { width: "100%", flexDirection: "row" },
                    ]}
                  >
                    <View>
                      <Text style={[styles.cardText, { textAlign: "left" }]}>
                        {itemData.item.horseName}
                      </Text>
                      <Text style={[styles.cardText, { textAlign: "left" }]}>
                        {itemData.item.horsePrice}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}></View>
                    <ButtonV2
                      title={props.i18n.t('arrowB')}
                      color="rgba(88, 88, 88, 0.993), 0.5)"
                      textcolor="white"
                      bordercolor="black"
                      onPress={asd.bind(this,itemData.index,itemData.item)}
                      highlight="rgba(0, 0, 0, 0.301)"
                    />
                  </View>
                  </View>
                </ImageBackground>
              </View>
            );
          }}
          keyExtractor={(item) => item.horseName + Math.random()}
          ListHeaderComponent={() => (
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
                    {props.i18n.t("appName")}
                  </Text>
                  <ButtonV2 title={props.i18n.t('ChangeLanguage')} onPress={props.toggleLanguage} textcolor='black' />
                </View>
                <View style={[styles.center, { flex: 1 }]}>
                  <Image
                    source={require("../../assets/images/pfp.jpg")}
                    style={styles.circles}
                  />
                </View>
              </View>
              <View
                style={{
                  borderTopWidth: 1,
                  borderTopColor: "#580200",
                  width: "80%",
                  marginTop: 30,
                  alignItems:'center'
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 20,
                  }}
                >
                  <Text style={[styles.titleText, {}]}>
                    {props.i18n.t('Your_Horses')}
                  </Text>
                  <ButtonV2
                    title={props.i18n.t('Add_New_Horses')}
                    color="#580200"
                    textcolor="white"
                    bordercolor="black"
                    onPress={()=>{props.isEdit(false),props.open(2)}}
                    radius={11}
                  />
                </View>
              </View>
            </View>
          )}
        />
      </View>
  );
}

export default Horses;

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
    backgroundColor: "#580200",
    flexDirection: "row",
  },

  titleText: {
    color: "#580200",
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
