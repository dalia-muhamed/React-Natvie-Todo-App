import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Button = ({ style, onPress }) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={style} onPress={onPress}>
        <Text
          style={{
            color: 'white',
          }}
        >
          Add
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
