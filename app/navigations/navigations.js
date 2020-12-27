import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Icon } from 'react-native-elements'

//import Restaurants from "../screens/Restaurants";
import RestaurantStack from "./RestaurantsStack"
//import Favorites from "../screens/Favorites";
import FavoritesStack from "./FavoritesStack"
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchStack from "./SearchStack";
import AccountStack from "./AccountStack";

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{ inactiveTintColor: "#646464", activeTintColor: "#00a680" }}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color)


                })}
            >
                <Tab.Screen name="restaurants" component={RestaurantStack} options={{ title: "RestaurantesX" }} />

                <Tab.Screen name="favorites" component={FavoritesStack} options={{ title: "FavoritosX" }} />
                <Tab.Screen name="topRestaurants" component={TopRestaurantsStack} options={{ title: "TopRestaurantsX" }} />
                <Tab.Screen name="search" component={SearchStack} options={{ title: "SearchX" }} />
                <Tab.Screen name="account" component={AccountStack} options={{ title: "AccountX" }} />

            </Tab.Navigator>
        </NavigationContainer>
    )
}

function screenOptions(route, color) {
    let iconName;

    switch (route.name) {
        case "restaurants":
            iconName = "compass-outline"
            break;

        case "topRestaurants":
            iconName = "heart-outline"
            break;

        case "favorites":
            iconName = "start-oytline"
            break;

        case "search":
            iconName = "compass-outline"
            break;
        case "account":
            iconName = "home-outline"
            break;
        default:
            break;
    }

    return <Icon type="material-community" name={iconName} size={22} color={color} />


}