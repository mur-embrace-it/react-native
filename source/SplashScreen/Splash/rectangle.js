import React from 'react';
import {View,Text} from 'react-native';
import Rectanglestyle from './rectanglestyle';


const Rectanglebox = () => {
    return(
        <View style={Rectanglestyle.container}>
 
        <View style={Rectanglestyle.RectangleShapeView} />
 
      </View>
     );

};

export default Rectanglebox;