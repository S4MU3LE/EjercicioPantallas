import React, { useState } from "react";
import {View,Text,Button} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from "react-native";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";


import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import ListaEdadScreen from "./ListaEdadScreen";


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


  
export default function BuscarEdadScreen({navigation}) {

    let Edad;

return(

    <View style={{jusifyContent: "center", alignItems: "center"}}>
        <Text>{"\n"}</Text>
        
        <Text>Busca aqui los usuario dependiendo de la edad que introduzcas.</Text>
     <Text>{"\n"}</Text>
     <Text>Edad</Text>
    <TextInput value={Edad} style = {{borderBottomWidth : 1.0, borderTopWidth: 1.0,
     borderLeftWidth: 1.0, borderRightWidth: 1.0}}
      
    defaultValue=""
    placeholder="introduce la edad"
    />

<Text>{"\n"}</Text>
    <Button
   title="Buscar"
   onPress={()=> navigation.navigate("Usuarios",{Edad})} 
   />

    </View>
);

}


