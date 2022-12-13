import React from "react";
import {View,Text,button} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from "react-native";
import { Image } from "react-native";


import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import BuscarEdadScreen from "./BuscarEdadScreen";
import {Edad} from "./BuscarEdadScreen";


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

  var users = [{

name: "Persona1",
age: 10,

  },

  {

name: "Persona2",
age: 20,

  },

  {

name: "Persona3",
age: 30,

  }]

export default function ListaEdadScreen() {



return (
    <View 
    style={{jusifyContent: "center", alignItems: "center"}}>


    <Text>la edad es introducida es: {Edad}</Text>
        
            {users.filter(users=> users.age < Edad).map(userFiltered=>(

                <FlatList>
                   nombre= {usersFiltered.name};
                   edad= {userFiltered.age};
                </FlatList>
            ))}
    

    </View>

);

}

