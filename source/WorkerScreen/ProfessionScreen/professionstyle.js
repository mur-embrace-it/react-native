import { faBlackberry } from "@fortawesome/free-brands-svg-icons";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#009387'

    },
    background:{
        width:'100%',
        height:'100%'
    },
    header:{
        width: '90%',
        height: 40,
        paddingRight:100,
        paddingTop:3,
        paddingHorizontal:20,
        alignItems: 'center',
        borderRadius:50,
        backgroundColor: '#d3d3d3' ,
        marginTop:60,
        marginBottom:2,
        flexDirection:"row"
    },
    footer:{
        marginTop:-20
    },
    header1:{
        width: '90%',
        height: 40,
        paddingRight:100,
        paddingTop:2,
        paddingHorizontal:20,
        alignItems: 'center',
        borderRadius:50,
        backgroundColor: '#d3d3d3' ,
        marginTop:-5,
        marginBottom:15,
        flexDirection:"row"
    },
    box0:{
        backgroundColor: '#fff',
        borderRadius:30,
        width:120,
        height:90,
        marginLeft:-150,
        alignItems:"center",
        paddingVertical:15,
        padding: 10,
    },
    box1:{
        
        backgroundColor: '#fff',
        borderRadius:30,
        paddingHorizontal:30,
        paddingVertical:18,
        marginRight:-150,
        marginTop:-89,
        width:120,
        height:90,
    }, 
    box2:{
        
        backgroundColor: '#fff',
        borderRadius:30,
        paddingHorizontal:10,
        paddingVertical:15,
        width:120,
        height:90,
        alignItems:"center",
        marginLeft:-150,
        marginTop:20
    },
    box3:{
        
        backgroundColor: '#fff',
        borderRadius:30,
        paddingHorizontal:10,
        paddingVertical:15,
        width:120,
        height:90,
        alignItems:"center",
        marginRight:-150,
        marginTop:-90
    },
    text:{
        fontWeight: "normal",
        marginLeft: 10,
        marginRight:50,
        color:'red',
        width:'100%'

    },
    flex2:{
        
        paddingTop:30,
        paddingBottom:30,
        paddingLeft:20,
        width:'100%'

    },
    text1:{
        fontWeight:'normal',
        fontSize:20
    },
    text2:{
        fontWeight:'bold',
        fontSize:20
    },
    text3:{
        fontWeight:'bold',
        fontSize:25
    },
  
    flex3:{
        paddingBottom:40,
        paddingLeft:20,
        width:'100%'

    },
   
})

export default styles;