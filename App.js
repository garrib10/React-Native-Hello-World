/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, useWindowDimensions, View} from 'react-native';

const HelloWorldApp = () => {
  return (
    // This is similar to a 'container div,' but for React Native, of course. It has flex properties that we can set.
    <View
      style={{
        // We camelCase 🔑s
        alignItems: 'center',

        // As the name implies, we use this 🪝 provided by `react-native` to get the updated width and height of the screen
        // Next, we insure that the height of our `View` container is sufficient to fill the screen
        height: useWindowDimensions().height,
        justifyContent: 'center',
      }}>
      <Text>Welcome To React world!</Text>
    </View>
  );
};

export default HelloWorldApp;
