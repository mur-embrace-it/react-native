import React from 'react';
import {View,Text,Pressable} from 'react-native';
import buttonStyle from './buttonstyle';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { withNavigation } from 'react-navigation';

const Button =(props) => {
    return(
   <View>
          <View style={buttonStyle.container}>
                <Pressable
                 style={buttonStyle.buttonstyling}
                onPress={() =>
                         this.navigation.navigate(Front)    ////error
                }>
                   <Text style={buttonStyle.Text}>Getting started</Text>
                </Pressable>
       
           </View>
    </View>
     );

};

export default Button;