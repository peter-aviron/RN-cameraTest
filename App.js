/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Button,
  Text,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import {Camera} from 'react-native-vision-camera';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [cameraPermission, setCameraPermission] = useState();
  const [microphonePermission, setMicrophonePermission] = useState();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);

  console.log(
    `Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`,
  );

  const callback = responseObject => {
    console.log(responseObject);
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (cameraPermission == null || microphonePermission == null) {
    // still loading
    return null;
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Text>{cameraPermission}</Text>
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
