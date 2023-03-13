import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
import HorsesA from "./assets/Data/HorsesA";
import AddHorse from "./components/screens/AddHorse";
import Horses from "./components/screens/Horses";
import HorseShow from "./components/screens/HorseShow";
import ButtonV2 from "./components/ui/ButtonV2";
import Card from "./components/ui/Card";
import { I18nManager } from 'react-native';
import { I18n } from "i18n-js";
import Translation from './locales/languages/Translation.json'
import { NativeModules } from "react-native";

const i18n = new I18n(Translation);
i18n.fallbacks = true;

  


const getHorses=[];
getHorses.push(new HorsesA('dark','20 million','image url','info etc.... more info','1995/3/7'))
getHorses.push(new HorsesA('dark1','20 million','image url','info etc.... more info','1995/3/7'))
getHorses.push(new HorsesA('dark2','20 million','image url','info etc.... more info','1995/3/7'))
let HorseIndex = null;
let isEdit = false;

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.locale);

  if (I18nManager.isRTL == true){
    i18n.locale ='ar'
  }
  else if (I18nManager.isRTL == false){
    i18n.locale = 'en'
  }
  const toggleLanguage = () => {
    const newLanguage = i18n.locale.startsWith('en') ? 'ar' : 'en';
    i18n.locale = newLanguage;
    setCurrentLanguage(newLanguage);
    if (newLanguage.startsWith('ar')) {
      I18nManager.allowRTL(true);
      I18nManager.forceRTL(true);


    } else {
      I18nManager.allowRTL(false);
      I18nManager.forceRTL(false);
    }
    NativeModules.DevSettings.reload();

  };




  const [screen, setScreen] = useState(0);
  const [screenh, setScreenh] = useState([]);
  function horseIndex(pickedNumber) {
    HorseIndex= pickedNumber;
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

  let openScreen = null;
  if(screen == 2){
    openScreen = <AddHorse open={screenHandler} i18n={i18n} horseUpdate={getHorses} isEdit={isEdit}  horseIndex={HorseIndex}/>
  }
  else if (screen == 1 && screenh ) {
    openScreen = <HorseShow open={screenHandler} i18n={i18n} horseSet={screenh} horseArray={getHorses} horseIndex={HorseIndex}  isEdit={isEditHandler}/>;
  }
   else if (screen == 0){
     openScreen = <Horses open={screenHandler} i18n={i18n} toggleLanguage={toggleLanguage} horses={getHorses} horsesSet={screenhHandler} horseIndex={horseIndex} isEdit={isEditHandler}/>;
     HorseIndex = null;
   }

  return <SafeAreaView>{openScreen}</SafeAreaView>;
}

const styles = StyleSheet.create({});
