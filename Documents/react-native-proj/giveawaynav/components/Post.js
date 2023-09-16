import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import PostContent from "./PostContent";

const Post = ({ post }) => {
const { navigate } = useNavigation();
  return (
    <Pressable
      onPress={() => {
        navigate("PostDetailsScreen", { post });
      }}
    >
      <PostContent post={post} />
    </Pressable>
  );
};

export default Post;
