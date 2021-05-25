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
import Feather from 'react-native-vector-icons/Feather';

import Signupstyle from './Signupstyle';
import LinearGradient from 'react-native-linear-gradient';

import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';


const SignUpScreen =(navigation,props)=>{
    const [data,setData] =React.useState({
        name :'',
        cnumber:'',
        password:'',
        cpassword:'',
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
    
    return(
        <View style={Signupstyle.container}>
            <View style={Signupstyle.header}>
                <Text style={Signupstyle.textheader}>Header</Text>
            </View>
            <View style={Signupstyle.footer}>
                <Text style={Signupstyle.textfooter}>Name</Text>
                <View style={Signupstyle.action}>
                    <FontAwesome
                    name='user'
                    color='#05375a'
                    size={20}
                     />
                    
                    <TextInput placeholder="Your-Name"
                    style={Signupstyle.textInput}
                    autoCapitalize="none"
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
                <Text style={[Signupstyle.textfooter,{marginTop:10}]}>Phone no  </Text>
                <View style={Signupstyle.action}>
                <Feather
                name="phone-call"
                color="#05375a"
                size={20}
                />
                     <TextInput
                    placeholder="Your-number"
                    secureTextEntry={true}
                    style={Signupstyle.textInput}
                    autoCapitalize="none"
                    />
                  
                </View>
                <Text style={[Signupstyle.textfooter,{marginTop:10}]}>Password</Text>
                <View style={Signupstyle.action}>
                <Feather
                name="lock"
                color="#05375a"
                size={20}
                />
                     <TextInput
                    placeholder="Enter-Pasword"
                    secureTextEntry={data.secureTextEntry ? true : false }
                    style={Signupstyle.textInput}
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
                <Text style={[Signupstyle.textfooter,{marginTop:10}]}>Confirm Password</Text>
                <View style={Signupstyle.action}>
                <Feather
                name="lock"
                color="#05375a"
                size={20}
                />
                     <TextInput
                    placeholder="Confirm-Password"
                    secureTextEntry={data.secureTextEntry ? true : false }
                
                    style={Signupstyle.textInput}
                    autoCapitalize="none"
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

                <View style={Signupstyle.container1}>
                <TouchableHighlight onPress={()=>navigation.goBack()} underlayColor="yellow" 
                style={Signupstyle.buttonstyling}>
                   <View>
                       <Text style={Signupstyle.Text}>SignUp</Text>
                   </View>
                </TouchableHighlight> 
              </View>

            </View>
        </View>
    )
}
export default SignUpScreen;

 
  
  