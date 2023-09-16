import { View, Text, TextInput, TouchableOpacity, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';

import { Ionicons } from '@expo/vector-icons'

import COLORS from '../../constants/colors'
import Button from '../../components/Button'

const Pronouns = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <Pressable>Skip</Pressable>
    });
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{
        justifyContent: "center",
        alignContent: "flex-end",
        alignItems: "flex-end",
        marginTop: 18,
        marginRight: 18,
      }}>
        <Pressable
          onPress={() =>navigation.navigate("signup")}
          style={{
            color: COLORS.black,
            fontSize: 16,
            fontWeight: "normal"
          }}
        >
          Skip
        </Pressable>
      </View>
      <View style={{
            flex: 1, 
            marginHorizontal: 22,
            }}
        >
        <View
          style={{marginVertical: 22}}>
          <Text style={{
            fontSize: 22,
            fontWeight: "bold",
            marginVertical: 12,
            color: COLORS.black,
            justifyContent: "center",
            marginHorizontal: "center"
          }}>
            What are your pronouns?
          </Text>

          <Text style={{
            fontSize: 16,
            color: COLORS.black,
            marginHorizontal: "center",

          }}>This information helps Giftaway to improve the content you see</Text>
          
        </View>

        <View
          style={{
            marginTop: "45px",
            marginBottom: "70px",
            justifyContent: "center",
            marginHorizontal: "auto",
          }}
        >
          <Image 
              source={require("../../assets/man.png")} 
              style={{ 
                width: 50, 
                height: 50, 
                }}
            />
          </View>


        <View style={{
          flexDirection: "column",
          justifyContent: "center",
        }}>

          <TouchableOpacity
            onPress={() =>navigation.navigate("signup")}
            filled
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 80,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
              paddingBottom: 16,
              paddingVertical: 10,
              backgroundColor: "#F3F3F3"
              
            }}
          >

            <Text
                style={{
                    fontWeight: "bold",
                }}
            > She</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>navigation.navigate("signup")}
            resizeMode='contain'
            style={{
              marginTop: 12,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 100,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
              paddingBottom: 16,
              paddingVertical: 10,
              backgroundColor: "#F3F3F3"
            }}
          >

            <Text
                style={{
                    fontWeight: "bold",
                }}
            > He</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>navigation.navigate("signup")}
            style={{
              marginTop: 12,
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              height: 100,
              borderWidth: 1,
              borderColor: COLORS.grey,
              marginRight: 4,
              borderRadius: 10,
              paddingBottom: 16,
              paddingVertical: 10,
              backgroundColor: "#F3F3F3"
            }}
          >

            <Text
                style={{
                    fontWeight: "bold",
                }}
            > They </Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

export default Pronouns