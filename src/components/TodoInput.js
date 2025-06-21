import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import styles from '../style';

export default function TodoInput({ onAdd }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleAdd = () => {
    if (title.trim()) {
      onAdd(title, desc);
      setTitle('');
      setDesc('');
    }
  };

  return (
    <View>
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
      <Button title="Add Todo" onPress={handleAdd} />
    </View>
  );
}
