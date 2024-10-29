import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Header from "@/components/todo_components/header";
import TodoItem from "@/components/todo_components/todo-item";
import AddTodo from "@/components/todo_components/add-todo";

export default function TabTwoScreen() {
  const [todos, setTodos] = useState([
    { text: "Task 1", key: 1 },
    { text: "Task 2", key: 2 },
    { text: "Task 3", key: 3 },
  ]);

  const pressHandler = (key: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  const submitHandler = (text: string) => {
    if (text.length > 3) {
      Alert.alert("Todo ajouter!", "ajout reussi avec success");
      setTodos((prevTodos) => {
        return [{ text: text, key: Math.random() }, ...prevTodos];
      });
    } else {
      Alert.alert("OOPS!", "verifier les données que vous avez entré", [
        { text: "Essayer encore" },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.bg}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item, index }) => (
                <TodoItem
                  key={index + 1}
                  text={item.text}
                  pressHandler={() => pressHandler(item.key)}
                />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "#fbc3bc",
    flex: 1,
  },
  content: {
    marginVertical: 30,
    marginHorizontal: "auto",
    backgroundColor: "white",
    width: "90%",
    elevation: 5,
    borderRadius: 10,
    padding: 30,
    shadowColor: "#a22c29",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  list: {
    marginTop: 20,
  },
});
