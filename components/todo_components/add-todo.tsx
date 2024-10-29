import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

interface buttonProps {
  submitHandler: (text: string) => void;
}
export default function AddTodo({ submitHandler }: buttonProps) {
  const [text, setText] = useState("");

  const changeHandler = (val: any) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New todo..."
        onChangeText={changeHandler}
      />
      <Button
        title="Add todo"
        onPress={() => submitHandler(text)}
        color={"coral"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "coral",
    paddingHorizontal: 10,
    paddingVertical: 18,
    borderRadius: 6,
    fontSize: 18,
    color: "black",
  },
});
