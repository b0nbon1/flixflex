import React, { useEffect, useState } from 'react';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import store from './store';
import { themeDark } from './theme';

import Navigator from './navigation';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const loadAssets = async (): Promise<void> => {
    await Font.loadAsync({
      'Poppins-Light': require('../assets/Poppins-Light.ttf'),
      'Poppins-Regular': require('../assets/Poppins-Regular.ttf'),
      'Poppins-Bold': require('../assets/Poppins-Bold.ttf'),
      entypo: require('../node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Entypo.ttf'),
    });
    const images = [require('../assets/icon.png')];
    await images.map(image => Asset.fromModule(image).downloadAsync());
    setLoading(false);
  };

  useEffect(() => {
    loadAssets();
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={themeDark}>
        {!loading && <Navigator />}
      </ThemeProvider>
    </Provider>
  );
};

export default App;
