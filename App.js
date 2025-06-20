import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import TodoItem from './todo item';
import styles from './style';

export default function App() {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addTodo = () => {
    if (title.trim() === '') return;

    const newTodo = {
      id: Date.now().toString(),
      title,
      desc,
      status: 'active',
    };

    setTodos([newTodo, ...todos]);
    setTitle('');
    setDesc('');
  };

  const toggleStatus = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              status: todo.status === 'done' ? 'active' : 'done',
            }
          : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    return todo.status === filter.toLowerCase();
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>

      <TextInput
        style={styles.input}
        placeholder="Todo Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Todo Description"
        value={desc}
        onChangeText={setDesc}
      />

      <Button title="Add Todo" onPress={addTodo} />

      <View style={styles.divider} />

      <View style={styles.filters}>
        {['All', 'active', 'done'].map((status) => (
          <TouchableOpacity
            key={status}
            style={[
              styles.filterButton,
              filter === status && styles.activeFilter,
            ]}
            onPress={() => setFilter(status)}
          >
            <Text
              style={[
                styles.filterText,
                filter === status && styles.activeFilterText,
              ]}
            >
              {status.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredTodos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onToggleStatus={toggleStatus} />
        )}
      />
    </View>
  );
}
