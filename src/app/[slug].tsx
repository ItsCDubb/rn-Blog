import { Stack, useLocalSearchParams } from "expo-router";
import { getPost } from "../repository/postRepository";
import Markdown from "react-native-markdown-display";
import { ScrollView, Text } from "react-native";
import { useState } from "react";

const PostDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));
  if (!post) {
    return <Text>We couldn't find that post!</Text>;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
      contentContainerStyle={{
        padding: 20,
        maxWidth: 960,
        width: "100%",
        marginHorizontal: "auto",
      }}
    >
      <Stack.Screen options={{ title: post.title }} />
      <Text style={{ fontSize: 30, marginBottom: 20 }}>{post.title}</Text>
      <Markdown>{post.content}</Markdown>
    </ScrollView>
  );
};

export default PostDetailsPage;
