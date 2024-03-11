import { getPost } from "../repository/postRepository";
import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import { useState } from "react";

const PostDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));
  if (!post) {
    return <Text>We couldn't find that post!</Text>;
  }
  return (
    <View>
      <Stack.Screen options={{ title: post.title }} />
      <Text>{post.title}</Text>
    </View>
  );
};

export default PostDetailsPage;
