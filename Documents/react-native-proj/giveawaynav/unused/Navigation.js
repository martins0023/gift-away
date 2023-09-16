import Feed from "../screens/tabScreens/Feed";
import Settings from "../screens/tabScreens/Settings";
import Notifications from "../screens/tabScreens/Notifications";
import TweetDetailsScreen from "../screens/homeStack/TweetDetailsScreen";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from "@react-navigation/drawer"

import { Ionicons } from '@expo/vector-icons';
import Payments from "../screens/drawerScreens/Payments";
import { Pressable, useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "react-native";


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
                    backgroundColor: '#007260',
                }
            }}
        >
            <TopTabs.Screen name="main" component={Feed} />
            <TopTabs.Screen name="Giveaways" component={Payments} />
            <TopTabs.Screen name="OnGoing" component={Payments} />
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
                name="TweetDetailsScreen" 
                component={TweetDetailsScreen} 
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
                if (route.name === "Feed") {
                    iconName = focused ? "home" : "home-outline";
                } else if (route.name === "Settings") {
                iconName = focused ? "settings" : "ios-settings-sharp";
                } else if (route.name === "Notifications") {
                iconName = focused ? "ios-notifications" : "notifications-outline";
                }

                return <Ionicons name={iconName} size={size} color={color} />
            },
            tabBarActiveTintColor: "#007260",
            tabBarInactiveTintColor: "gray",
        })}
        >
            <Tab.Screen 
                name='Feed' 
                component={TopTabsGroup} 
                options={{ tabBarLabel: "user",
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                        <Image
                            source={require("./assets/beto.jpeg")}
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
            <Tab.Screen name='Notifications' component={Notifications} />
            <Tab.Screen name='Settings' component={Settings} />

        </Tab.Navigator>
    )
}

// Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup () {
    return (
        <Drawer.Navigator screenOptions={{headerShown: false}}>
            <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
            <Drawer.Screen name="Payments" component={Payments} options={{headerShown: true}} />
        </Drawer.Navigator>
    )
}

export default function Navigation () {
    const currentTheme = useColorScheme();
    return (
        <NavigationContainer
            theme={ currentTheme === "dark" ? DarkTheme : DefaultTheme}
        >
            <StatusBar style="auto" />
            <DrawerGroup />
            {/*<HomeStackGroup /> */}
        </NavigationContainer>
    );
}