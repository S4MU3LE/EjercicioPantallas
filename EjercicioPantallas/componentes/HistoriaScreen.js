import React from "react";
import {View,Text,button} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from "react-native";
import { Image } from "react-native";


import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    container: {},
    content: {
      alignItems: 'center',
      flex: 1,
      justifyContent: 'center'
    },
    form: {
      width: '100%'
    },
    item: {}
  });


export default function HistoriaScreen() {

return (

<ScrollView>

<View style={{jusifyContent: "center", alignItems: "center"}}>


      <Text>{"\n"}</Text>
      <Text>Historia de 3 dispositivos</Text>
      <Text>{"\n"}</Text>

      <Image source={require('../imagenes/iphone.png')} />
      <Text>{"\n"}</Text>
      <Text>Esto es el iphone comun, actualmente usado a la par que los androids en todo el mundo.</Text>
      <Text>{"\n"}</Text>

      <Image source={require('../imagenes/blackberry.png')} />
      <Text>{"\n"}</Text>
      <Text>Esto es el blackberry comun, movil antiguo que sigue teniendo sus usos, un poco mas anticuados y lentos.</Text>
      <Text>{"\n"}</Text>

      <Image source={require('../imagenes/nokia.png')} />
      <Text>{"\n"}</Text>
      <Text>Esto es el nokia comun, tambien usado como martillo para meter clavos (no se rompe esta cosa)</Text>
      <Text>{"\n"}</Text>

    </View>
    </ScrollView>
);

}

