/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StyleSheet, View, Text, Animated, TouchableWithoutFeedback } from 'react-native';

const Animation5 = () => {

  const [ animation ] = useState( new Animated.Value(1) );

  const pressBtn = () => {
    Animated.spring( animation, {
      toValue: .8,
      useNativeDriver: true,
    }).start();
  };

  const releaseBtn = () => {
    Animated.spring( animation, {
      toValue: 1,
      friction: 4, //más bajo, mayor rebote
      tension: 10,
      useNativeDriver: true,
    }).start();

  };

  const styleAnimation = {
    transform: [{ scale: animation}],
  };


  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn= { () => pressBtn()}
        onPressOut= { () => releaseBtn()}
      >
        <Animated.View style={[styles.btn, styleAnimation]} >
          <Text style={styles.text}> Iniciar Sesión </Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  btn: {
    backgroundColor:'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 28,
  },
});

export default Animation5;