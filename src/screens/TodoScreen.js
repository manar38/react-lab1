import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { getTodos, saveTodos } from '../../storage';
import styles from '../../style';

export default function TodoScreen() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    (async () => {
      const stored = await getTodos();
      if (stored) setTodos(stored);
    })();
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (title, desc) => {
    const newTodo = {
      id: Date.now().toString(),
      title,
      desc,
      status: 'active',
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleStatus = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, status: todo.status === 'done' ? 'active' : 'done' }
        : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo =>
    filter === 'All' ? true : todo.status === filter.toLowerCase()
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>TODO APP</Text>
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        filter={filter}
        setFilter={setFilter}
        onToggleStatus={toggleStatus}
        onDelete={deleteTodo}
      />
    </View>
  );
}
