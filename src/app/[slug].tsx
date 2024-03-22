import { getPost, getAllPosts } from "../repository/postRepository";
import { Stack, useLocalSearchParams } from "expo-router";
import { Image, ScrollView, Text } from "react-native";
import Markdown from "react-native-markdown-display";
import Head from "expo-router/head";
import { ORIGIN } from "../config";
import { useState } from "react";
import styles from "../../styles/blogStyle";

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
        <meta
          property="og:image"
          content={`${ORIGIN}/thumbnails/${post.thumbnail}`}
        />
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
          source={{ uri: `${ORIGIN}/thumbnails/${post.thumbnail}` }}
          style={{ width: "100%", aspectRatio: 16 / 9 }}
          alt={post.title}
        />
        <Text style={styles.date}>{post.date}</Text>
        <Markdown>{post.content}</Markdown>
      </ScrollView>
    </>
  );
};

export default PostDetailsPage;
