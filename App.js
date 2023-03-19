import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import HorsesA from "./assets/Data/HorsesA";
import Users from "./assets/Data/Users";
import AddHorse from "./components/screens/AddHorse";
import Horses from "./components/screens/Horses";
import HorseShow from "./components/screens/HorseShow";
import ButtonV2 from "./components/ui/ButtonV2";
import Card from "./components/ui/Card";
import { I18nManager } from "react-native";
import { I18n } from "i18n-js";
import Translation from "./locales/languages/Translation.json";
import * as Updates from "expo-updates";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import Discover from "./components/screens/Discover";
import Profile from "./components/screens/Profile";
import MyAuctions from "./components/screens/MyAuctions";
import Auctions from "./assets/Data/Auctions";
import DiscoverShow from "./components/screens/DiscoverShow";
import Login from "./components/screens/Login";
import Signup from "./components/screens/Signup";
import AddAuction from "./components/screens/AddAuction";
const i18n = new I18n(Translation);
i18n.fallbacks = true;
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
let users = [];
users.push(
  new Users(users.length,'laith','r','ryon','r','https://cdn.discordapp.com/attachments/761937657831882783/1065031939716808846/283279899_1174526530012729_944544855953438057_n.jpg')
);
users.push(
  new Users(users.length,'ibrahim','ibrahim@gmail.com','Dizaster','password','https://cdn.discordapp.com/attachments/761937657831882783/1065024741389385739/955A1D31-26EE-4E9B-8455-A7218D8D5F6A.jpg')
);

let auctions = [];
auctions.push(
  new Auctions(auctions.length,'test','test about','$20m','4/3/2022 4:00 PM','4/5/2022 4:00 PM',0,0)
);
auctions.push(
  new Auctions(auctions.length,'test','test about','$20m','4/3/2022 4:00 PM','4/5/2022 4:00 PM',1,3)
);

