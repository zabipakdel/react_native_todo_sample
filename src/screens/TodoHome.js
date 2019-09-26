import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Text
} from 'react-native';

import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  TextInput: {
    paddingVertical: 15,
    paddingHorizontal: 8,
    width: '90%',
    borderLeftColor: '#eee',
    borderLeftWidth: StyleSheet.hairlineWidth
  },
  flatStyle: {
    flex: 1,
    width: '100%',
    height: '100%'
  },
  headerContainer: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    marginTop: 5,
    borderRadius: 5,
    backgroundColor: '#bbb',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10
  }
});

const item = (update, remove, action, { id, completed, text }) => {
  return (
    <TouchableOpacity
      onPress={() => action({ id, text })}
      style={[
        {
          flexDirection: 'row',
          width: '100%',
          backgroundColor: 'tomato',
          borderBottomWidth: StyleSheet.hairlineWidth,
          paddingVertical: 10,
          marginTop: 2,
          paddingHorizontal: 5,
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        completed && { backgroundColor: 'skyblue' }
      ]}
    >
      <Text
        style={[
          {
            paddingLeft: 10,
            borderBottomWidth: StyleSheet.hairlineWidth,
            borderBottomColor: '#000',
            fontWeight: 'bold',
            fontSize: 20
          },
          completed
            ? { textDecorationLine: 'line-through', backgroundColor: 'skyblue' }
            : { textDecorationLine: 'none' }
        ]}
      >
        {text}
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          onPress={() => remove({ id, text })}
          style={{ backgroundColor: 'khaki', borderRadius: 5, margin: 2 }}
        >
          <Text style={{ padding: 10, fontWeight: 'bold' }}>DELETE</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const TodoHome = ({ list, addToDo, toggle, remove, update }) => {
  const [text, setText] = useState('');
  console.log('list ', list);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => addToDo({ id: 5, text })}
        >
          <Text style={styles.textStyle}>+</Text>
        </TouchableOpacity>
        <TextInput
          value={text}
          onChangeText={value => setText(value)}
          style={styles.TextInput}
        />
      </View>

      <View style={styles.flatStyle}>
        {list.length > 0 && (
          <FlatList
            style={styles.flatStyle}
            keyExtractor={(item, i) => i.toString()}
            data={list}
            renderItem={todo => item(update, remove, toggle, todo.item)}
          />
        )}
      </View>
    </View>
  );
};

TodoHome.navigationOptions = {
  title: 'TODO'
};

const mapStateToProps = state => {
  return {
    list: state.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDo: payload => dispatch({ type: 'ADD_TODO', payload }),
    toggle: payload => dispatch({ type: 'TOGGLE_TODO', payload }),
    remove: payload => dispatch({ type: 'REMOVE', payload }),
    update: payload => dispatch({ type: 'UPDATE', payload })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoHome);
