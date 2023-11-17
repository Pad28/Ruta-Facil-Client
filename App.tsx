import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { styles } from './src/theme/appTheme';
import { ScreenLogin } from './src/screens/ScreenLogin';

export default function App() {
  return (
    <View style={{ flex: 1 }} >
      <ScreenLogin />
    </View>
  );
}

