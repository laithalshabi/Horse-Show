import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import ButtonV2 from "../ui/ButtonV2";
import { Ionicons } from "@expo/vector-icons";
import { useLayoutEffect } from "react";


function HorseShow({route,navigation}) {
  function remove(index){
    let m = index
    if (m == 0){
      m = 1
    }
    route.params.horseArray.splice(index,m )
    navigation.navigate("My Horses")
  }
  function Edit(){
    navigation.navigate('AddHorse',{isEdit:true,horseIndex: route.params.horseIndex})
  }

  return (
    
    <ImageBackground
      source={route.params.horseSet.horsePicture}
      style={[styles.root, { width: "100%", height: "100%" }]}
      resizeMode="cover"
    >
      <View style={{ marginTop: 20 }}></View>
      <View style={[styles.nav ,{justifyContent:'center',marginHorizontal:20}]}>
        <View style={{ alignSelf:'flex-start' }}>
        <ButtonV2
          title={route.params.i18n.t('arrow')}
          color="#ffffff5b"
          borderColor='black'
          textcolor="black"
          radius={200}
          onPress={()=>navigation.goBack()}
          size={15}
        />    
        </View>    
        <View style={{ flex:1 }}></View>
        <View style={{ alignSelf:'flex-end' }}>

        <ButtonV2
          title={<Ionicons name="trash-outline" color={'black'} size={15}></Ionicons>}
          textcolor="black"
          onPress={remove.bind(this,route.params.horseIndex)}
          size={15}
        />
        </View>    

      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.infoWindow1}>
        <View style={styles.infoWindow}>
          <View style={{ margin: 20 }}>
            <View style={{ flexDirection:'row' ,alignSelf:'flex-end',padding:0,margin:0 }}>
          <ButtonV2 title={<Ionicons name="create-outline" color={'white'} size={20} />} borderColor='transparent' color='transparent' onPress={()=>Edit()}/>
          </View>
          <View style={{alignSelf:'flex-start',padding:0,margin:0 }}>

            <Text style={styles.title}>{route.params.horseSet.horseName}</Text>
            <Text style={styles.text}>
            {route.params.horseSet.horseInfo}
            </Text>
            <Text style={styles.text}>{route.params.i18n.t('DateOfBirth')}{route.params.horseSet.horseBirthDate}</Text>
            <Text style={styles.price}>{route.params.i18n.t('Price')}{route.params.horseSet.horsePrice}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center"}}>
            <ButtonV2
              title={route.params.i18n.t('BuyNow')}
              color="#2B120E"
              highlight="rgba(5, 0, 0, 0.404)"
            />
          </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

export default HorseShow;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
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
    alignItems: "center",
    justifyContent: "center",
    marginBottom:20,
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
