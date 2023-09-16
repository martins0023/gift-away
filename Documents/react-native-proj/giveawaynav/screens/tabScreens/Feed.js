import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { tweets } from "../../data/tweets";
import Tweet from "../../components/Tweet";
import Post from "../../components/Post";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Card, Avatar, Button } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";

const LeftContent = props => <Image source={require("../../assets/member-8.jpg")} style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 5 }}/>
export default function Feed() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/logofeed.png")}
            style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
          />
        </Pressable>
      ),
    });
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={tweets.slice(0, 10)}
        keyExtractor={(item) => {
          return item.id;
        }}
        renderItem={({ item }) => {
          return <Post tweet={item} />;
        }}
        // ListHeaderComponent={() => (
        //   <View style={styles.header}>
        //     <Text style={styles.headerTitle}>New tweets available</Text>
        //   </View>
        // )}
        ListHeaderComponentStyle={{ backgroundColor: "#ccc" }}
        ItemSeparatorComponent={() => <View style={styles.divider} />}
      />
      
      {/*
        <View style={styles.singleItem}>
          <View style={styles.tweetContentContainer} >
            <ScrollView>
            
              <Card
                style={{
                  backgroundColor: "#FFFFFF"
                }}
                
              >
                <Card.Title  title="@Miracle1Oladapo - Parody" subtitle="LED Giveaway" left={LeftContent} />
                  <Card.Content>
                    <Text variant="titleLarge"></Text>
                    <Text 
                      style={{ marginBottom: 10 }}
                      variant="bodyMedium">I am giving away a LED 45 touch screen lasting from today till the fourth of semptember</Text>
                  </Card.Content>
                  <Card.Cover 
                    style={{  borderRadius: 10, marginLeft: 10, marginRight: 10 }}
                    source={require( '../../assets/item.jpg' )} />
                  <Card.Actions>
                    <Button >Cancel</Button>
                    <Button buttonColor="#007260">Engage</Button>
                  </Card.Actions>
              </Card>
              <Card
                style={{ marginTop: '10px', backgroundColor: "#FFFFFF"}}
              >
                <Card.Title  title="@Miracle1Oladapo - Parody" subtitle="LED Giveaway" left={LeftContent} />
                  <Card.Content>
                    <Text variant="titleLarge"></Text>
                    <Text 
                      style={{ marginBottom: 10 }}
                      variant="bodyMedium">I am giving away a LED 45 touch screen lasting from today till the fourth of semptember</Text>
                  </Card.Content>
                  <Card.Cover 
                    style={{  borderRadius: 10, marginLeft: 10, marginRight: 10 }}
                    source={require( '../../assets/item.jpg' )} />
                  <Card.Actions>
                    <Button >Cancel</Button>
                    <Button buttonColor="#007260">Engage</Button>
                  </Card.Actions>
              </Card>
              <Card
                style={{ marginTop: '10px', backgroundColor: "#FFFFFF"}}
              >
                <Card.Title  title="@Miracle1Oladapo - Parody" subtitle="LED Giveaway" left={LeftContent} />
                  <Card.Content>
                    <Text variant="titleLarge"></Text>
                    <Text 
                      style={{ marginBottom: 10 }}
                      variant="bodyMedium">I am giving away a LED 45 touch screen lasting from today till the fourth of semptember</Text>
                  </Card.Content>
                  <Card.Cover 
                    style={{  borderRadius: 10, marginLeft: 10, marginRight: 10 }}
                    source={require( '../../assets/item.jpg' )} />
                  <Card.Actions>
                    <Button >Cancel</Button>
                    <Button buttonColor="#007260">Engage</Button>
                  </Card.Actions>
              </Card>
            </ScrollView>
          </View>
        </View>
      */}
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DDD",
  },
  header: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1DA1F2",
  },
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: "#FFFFFF",
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  footerTitle: {
    padding: 8,
    borderRadius: 12,
    fontSize: 12,
  },
  emptyComponentTitle: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyComponentSubtitle: {
    color: "#808080",
    padding: 8,
    fontSize: 14,
    textAlign: "center",
  },
  emptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  singleItem: {
    paddingHorizontal: 16,
    minHeight: 44,
    flex: 1,
    padding: 16,
  },
  row: {
    flexDirection: "row",
  },
  tweetContentContainer: {
    flexShrink: 1,
    flexGrow: 1,
  },
});
