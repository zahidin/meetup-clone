import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'red'
    },
    video:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    logo:{
        alignItems:'center',
        justifyContent: 'center'
    },
    judulLogo:{
        color:'white',
        fontSize:30,
        padding:20,
        fontWeight:'bold'
    },
    signup:{
        alignItems:'flex-end',
        padding:20,
    },
    textSingup:{
        color:'#c30f42',
        fontWeight:'bold',
        fontSize:13
    },
    textAlready:{
        color:'white',
        textAlign:'center',
        justifyContent:'center',
        paddingTop:18,
        fontSize:14,
        fontWeight:'bold'
    }
})