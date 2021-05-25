import React from 'react';
// import {Text} from 'react-native';
// import { StyleSheet } from "react-native";
// import Splash from './source/SplashScreen/Splash/logo';
import Front from './source/SplashScreen/LoginScreen/front';
import SignInScreen from './source/SignIn/SignIn';
import SignUpScreen from './source/SignUp/Signup'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profession from './source/WorkerScreen/ProfessionScreen/profession';
import WPDetail from './source/WorkerScreen/ProfessionScreen/wpdetail';
import SFScreen from './source/WorkerScreen/AfterBookingScreen/Furniture/sfscreen';
import WorkerButton from './source/SplashScreen/LoginScreen/wrokerbutton'
import Congrats from './source/congratulation/congrats';
import SignUPScreen from './source/CustomerScreen/SignUpScreen/SignUP';
import SignINScreen from './source/CustomerScreen/SignInScreen/SignIN';
import CProfession from './source/CustomerScreen/ProfeesionsScreen/CProfession'


// const Stack= createStackNavigator();


// const App=() =>{
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Front'>
//         {/* <Stack.Screen name="WorkerButton" component={WorkerButton} />
//         <Stack.Screen name="SignInScreen" component={SignInScreen} />
//         <Stack.Screen name="SignUpScreen" component={SignUpScreen} /> */}
//         <Stack.Screen name="Profession" component={Profession} />
//         <Stack.Screen name="WPDetail" component={WPDetail} />
//         <Stack.Screen name="SFScreen" component={SFScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default StackNavigator;

function App() {
  return (
    
        <CProfession/>
  )
}

export default App;