import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import COLORS from '../../constants/colors'

import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native";

//const DIMENSION_WIDTH = Dimensions.get("window").width;
//const DIMENSION_HEIGHT = Dimensions.get("window").height;
const Splash = () => {
    const navigation = useNavigation();
    useEffect(() => {

        setTimeout(() => {
            navigation.navigate('welcome')

        },5000)
    }, [])

    return (
        <>
            <LinearGradient
            style={{
                flex: 1
            }}
            colors={[COLORS.white, COLORS.white]}
            >
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            flexDirection: "row",
                            marginTop: 12,
                            justifyContent: "center",
                            marginTop: 400,
                        }}
                    >
                        <Image
                            source={require("../../assets/logo.png")}
                            style={{
                                width: 100, 
                                height: 100,
                            }}
                        />
                        
                    </View>
                </View>
            </LinearGradient>
        </>
    )
}

export default Splash