import { useRoute, useNavigation } from "@react-navigation/native";

import { SafeAreaView, Text } from "react-native";
import { Card, Button } from 'react-native-paper';
import { useLayoutEffect } from "react";

import PostContent from "../../components/PostContent";

export default function PostDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: "@Miracle1Oladapo - Parody",
        });
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PostContent post={params.post} />
                <Card.Actions>
                    <Button >Call now</Button>
                    <Button
                        onPress={() => {
                            navigation.navigate("GiveawayDetailsCollection");
                          }} 
                        buttonColor="#007260" >Engage</Button>
                </Card.Actions>
        </SafeAreaView>
    );
}