import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 60,
    flex: 1,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  divider: {
    height: 1,
    backgroundColor: '#aaa',
    marginVertical: 20,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
  },
  activeFilter: {
    backgroundColor: '#007bff',
  },
  filterText: {
    color: '#333',
    fontWeight: 'bold',
  },
  activeFilterText: {
    color: '#fff',
  },
  todoItem: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginVertical: 6,
  },
  todoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  todoDesc: {
    color: '#666',
  },
  done: {
    textDecorationLine: 'line-through',
    color: 'green',
  },
});

export default styles;
