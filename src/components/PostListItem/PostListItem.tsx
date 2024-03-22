import { Post } from "../../types/post";
import { View } from "react-native";
import { Link } from "expo-router";
import styles from "./styles";

const PostListItem = ({ post }: { post: Post }) => {
  return (
    <View style={styles.container}>
      <Link href={`/${post.slug}`} style={styles.link}>
        {post.title}
      </Link>
    </View>
  );
};

export default PostListItem;
