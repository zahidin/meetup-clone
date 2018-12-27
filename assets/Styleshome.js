import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    header:{
        backgroundColor: '#c30f42'
    },
    header1:{
        fontSize:19,
        paddingTop:20,
        paddingLeft:25
    },
    header2:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    btnSeeall:{
        fontSize:19,
        paddingTop:20,
        paddingLeft:25,
        marginRight:10,
        fontSize:13,
        fontWeight:'bold',
        justifyContent:'center',
        alignItems:'center'
    },
    footer:{
        backgroundColor: 'white'
    },
    iconBold:{
        fontSize:29,
    },
    iconPutih:{
        color:'gray',
        height:27
    },
    iconActive:{
        color:'#c30f42',
        height:27
    },
    textAbu:{
        color:'gray',
        fontSize:9,
        textTransform:'capitalize',
    },
    itemFloating:{
        color:'white',
        marginBottom:25,
        marginLeft:15
    },
    lokasi:{
        width:'136%',
        color:'white',
        paddingTop:12,
        fontWeight:'bold',
        paddingLeft:5
    },
    garisBawah:{
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },
    pin:{
        color:'white',
        marginTop:25,
        marginLeft:2,
        transform:[{translateY : -10}]
    },
    viewCard:{
        flexDirection:'row',
        marginLeft:10,
        marginRight:17
    },
    card:{
        marginLeft:15,
        marginTop:20,
        width:180,
        height:225,
        borderRadius:13
    },
    cardItem:{
        height:150,
        flex:1,
        width:300,
        borderRadius:10,
        borderBottomLeftRadius:0,
        borderBottomRightRadius:0
    },
    viewItem:{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0, 
        bottom: 0 
    },
    textCard:{
        color:'white',
        fontWeight:'bold',
        fontSize:20,
        padding:10
    },
    textCardDesc:{
        fontSize:14,
        color:'gray',
        width:130,
        marginTop:22
    },
    textCardEvent:{
        fontSize:15,
        width:140,
        marginTop:-6
    },
    textCardTime:{
        color:'gray',
        fontSize:12,
        marginTop:-13
    },
    textActive:{
        color:'#c30f42',
        fontSize:9,
        textTransform:'capitalize',
    },
    viewExplore:{
        marginTop:20,
        backgroundColor: '#0e0f0f'
    },
    textExplore:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        padding:20
    },
    viewExpoloreKiri:{
        marginLeft:23,
        marginBottom:20
    },
    viewExpoloreKanan:{
        marginBottom:20
    },
    imageExplore:{
        width:140,
        height:100,
        resizeMode:'cover',
        paddingBottom:30
    },
    nameCategoryExplore:{
        color:'white',
        fontSize:14,
        fontWeight:'bold',
        marginTop:10
    },
    viewOther:{
        flexDirection:'row'
    },
    cardOther:{
        marginLeft:15,
        marginTop:20,
        width:200,
        height:150,
        borderRadius:13
    },
    cardBodyOther:{
        marginTop:8
    },
    cardDescOther:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        padding:10
    },
    cardTextSmallOther:{
        color:'gray',
        fontSize:12,
        marginTop:16,
        textAlign:'right'
    },
    btnArrow:{
        marginRight:40,
        height:60,
        width:60,
        textAlign:'center',
        justifyContent:'center'
    },
    iconArrow:{
        color:'#c30f42'
    }
    
})