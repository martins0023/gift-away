import React from "react";
import { StyleSheet, View, Image, Text, useColorScheme } from "react-native";
import { Card, Avatar, Button } from 'react-native-paper';

import { Ionicons } from '@expo/vector-icons';

const avatar = (author) => {
  const imageUrl = author.avatar.replace("_normal", "");
  return <Image style={styles.avatar} source={{ uri: imageUrl }} />;
};

const PostContent = ({ post }) => {
    const theme = useColorScheme();
    return (
        <View style={styles.singleItem}>
        <View style={styles.tweetContentContainer} >
          
          
            <Card
              style={{
                backgroundColor: "#FFFFFF"
              }}
              
            >

              <View
                style={{
                  flex: 1,
                  flexWrap: 2,
                  marginTop: 10,
                }}
              >  
                <Image 
                  source={require("../assets/member-8.jpg")} 
                  style={{ 
                    width: 40, 
                    height: 40, 
                    borderRadius: 100, 
                    marginLeft: 5 
                    }}
                  />
                  <View
                    style={{
                      justifyContent: "auto",
                      marginLeft: 330,
                      flex: 1,
                      position: "absolute"
                    }}
                  >
                    <Ionicons  name="bookmark-outline" size={20} />
                  </View>
              </View>
                <Card.Title
                  numberOfLines={1}
                  style={[
                    styles.header,
                    { color: theme === "dark" ? "#FFF" : "#000" },
                  ]}
                  title="@Miracle1Oladapo - Parody" subtitle="LED Giveaway" />
                <Card.Content>
                  <Text variant="titleLarge"></Text>
                  <Text
                    style={[
                        styles.description,
                        { 
                            marginBottom: 10,
                            color: theme === "dark" ? "#FFF" : "#000" },
                      ]}
                    variant="bodyMedium">I am giving away a LED 45 touch screen lasting from today till the fourth of semptember</Text>
                </Card.Content>
                <Card.Cover 
                  style={{  borderRadius: 10, marginLeft: 10, marginRight: 10 }}
                  source={require( '../assets/item.jpg' )} />
                  <Text
                    style={{
                      marginLeft: 7,
                      marginBottom: 10,
                      fontStyle: "italic",
                      fontWeight: "400",
                      fontSize: "16px"
                    }}
                  >Countdown till Giveaway 's over: <Text style={{fontWeight: "bold"}}>29</Text>days <Text style={{fontWeight: "bold"}}>2</Text>hours <Text style={{fontWeight: "bold"}}>12</Text>minutes <Text style={{fontWeight: "bold"}}>3</Text>seconds
                  </Text>
                
            </Card>
            
            
        </View>
        </View>
    );
  };
  
  const styles = StyleSheet.create({
    author: {
      flexShrink: 1,
    },
    actionBar: {
      marginTop: 8,
      justifyContent: "space-between",
      marginRight: 16,
    },
    actionButton: {
      width: 18,
      height: 18,
      marginRight: 8,
    },
    gray: {
      color: "#777",
      fontSize: 13,
      paddingRight: 2,
    },
    avatar: {
      height: 44,
      width: 44,
      borderRadius: 22,
      marginRight: 16,
      flexShrink: 0,
      marginTop: 4,
    },
    header: {
      fontSize: 14,
      fontWeight: "bold",
      paddingBottom: 4,
      paddingRight: 4,
      color: "#000",
    },
    description: {
      fontSize: 14,
      color: "#000",
    },
    singleItem: {
      paddingHorizontal: 16,
      minHeight: 44,
      flex: 1,
      padding: 16,
    },
    rowTop: {
      flexDirection: "row",
    },
    rowActions: {
      flexGrow: 1,
      justifyContent: "space-between",
      flexDirection: "row",
    },
    row: {
      flexDirection: "row",
    },
    elemAction: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    actionText: {
      fontSize: 12,
      color: "#444",
    },
    tweetContentContainer: {
      flexShrink: 1,
      flexGrow: 1,
    },
  });

  export default PostContent;