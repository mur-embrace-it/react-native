import { Platform, StyleSheet } from "react-native";
import { block } from "react-native-reanimated";

const CongratsStyle =StyleSheet.create({
    container:{
        flex:1
    },
    background:{
        width:'100%',
        height:'100%',
    },
    rectangleshape:{
        backgroundColor: '#fff',
        width:"65%",
        marginLeft:'17%',
        marginTop:'25%',
        marginRight:'25%',
        height:"65%",
        borderRadius:30,
        

        },
        vectoricon:{
          alignItems:"center",
          marginTop:"30%"
        },
        textstyle1:
        {
        alignItems:"center",
        justifyContent:"center",
        marginTop:"18%",
        fontSize:20,
        fontWeight:"bold",
        marginLeft:55,
        textTransform:'uppercase',
        },
        textstyle3:
        {
        alignItems:"center",
        justifyContent:"center",
        fontSize:20,
        fontWeight:"bold",
        marginLeft:45,
        marginTop:20,
        textTransform:'uppercase',
        
        },
        textstyle2:
        {
            alignItems:"center",
            justifyContent:"center",
            fontSize:20,
            fontWeight:"bold",
            marginLeft:75,
            marginTop:20,
            textTransform:'uppercase',
        },
        buttonstyling:{
            width: '40%',
            height: 60,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:50,
            backgroundColor: '#009387',
            marginLeft:"30%",
            
            marginTop:"-10%"

        
        },
        textInput:{
            color:"#05375a",
            fontSize:16,
            fontWeight:"bold",
            textTransform:'uppercase',
        
        },
})
export default CongratsStyle;