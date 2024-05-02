import { Button, StyleSheet, Text, View } from "react-native";
import { useCreatePostMutation } from "../src/api/AppApi";

export default function CreatePost(): JSX.Element {
  const [createPost, { isLoading, isError, data }] = useCreatePostMutation();

  function handleCreate() {
    createPost({ author: "alberto", content: "content" });
  }

  return (
    <View style={styles.container}>
      {isLoading && <Text style={styles.content}>Loading</Text>}
      {isError && <Text style={styles.content}>Error</Text>}
      <Text style={styles.content}>Autor {data?.author}</Text>
      <Text style={styles.content}>Content {data?.content}</Text>
      <Button title="Create Post" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    textAlign: "center",
    padding: 10,
  },
});
