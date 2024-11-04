import React from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";

function ToDoList({ tasks }) {
  return (
    <FlatList
      data={tasks.map((task, index) => ({
        key: index.toString(),
        value: task,
      }))}
      renderItem={({ item }) => (
        <View style={styles.taskItem}>
          <Text style={styles.incompleteTask}>{item.value}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  taskItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  incompleteTask: {
    textDecorationLine: "none",
    color: "black",
  },
});

export default ToDoList;
