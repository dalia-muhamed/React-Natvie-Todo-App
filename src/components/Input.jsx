import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ placeholder, style, onChange, value }) => {
  return (
    <TextInput
      style={style}
      placeholder={placeholder}
      onChangeText={onChange}
      value={value}
    />
  );
};

export default Input;
