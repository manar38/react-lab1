import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'TODOS';

export const saveTodos = async (todos) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  } catch (e) {
    console.error('Error saving todos:', e);
  }
};

export const getTodos = async () => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    console.error('Error reading todos:', e);
    return [];
  }
};
