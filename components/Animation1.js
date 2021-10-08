/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animation1 = () => {

    const [ animation] = useState( new Animated.Value(0.01));

    useEffect(() => {
      Animated.timing(
        animation, {
          toValue: 1, //al valor que llega
          duration: 500, // de tiempo en llegar
          useNativeDriver: true,
        }
      ).start(); //iniciar animación
    }, []);

    return (
        <Animated.View
          style={{
            opacity: animation,
          }}
        >
          <Text style={styles.text}>Animación 1</Text>
        </Animated.View>
      );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        textAlign: 'center',
    },
});

export default Animation1;