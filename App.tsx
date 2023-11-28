import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import { LoginStackNavigation } from './src/navigaton/LoginStackNavigation';
import { AuthProvider } from './src/context/auhtContext/AuthContext';
import { Test } from './src/screens/Test';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <LoginStackNavigation />
      </AuthProvider>
      {/* <Test /> */}
    </NavigationContainer>
  );
}
