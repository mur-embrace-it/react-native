import { StyleSheet } from "react-native";

const buttonStyle =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:-100,

        
    },
    buttonstyling:{
        width: '90%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius:20,
        backgroundColor: '#ce840f',
    },
    Text:{
        fontSize:14,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    }
});

export default buttonStyle;