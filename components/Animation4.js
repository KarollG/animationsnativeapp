/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View  } from 'react-native';

const Animation4 = () => {

  const [ animation ] = useState( new Animated.Value(0) );

  useEffect(() => {
    Animated.timing(
      animation, {
        toValue: 360,  // al valor al que llega
        duration: 500, // cantidad de tiempo en llegar
        useNativeDriver: true,
      }
    ).start(); // iniciar la animación
  }, []);

  const interpolation = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const styleAnimation = {
    transform: [{ rotate: interpolation}],
  };

  return (
    <View>
      <Animated.View
        style={[styles.box, styleAnimation ]}
      ></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation4;