import React,{Component} from 'react';


import { ImageBackground,Text, View ,Image,StyleSheet} from 'react-native';
import styles from './logostyle';
import Button from './starterbutton';
import Rectanglebox from './rectangle';
const Splash = ()=>{

    return(

        <View style={styles.container}>
               <ImageBackground source={require('../../../assets/ss.jpg')} style={styles.background}>
       
          <View >
     
          <Image source={require('../../../assets/fyp.png')}
          style={styles.logo} />
               <View style={styles.titles}> 
                   <Text style={styles.title}>Find Worker</Text>
               </View>
               <View >
                 <Text style={styles.welcome}>Welcome </Text>
                 <Text style={styles.welcome1}>to Find Worker</Text>
               </View>
             <View style={styles.ButtonRectangle}>
                    
            </View>
             
          </View>
        
           
          <Button />
          </ImageBackground>
        </View>
    );
}

 export default Splash;