/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animation2  = () => {

  const [ animationn ] = useState( new Animated.Value(0) );

  useEffect(() => {
    Animated.timing(
      animationn, {
        toValue: 450,  // al valor al que llega
        duration: 500, // cantidad de tiempo en llegar
        useNativeDriver: true,
      }
    ).start(); // iniciar la animación
  }, []);


  return (
    <Animated.View
      style={[
        styles.box,
        {
          scaleX: animationn,
          scaleY: animationn,
        }
      ]}
    ></Animated.View>
    );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation2 ;