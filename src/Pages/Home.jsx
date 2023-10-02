import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Fragment, useEffect, useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import Todos from '../components/Todos';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setTodos } from '../redux/slices/TodoSlice';
const Home = () => {
  const Inputs = [
    { placeholder: 'Title', id: 0 },
    { placeholder: 'Description', id: 1 },
  ];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const { todos } = useSelector(state => state.todo);

  useEffect(() => {
    trackStorage();
  }, []);

  const trackStorage = async () => {
    try {
      const tracked = await AsyncStorage.getItem('todos');
      if (tracked) {
        dispatch(setTodos(JSON.parse(tracked)));
      }
    } catch (error) {
      console.log('Error retrieving todos from AsyncStorage:', error);
    }
  };
  const onChange = (val, id) => {
    switch (id) {
      case 0:
        setTitle(val);
        break;
      case 1:
        setDescription(val);
        break;
      default:
        return todos;
    }
  };

  const onPress = () => {
    dispatch(addTodo({ title, description }));
    setTitle('');
    setDescription('');
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>To Do App!</Text>
        <View style={styles.scroll}>
          {Inputs.map((item, i) => (
            <Fragment key={i}>
              <Input
                style={styles.input}
                placeholder={item.placeholder}
                value={item.id == 0 ? title : description}
                onChange={val => onChange(val, item.id)}
              />
            </Fragment>
          ))}

          <Button style={styles.button} onPress={onPress} />
          <View style={styles.drawer} />
          <Todos todos={todos} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    backgroundColor: '#f5f5f5',
    padding: 25,
  },
  scroll: { width: '100%' },
  input: {
    borderRadius: 5,
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    // outline: 'none',
  },
  header: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 19,
  },
  button: {
    backgroundColor: '#03aca0',
    width: '100%',
    height: 40,
    border: 'none',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    width: '95%',
    height: 1,
    backgroundColor: '#ccc',
    marginHorizontal: 'auto',
    marginBottom: 20,
    marginTop: 25,
  },
});

export default Home;
