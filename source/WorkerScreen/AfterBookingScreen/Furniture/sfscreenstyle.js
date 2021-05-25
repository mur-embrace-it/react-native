import { Platform, StyleSheet } from "react-native";

const SFstyle =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#009387'

        
    },
    container1:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50

        
    },
    action:{
        flexDirection:'row',
        marginTop:10 ,
        borderBottomWidth:1,
        borderBottomColor:"#f2f2f2",
        paddingBottom:5,
        paddingEnd:10,
    },
    buttonstyling:{
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius:50,
        backgroundColor: '#009387',
    },
    Text:{
        fontSize:16,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    }, 
    header:{
        flex:1,
        justifyContent:'flex-end',
        paddingHorizontal:20,
        paddingBottom:50
    },
    footer:{
        flex:3,
        backgroundColor: '#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:30,
        width:'100%'
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
    action1:{
        flexDirection:'row',
    },
    textInput:{
        marginTop:-10,
        flex:1,
        paddingLeft:10,
        color:"#05375a",
        fontSize:10,
    
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
      Text1:{
        marginTop:"-5%",
        flex:1,
        paddingLeft:"20%",
        fontSize:16,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
      }

})

export default SFstyle;