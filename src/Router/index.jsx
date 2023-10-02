import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import CompletedToDo from '../Pages/CompletedToDo';
import NotCompleted from '../Pages/NotCompleted';

const tab = createBottomTabNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <tab.Navigator>
        <tab.Screen
          name="Main"
          component={StackNavigator}
          options={{ headerShown: false }}
        />
        <tab.Screen name="Completed" component={CompletedToDo} />
        <tab.Screen name="NotCompleted" component={NotCompleted} />
      </tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
