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
import { createAppContainer } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';

import SFstyle from './sfscreenstyle'
import LinearGradient from 'react-native-linear-gradient';

const SFScreen = (navigation) => {
    const [data, setData] = React.useState({
        name: '',
        cnumber: '',
        password: '',
        cpassword: '',
    });
    const textInputChange = (val) => {
        if (val.length != 0) {
            setData({
                ...data,
                email: val,
                check_textInputChange: true
            });
        } else {
            setData({
                ...data,
                email: val,
                check_textInputChange: false
            });
        }
    }

    const onPressButton = () => {
        Alert.alert('You tapped the button!')
    }

    return (
        <View style={SFstyle.container}>
            <View style={SFstyle.header}>
                <Text style={SFstyle.textheader}>Header</Text>
            </View>
            <View style={SFstyle.footer}>
                <Text style={SFstyle.textfooter}>Name</Text>
                <View style={SFstyle.action}>
                    <FontAwesome
                        name='user'
                        color='#05375a'
                        size={20}
                    />

                    <TextInput placeholder="Your-Name"
                        style={SFstyle.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                    />
                    {data.check_textInputChange ?
                        <Feather
                            name="check-circle"
                            color="green"
                            size={20}

                        />
                        : null}
                </View>
                <Text style={[SFstyle.textfooter, { marginTop: 30 }]}>Phone no  </Text>
                <View style={SFstyle.action}>
                    <Feather
                        name="phone-call"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your-number"
                        secureTextEntry={true}
                        style={SFstyle.textInput}
                        autoCapitalize="none"
                    />

                </View>
                <View style={SFstyle.container1}>

                    <TouchableHighlight onPress={onPressButton} underlayColor="yellow"
                        style={SFstyle.buttonstyling}>
                        <View style={[SFstyle.action1,{}]}>
                            <Entypo
                            name="location-pin"
                            color="green"
                            size={25}
                            />      
                             <Text style={[SFstyle.Text,{ marginRight:50,marginLeft:40}]}>Enter Location</Text>                       
                        </View>
                       
                    </TouchableHighlight>
                </View>
                <View style={SFstyle.container1}>
                    <TouchableHighlight onPress={onPressButton} underlayColor="yellow"
                        style={SFstyle.buttonstyling}>
                        <View>
                            <Text style={SFstyle.Text}>SignUp</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
        </View>
    )
}
export default SFScreen;



