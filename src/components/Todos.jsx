import { View, Text, TouchableOpacity, Platform } from 'react-native';
import React from 'react';
import Todo from './Todo';

const Todos = ({ todos }) => {
  return (
    <View>
      {todos.map(todo => (
        <View key={todo.id} style={{}}>
          <Todo todo={todo} todos={todos} />
        </View>
      ))}
    </View>
  );
};

export default Todos;
