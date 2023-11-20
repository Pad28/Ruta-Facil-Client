import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { LoginStackNavigation } from './src/navigaton/LoginStackNavigation';

export default function App() {
  return (
    <NavigationContainer>
      <LoginStackNavigation />
    </NavigationContainer>
  );
}

