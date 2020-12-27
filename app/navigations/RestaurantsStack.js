import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Restaurants from "../screens/Restaurants";


const Stack = createStackNavigator();


export default function RestaurantStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
            name="retaurants"
            component={ Restaurants }
           options={{ title:"InterRestaurant" }}
            />

            

        </Stack.Navigator>
    )
}