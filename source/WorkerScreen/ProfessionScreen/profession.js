import React,{Component} from 'react';


import { ImageBackground,Text, View ,Image,StyleSheet, TouchableHighlight,Alert} from 'react-native';
import styles from './professionstyle';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import WPDetail from './wpdetail';
const Profession = ({navigation,props})=>{

    const onPressButton=()=> {
        Alert.alert('You tapped the button!')
      }

    return(

        <View style={styles.container}>
          
          <View style={styles.header}>
             
              <Text style={styles.text} >Set Location</Text>
              <Entypo
              name ="location-pin"
              color='green'
              size={20}

              />
          </View>
          <View style={styles.flex2}>
              <Text style={styles.text1}>Choose the</Text>
              <Text style={styles.text2}>Worker You Want</Text>
          </View>
          <View style={styles.header1}>
             
             <Text style={styles.text} >Search For Worker</Text>
         </View>
         <View style={styles.flex3}>
              <Text style={styles.text3}>Categories</Text>
          </View>
        <TouchableHighlight   onPress={() => navigation.navigate('WPDetail')} underlayColor="yellow" style={styles.box0}>
                
                   <View >
                       <MaterialIcons
                       name="carpenter"
                       color="red"
                       size={40}
                       />
                       <Text>Carpenter</Text>
                
                </View>
          </TouchableHighlight >
          <TouchableHighlight onPress={onPressButton} underlayColor="yellow" style={styles.box1}>
          <View>
          <MaterialIcons
              name="plumbing"
              color="red"
              size={40}
              />
              <Text>Plumber</Text>
          </View>
          </TouchableHighlight>
                <TouchableHighlight onPress={onPressButton} underlayColor="yellow" style={styles.box2}>
                   <View>
                        <MaterialIcons
                            name="car-repair"
                            color="red"
                            size={40}
                        />
                      <Text>Car Mechanic</Text>
                 </View>
                </TouchableHighlight>
                <TouchableHighlight onPress={onPressButton} underlayColor="yellow" style={styles.box3}>
                    <View>
                        <MaterialIcons
                             name="motorcycle"
                             color="red"
                             size={40}
                             />
                        <Text>Bike Mechanic</Text>
                     </View>
                </TouchableHighlight>
        </View>
    );
}

 export default Profession;