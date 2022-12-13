import React from "react";
import {View,Text,button} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer, TabActions } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import HistoriaScreen from "./HistoriaScreen";
import ListaEdadScreen from "./ListaEdadScreen";
import BuscarEdadScreen from "./BuscarEdadScreen";
import { create } from "react-test-renderer";


const HistoriaStack = createStackNavigator();

function HistoriaStackScreen () {
    return (
        <HistoriaStack.Navigator>
            <HistoriaStack.Screen name="Historia de los moviles" component={HistoriaScreen}/>
        </HistoriaStack.Navigator>
    )
}

const ListadoStack = createStackNavigator();
function ListadoStackScreen() {
return (

    <ListadoStack.Navigator>
<ListadoStack.Screen name= "Busqueda" component={BuscarEdadScreen}/>
<ListadoStack.Screen name= "Usuarios" component={ListaEdadScreen}/>
    </ListadoStack.Navigator>

)
}




const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return(


<NavigationContainer>
        
<Tab.Navigator>

<Tab.Screen name = "Historia" component={HistoriaStackScreen}/>
<Tab.Screen name = "listado" component={ListadoStackScreen}/>


</Tab.Navigator>

</NavigationContainer>

        
    );
}

 
