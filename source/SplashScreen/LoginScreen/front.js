import React,{useState} from 'react';
import { ImageBackground, View,Image,Text,TouchableHighlight,Alert} from 'react-native';
import styles from './frontstyle';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../../SignIn/SignIn';


import 'react-native-gesture-handler';



const Front = (navigation,props)=>{
    const [backgroundColor,setBackgroundcolor]=useState('#4d4dff');
    const [font,setFont] = useState('black');

    const handleClick=()=>{
        setBackgroundcolor("yellow");
    }
     const onPressButton=()=> {
            Alert.alert('You tapped the button!')
          };
    
    return(

        <View style={styles.container}>
               <ImageBackground source={require('../../../assets/ss.jpg')} style={styles.background}>
                   <View>
               <Image source={require('../../../assets/fyp.png')}
                       style={styles.logo} />
               <View style={styles.titles}> 
                   <Text style={styles.title}>Find Worker</Text>
               </View>
               </View>
               <View>
          <View style={styles.container1}>
                <TouchableHighlight
                 onPress={() =>navigation.navigate('SignInScreen')} underlayColor="yellow"
                 style={styles.buttonstyling}>
                   <Text style={styles.Text}>Login as a Customer</Text>
                </TouchableHighlight>
       
           </View>
           <View style={styles.container2}>
                <TouchableHighlight onPress={onPressButton} underlayColor="yellow" 
                style={styles.buttonstyling1}>
                <View>
                   <Text style={styles.Text1}>Login as a worker</Text>
                   </View>
                </TouchableHighlight> 
           </View>
    </View>
               </ImageBackground>
        </View>
    );
}

 export default Front;