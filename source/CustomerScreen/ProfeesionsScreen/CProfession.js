import React, { useState } from 'react';
import moment from 'moment';

import { ImageBackground, Text, View, Image, StyleSheet, TouchableHighlight, Alert, Button, TextInput } from 'react-native';
import styles from './CProfessionStyle';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

const CProfession = ({ navigation, props }) => {


    const onPressButton = () => {
        Alert.alert('You tapped the button!')
    }
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {

        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
        // Alert.alert(currentDate.toString());
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    return (

        <View style={styles.container}>

            <View style={styles.header}>

                <Text style={styles.text} >Set Location</Text>
                <Entypo
                    name="location-pin"
                    color='green'
                    size={20}

                />
            </View>

            <View style={styles.flex2}>
                <Text style={styles.text2}>Availability time</Text>
            </View>
            <View style={styles.direction}>

                {/* From Time */}
                <View style={styles}>

                    <View style={styles.direction}>
                        <Button onPress={showTimepicker} title="From:" />
                        <Text>{moment(date).format("h:mm a")}</Text>
                    </View>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

                </View>

                {/* To Time */}
                <View style={styles}>

                    <View style={styles.direction}>
                        <Button onPress={showTimepicker} title="To:" />
                        <Text>{moment(date).format("h:mm a")}</Text>
                    </View>

                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}

                </View>

            </View>
            <View style={styles.flex3}>
                <Text style={styles.text3}>Categories</Text>
            </View>
            <TouchableHighlight onPress={() => navigation.navigate('WPDetail')} underlayColor="yellow" style={styles.box0}>

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

export default CProfession;