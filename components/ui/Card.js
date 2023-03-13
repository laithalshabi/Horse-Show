import { StyleSheet, Text, View } from "react-native";
import { ImageBackground } from "react-native";
import ButtonV2 from "./ButtonV2";

function Card(props) {
  return (
    <View style={styles.card}>
      <ImageBackground
        source={props.img}
        style={[styles.cardHeader, { width: "100%" }]}
        resizeMode="cover"
      >
        <View style={[styles.idk,{ width:'100%',flexDirection:"row" }]}>
        <View>
        <Text style={[styles.cardText,{textAlign:'left'}]}>{props.name}</Text>
        <Text style={[styles.cardText,{textAlign:'left'}]}>{props.price}</Text>
        </View>
        <View style={{ flex:1 }}></View>
        <ButtonV2 title='---->' color='transparent' textcolor='black' highlight='rgba(0, 0, 0, 0.301)'/>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Card;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 20,
    overflow: "hidden",
    marginTop:10,
  },
  cardHeader: {
    flex:1,
    width: "90%",
    height: 240,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    alignItems: 'center',
    justifyContent: "flex-end",
  },
  idk:{
    width:'100%',
    alignItems:"flex-start",
  },
  cardText: {
    textAlign: "center",
    marginHorizontal:30,
  },
});
