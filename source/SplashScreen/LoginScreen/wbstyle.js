import { StyleSheet } from "react-native";

const wbStyle =StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:50,
        marginBottom:'20%'
    },
    buttonstyling:{
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius:50,
        backgroundColor: '#4d4dff',
        marginBottom:"10%"
    },
    Text:{
        fontSize:16,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    }, 
    container1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:"60%",
        marginBottom:'10%'
        
    },
    buttonstyling1:{
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius:50,
        backgroundColor: '#4d4dff',
    },
    Text1:{
        fontSize:16,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    },container:{
        flex:1,

    },
    background:{
        width:'100%',
        height:'100%',
        

        
    },
    titles:{
        marginTop:'20%',
        width:'100%',
        alignItems:'center' ,
        justifyContent:'center',
        marginTop:10,
        marginLeft:-5
        
     },
     title:{
         fontSize:20,
         fontWeight:'normal',
         fontFamily:'Revamped',
         color:'#c7cbd6'
     },
     logo:{
         width:120,
         height:90,
         alignItems:'center',
         justifyContent:'center',
         marginTop:70,
         marginLeft:120,
         marginBottom:8
     },
     container3:{
        flex:1,

    },
});

export default wbStyle;