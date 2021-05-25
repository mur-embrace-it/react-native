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
  Alert,
  ImageBackground
} from 'react-native';
import CongratsStyle from './congratsstyle';
import Feather from 'react-native-vector-icons/Feather';

const Congrats =()=>{

    return(
        <View style={CongratsStyle.container}>
           <ImageBackground source={require('../../assets/ss.jpg')} style={CongratsStyle.background}>
            <View style={CongratsStyle.rectangleshape}>
              <View style={CongratsStyle.vectoricon}>
            <Feather
                     name="check-circle"
                     color="#05375a"
                     size={100}
                  />
                  </View>
               <Text style={CongratsStyle.textstyle1}>Your Order</Text>
               <Text style={CongratsStyle.textstyle2}>placed</Text>
               <Text style={CongratsStyle.textstyle3}>Successfully</Text>

            </View>
            <TouchableHighlight underlayColor="yellow"
                style={[CongratsStyle.buttonstyling,{
                    borderColor: '#009387' ,
                    }]}>
                    <Text style={[CongratsStyle.textInput]}>done</Text>

                </TouchableHighlight>
           
            </ImageBackground>
        </View>

    )

   

}
export default Congrats;