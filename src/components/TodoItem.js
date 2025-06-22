import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '..//..//style';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ todo, onToggleStatus, onDelete }) {
  return (
    <View style={styles.todoItemRow}>
      <TouchableOpacity onPress={() => onToggleStatus(todo.id)} style={{ flex: 1 }}>
        <Text style={[styles.todoTitle, todo.status === 'done' && styles.done]}>
          {todo.title}
        </Text>
        <Text style={styles.todoDesc}>{todo.desc}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onToggleStatus(todo.id)}>
          <MaterialIcons name="check-circle" size={24} color="green" />
        </TouchableOpacity>
      <TouchableOpacity onPress={() => onDelete(todo.id)}>
        <MaterialIcons name="delete" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
}
