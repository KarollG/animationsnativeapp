/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { StyleSheet, View , Animated} from 'react-native';

const Animation7 = () => {

  const [animation1 ] = useState( new Animated.Value(0) );
  const [animation2 ] = useState( new Animated.Value(1) );

  useEffect(() => {
    Animated.sequence([
      Animated.timing( animation1, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring( animation2, {
        toValue: 10,
        useNativeDriver: true,
      }),
      Animated.spring( animation2, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing( animation1, {
        toValue: 600,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const styleAnimation = {
    transform: [
      {translateY: animation1},
      {scale: animation2},
    ],
  };

  return (
    <View>
      <Animated.View
        style={[
          styles.box,
          styleAnimation
        ]}
      >

       </Animated.View>
    </View>
    );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  }
})

export default Animation7;
