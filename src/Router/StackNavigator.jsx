import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../Pages/Home';
import TodoDetails from '../Pages/TodoDetails';
const stack = createNativeStackNavigator();

function StackNavigator() {
  return (
    <stack.Navigator>
      <stack.Screen name="Home" component={Home} />
      <stack.Screen name="TodoDetails" component={TodoDetails} />
    </stack.Navigator>
  );
}

export default StackNavigator;
