import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';

const TodoItem = ({ todo, onToggleStatus }) => {
  return (
    <TouchableOpacity onPress={() => onToggleStatus(todo.id)}>
      <View style={styles.todoItem}>
        <Text
          style={[
            styles.todoTitle,
            todo.status === 'done' && styles.done,
          ]}
        >
          {todo.title}
        </Text>
        <Text style={styles.todoDesc}>{todo.desc}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TodoItem;
