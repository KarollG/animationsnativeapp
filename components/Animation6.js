/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';

const Animation6 = () => {

  const [animation1 ] = useState( new Animated.Value(0) );
  const [animation2 ] = useState( new Animated.Value(-50) );

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation2, {
          toValue: -30,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation1, {
          toValue: 60,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation2, {
          toValue: 30,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation1, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }),
        Animated.timing(animation2, {
          toValue: -30,
          duration: 500,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const styleAnimation = {
    transform: [
      { translateY: animation1},
      { translateX: animation2},

    ],
  };

  return (
    <View style={{ alignItems: 'center'}}>
      <Animated.View
        style={[
          styles.box,
          styleAnimation
        ]}
      >

      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 10,
    height: 10,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation6;