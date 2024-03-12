import { getPost, getAllPosts } from "../repository/postRepository";
import { Stack, useLocalSearchParams } from "expo-router";
import Markdown from "react-native-markdown-display";
import { Image, ScrollView, Text } from "react-native";
import Head from "expo-router/head";
import { useState } from "react";

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

const PostDetailsPage = () => {
  const { slug } = useLocalSearchParams();
  const [post, setPost] = useState(getPost(slug));
  if (!post) {
    return <Text>We couldn't find that post!</Text>;
  }

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
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
        <Image
          source={{ uri: `/thumbnails/${post.thumbnail}` }}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
        />
        <Markdown>{post.content}</Markdown>
      </ScrollView>
    </>
  );
};

export default PostDetailsPage;
