import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { LoginStackNavigation } from './src/navigaton/LoginStackNavigation';

export default function App() {
  console.log('s');
  
  return (
    <NavigationContainer>
      <LoginStackNavigation />
    </NavigationContainer>
  );
}

