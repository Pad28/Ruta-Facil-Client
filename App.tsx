import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { LoginStackNavigation } from './src/navigaton/LoginStackNavigation';
import { AuthProvider } from './src/context/auhtContext/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <LoginStackNavigation />
      </AuthProvider>
    </NavigationContainer>
    // <Test />
  );
}
