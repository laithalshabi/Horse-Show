import { StyleSheet, Text, Pressable, View } from "react-native";
function ButtonV2(props) {

  return (
    <View style={[styles.button,{ backgroundColor:props.color || 'lightgray',borderColor:props.borderColor ||'gray' ,borderRadius:props.radius || 20}]}>
    <Pressable
      android_ripple={{ color: props.highlight||"rgba(255, 255, 255, 0.068)", borderless: true }}
      onPress={ props.onPress}
      style={({ pressed }) => pressed && [styles.pressedItem , {backgroundColor:props.highlight||"rgba(255, 255, 255, 0.068)",borderRadius:props.radius || 20}]}
    >
      <Text style={[styles.text,{color:props.textcolor || 'white',borderRadius:props.radius || 20,padding:props.size || 6}]}>{props.title}</Text>
    </Pressable>
    </View>
  );
}

export default ButtonV2;

const styles = StyleSheet.create({
  pressedItem: {
    opacity: 0.5,
    borderRadius: 20,
    backgroundColor:"rgba(255, 255, 255, 0.068)"
  },
  text: {
    padding: 6,
    color: "white",
    borderRadius:20,
    textAlign: "center",
    backgroundColor:"rgba(255, 255, 255, 0.068)"
  },
  button: {
    borderWidth:1,
    borderRadius:20,
  },
});
