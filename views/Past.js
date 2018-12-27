import {Container, Text} from 'native-base';
import React, {Component} from 'react'
import { Grid } from 'react-native-easy-grid'

export default class Past extends Component{
    render(){
        return(
            <Grid style={{alignItems:'center',justifyContent:'center',height:'100%'}}>
                <Text style={{color:'gray'}}> You haven't gone to any Meetups yet </Text>
            </Grid>
        )
    }
}