let getHorses = [];
getHorses.push(
  new HorsesA(
    getHorses.length,
    "dark",
    "20 million",
    "image url",
    "info etc.... more info",
    "1995/3/7",
    0
  )
);
getHorses.push(
  new HorsesA(
    getHorses.length,
    "dark1",
    "20 million",
    "image url",
    "info etc.... more info",
    "1995/3/7",
    0
  )
);
getHorses.push(
  new HorsesA(
    getHorses.length,
    "dark2",
    "20 million",
    "image url",
    "info etc.... more info",
    "1995/3/7",
    0
  )
);
getHorses.push(
  new HorsesA(
    getHorses.length,
    "my cat ahhhhhhhh",
    "20 million",
    "image url",
    "info etc.... more info",
    "1995/3/7",
    1
  )
);
let loggedin= null
function login(id){
  loggedin=users[id]
}
let HorseIndex = null;
let isEdit = false;
export default function App() {


  
  function DrawerNav() {
    return (
      <Drawer.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#2B120E" },
          headerTintColor: "white",
          sceneContainerStyle: { backgroundColor: "#FFE9C5" },
          drawerContentStyle: { backgroundColor: "#FFD288" },
          drawerInactiveTintColor: "black",
          drawerActiveTintColor: "#2B120E",
          drawerActiveBackgroundColor: "#FFE9C5",
          headerShown:false,
        }}
      >
      <Drawer.Screen
        component={Discover}
        options={{
          title: i18n.t("Discover"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="compass" color={color} size={size} />
          ),
        }}
        initialParams={{
          i18n: i18n,
          horseSet: screenh,
          horseArray: getHorses,
          auctions:auctions,
          horseIndex: HorseIndex,
          loggedin:loggedin,
          horses: getHorses,
          toggleLanguage: toggleLanguage,
        }}
        name="Discover"
      />
      <Drawer.Screen
        component={Profile}
        options={{
          title: i18n.t("Profile"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
        initialParams={{
          i18n: i18n,
          horseSet: screenh,
          horseArray: getHorses,
          auctions:auctions,
          loggedin:loggedin,
          horseIndex: HorseIndex,
          horses: getHorses,
          toggleLanguage: toggleLanguage,
        }}
        name="Profile"
      />
      <Drawer.Screen
        component={Horses}
        options={{
          title: i18n.t("My Horses"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        initialParams={{
          i18n: i18n,
          horseSet: screenh,
          horseArray: getHorses,
          loggedin:loggedin,
          auctions:auctions,
          horseIndex: HorseIndex,
          horses: getHorses,
          toggleLanguage: toggleLanguage,
        }}
        name="My Horses"
      />
      <Drawer.Screen
        component={MyAuctions}
        options={{
          title: i18n.t("My Auctions"),
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
        initialParams={{
          i18n: i18n,
          horseSet: screenh,
          horseArray: getHorses,
          auctions:auctions,
          horseIndex: HorseIndex,
          loggedin:loggedin,
          horses: getHorses,
          toggleLanguage: toggleLanguage,
        }}
        name="My Auctions"
      />
        
      </Drawer.Navigator>
    );
  }

  if (I18nManager.isRTL == true) {
    i18n.locale = "ar";
  } else if (I18nManager.isRTL == false) {
    i18n.locale = "en";
  }
  const toggleLanguage = () => {
    const newLanguage = i18n.locale.startsWith("en") ? "ar" : "en";
    i18n.locale = newLanguage;
    if (newLanguage.startsWith("ar")) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);
    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
    Updates.reloadAsync();
  };

  const [screen, setScreen] = useState(0);
  const [screenh, setScreenh] = useState([]);
  function horseIndex(pickedNumber) {
    HorseIndex = pickedNumber;
  }
  function isEditHandler(pickedNumber) {
    isEdit = pickedNumber;
  }
  function screenHandler(pickedNumber) {
    setScreen(pickedNumber);
  }
  function screenhHandler(list) {
    setScreenh(list);
    setScreen(1);
  }

  // let openScreen = null;
  // if(screen == 2){
  //   openScreen = <AddHorse open={screenHandler} i18n={i18n} horseUpdate={getHorses} isEdit={isEdit}  horseIndex={HorseIndex}/>
  // }
  // else if (screen == 1 && screenh ) {
  //   openScreen = <HorseShow open={screenHandler} i18n={i18n} horseSet={screenh} horseArray={getHorses} horseIndex={HorseIndex}  isEdit={isEditHandler}/>;
  // }
  //  else if (screen == 0){
  //    openScreen = <Horses open={screenHandler} i18n={i18n} toggleLanguage={toggleLanguage} horses={getHorses} horsesSet={screenhHandler} horseIndex={horseIndex} isEdit={isEditHandler}/>;
  //    HorseIndex = null;
  //  }

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#FFE9C5" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#FFE9C5", headerShown: false },
          }}
        >
          
          <Stack.Screen
            options={{
              headerShown: false,
              title: "Login",
            }}
            name="Login"
            component={Login}
            initialParams={{ UserList:users,login:login,i18n:i18n,toggleLanguage:toggleLanguage }}

          />
          
          <Stack.Screen
            options={{
              headerShown: false,
              title: "Register",
            }}
            name="Register"
            component={Signup}
            initialParams={{ UserList:users,login:login,i18n:i18n }}

          />
          <Stack.Screen
            options={{
              headerShown: false,
              title: "Horses",
            }}
            name="Horses"
            component={DrawerNav}

          />
          <Stack.Screen
            options={{
              headerShown: false,
              title: "HorseShow",
            }}
            name="HorseShow"
            component={HorseShow}
            initialParams={{
              i18n: i18n,
              horseArray: getHorses,
            }}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              title: "AddHorse",
            }}
            name="AddHorse"
            component={AddHorse}
            initialParams={{
              i18n: i18n,
              horseUpdate: getHorses,
              isEdit:isEdit,

            }}
          />
          <Stack.Screen
            options={{
              headerShown: false,
              title: "DiscoverShow",
            }}
            name="DiscoverShow"
            component={DiscoverShow}
            initialParams={{
              i18n: i18n,
              horseSet: screenh,
              horseArray: getHorses,
              auctions:auctions,
              horseIndex: HorseIndex,
              loggedin:loggedin,
              horses: getHorses,
            }}
          />
          <Stack.Screen
        component={AddAuction}
        options={{
              headerShown: false,
              title: "AddAuctions",
        }}
        initialParams={{
          i18n: i18n,
          horseSet: screenh,
          horseArray: getHorses,
          auctions:auctions,
          horseIndex: HorseIndex,
          horses: getHorses,
          toggleLanguage: toggleLanguage,
        }}
        name="AddAuctions"
      />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
