import { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Home = ({ navigation, route }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    if (route.params?.todo) {
      const { todo } = route.params;
      console.log("todo", todo);
      setTodos((prev) => [...prev, todo]);
    }
  }, [route.params?.todo]);

  console.log("todos", todos);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => navigation.navigate("New Todo")} title="Add" />
      ),
    });
  }, [navigation]);

  const handleItemPress = (item) => {
    navigation.navigate("Details", {
      item,
      updateDone: (itemId, done) => {
        const updatedTodos = todos.map((todo) =>
          todo.id === itemId ? { ...todo, done } : todo
        );
        setTodos(updatedTodos);
      },
      deleteTodo: (itemId) => {
        const updatedTodos = todos.filter((todo) => todo.id !== itemId);
        setTodos(updatedTodos);
      },
    });
  };

  return (
    <View>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.todoItem, item.done && styles.doneTodoItem]}
            onPress={() => handleItemPress(item)}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  doneTodoItem: {
    backgroundColor: "#90EE90",
    textDecorationLine: "line-through",
  },
});

export default Home;