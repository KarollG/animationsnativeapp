/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View  } from 'react-native';

const Animation3 = () => {

  const [ animation ] = useState( new Animated.Value(14) );

  useEffect(() => {
    Animated.timing(
      animation, {
        toValue: 40,  // al valor al que llega
        duration: 500, // cantidad de tiempo en llegar
        useNativeDriver: false,
      }
    ).start(); // iniciar la animación
  }, []);


  return (
    <View>
      <Animated.Text
        style={[styles.texto, { fontSize: animation }]}
      >Animacion 1</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  texto: {
    fontSize: 30,
    textAlign: 'center',
  },
});

export default Animation3;