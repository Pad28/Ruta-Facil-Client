import { View } from 'react-native';
import { ScreenLogin } from './src/screens/LoginScreen';
import { RegistroScreen } from './src/screens/RegistroScreen';

export default function App() {
  return (
    <View style={{ flex: 1 }} >
      {/* <ScreenLogin /> */}
      <RegistroScreen />
    </View>
  );
}

