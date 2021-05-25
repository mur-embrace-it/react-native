import { StyleSheet } from "react-native";


const styles =StyleSheet.create({
    container:{
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
     container1:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:150

        
    },
    buttonstyling:{
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderRadius:50,
        backgroundColor: '#4d4dff',
    },
    Text:{
        fontSize:16,
        fontWeight:'bold',
        textTransform:'uppercase',
        color:'black'
    }, 
    container2:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:100

        
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
    }

})

export default styles;
