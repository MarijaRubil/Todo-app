import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  SafeAreaView,
} from "react-native";

let count = 1;

const Add = ({ navigation, route }) => {
  const [title, onChangeTitle] = useState("");
  const [desc, onChangeDesc] = useState("");

  return (
    <SafeAreaView>
      <Text style={{ fontSize: 30 }}></Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeTitle}
        value={title}
        placeholder="Title"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDesc}
        value={desc}
        placeholder="Description"
      />
      <Button
        onPress={() => {
          const todo = {
            title,
            desc,
            id: count++,
          };

          console.log("Add", todo);
          navigation.navigate("Todo", { todo });
        }}
        title="Done"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default Add;