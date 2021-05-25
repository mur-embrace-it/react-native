import React from 'react';
import {
  View,
  Button,
  TextInput,
  StyleSheet,
  Platform,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Alert
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import SignInstyle from './SignInStyle';
import LinearGradient from 'react-native-linear-gradient';
import 'react-native-gesture-handler';
import SignUpScreen from '../SignUp/Signup';


const SignInScreen =({navigation,props})=>{
    const [data,setData] =React.useState({
        cnumber:'',
        password:'',
    });
    const textInputChange =(val)=>{
        if(val.length!=0){
            setData({
                ...data,
                email:val,
                check_textInputChange:true
            });
        } else{
            setData({
                ...data,
                email:val,
                check_textInputChange:false
            });
        }
    }

    const handlepasswordChange =(val) =>{
        setData({
            ...data,
            password:val

        });
    }
    const updateSecureTextEntry =(val) =>{
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const onPressButton=()=> {
        Alert.alert('You tapped the button!')
      }

      const MoveToSignUpScreen=()=>{
          
      }
    return(
        <View style={SignInstyle.container}>
            <View style={SignInstyle.header}>
                <Text style={SignInstyle.textheader}>Header</Text>
            </View>
            <View style={SignInstyle.footer}>
                <Text style={SignInstyle.textfooter}>Phone no</Text>
                <View style={SignInstyle.action}>
                    <Feather 
                    name='phone-call'
                    color='#05375a'
                    size={20}
                     />
                    
                    <TextInput placeholder="Number"
                    style={SignInstyle.textInput}
                    onChangeText={(val)=> textInputChange(val)}
                    />
                    {data.check_textInputChange ? 
                     <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                    
                     />
                     : null} 
                </View>
                <Text style={[SignInstyle.textfooter,{marginTop:30}]}>Password</Text>
                <View style={SignInstyle.action}>
                <Feather
                name="lock"
                color="#05375a"
                size={20}
                />
                     <TextInput
                    placeholder="Enter-Pasword"
                    secureTextEntry={data.secureTextEntry ? true : false }
                    style={SignInstyle.textInput}
                    autoCapitalize="none"
                    onChangeText={(val)=> handlepasswordChange(val)} 
                    /> 
                    <TouchableOpacity
                    onPress={updateSecureTextEntry}
                    >

                        {data.secureTextEntry ?
                     <Feather
                        name="eye-off"
                        color="#05375a"
                        size={20}
                     />:
                     <Feather
                        name="eye"
                        color="#05375a"
                        size={20}
                     />
                        }
                     </TouchableOpacity>
                </View>

                <View style={SignInstyle.container1}>
                <TouchableHighlight onPress={onPressButton} underlayColor="yellow" 
                style={SignInstyle.buttonstyling}>
                   <View>
                       <Text style={SignInstyle.Text}>SignIn</Text>
                   </View>
                </TouchableHighlight> 
               
              </View>

               <TouchableHighlight onPress={()=>navigation.navigate('SignUpScreen')} underlayColor="yellow"
                style={[SignInstyle.buttonstyling1,{
                    borderColor: '#009387' ,
                    }]}>
                    <Text style={[SignInstyle.textSign]}>SignUp</Text>

                </TouchableHighlight>
            </View>
        </View>
    )
}
export default SignInScreen;

 
  
  