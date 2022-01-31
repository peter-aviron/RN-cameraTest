/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const callback = responseObject => {
    console.log(responseObject);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View>
          <Button
            title="Camera"
            onPress={() => launchCamera({mediaType: 'photo'}, callback)}
          />
          <Button
            title="Pick photo"
            onPress={() => launchImageLibrary({mediaType: 'photo'}, callback)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
