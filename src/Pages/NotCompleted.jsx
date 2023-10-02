import { View, Text } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Todo from '../components/Todo';

const NotCompleted = () => {
  const [newTodos, setNewTodos] = useState([]);
  const { todos } = useSelector(state => state.todo);

  useEffect(() => {
    if (todos) {
      console.log(todos);
      const filteredTodos = todos.filter(obj => !obj.done);
      setNewTodos(filteredTodos);
    }
  }, [todos]);

  return (
    <View style={{ flex: 1 }}>
      {newTodos.length ? (
        newTodos.map(todo => (
          <Fragment key={todo.id}>
            <Todo todo={todo} />
          </Fragment>
        ))
      ) : (
        <Text>NotCompleted</Text>
      )}
    </View>
  );
};

export default NotCompleted;
