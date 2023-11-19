import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { LoginStackNavigation } from './src/Navigaton/LoginStackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      {/* <LoginScreen /> */}
      {/* <RegistroScreen /> */}
      <LoginStackNavigation />
    </NavigationContainer>
  );
}

