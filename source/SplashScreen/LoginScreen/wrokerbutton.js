import React, { useState } from 'react';
import { View, Text, Pressable, Alert, TouchableOpacity, TouchableHighlight, ImageBackground, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import wbStyle from './wbstyle';


import SignInScreen from '../../SignIn/SignIn';
import 'react-native-gesture-handler';
const WorkerButton = ({ navigation, props }) => {

    const [backgroundColor, setBackgroundcolor] = useState('#4d4dff');
    const [font, setFont] = useState('black');

    const handleClick = () => {
        setBackgroundcolor("yellow");
    }
    const onPressButton = () => {
        Alert.alert('You tapped the button!')
    };


    return (
        <View style={wbStyle.container3}>
            <ImageBackground source={require('../../../assets/ss.jpg')} style={wbStyle.background}>
                <View>
                    <Image source={require('../../../assets/fyp.png')}
                        style={wbStyle.logo} />
                    <View style={wbStyle.titles}>
                        <Text style={wbStyle.title}>Find Worker</Text>
                    </View>
                  </View>

                    <View style={wbStyle.container1}>

                        <TouchableHighlight
                            onPress={() => navigation.navigate('SignInScreen')} underlayColor="yellow"
                            style={wbStyle.buttonstyling}>
                            <Text style={wbStyle.Text}>Login as a Customer</Text>
                        </TouchableHighlight>

                        <TouchableHighlight onPress={onPressButton} underlayColor="yellow"
                            style={wbStyle.buttonstyling1}>
                            <View>
                                <Text style={wbStyle.Text1}>Login as a worker</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
            </ImageBackground>

        </View>

    );

};
export default WorkerButton;