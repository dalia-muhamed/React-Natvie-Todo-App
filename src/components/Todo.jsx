import { View, Text, Touchable, Platform } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { changeStatus, deleteTodo } from '../redux/slices/TodoSlice';

const Todo = ({ todo }) => {
  const platform = Platform.OS;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      style={{
        color: 'black',
        paddingVertical: 17,
        paddingHorizontal: 30,
        marginVertical: 10,
        backgroundColor: platform === 'web' ? '#e2eff1' : 'darkgray',
        borderWidth: 1,
        borderColor: '#ccc',
        minHeight: 40,
        borderRadius: 10,
        justifyContent: 'center',
      }}
      onPress={() => navigation.navigate('TodoDetails', { todo })}
    >
      <Text
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: 700,
          textTransform: 'capitalize',
        }}
      >
        {todo.title}
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'end',
            gap: 9,
          }}
        >
          <FontAwesome
            // style={{ position: 'absolute', top: 0, right: 20 }}
            name="edit"
            size={20}
            color="black"
            onPress={() => dispatch(changeStatus({ id: todo.id }))}
          />
          <AntDesign
            // style={{ position: 'absolute', top: 0, right: 0 }}
            name="delete"
            size={18}
            color="black"
            onPress={() => dispatch(deleteTodo({ id: todo.id }))}
          />
        </TouchableOpacity>
      </Text>
    </TouchableOpacity>
  );
};

export default Todo;
