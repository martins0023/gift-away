import React from "react";
import Feed from "../../screens/tabScreens/Feed";
import Settings from "../../screens/tabScreens/Settings";

//import Notifications from "../../screens/tabScreens/Notifications";
import Search from "../../screens/tabScreens/Search";
import Giveaway from "../../screens/tabScreens/Giveaway";
import TweetDetailsScreen from "../../screens/homeStack/TweetDetailsScreen";
import PostDetailsScreen from "../../screens/homeStack/PostDetailsScreen";
import GiveawayDetailsCollection from "../../screens/giveawaydetails/GiveawayDetailsCollection";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer"

import { Ionicons } from '@expo/vector-icons';
import About from "../../screens/drawerScreens/About";
import { Pressable, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";
import { welcome } from ".";


//tOP TABS
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {

    return (
        <TopTabs.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    textTransform: 'capitalize',
                    fontWeight: 'bold',
                },
                tabBarIndicatorStyle: {
                    height: 5,
                    borderRadius: 5,
                    backgroundColor: '#000000',
                }
            }}
        >
    
                <TopTabs.Screen name="All" component={Feed} />
                <TopTabs.Screen name="Money" component={About} />
                <TopTabs.Screen name="Books" component={About} />
                <TopTabs.Screen name="Wears" component={About} />
                <TopTabs.Screen name="Electronics" component={About} />
                
      
    </TopTabs.Navigator>
    )
}

//stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
                name="TabGroup" 
                component={TabGroup} 
                options={{ headerShown: false}}
            />
            <HomeStack.Screen 
                name="PostDetailsScreen" 
                component={PostDetailsScreen} 
                options={{ presentation: "modal"}}
            />
            <HomeStack.Screen 
                name="GiveawayDetailsCollection" 
                component={GiveawayDetailsCollection} 
                options={{ presentation: "modal"}}
            />
        </HomeStack.Navigator>
    );
}


// Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup({ navigation }) {
    return (
        <Tab.Navigator
        screenOptions={({route, navigation}) => ({
            tabBarIcon: ({color, focused, size}) => {
                let iconName;
                if (route.name === "Giftaway") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "ios-settings-sharp";
                } else if (route.name === "Discover") {
                iconName = focused ? "ios-search" : "ios-search-outline";
                }  else if (route.name === "Giveaway") {
                iconName = focused ? "ios-add-circle" : "ios-add-circle-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#000000",
            tabBarInactiveTintColor: "gray",
        })}
        >
            <Tab.Screen 
                name='Giftaway' 
                component={TopTabsGroup} 
                options={{ tabBarLabel: "Home",
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require("../../assets/gifts 1.png")}
                            style={{
                                width: 40,
                                height: 40,
                                borderRadius: 100,
                                marginLeft: 15,
                            }}
                            />
                    </Pressable>
                ),
            }}
            />
            <Tab.Screen name='Discover' component={Search} />
            <Tab.Screen name='Giveaway' component={Giveaway} />
            <Tab.Screen name='Settings' component={Settings} />

        </Tab.Navigator>
    )
}

// Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup () {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="Home" component={HomeStackGroup} />
            <Drawer.Screen name="About" component={About} options={{headerShown: true}} />
            <Drawer.Screen name="Logout" component={welcome} options={{headerShown: false}} />
        </Drawer.Navigator>
    )
}

export default function Navigation () {
    const currentTheme = useColorScheme();
    return (
        <NavigationContainer
            independent={true}
            theme={ currentTheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <StatusBar style="auto" />
            <DrawerGroup />
            {/*<HomeStackGroup /> */}
        </NavigationContainer>
    );
}