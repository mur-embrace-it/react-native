import { Platform, StyleSheet } from "react-native";

const WPDStyle =StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
 
    container2:{
        flex:3,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50

        
    },
    buttonstyling:{
        width: '32%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius:0,
        backgroundColor: '#009387',
        marginLeft:210,
        marginTop:1,
        borderRadius:10
    },
    Text:{
        fontSize:13,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    },
    Text1:{
        fontSize:20,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    }, 
    Text2:{
        fontSize:16,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    },
    Text3:{
        fontSize:14,
        fontWeight:"normal",
        textTransform:'uppercase',
        color:'black'
    },
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:170,
        backgroundColor: '#ff6666',
        borderBottomRightRadius:30,
        borderBottomLeftRadius:30,
        paddingHorizontal:20,
        marginBottom:70,
        width:'100%'
    },
    header1:{
        alignItems:"center",
        marginTop:100,
        marginBottom:-20
    },
    footer:{
        flex:1,
        paddingBottom:80,
        backgroundColor: '#E5E4E2',
        borderRadius:10,
        marginBottom:30,
        width:'90%'
    },
    footer1:{
        flex:3,
        backgroundColor: '#fff',
        paddingHorizontal:20,
        paddingVertical:30,
        width:'100%',
        height:100
        
    },
    textheader:{
        color: '#05375a',
        fontWeight:'bold',
        fontSize:18
    },
    textfooter:{
        color: '#05375a',
        fontSize:15
    },
    button: {
        alignItems:'center',
        marginTop:50
    },
    signIn:{
        width:'100',
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10
    },
    textSign:{
        fontSize:18,
        fontWeight:'bold'
    },
    style1: {
        fontWeight: '700'
      },
      style2: {
        fontWeight: '100'
      },
      rgap:{
          textAlign:'center',
          paddingTop:-10,
          marginBottom:20,
          marginTop:-40
          
      },
      sf1:{
          marginTop:20,
          marginLeft:20
      }


})

export default WPDStyle;