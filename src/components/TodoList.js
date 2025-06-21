import React from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import styles from '../style';
import TodoItem from './TodoItem';

export default function TodoList({ todos, filter, setFilter, onToggleStatus, onDelete }) {
  const filters = ['All', 'active', 'done'];

  return (
    <View>
      <View style={styles.divider} />
      <View style={styles.filters}>
        {filters.map((status) => (
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
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem todo={item} onToggleStatus={onToggleStatus} onDelete={onDelete} />
        )}
      />
    </View>
  );
}
