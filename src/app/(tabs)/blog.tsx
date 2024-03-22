import PostListItem from "../../components/PostListItem/PostListItem";
import { getAllPosts } from "../../repository/postRepository";
import { FlatList, View } from "react-native";
import { useState } from "react";
import styles from "../../../styles/blogStyle";

export default function Page() {
  const [posts, setPosts] = useState(getAllPosts());
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <FlatList
          data={posts}
          renderItem={({ item }) => <PostListItem post={item} />}
          contentContainerStyle={{ gap: 5 }}
          numColumns={2}
        />
      </View>
    </View>
  );
}
