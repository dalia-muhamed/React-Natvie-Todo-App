import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from '../components/Todo';

const CompletedToDo = () => {
  const [newTodos, setNewTodos] = useState([]);
  const { todos } = useSelector(state => state.todo);

  useEffect(() => {
    if (todos) {
      const filteredTodos = todos.filter(item => item.done);
      setNewTodos(filteredTodos);
    }
  }, [todos]);

  return (
    <View>
      {newTodos.length ? (
        <>
          {newTodos.map(todo => (
            <Todo todo={todo} key={todo.id} />
          ))}
        </>
      ) : (
        <Text>No Completed Todos Existed!</Text>
      )}
    </View>
  );
};

export default CompletedToDo;
