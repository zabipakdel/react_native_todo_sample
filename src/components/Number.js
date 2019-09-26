import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

const Adad = ({ counter }) => {
  return (
    <View>
      <Text style={{ fontSize: 70, fontWeight: 'bold', color: 'red' }}>{counter}</Text>
    </View>
  )
};

function mapStateToProps(state){
  return {
    counter: state.counterReducer.counter
  };
}

export default connect(mapStateToProps)(Adad);