import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import { useRoute } from '@react-navigation/native';

const TodoDetails = () => {
  const param = useRoute().params;
  console.log(param.todo.title);

  return (
    <View style={{ height: '100%', backgroundColor: '#e2eff1' }}>
      {param && (
        <View style={{ padding: 40, height: '100%' }}>
          <Text
            style={{
              margin: 10,
              backgroundColor: '#54878f',
              height: '25%',
              fontSize: 25,
              color: 'white',
              textTransform: 'capitalize',
              display: 'flex',
              alignItems: 'center',
              padding: 20,
            }}
          >
            Title: {param.todo.title}
          </Text>
          <Text
            style={{
              margin: 10,
              backgroundColor: '#54878f',
              height: '80%',
              fontSize: 25,
              color: 'white',
              textTransform: 'capitalize',
              padding: 20,
            }}
          >
            Description: {param.todo.description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default TodoDetails;
