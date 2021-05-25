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
       marginTop:20,
       
    },
    title:{
        fontSize:25,
        fontWeight:'normal',
        fontFamily:'Revamped',
        color:'#c7cbd6'
    },
    logo:{
        width:150,
        height:120,
        alignItems:'center',
        justifyContent:'center',
        // margin:150,
        marginTop:200,
        marginLeft:140
    },
    
    welcome:{
        color:'white',
        fontWeight:'bold',
        fontSize:50,
        marginBottom:20,
        marginStart:100,
        marginTop:60
    },
    welcome1:{
        color:'#c7cbd6',
        fontWeight:'normal',
        fontSize:25,
        marginStart:120,
        marginTop:-5
    },
    ButtonRectangle:{
        marginTop:90
    },
  
})

export default styles;