import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Detail = ({ navigation, route }) => {
  const { item, updateDone, deleteTodo } = route.params;

  const handleDonePress = () => {
    updateDone(item.id, true);
  };

  const handleDeletePress = () => {
    deleteTodo(item.id);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.desc}</Text>

        <Button
          title="Done"
          onPress={() => {
            handleDonePress();
            navigation.navigate("Todo");
          }}
        />
      </View>
      <View style={styles.footer}>
        <Button
          title="Delete"
          onPress={() => {
            handleDeletePress();
            navigation.navigate("Todo");
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
  },

  footer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
  },
});

export default Detail;