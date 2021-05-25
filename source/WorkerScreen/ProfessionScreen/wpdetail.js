import React from 'react';
import {
    View,
    TextInput,
    StyleSheet,
    Platform,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    Alert,
    ImageBackground
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SFScreen from '../AfterBookingScreen/Furniture/sfscreen';
import 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import WPDStyle from './wpdetailstyle';

const WPDetail = ({navigation,props}) => {
    const onPressButton=()=> {
        Alert.alert('You tapped the button!')
      }
    return (
        <View style={WPDStyle.container}>
            <View style={WPDStyle.header}>
              <View style={WPDStyle.header1}>
                       <MaterialIcons
                       name="carpenter"
                       color="black"
                       size={70}
                       />
                       <Text style={WPDStyle.Text1} >Carpenter</Text>
                </View>
            </View>
            <View style={WPDStyle.rgap}>
                <Text style={WPDStyle.Text1}>Rates</Text>
            </View>
           <View style={WPDStyle.footer}>
               <View style={WPDStyle.sf1}>
                   <Text style={WPDStyle.Text2}>See furniture</Text>
                   <Text style={WPDStyle.Text3}>Rs:200</Text>
               </View>
            
           <TouchableHighlight onPress={() => navigation.navigate('SFScreen')} underlayColor="yellow" 
                style={WPDStyle.buttonstyling}>
                   <View>
                       <Text style={WPDStyle.Text}>Book now</Text>
                   </View>
                </TouchableHighlight>
                
           </View>
           <View style={WPDStyle.footer}>
           <View style={WPDStyle.sf1}>
                   <Text style={WPDStyle.Text2}>See furniture</Text>
                   <Text style={WPDStyle.Text3}>Rs:200</Text>
               </View>
           <TouchableHighlight onPress={onPressButton} underlayColor="yellow" 
                style={WPDStyle.buttonstyling}>
                   <View>
                       <Text style={WPDStyle.Text}>Book now</Text>
                   </View>
                </TouchableHighlight> 
           </View>
           <View style={WPDStyle.footer}>
           <View style={WPDStyle.sf1}>
                   <Text style={WPDStyle.Text2}>See furniture</Text>
                   <Text style={WPDStyle.Text3}>Rs:200</Text>
               </View>
           <TouchableHighlight onPress={onPressButton} underlayColor="yellow" 
                style={WPDStyle.buttonstyling}>
                   <View>
                       <Text style={WPDStyle.Text}>Book now</Text>
                   </View>
                </TouchableHighlight> 
           </View>
            </View>
    )
}
export default WPDetail;



