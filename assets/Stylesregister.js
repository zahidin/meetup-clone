import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    header:{
        backgroundColor:'#c30f42',
    },
    textHello:{
        alignItems:'flex-start',
        paddingRight:'35%'
    },
    btnFacebook:{
        borderRadius:3,
        backgroundColor:'#3b5998',
        width:'100%',
        height:'80%',
        justifyContent: 'flex-start'
    },
    btnGoogle:{
        borderRadius:3,
        borderColor:'gray',
        width:'100%',
        height:'80%',
        paddingRight:'17%',
        justifyContent: 'flex-start'
    },
    btnEmail:{
        borderRadius:3,
        borderColor:'gray',
        width:'100%',
        height:'80%',
        paddingRight:'17%',
        justifyContent: 'flex-start'
    },
    textFacebook:{
        fontSize:15,
        fontWeight:'bold',
        color:'white',
        padding:10,
        marginLeft:45
    },
    textGoogle:{
        fontSize:15,
        fontWeight:'bold',
        color:'gray',
        padding:10,
        marginLeft:35
    },
    textEmail:{
        fontSize:15,
        fontWeight:'bold',
        color:'gray',
        padding:10,
        marginLeft:69
    },
    content:{
        padding:20
    },
    rowBtnAccount:{
        marginBottom:25
    },
})