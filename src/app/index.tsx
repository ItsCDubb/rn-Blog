import { getAllPosts } from "../repository/postRepository";
import { FlatList, Text, View } from "react-native";
import { useState } from "react";
import styles from "../styles/mainStyle";
import { Link } from "expo-router";

export default function Page() {
  const [posts, setPosts] = useState(getAllPosts());
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          data={posts}
          renderItem={({ item }) => (
            <Link href={`/${item.slug}`} style={styles.title}>
              {item.title}
            </Link>
          )}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
    </View>
  );
}
