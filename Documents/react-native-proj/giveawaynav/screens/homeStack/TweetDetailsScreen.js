import { useRoute, useNavigation } from "@react-navigation/native";
import { SafeAreaView, Text } from "react-native";
import TweetContent from "../../components/TweetContent";
import { Button } from "react-native";
import { useLayoutEffect } from "react";

export default function TweetDetailsScreen() {
    const navigation = useNavigation();
    const route = useRoute();
    const { params } = route;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: params.tweet.author.name,
        });
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TweetContent tweet={params.tweet} />
            <Button
                title="Participate in giveaway"
                style={{ flex: 2 }}
                color="#007260"
            />
        </SafeAreaView>
    );
}